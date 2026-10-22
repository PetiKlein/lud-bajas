// Posiciones de cada etapa y los partidos más picantes de la próxima fecha, para la web.
// Lee data/<divisional>.json (lo escribe analizar.mjs) y escribe:
//  - data/posiciones.json: la posición de cada equipo en su grupo. Sale de la tabla oficial de la Liga
//    (posiciones/api.php, cargarPosiciones) cuando responde, porque incluye los partidos que el Tribunal
//    da por ganados; si no responde, se calcula con los resultados (posiciones() abajo).
//  - data/picantes.json: chico, así la portada no tiene que bajar las 14 divisionales para compararlas.
//
// Picante = cruce entre dos de los cuatro primeros del grupo de arriba (título / título y ascenso), o
// entre dos de los cuatro últimos del grupo de permanencia (la pelea por no descender). La copa de plata
// no cuenta: es de las divisionales más bajas, donde no hay descenso.
// Orden: un puntaje de "picantez" que junta todas las categorías. Suman las posiciones (arriba: 1° = 4,
// 2° = 3, 3° = 2, 4° = 1; abajo, al revés: último = 4, penúltimo = 3...) y la divisional (A = 6, B = 5 ...
// G = 0, igual para Mayores, Sub 20 y Reserva): la divisional pesa, pero un 1° vs 2° de una C puede
// ganarle a un 2° vs 4° de una A, y un último vs penúltimo de una A, a un 3° vs 4° de una B.
// Si empatan, primero la letra más alta y después la categoría (el orden de categorias.mjs).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { DIVISIONALES } from './categorias.mjs';
import { TEMPORADA, corto } from './comun.mjs';

const OUT = new URL('../data/', import.meta.url);
const API = 'https://ligauniversitaria.org.uy/posiciones/api.php';
const MAX = 30;

const LETRAS = 'ABCDEFG';
// Puntos por ubicación: arriba cuenta desde el 1°; en el descenso, desde el último.
const ubic = (pos, n, tipo) => tipo === 'descenso' ? 5 - (n - pos + 1) : 5 - pos;
const picantez = p => ubic(p.pl, p.n, p.tipo) + ubic(p.pv, p.n, p.tipo) + Math.max(0, 6 - LETRAS.indexOf(p.letra));
// ¿Es picante? Devuelve 'titulo', 'descenso' o null. n = cantidad de equipos del grupo.
export function tipoPicante(etapa, pl, pv, n) {
  if (!pl || !pv) return null;
  const peso = pesoEtapa(etapa);
  if (peso === 0 && pl <= 4 && pv <= 4) return 'titulo';
  if (peso === 2 && n >= 6 && pl > n - 4 && pv > n - 4) return 'descenso';
  return null;
}
const pesoEtapa = e => /permanencia|descenso/i.test(e || '') ? 2 : /plata/i.test(e || '') ? 1 : 0;

// Tabla de cada etapa, como el reglamento (art. 3): en la segunda etapa cada equipo conserva lo de la
// primera rueda, así que cuenta toda la temporada. Puntos, diferencia de gol, goles a favor y, si siguen
// empatados, lo que hicieron entre ellos. Es la misma cuenta que posiciones() en index.html.
function posiciones(d) {
  const jugados = d.partidos.filter(p => p.gl != null && p.gv != null);
  const tabla = (lista, solo) => {
    const t = {};
    const suma = (eq, gf, gc) => { const x = t[eq] ||= { pts: 0, dg: 0, gf: 0 }; x.pts += gf > gc ? 3 : gf === gc ? 1 : 0; x.dg += gf - gc; x.gf += gf; };
    for (const p of lista) if (!solo || (solo.has(p.local) && solo.has(p.visitante))) { suma(p.local, p.gl, p.gv); suma(p.visitante, p.gv, p.gl); }
    return t;
  };
  const total = tabla(jugados);
  const cero = { pts: 0, dg: 0, gf: 0 };
  const cmp = t => (a, b) => (t[b] || cero).pts - (t[a] || cero).pts || (t[b] || cero).dg - (t[a] || cero).dg || (t[b] || cero).gf - (t[a] || cero).gf;
  const pos = {};
  for (const [et, g] of Object.entries(grupos(d))) {
    const orden = [...g].sort(cmp(total));
    for (let i = 0; i < orden.length;) {
      let j = i + 1;
      while (j < orden.length && cmp(total)(orden[i], orden[j]) === 0) j++;
      if (j - i > 1) { const run = orden.slice(i, j); orden.splice(i, j - i, ...run.sort(cmp(tabla(jugados, new Set(run))))); }
      i = j;
    }
    pos[et] = Object.fromEntries(orden.map((eq, i) => [eq, i + 1]));
  }
  return pos;
}
// Equipos de cada etapa: los que jugaron en ella o tienen partido programado.
function grupos(d) {
  const g = {};
  for (const p of d.partidos) for (const eq of [p.local, p.visitante]) (g[p.etapa] ||= new Set()).add(eq);
  for (const f of Object.values(d.previas || {})) for (const eq of [f.l, f.v]) (g[f.etapa] ||= new Set()).add(eq);
  return g;
}

// Tabla oficial de una serie, con los nombres como los usa la web. null si la Liga no responde o si
// algún equipo no coincide con los del grupo (en ese caso vale más la cuenta propia).
async function oficial(div, serie, equipos) {
  try {
    const q = new URLSearchParams({ action: 'cargarPosiciones', temporada: TEMPORADA, deporte: 'F', torneo: div.torneo, categoria: div.categoria, serie });
    const r = await fetch(`${API}?${q}`, { headers: { 'User-Agent': 'lud-bajas (github.com/PetiKlein/lud-bajas)' }, signal: AbortSignal.timeout(25000) });
    if (!r.ok) return null;
    const t = await r.json();
    const orden = t.map(x => corto(x.Institucion));
    if (!orden.length || orden.length !== equipos.size || !orden.every(eq => equipos.has(eq))) return null;
    return Object.fromEntries(orden.map((eq, i) => [eq, i + 1]));
  } catch { return null; }
}

// Si nada cambió, se conserva la fecha (y no hay commit).
function guardar(nombre, salida) {
  const archivo = new URL(nombre, OUT);
  try {
    const viejo = JSON.parse(readFileSync(archivo));
    if (JSON.stringify({ ...viejo, actualizado: null }) === JSON.stringify({ ...salida, actualizado: null })) salida.actualizado = viejo.actualizado;
  } catch {}
  writeFileSync(archivo, JSON.stringify(salida, null, 1) + '\n');
}

export async function armarPicantes() {
  const partidos = [], tablas = {};
  let oficiales = 0, calculadas = 0;
  for (const [orden, div] of DIVISIONALES.entries()) {
    const archivo = new URL(`${div.id}.json`, OUT);
    if (!existsSync(archivo)) continue;
    const d = JSON.parse(readFileSync(archivo));
    const pos = posiciones(d), g = grupos(d);
    const fuente = {};
    // Solo hacen falta las etapas que tienen partidos por jugar.
    for (const etapa of new Set(Object.values(d.previas || {}).map(f => f.etapa))) {
      const serie = Object.keys(div.series).find(s => div.series[s] === etapa);
      const of = serie && g[etapa] ? await oficial(div, serie, g[etapa]) : null;
      if (of) { pos[etapa] = of; oficiales++; } else calculadas++;
      fuente[etapa] = of ? 'oficial' : 'calculada';
    }
    tablas[div.id] = Object.fromEntries(Object.keys(fuente).map(et => [et, { fuente: fuente[et], pos: pos[et] }]));
    const altas = eq => (d.bajas?.[eq]?.alertas || []).filter(a => a.nivel === 'alta').length;
    for (const [k, f] of Object.entries(d.previas || {})) {
      const pl = pos[f.etapa]?.[f.l], pv = pos[f.etapa]?.[f.v], n = Object.keys(pos[f.etapa] || {}).length;
      const tipo = tipoPicante(f.etapa, pl, pv, n);
      if (!tipo) continue;
      partidos.push({ div: div.id, divNombre: div.nombre, letra: div.letra, orden, k, l: f.l, v: f.v, dia: f.dia, hora: f.hora, etapa: f.etapa, pl, pv, n, tipo, altasL: altas(f.l), altasV: altas(f.v) });
    }
  }
  partidos.sort((a, b) => picantez(b) - picantez(a) || a.letra.localeCompare(b.letra) || a.orden - b.orden || (a.dia + a.hora).localeCompare(b.dia + b.hora));
  guardar('posiciones.json', { actualizado: new Date().toISOString(), divisionales: tablas });
  const salida = { actualizado: new Date().toISOString(), partidos: partidos.slice(0, MAX).map(({ orden, letra, ...p }) => p) };
  guardar('picantes.json', salida);
  console.log(`Posiciones: ${oficiales} tablas oficiales, ${calculadas} calculadas. Picantes: ${salida.partidos.length} partidos (${salida.partidos.filter(p => p.tipo === 'descenso').length} por el descenso) en ${new Set(salida.partidos.map(p => p.div)).size} divisionales.`);
  return salida;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await armarPicantes();
