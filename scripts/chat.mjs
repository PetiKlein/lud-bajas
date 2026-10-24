// Resumen compacto de toda la Liga para el chat (data/chat.json). Lo lee el servidor del chat (worker/)
// para contestar preguntas: por cada equipo, su próximo partido, posición, forma, bajas, suspendidos,
// once probable y goleadores; y un índice de jugadores. Corre después de analizar.mjs.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const DATA = new URL('../data/', import.meta.url);
const leer = f => JSON.parse(readFileSync(new URL(f, DATA)));
const DIAS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const fDia = d => `${DIAS[new Date(d + 'T12:00:00Z').getUTCDay()]} ${d.slice(8, 10)}/${d.slice(5, 7)}`;

const indice = leer('indice.json');
const posiciones = existsSync(new URL('posiciones.json', DATA)) ? leer('posiciones.json').divisionales || {} : {};
const equipos = [], jugadores = [];

for (const cat of indice.categorias) for (const dv of cat.divisionales) {
  if (dv.oculta || !existsSync(new URL(`${dv.id}.json`, DATA))) continue;
  const d = leer(`${dv.id}.json`);
  const mios = new Set(d.equipos);
  const nom = c => d.jugadores[c]?.nombre || c;
  // Estadísticas de cada jugador del equipo en esta divisional.
  const st = {};
  for (const p of d.partidos) if (p.planilla) for (const [lado, eq] of [['L', p.local], ['V', p.visitante]]) {
    if (!mios.has(eq)) continue;
    for (const j of p[lado]) {
      const x = (st[j.c] ??= { eq, pj: 0, tit: 0, min: 0, gol: 0 });
      x.eq = eq; x.pj++; x.tit += j.t; x.min += j.min; x.gol += j.g.length;
    }
  }
  for (const eq of d.equipos) {
    const b = d.bajas[eq] || {};
    const jugados = d.partidos.filter(p => (p.local === eq || p.visitante === eq) && p.gl != null && p.gv != null)
      .map(p => { const loc = p.local === eq; const gf = loc ? p.gl : p.gv, gc = loc ? p.gv : p.gl;
        return { r: gf > gc ? 'G' : gf === gc ? 'E' : 'P', gf, gc, rival: loc ? p.visitante : p.local, dia: p.dia, etapa: p.etapa }; });
    const g = jugados.filter(x => x.r === 'G').length, e = jugados.filter(x => x.r === 'E').length;
    const pr = b.proximo;
    const etapa = pr?.etapa || b.ultimo?.etapa;
    const tabla = posiciones[dv.id]?.[etapa]?.pos;
    const goleadores = Object.entries(st).filter(([, x]) => x.eq === eq && x.gol > 0).sort((a, b2) => b2[1].gol - a[1].gol).slice(0, 4)
      .map(([c, x]) => `${nom(c)} ${x.gol}`);
    const susp = (d.sanciones || []).filter(s => s.equipo === eq && (s.estado === 'vigente' || s.estado === 'a-confirmar'))
      .map(s => `${nom(s.c)}: ${s.resumen}`);
    equipos.push({
      eq, div: dv.id, divNombre: dv.nombre, cat: cat.nombre,
      prox: pr ? `vs ${pr.rival}, ${fDia(pr.dia)}${pr.hora && pr.hora !== '00:00' ? ' ' + pr.hora : ''}, ${pr.local ? 'de local' : 'de visitante'}${pr.etapa ? ', ' + pr.etapa : ''}${pr.cancha && !/fijar/i.test(pr.cancha) ? ', cancha ' + pr.cancha : ''}` : null,
      rival: pr?.rival || null,
      pos: tabla && tabla[eq] ? `${tabla[eq]}° de ${Object.keys(tabla).length} en ${etapa}` : null,
      campana: `${jugados.length} PJ, ${g}G ${e}E ${jugados.length - g - e}P, goles ${jugados.reduce((s, x) => s + x.gf, 0)}-${jugados.reduce((s, x) => s + x.gc, 0)}`,
      ultimos: jugados.slice(-5).reverse().map(x => `${x.r} ${x.gf}-${x.gc} vs ${x.rival} (${x.dia.slice(8, 10)}/${x.dia.slice(5, 7)})`),
      bajas: (b.alertas || []).filter(a => a.nivel !== 'baja').map(a => `${a.nombre} (${a.nivel}): ${a.texto}`),
      suspendidos: susp,
      once: (b.probable?.once || []).map(x => `${nom(x.c)}${x.arq ? ' (arquero)' : ''}${x.duda ? ' (duda)' : ''}`),
      goleadores,
    });
    const i = equipos.length - 1;
    for (const [c, x] of Object.entries(st)) if (x.eq === eq) jugadores.push([nom(c), i, x.pj, x.tit, x.min, x.gol]);
  }
}

const salida = { actualizado: new Date().toISOString(), equipos, jugadores };
writeFileSync(new URL('chat.json', DATA), JSON.stringify(salida));
console.log(`Chat: ${equipos.length} equipos, ${jugadores.length} jugadores, ${Math.round(JSON.stringify(salida).length / 1024)} KB.`);
