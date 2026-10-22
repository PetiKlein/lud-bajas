// Lee las planillas de planillas/<categoria>/ (las baja detalle.mjs), las revisa,
// calcula los minutos de cada jugador y marca posibles bajas para la próxima fecha.
// Escribe data/<categoria>.json, que es lo que usa la web (index.html).
//
// Reglas de la LUD que importan acá:
//  - Hay reingresos: un jugador puede salir y volver a entrar.
//  - No hay acumulación de amarillas (y la Liga tampoco carga las amonestaciones).
//  - Los expulsados vienen con nombre pero sin minuto: sus minutos pueden quedar de más.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { corto } from './comun.mjs';
import { CATEGORIAS, DIVISIONALES } from './categorias.mjs';
import { armarPicantes } from './picantes.mjs';

const RAIZ = new URL('../', import.meta.url);
const OUT = new URL('data/', RAIZ);
mkdirSync(OUT, { recursive: true });

const norm = s => (s || '').normalize('NFC').trim().toUpperCase().replace(/\s+/g, ' ');
const lindo = s => norm(s).toLowerCase().replace(/(^|[\s'-])(\S)/g, (m, a, b) => a + b.toUpperCase());
const num = v => (v === '' || v == null || isNaN(Number(v)) ? null : Number(v));

// ---------- minutos de un equipo en un partido, con revisión de la planilla ----------
function analizarEquipo(p, lado, fin) {
  const titulares = p[`titulares${lado}`] || [];
  const cambios = p[`cambios${lado}`] || [];
  const problemas = [];
  const j = {};
  const get = (carne, nombre, camiseta) => {
    const x = (j[carne] ??= { carne, nombre: norm(nombre), camiseta: camiseta || '', titular: false, capitan: false, minutos: 0, desde: null, entradas: [], salidas: [], goles: [], expulsado: false });
    if (camiseta && !x.camiseta) x.camiseta = camiseta;
    return x;
  };

  if (titulares.length !== 11) problemas.push(`${titulares.length} titulares en la planilla (deberían ser 11).`);
  // Con más de 11 "titulares" la planilla suele estar anotando suplentes como titulares. Los que
  // después aparecen entrando en un cambio se toman como suplentes.
  const entran = new Set(cambios.map(c => c.CarneEntra));
  let lista = titulares;
  if (titulares.length > 11) {
    const suplentes = titulares.filter(t => entran.has(t.carne));
    if (suplentes.length) {
      lista = titulares.filter(t => !entran.has(t.carne));
      problemas.push(`Se tomaron como suplentes ${suplentes.map(t => lindo(t.Nombre)).join(', ')}: figuran como titulares pero después entran en un cambio.`);
    }
  }
  for (const t of lista) {
    if (j[t.carne]) { problemas.push(`${lindo(t.Nombre)} figura dos veces entre los titulares.`); continue; }
    const x = get(t.carne, t.Nombre, t.camiseta);
    x.titular = true; x.capitan = !!t.Capitan?.trim(); x.desde = 0;
  }
  const ordenados = cambios.map((c, i) => ({ ...c, m: num(c.minutos), i }))
    .sort((a, b) => (a.m ?? 999) - (b.m ?? 999) || a.i - b.i);
  const eventos = [];
  const reemplazo = {}; // carné que salió -> carné que entró por él
  for (const c of ordenados) {
    if (c.m == null) { problemas.push(`Cambio sin minuto: sale ${lindo(c.Jug_Sale)}, entra ${lindo(c.Jug_Entra)}. No se tuvo en cuenta.`); continue; }
    if (c.CarneSale === c.CarneEntra) { problemas.push(`Cambio de ${lindo(c.Jug_Sale)} por sí mismo (${c.m}'). No se tuvo en cuenta.`); continue; }
    let sale = get(c.CarneSale, c.Jug_Sale);
    const entra = get(c.CarneEntra, c.Jug_Entra, c.camiseta);
    const entraOk = entra.desde == null;
    if (sale.desde == null) {
      // La planilla hace salir a alguien que ya había salido. Casi siempre el que sale de verdad es
      // quien había entrado por él (o el que entró por ese, si hubo una cadena de cambios).
      let cand = reemplazo[sale.carne], vistos = new Set();
      while (cand && j[cand].desde == null && !vistos.has(cand)) { vistos.add(cand); cand = reemplazo[cand]; }
      if (cand && j[cand].desde != null && cand !== entra.carne) {
        problemas.push(`A los ${c.m}' la planilla hace salir a ${lindo(c.Jug_Sale)}, que ya había salido. Se tomó como salida de ${lindo(j[cand].nombre)}, que había entrado por él.`);
        sale = j[cand];
      } else problemas.push(`A los ${c.m}' sale ${lindo(c.Jug_Sale)}, que no estaba en cancha. Esa salida no se contó.`);
    }
    const saleOk = sale.desde != null;
    if (saleOk) { sale.minutos += c.m - sale.desde; sale.desde = null; sale.salidas.push(c.m); }
    if (entraOk) { entra.desde = c.m; entra.entradas.push(c.m); if (saleOk) reemplazo[sale.carne] = entra.carne; }
    else problemas.push(`A los ${c.m}' entra ${lindo(c.Jug_Entra)}, que ya estaba en cancha. Esa entrada no se contó.`);
    eventos.push({ m: c.m, tipo: 'cambio', sale: saleOk ? sale.carne : null, entra: entraOk ? c.CarneEntra : null, saleN: saleOk ? lindo(sale.nombre) : lindo(c.Jug_Sale), entraN: lindo(c.Jug_Entra) });
    const enCancha = Object.values(j).filter(v => v.desde != null).length;
    if (enCancha > 11) problemas.push(`A los ${c.m}' quedan ${enCancha} jugadores en cancha según la planilla.`);
  }
  for (const x of Object.values(j)) if (x.desde != null) { x.minutos += fin - x.desde; x.desde = null; }

  // Expulsados: vienen sin carné ni minuto; se buscan por nombre. Si no jugó, lo echaron desde el banco.
  const expBanco = [];
  for (const e of p[`expulsados${lado}`] || []) {
    const x = Object.values(j).find(v => v.nombre === norm(e.Nombre));
    if (x) x.expulsado = true;
    else expBanco.push(norm(e.Nombre));
  }
  for (const x of Object.values(j)) {
    const ultSal = x.salidas.at(-1), ultEnt = x.entradas.at(-1);
    // Minuto en que se fue y no volvió (null si terminó en cancha).
    x.sale = ultSal != null && (ultEnt == null || ultEnt <= ultSal) ? ultSal : null;
    x.reingreso = x.salidas.length > 0 && x.entradas.some(e => e >= x.salidas[0]);
    delete x.desde;
  }
  return { jugadores: j, problemas, fin, eventos, expBanco };
}

// Goles: GolesLocatario lista cada gol del local (en las 152+151 planillas revisadas, la cantidad
// coincide siempre con el resultado). El campo EnContra de la Liga NO indica gol en contra: viene en 1
// en la mitad de los goles normales. Un gol en contra aparece con el carné de un jugador rival.
function asignarGoles(p, eq, problemas) {
  for (const lado of ['L', 'V']) {
    const otro = lado === 'L' ? 'V' : 'L';
    for (const g of p[`goles${lado}`] || []) {
      const m = num(g.minutos);
      const contra = !eq[lado].jugadores[g.carne] && !!eq[otro].jugadores[g.carne];
      const autor = eq[lado].jugadores[g.carne] || eq[otro].jugadores[g.carne];
      const ev = { m, tipo: contra ? 'gol-contra' : 'gol', lado, carne: g.carne, nombre: lindo(g.Nombre) };
      eq[lado].eventos.push(ev);
      if (!autor) { problemas.push(`Gol de ${lindo(g.Nombre)} (${m ?? '?'}'), que no figura en la planilla de ${lado === 'L' ? 'el local' : 'el visitante'}.`); continue; }
      if (!contra) autor.goles.push(m);
      // ¿Estaba en cancha a ese minuto?
      if (m != null && !contra) {
        const entro = autor.titular ? 0 : autor.entradas[0];
        let enCancha = entro != null && m >= entro;
        // Recorre salidas y reingresos.
        const tramos = [];
        let desde = autor.titular ? 0 : null;
        const ev2 = [...autor.salidas.map(x => [x, 's']), ...autor.entradas.map(x => [x, 'e'])].sort((a, b) => a[0] - b[0]);
        for (const [mm, t] of ev2) { if (t === 's' && desde != null) { tramos.push([desde, mm]); desde = null; } if (t === 'e' && desde == null) desde = mm; }
        if (desde != null) tramos.push([desde, 999]);
        enCancha = tramos.some(([a, b]) => m >= a && m <= b);
        if (!enCancha) problemas.push(`Gol de ${lindo(g.Nombre)} a los ${m}', cuando según los cambios no estaba en cancha.`);
      }
    }
  }
  const cuenta = lado => (p[`goles${lado}`] || []).length;
  const golesL = cuenta('L'), golesV = cuenta('V');
  if (golesL !== p.gl || golesV !== p.gv)
    problemas.push(`La planilla tiene ${golesL} gol${golesL === 1 ? '' : 'es'} del local y ${golesV} del visitante, pero el resultado es ${p.gl}-${p.gv}.`);
}

// ---------- utilidades de fechas ----------
const diaN = d => Math.round(new Date(d + 'T12:00:00Z').getTime() / 864e5);
const ddmm = d => `${d.slice(8, 10)}/${d.slice(5, 7)}`;
const plural = (n, s, p = s + 's') => `${n} ${n === 1 ? s : p}`;
const slugEq = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/^(club|colegio)\s+/, '').replace(/\s+(club|universitario|u\.?)$/, '').replace(/[^a-z0-9]+/g, '');

// ---------- lo de toda la Liga: apariciones por carné y sanciones ----------
function global(estados) {
  const porDiv = Object.fromEntries(estados.map(st => [st.cat.id, st]));
  // carné -> partidos jugados en cualquier divisional
  const apariciones = {};
  for (const st of estados) for (const [equipo, lista] of Object.entries(st.porEquipo)) for (const pt of lista)
    for (const [c, x] of Object.entries(pt.jugadores))
      (apariciones[c] ??= []).push({ div: st.cat.id, equipo, dia: pt.dia, id: pt.id, min: x.minutos, t: x.titular ? 1 : 0, rival: pt.rival });
  for (const l of Object.values(apariciones)) l.sort((a, b) => a.dia.localeCompare(b.dia));
  const nombre = c => { for (const st of estados) if (st.jugadores[c]) return st.jugadores[c].nombre; return null; };

  // (serie, nro de partido) -> partido, para ubicar dónde fue la infracción de cada sanción.
  const porNro = {};
  for (const st of estados) for (const p of st.partidos) if (p.nro) porNro[`${p.serie}|${p.nro}`] = { div: st.cat.id, p };

  // Sanciones: se agrupan por jugador y partido; el fallo del Tribunal manda sobre la automática.
  const grupos = {};
  const dirS = new URL('planillas/_sanciones/', RAIZ);
  if (existsSync(dirS)) for (const f of readdirSync(dirS).filter(f => f.endsWith('.json'))) {
    for (const x of JSON.parse(readFileSync(new URL(f, dirS)))) {
      const k = `${x.carne}|${x.serie}|${x.partido}`;
      const g = (grupos[k] ??= { auto: null, fallo: null });
      if (x.tipo === 'fallo') { if (!g.fallo || x.fecha >= g.fallo.fecha) g.fallo = x; }
      else if (!g.auto || x.fecha >= g.auto.fecha) g.auto = x;
    }
  }
  const hoy = diaN(new Date().toISOString().slice(0, 10));
  const sanciones = {}; // carné -> [sanción con estado]
  for (const g of Object.values(grupos)) {
    const x = g.fallo || g.auto;
    const partido = porNro[`${x.serie}|${x.partido}`];
    const ap = partido ? (apariciones[x.carne] || []).find(a => a.id === partido.p.id) : null;
    // Si no figura en la planilla (lo echaron desde el banco), el equipo sale del club de la sanción.
    const club = corto(x.club || '');
    const equipo = ap?.equipo || (partido ? [partido.p.local, partido.p.visitante].find(e => e === club || slugEq(e) === slugEq(club)) || null : null);
    const rival = ap?.rival || (partido && equipo ? (equipo === partido.p.local ? partido.p.visitante : partido.p.local) : null);
    const desde = partido?.p.dia || x.fecha;
    // Fechas cumplidas: partidos que jugó su equipo en esa divisional después de la infracción.
    let cumplidas = null;
    if (partido && equipo) {
      const st = porDiv[partido.div];
      const jugados = (st.porEquipo[equipo] || []).filter(pt => pt.dia > desde).length;
      const sinPl = (st.sinPlanilla[equipo] || []).filter(pt => pt.dia > desde && !pt.wo).length;
      cumplidas = jugados + sinPl;
    }
    const preventiva = /PREVENTIVA/i.test(x.sancion);
    let estado, restan = null;
    if (preventiva) estado = 'vigente';
    else if (!x.fechas) estado = x.tipo === 'fallo' ? 'sin-suspension' : 'pendiente';
    else if (cumplidas == null) estado = hoy - diaN(x.fecha) <= 21 ? 'a-confirmar' : 'cumplida';
    else { restan = Math.max(0, x.fechas - cumplidas); estado = restan > 0 ? 'vigente' : 'cumplida'; }
    (sanciones[x.carne] ??= []).push({
      carne: x.carne, tipo: g.fallo ? 'fallo' : 'automatica', preventiva, fecha: x.fecha, fechas: x.fechas, cumplidas, restan, estado,
      texto: x.texto, detalle: x.detalle, club: x.club,
      partido: partido ? { div: partido.div, id: partido.p.id, dia: partido.p.dia, rival, equipo } : null,
      serie: x.serie,
    });
  }
  for (const l of Object.values(sanciones)) l.sort((a, b) => b.fecha.localeCompare(a.fecha));
  // Resultados por par de clubes (para el cara a cara).
  const porClub = {};
  for (const st of estados) for (const p of st.partidos) {
    const k = `${claveClub(clubDe(p.local))}|${claveClub(clubDe(p.visitante))}`;
    (porClub[k] ??= []).push({ div: st.cat.id, id: p.id, dia: p.dia, etapa: p.etapa, local: p.local, visitante: p.visitante, gl: p.gl, gv: p.gv, planilla: p.planilla ? 1 : 0 });
  }
  return { porDiv, apariciones, sanciones, nombre, porClub, clubes: {} };
}

const NOMBRE_DIV = Object.fromEntries(DIVISIONALES.map(d => [d.id, d.nombre]));

// Sanción vigente (o por confirmar) de un jugador, si tiene.
function sancionVigente(G, c) {
  return (G.sanciones[c] || []).find(s => s.estado === 'vigente' || s.estado === 'a-confirmar') || null;
}
function textoSancion(s, aquiDiv) {
  const donde = s.partido ? `${s.partido.div !== aquiDiv ? `en ${NOMBRE_DIV[s.partido.div]} ` : ''}${s.partido.rival ? `vs ${s.partido.rival} ` : ''}(${ddmm(s.partido.dia)})` : `(sanción del ${ddmm(s.fecha)})`;
  if (s.preventiva) return `Suspensión preventiva del Tribunal por el partido ${donde}.`;
  const origen = s.tipo === 'fallo' ? `Suspendido ${plural(s.fechas, 'fecha')} por el Tribunal (fallo del ${ddmm(s.fecha)})` : `Suspensión automática de ${plural(s.fechas, 'fecha')} por la expulsión`;
  const resto = s.restan != null ? ` Le ${s.restan === 1 ? 'queda 1 fecha' : `quedan ${s.restan} fechas`} (cumplió ${s.cumplidas}).` : ' No se puede calcular cuántas fechas cumplió.';
  const todas = /TODAS LAS CATEG/i.test(s.texto) ? ' Cumple en todas las categorías.' : '';
  return `${origen}, partido ${donde}.${resto}${todas}${s.tipo === 'automatica' ? ' El Tribunal todavía puede ampliarla.' : ''}`;
}

// ¿Jugó en otra divisional cerca de esa fecha? (devuelve la aparición)
function jugoEnOtra(G, c, div, dia, margen = 3) {
  return (G.apariciones[c] || []).filter(a => a.div !== div && Math.abs(diaN(a.dia) - diaN(dia)) <= margen).at(-1) || null;
}

// ---------- alertas de bajas ----------
function alertasDeEquipo(equipo, lista, jugadores, cat, G) {
  const n = lista.length, ult = lista[n - 1];
  const previos = lista.slice(0, -1);
  const alertas = [], ya = new Set();
  const add = (carne, a) => { if (ya.has(carne)) return; ya.add(carne); alertas.push({ carne, nombre: jugadores[carne]?.nombre ?? G.nombre(carne) ?? carne, ...a }); };
  const plantel = new Set(lista.flatMap(pt => Object.keys(pt.jugadores)));

  // 1) Suspensiones confirmadas por la Liga (de cualquier categoría: suelen cumplirse en todas).
  for (const c of plantel) {
    const s = sancionVigente(G, c);
    if (!s) continue;
    add(c, { tipo: 'suspendido', nivel: 'alta', confirmado: s.estado === 'vigente', restan: s.restan, texto: textoSancion(s, cat.id) });
  }

  // 2) Expulsados en el último partido.
  for (const [c, x] of Object.entries(ult.jugadores)) if (x.expulsado) {
    const s = (G.sanciones[c] || []).find(s => s.partido?.id === ult.id);
    if (!s) add(c, { tipo: 'expulsado', nivel: 'alta', texto: `Expulsado contra ${ult.rival}. La Liga todavía no publicó la sanción: revisá Fallos y Penas el jueves.` });
    else if (s.estado === 'pendiente') add(c, { tipo: 'expulsado', nivel: 'media', texto: `Expulsado contra ${ult.rival}. Sin suspensión automática; falta el fallo del Tribunal.` });
    // cumplida o sin suspensión: no es baja
  }
  for (const nombre of ult.expBanco || []) {
    const c = Object.keys(jugadores).find(k => jugadores[k].equipo === equipo && norm(jugadores[k].nombre) === nombre);
    if (c) { if (!sancionVigente(G, c) && !(G.sanciones[c] || []).some(s => s.partido?.id === ult.id))
      add(c, { tipo: 'expulsado', nivel: 'alta', texto: `Expulsado desde el banco contra ${ult.rival}. Probable suspensión: revisá Fallos y Penas el jueves.` }); }
    else { ya.add(nombre); alertas.push({ carne: null, nombre: lindo(nombre), tipo: 'expulsado', nivel: 'alta', texto: `Expulsado desde el banco contra ${ult.rival} (no jugó ningún partido registrado). Probable suspensión.` }); }
  }

  // 3) Titulares habituales que no jugaron el último partido.
  const tit = {};
  for (const pt of previos) for (const [c, x] of Object.entries(pt.jugadores)) if (x.titular) tit[c] = (tit[c] || 0) + 1;
  const habituales = Object.entries(tit).filter(([c, k]) => k >= 3 && k / previos.length >= 0.6).map(([c]) => c);
  for (const c of habituales) {
    if (ult.jugadores[c] || ya.has(c)) continue;
    let seguidos = 0;
    for (let i = n - 1; i >= 0 && !lista[i].jugadores[c]; i--) seguidos++;
    if (seguidos > 3) continue; // ausencia larga: ya no es noticia de esta fecha
    const ultJugado = [...lista].reverse().find(pt => pt.jugadores[c]);
    const x = ultJugado?.jugadores[c];
    // ¿Jugó ese fin de semana en otra divisional? Entonces no está lesionado.
    const otra = jugoEnOtra(G, c, cat.id, ult.dia);
    if (otra) {
      add(c, { tipo: 'otra-categoria', nivel: 'baja', texto: `Titular habitual, no jugó contra ${ult.rival}: ese fin de semana jugó en ${NOMBRE_DIV[otra.div]} (${otra.min}' vs ${otra.rival}).` });
      continue;
    }
    if (x?.expulsado) {
      const s = (G.sanciones[c] || []).find(s => s.partido?.id === ultJugado.id);
      if (s && (s.estado === 'cumplida' || s.estado === 'sin-suspension')) {
        add(c, { tipo: 'vuelve', nivel: 'baja', texto: s.estado === 'cumplida'
          ? `Ya cumplió la suspensión (${plural(s.fechas, 'fecha')}) por la expulsión vs ${ultJugado.rival}: puede volver.`
          : `Expulsado vs ${ultJugado.rival}, pero el Tribunal no lo suspendió. ${seguidos === 1 ? 'No jugó el último partido.' : `Lleva ${seguidos} partidos sin jugar.`}` });
      } else if (!s) {
        add(c, { tipo: 'suspendido', nivel: 'alta', sinJugar: seguidos,
          texto: `Expulsado contra ${ultJugado.rival}; ${seguidos === 1 ? 'no jugó el partido siguiente' : `lleva ${seguidos} partidos sin jugar`}. Probable suspensión.` });
      }
      continue;
    }
    // Salir antes del entretiempo y no jugar el siguiente huele a lesión. Un cambio en el entretiempo
    // (45') o poco después suele ser táctico: se menciona, pero no sube el nivel.
    const salioTemprano = x && x.sale != null && x.sale < 45;
    let texto = seguidos === 1 ? `Titular habitual, no jugó contra ${ult.rival}.` : `Titular habitual, lleva ${seguidos} partidos sin jugar.`;
    if (x && x.sale != null && x.sale < 60) texto += ` En su último partido (vs ${ultJugado.rival}) salió a los ${x.sale}'.`;
    add(c, { tipo: salioTemprano ? 'lesion-probable' : 'no-jugo', nivel: salioTemprano || seguidos >= 2 ? 'alta' : 'media', sinJugar: seguidos, texto });
  }

  // 4) Cambios tempranos en el último partido.
  for (const [c, x] of Object.entries(ult.jugadores)) {
    if (x.sale == null) continue;
    if (x.titular && x.sale < 45)
      add(c, { tipo: 'salio-temprano', nivel: x.sale < 30 ? 'alta' : 'media', minuto: x.sale, texto: `Titular, salió a los ${x.sale}' contra ${ult.rival} y no volvió a entrar.` });
    else if (!x.titular && x.entradas.length && x.sale - x.entradas.at(-1) <= 20 && x.sale < ult.fin - 5)
      add(c, { tipo: 'entro-y-salio', nivel: 'baja', minuto: x.sale, texto: `Entró a los ${x.entradas.at(-1)}' y salió a los ${x.sale}' contra ${ult.rival}, sin volver.` });
  }
  const orden = { alta: 0, media: 1, baja: 2 };
  return alertas.sort((a, b) => orden[a.nivel] - orden[b.nivel] || a.nombre.localeCompare(b.nombre));
}

// ---------- cruces: jugadores de esta divisional que también jugaron en otras ----------
function crucesDeDivisional(cat, porEquipo, jugadores, G) {
  const out = {};
  for (const [equipo, lista] of Object.entries(porEquipo)) {
    const ultDia = lista.at(-1).dia;
    const carnes = new Set(lista.flatMap(pt => Object.keys(pt.jugadores)));
    const filas = [];
    for (const c of carnes) {
      const ap = G.apariciones[c] || [];
      const aqui = ap.filter(a => a.div === cat.id && a.equipo === equipo);
      const otras = ap.filter(a => a.div !== cat.id);
      if (!otras.length || !aqui.length) continue;
      const resumen = l => ({ pj: l.length, tit: l.reduce((s, a) => s + a.t, 0), min: l.reduce((s, a) => s + a.min, 0), ultimo: l.at(-1).dia, ultMin: l.at(-1).min });
      const porDiv = {};
      for (const a of otras) (porDiv[`${a.div}|${a.equipo}`] ??= []).push(a);
      filas.push({
        c, aqui: resumen(aqui),
        otras: Object.entries(porDiv).map(([k, l]) => ({ div: k.split('|')[0], equipo: k.split('|')[1], ...resumen(l) }))
          .sort((a, b) => b.ultimo.localeCompare(a.ultimo)),
        // Jugó en otra divisional el último fin de semana de este equipo.
        finde: otras.some(a => Math.abs(diaN(a.dia) - diaN(ultDia)) <= 3) ? 1 : 0,
      });
    }
    if (filas.length) out[equipo] = filas.sort((a, b) => b.finde - a.finde || b.aqui.min - a.aqui.min);
  }
  return out;
}

// ---------- sanciones de los jugadores de esta divisional ----------
function resumenSancion(s, div) {
  if (s.estado === 'vigente' || s.estado === 'a-confirmar') return textoSancion(s, div);
  const donde = s.partido ? `${s.partido.div !== div ? `en ${NOMBRE_DIV[s.partido.div]} ` : ''}${s.partido.rival ? `vs ${s.partido.rival} ` : ''}(${ddmm(s.partido.dia)})` : `(${ddmm(s.fecha)})`;
  if (s.estado === 'pendiente') return `Expulsado ${donde}. Sin suspensión automática: falta el fallo del Tribunal.`;
  if (s.estado === 'sin-suspension') return `Expulsado ${donde}. El Tribunal no lo suspendió.`;
  return `${s.tipo === 'fallo' ? 'Suspendido' : 'Suspensión automática de'} ${plural(s.fechas, 'fecha')} por el partido ${donde}. Ya la cumplió.`;
}
function sancionesDeDivisional(cat, jugadores, G) {
  const out = [];
  for (const c of Object.keys(jugadores)) for (const s of G.sanciones[c] || [])
    out.push({ c, equipo: jugadores[c].equipo, ...s, carne: undefined, resumen: resumenSancion(s, cat.id) });
  const orden = { vigente: 0, 'a-confirmar': 1, pendiente: 2, cumplida: 3, 'sin-suspension': 4 };
  return out.sort((a, b) => orden[a.estado] - orden[b.estado] || b.fecha.localeCompare(a.fecha));
}

// ---------- una divisional: lectura de planillas ----------
function cargar(cat) {
  const dir = new URL(`planillas/${cat.id}/`, RAIZ);
  if (!existsSync(dir)) { console.log(`${cat.nombre}: sin datos todavía.`); return; }
  const archivos = readdirSync(dir).filter(f => /^\d+\.json$/.test(f));
  const crudos = archivos.map(f => JSON.parse(readFileSync(new URL(f, dir))))
    .sort((a, b) => a.fechaHora.localeCompare(b.fechaHora) || a.id.localeCompare(b.id));
  const proximosArch = new URL('_proximos.json', dir);
  const proximos = existsSync(proximosArch) ? JSON.parse(readFileSync(proximosArch)) : [];

  const calidad = [];
  const partidos = [];
  const porEquipo = {};
  const jugadores = {};
  const sinPlanilla = {}; // equipo -> partidos jugados sin planilla

  for (const p of crudos) {
    const local = corto(p.local), visitante = corto(p.visitante);
    const wo = p.detalle?.walk_over === '1';
    const base = { id: p.id, nro: p.detalle?.nro_partido || null, serie: p.serie, etapa: cat.series[p.serie], fecha: p.fecha, dia: p.fechaHora.slice(0, 10), hora: p.fechaHora.slice(11, 16),
      cancha: lindo(p.cancha || p.detalle?.Cancha || ''), local, visitante, gl: p.gl, gv: p.gv, wo, obs: p.detalle?.observaciones || '' };
    const conPlanilla = (p.titularesL?.length || 0) > 0 && (p.titularesV?.length || 0) > 0;
    if (!conPlanilla) {
      for (const [yo, rival] of [[local, visitante], [visitante, local]]) (sinPlanilla[yo] ??= []).push({ id: p.id, fecha: p.fecha, etapa: base.etapa, dia: base.dia, rival, wo });
      calidad.push({ id: p.id, partido: `${local} ${p.gl}-${p.gv} ${visitante}`, fecha: p.fecha, etapa: base.etapa,
        problemas: [wo ? 'Ganado por walkover: no hay planilla.' : 'La Liga no cargó la planilla de este partido.'] });
      partidos.push({ ...base, planilla: false });
      continue;
    }
    // El partido dura 90 o hasta el último cambio, lo mismo para los dos equipos.
    const fin = Math.max(cat.duracion ?? 90, ...[...p.cambiosL, ...p.cambiosV].map(c => num(c.minutos) ?? 0));
    const eq = { L: analizarEquipo(p, 'L', fin), V: analizarEquipo(p, 'V', fin) };
    const problemas = [...eq.L.problemas.map(t => `${local}: ${t}`), ...eq.V.problemas.map(t => `${visitante}: ${t}`)];
    const pg = [];
    asignarGoles(p, eq, pg);
    problemas.push(...pg);
    if (problemas.length) calidad.push({ id: p.id, partido: `${local} ${p.gl}-${p.gv} ${visitante}`, fecha: p.fecha, etapa: base.etapa, problemas });

    const lados = {};
    for (const lado of ['L', 'V']) {
      const yo = lado === 'L' ? local : visitante, rival = lado === 'L' ? visitante : local;
      const js = eq[lado].jugadores;
      for (const x of Object.values(js)) {
        const r = (jugadores[x.carne] ??= { nombre: lindo(x.nombre), equipo: yo, camiseta: x.camiseta });
        r.nombre = lindo(x.nombre); r.equipo = yo; if (x.camiseta) r.camiseta = x.camiseta;
      }
      lados[lado] = Object.values(js)
        .sort((a, b) => b.titular - a.titular || (a.entradas[0] ?? 0) - (b.entradas[0] ?? 0))
        .map(x => ({ c: x.carne, min: x.minutos, t: x.titular ? 1 : 0, cap: x.capitan ? 1 : 0, cam: x.camiseta, e: x.entradas, s: x.salidas, g: x.goles, x: x.expulsado ? 1 : 0 }));
      (porEquipo[yo] ??= []).push({ id: p.id, serie: p.serie, fecha: p.fecha, dia: base.dia, rival, gf: lado === 'L' ? p.gl : p.gv, gc: lado === 'L' ? p.gv : p.gl,
        local: lado === 'L', fin: eq[lado].fin, jugadores: js, expBanco: eq[lado].expBanco });
    }
    const eventos = [...eq.L.eventos.map(e => ({ ...e, lado: e.lado || 'L' })), ...eq.V.eventos.map(e => ({ ...e, lado: e.lado || 'V' }))]
      .sort((a, b) => (a.m ?? 999) - (b.m ?? 999));
    partidos.push({ ...base, planilla: true, fin: Math.max(eq.L.fin, eq.V.fin), L: lados.L, V: lados.V, eventos, problemas: problemas.length });
  }

  // Próximo partido de cada equipo.
  const ahora = new Date();
  const proximo = {};
  for (const f of proximos) {
    const k = new Date(f.fechaHora.replace(' ', 'T') + '-03:00');
    if (k < new Date(ahora.getTime() - 3 * 3600e3)) continue;
    for (const [yo, rival, esLocal] of [[corto(f.local), corto(f.visitante), true], [corto(f.visitante), corto(f.local), false]])
      if (!proximo[yo]) proximo[yo] = { rival, dia: f.fechaHora.slice(0, 10), hora: f.fechaHora.slice(11, 16), local: esLocal, cancha: lindo(f.cancha || ''), etapa: cat.series[f.serie] };
  }

  return { cat, partidos, porEquipo, jugadores, sinPlanilla, proximo, calidad };
}

// ---------- clubes: el mismo club juega con distintos nombres según la categoría ----------
// "Elf Blanco" (Reserva D) y "ELF" son el mismo club; "Old Christians Azul" también es Old Christians.
const ALIAS_CLUB = {
  'Obc Azulgrana.': 'Old Boys', 'Seminario Universitario': 'Seminario', 'C. U. Catolica Azul': 'Club Universidad Catolica',
  'Dfc': 'Danubio Futbol Club', 'Juan Xxiii Blanco': 'Juan XXIII', 'Elf Blanco': 'ELF',
};
export function clubDe(equipo) {
  if (ALIAS_CLUB[equipo]) return ALIAS_CLUB[equipo];
  return equipo.replace(/\s+(azul|blanco|verde|naranja|negro|rojo|amarillo|sub\s?\d+)$/i, '');
}
const claveClub = c => c.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Once probable: titularidades de los últimos 5 partidos, pesando más los recientes.
// Los suspendidos quedan afuera; las dudas (lesión probable, salió temprano...) pesan menos.
// Arqueros de un equipo. La planilla no trae posiciones, así que se deducen: el que arranca con la 1 o
// la 12, casi nunca sale reemplazado antes del 80' y no hace goles. Hace falta que haya pasado al menos 2 veces.
// Devuelve los carnés de mayor a menor (titular y suplente). Si no hay ninguno claro, lista vacía.
const NUMEROS_ARQUERO = new Set(['1', '12']);
export function arqueros(lista) {
  const e = {};
  for (const pt of lista) for (const [c, x] of Object.entries(pt.jugadores)) {
    const v = (e[c] ??= { tit: 0, arq: 0, sale: 0, goles: 0 });
    v.goles += x.goles.length;
    if (!x.titular) continue;
    v.tit++;
    if (NUMEROS_ARQUERO.has(String(x.camiseta).trim())) v.arq++;
    if (x.sale != null && x.sale < 80) v.sale++; // un cambio sobre el final no cuenta
  }
  return Object.entries(e)
    .filter(([, v]) => v.arq >= 2 && v.arq / v.tit >= 0.6 && v.sale / v.tit <= 0.2 && v.goles <= 1)
    .sort((a, b) => b[1].arq - a[1].arq).map(([c]) => c);
}

function onceProbable(equipo, lista, jugadores, alertas, G) {
  const recientes = lista.slice(-5).reverse();
  const W = [1, 0.8, 0.65, 0.5, 0.4];
  const total = recientes.reduce((s, _, i) => s + W[i], 0);
  const puntos = {}, camiseta = {};
  recientes.forEach((pt, i) => {
    for (const [c, x] of Object.entries(pt.jugadores)) {
      const v = x.titular ? 1 : x.minutos >= 45 ? 0.45 : x.minutos > 0 ? 0.15 : 0;
      puntos[c] = (puntos[c] || 0) + W[i] * v;
      if (x.camiseta && !camiseta[c]) camiseta[c] = x.camiseta;
    }
  });
  const porCarne = Object.fromEntries(alertas.filter(a => a.carne).map(a => [a.carne, a]));
  const afuera = [], candidatos = [];
  for (const [c, pts] of Object.entries(puntos)) {
    const a = porCarne[c];
    const susp = a && (a.tipo === 'suspendido' || (a.tipo === 'expulsado' && a.nivel === 'alta'));
    if (susp) { if (pts / total >= 0.3) afuera.push({ c, motivo: a.tipo === 'suspendido' ? 'Suspendido' : 'Expulsado' }); continue; }
    // Cuánto baja la chance cada tipo de duda (los que no jugaron ya pierden peso por no estar en el último).
    const factor = !a || a.nivel === 'baja' ? 1 : { 'lesion-probable': 0.5, 'salio-temprano': 0.8, 'no-jugo': a.nivel === 'alta' ? 0.5 : 0.75 }[a.tipo] ?? 1;
    const duda = factor < 1 ? a.texto : null;
    candidatos.push({ c, cam: camiseta[c] || '', pct: Math.round(pts / total * 100), duda, peso: pts * factor });
  }
  candidatos.sort((a, b) => b.peso - a.peso || b.pct - a.pct);
  // Un once tiene un solo arquero: el más probable de los arqueros del equipo. Si no quedó ninguno
  // (por ejemplo, el titular está suspendido y el suplente casi no jugó), entra el mejor arquero
  // disponible en lugar del último de la lista; si quedaron dos, el segundo pasa a las alternativas.
  const arqs = arqueros(lista);
  let elegidos = candidatos.slice(0, 11), resto = candidatos.slice(11);
  if (arqs.length) {
    const esArq = x => arqs.includes(x.c);
    const enOnce = elegidos.filter(esArq);
    const arq = enOnce[0] || candidatos.find(esArq);
    if (arq) {
      const fuera = elegidos.filter(x => esArq(x) && x !== arq);
      elegidos = elegidos.filter(x => !esArq(x) || x === arq);
      if (!elegidos.includes(arq)) elegidos.push(arq);
      resto = [...fuera, ...resto.filter(x => x !== arq)];
      for (const x of resto.filter(x => !esArq(x))) { if (elegidos.length >= 11) break; elegidos.push(x); }
      resto = resto.filter(x => !elegidos.includes(x));
      while (elegidos.length > 11) resto.unshift(elegidos.splice(elegidos.findLastIndex(x => x !== arq), 1)[0]);
      arq.arq = 1;
    }
  }
  const once = elegidos.map(({ peso, ...x }) => x)
    .sort((a, b) => (b.arq || 0) - (a.arq || 0) || (Number(a.cam) || 99) - (Number(b.cam) || 99));
  const alternativas = resto.slice(0, 4).map(({ peso, ...x }) => x);
  return { once, alternativas, afuera, arqueros: arqs, partidos: recientes.length };
}

// Partidos de la temporada entre dos clubes, en todas las categorías que seguimos.
function caraACara(G, l, v) {
  const a = clubDe(l), b = clubDe(v);
  return (G.porClub[`${claveClub(a)}|${claveClub(b)}`] || []).concat(G.porClub[`${claveClub(b)}|${claveClub(a)}`] || [])
    .sort((x, y) => y.dia.localeCompare(x.dia));
}

// ---------- una divisional: alertas, cruces y sanciones, con lo de toda la Liga a mano ----------
function terminar(st, G) {
  const { cat, partidos, porEquipo, jugadores, sinPlanilla, proximo, calidad } = st;
  const bajas = {};
  for (const [equipo, lista] of Object.entries(porEquipo)) {
    const ult = lista.at(-1);
    bajas[equipo] = {
      ultimo: { id: ult.id, fecha: ult.fecha, etapa: cat.series[ult.serie], dia: ult.dia, rival: ult.rival, gf: ult.gf, gc: ult.gc, local: ult.local },
      proximo: proximo[equipo] || null,
      // Partidos jugados después del último con planilla: las alertas no los pueden ver.
      pendientes: (sinPlanilla[equipo] || []).filter(x => x.dia >= ult.dia && x.id !== ult.id && !x.wo),
      alertas: alertasDeEquipo(equipo, lista, jugadores, cat, G),
    };
    bajas[equipo].probable = onceProbable(equipo, lista, jugadores, bajas[equipo].alertas, G);
    // Para "Mi equipo": resumen del equipo dentro de su club.
    const club = clubDe(equipo);
    const resumenClub = (G.clubes[claveClub(club)] ??= { nombre: club, equipos: [] });
    resumenClub.equipos.push({
      div: cat.id, equipo, ultimo: bajas[equipo].ultimo, proximo: bajas[equipo].proximo, pendientes: bajas[equipo].pendientes,
      alertas: bajas[equipo].alertas.filter(a => a.nivel !== 'baja').map(({ carne, nombre, nivel, tipo, texto }) => ({ carne, nombre, nivel, tipo, texto })),
    });
  }

  // Previas: cara a cara de la temporada para cada partido próximo de la divisional.
  const previas = {};
  for (const [equipo, b] of Object.entries(bajas)) {
    if (!b.proximo) continue;
    const [l, v] = b.proximo.local ? [equipo, b.proximo.rival] : [b.proximo.rival, equipo];
    previas[`${l}~${v}`] ??= { l, v, dia: b.proximo.dia, hora: b.proximo.hora, cancha: b.proximo.cancha, etapa: b.proximo.etapa, caraACara: caraACara(G, l, v) };
  }

  const salida = {
    id: cat.id, nombre: cat.nombre, actualizado: new Date().toISOString(),
    equipos: Object.keys(porEquipo).sort((a, b) => a.localeCompare(b)),
    jugadores, partidos, bajas, calidad,
    cruces: crucesDeDivisional(cat, porEquipo, jugadores, G),
    previas,
    sanciones: sancionesDeDivisional(cat, jugadores, G),
    resumen: {
      partidos: partidos.length,
      conPlanilla: partidos.filter(p => p.planilla).length,
      conProblemas: calidad.length,
    },
  };
  // Si nada cambió desde la última vez, se conserva la fecha de actualización (y no hay commit).
  const archivo = new URL(`${cat.id}.json`, OUT);
  if (existsSync(archivo)) {
    const viejo = JSON.parse(readFileSync(archivo));
    const sinFecha = o => JSON.stringify({ ...o, actualizado: null });
    if (sinFecha(viejo) === sinFecha(salida)) salida.actualizado = viejo.actualizado;
  }
  writeFileSync(archivo, JSON.stringify(salida));
  return salida;
}

const SOLO = (process.env.SOLO || '').split(',').map(s => s.trim()).filter(Boolean);
// Primera pasada: leer todas las divisionales (hace falta para cruzar jugadores y sanciones).
const estados = DIVISIONALES.map(cargar).filter(Boolean);
const G = global(estados);
const resumenes = {};
for (const st of estados) {
  if (SOLO.length && !SOLO.includes(st.cat.id)) continue;
  const s = terminar(st, G);
  resumenes[st.cat.id] = { actualizado: s.actualizado, ...s.resumen, equipos: s.equipos.length };
  const alertas = Object.values(s.bajas).reduce((n, b) => n + b.alertas.filter(a => a.nivel === 'alta').length, 0);
  const vigentes = s.sanciones.filter(x => x.estado === 'vigente').length;
  console.log(`${s.nombre}: ${s.resumen.partidos} partidos, ${s.resumen.conPlanilla} con planilla, ${s.resumen.conProblemas} con observaciones, ${alertas} alertas altas, ${vigentes} suspensiones vigentes, ${Object.values(s.cruces).flat().length} jugadores que también juegan en otra divisional.`);
  if (process.env.DETALLE === '1') for (const e of s.equipos) {
    const b = s.bajas[e];
    console.log(`  ${e} (último: F${b.ultimo.fecha} ${b.ultimo.etapa} vs ${b.ultimo.rival} ${b.ultimo.gf}-${b.ultimo.gc}${b.proximo ? `; próximo: vs ${b.proximo.rival} ${b.proximo.dia}` : ''})`);
    for (const a of b.alertas) console.log(`    [${a.nivel}] ${a.nombre}: ${a.texto}`);
  }
}
// Índice para la web: categorías y divisionales con datos. Se conserva lo de las que no se procesaron.
const archIndice = new URL('indice.json', OUT);
let viejo = {};
try { const v = JSON.parse(readFileSync(archIndice)); if (v && !Array.isArray(v)) for (const c of v.categorias || []) for (const d of c.divisionales) viejo[d.id] = d; } catch {}
const indice = {
  categorias: CATEGORIAS.map(c => ({
    id: c.id, nombre: c.nombre,
    divisionales: c.divisionales
      .map(d => ({ id: d.id, letra: d.letra, nombre: `${c.nombre} ${d.letra}`, ...(resumenes[d.id] || viejo[d.id] || {}) }))
      .filter(d => d.partidos),
  })).filter(c => c.divisionales.length),
};
writeFileSync(archIndice, JSON.stringify(indice, null, 1) + '\n');

// Clubes (para "Mi equipo"): cada club con sus equipos en todas las divisionales. Si se procesó solo
// una parte (SOLO), no se pisa el archivo.
if (!SOLO.length) {
  const orden = Object.fromEntries(DIVISIONALES.map((d, i) => [d.id, i]));
  const clubes = Object.fromEntries(Object.entries(G.clubes).sort((a, b) => a[1].nombre.localeCompare(b[1].nombre))
    .map(([k, c]) => [k, { ...c, equipos: c.equipos.sort((a, b) => orden[a.div] - orden[b.div]) }]));
  const archClubes = new URL('clubes.json', OUT);
  let previo = null; try { previo = JSON.parse(readFileSync(archClubes)); } catch {}
  const salidaClubes = { actualizado: new Date().toISOString(), clubes };
  if (previo && JSON.stringify({ ...previo, actualizado: null }) === JSON.stringify({ ...salidaClubes, actualizado: null })) salidaClubes.actualizado = previo.actualizado;
  writeFileSync(archClubes, JSON.stringify(salidaClubes));
  console.log(`Clubes: ${Object.keys(clubes).length}.`);
}

// Posiciones de cada etapa (la tabla oficial de la Liga si responde) y los partidos más picantes.
await armarPicantes();
