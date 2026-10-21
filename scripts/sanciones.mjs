// Baja las sanciones de la temporada desde el buscador de Fallos y Penas de la Liga
// (ligauniversitaria.org.uy/fallosypenas/) y las guarda en planillas/_sanciones/<categoria>.json.
//  - Sanciones automáticas: se generan solas al expulsar a un jugador (suspensión provisoria).
//  - Fallos de jugadores: lo que resuelve el Tribunal de Penas (la suspensión definitiva).
// Cada registro trae el carné, la serie y el número de partido, así que se cruza con las planillas.
import { mkdirSync, writeFileSync } from 'node:fs';
import { INICIO_TEMPORADA } from './comun.mjs';
import { CATEGORIAS } from './categorias.mjs';

const API = 'https://ligauniversitaria.org.uy/fallosypenas/api.php';
const DIR = new URL('../planillas/_sanciones/', import.meta.url);
mkdirSync(DIR, { recursive: true });

async function api(params) {
  const q = new URLSearchParams(params).toString().replace(/\+/g, '%20');
  for (let intento = 1; ; intento++) {
    try {
      const r = await fetch(`${API}?${q}`, { headers: { 'User-Agent': 'lud-bajas (github.com/PetiKlein/lud-bajas)' }, signal: AbortSignal.timeout(120000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const t = (await r.text()).trim();
      if (!t) return [];
      const j = JSON.parse(t);
      return Array.isArray(j) ? j : [];
    } catch (e) {
      if (intento >= 3) throw new Error(`${params.action}: ${e.message}`);
      await new Promise(r => setTimeout(r, 5000 * intento));
    }
  }
}

// "F:2 - UR:1" -> 2 fechas de suspensión.
const fechas = c => { const m = /F:\s*(\d+)/.exec(c || ''); return m ? Number(m[1]) : null; };
const limpiar = s => (s || '').replace(/\s+/g, ' ').trim();

let deporte;
try {
  const deps = await api({ action: 'cargarDeportes' });
  deporte = deps.map(d => d.nombre).find(n => /^F[ÚU]TBOL$/i.test(n.trim())) || deps.map(d => d.nombre).find(n => /TBOL/i.test(n) && !/SAL|PLAYA|FEM|8|7/i.test(n));
} catch (e) { console.log(`No se pudo leer la lista de deportes (${e.message}). Se deja lo que había.`); process.exit(0); }

for (const cat of CATEGORIAS) {
  try {
    const fs = (await api({ action: 'cargarFechas', deporte, torneo: cat.torneoFallos })).map(f => f.fecha_fallo).filter(f => f >= INICIO_TEMPORADA).sort();
    if (!fs.length) { console.log(`${cat.nombre}: sin sanciones en la temporada.`); continue; }
    const desde = fs[0];
    const [auto, fallos] = await Promise.all([
      api({ action: 'cargarPartidos', deporte, torneo: cat.torneoFallos, fecha: desde }),
      api({ action: 'cargarFallos', deporte, torneo: cat.torneoFallos, fecha: desde }),
    ]);
    const norm = (x, tipo) => ({
      tipo, fecha: x.fecha_fallo, partido: x.nro_partido, serie: limpiar(x.cd_serie), carne: limpiar(x.carne),
      nombre: limpiar(x.nombre_jugador), club: limpiar(x.insa), sancion: limpiar(x.sancion), fechas: fechas(x.cant_sansion),
      detalle: limpiar(x.cant_sansion), texto: limpiar(x.articulos || x.observaciones),
    });
    const lista = [...auto.map(x => norm(x, 'automatica')), ...fallos.map(x => norm(x, 'fallo'))]
      .filter(x => x.fecha >= INICIO_TEMPORADA && x.carne)
      .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.carne.localeCompare(b.carne));
    writeFileSync(new URL(`${cat.id}.json`, DIR), JSON.stringify(lista, null, 1) + '\n');
    console.log(`${cat.nombre}: ${lista.filter(x => x.tipo === 'automatica').length} automáticas, ${lista.filter(x => x.tipo === 'fallo').length} fallos.`);
  } catch (e) {
    console.log(`${cat.nombre}: no se pudieron bajar las sanciones (${e.message}). Se deja lo que había.`);
  }
}
