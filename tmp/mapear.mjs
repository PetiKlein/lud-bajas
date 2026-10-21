// Temporal: prueba series directamente por código.
import { writeFileSync } from 'node:fs';
const B = 'https://ligauniversitaria.org.uy';
const get = async u => { try { const r = await fetch(u, { signal: AbortSignal.timeout(30000) }); return r.ok ? (await r.text()).trim() : ''; } catch { return ''; } };
const PRUEBAS = [
  [2, 1, ['G', 'GPD2', 'DDA']],
  [20, 20, ['20C2', 'S20C2', '20CP', 'S20CP', '20CP2', 'S20CD', '112']],
  ['2B', 2, ['RSBPD', 'RSCTA', 'RSCPD', 'RSDTA', 'RSDPD', 'RS32', 'RS33', 'RD2']],
];
const out = {};
for (const [t, c, series] of PRUEBAS) for (const s of series) {
  const q = `temporada=113&deporte=F&torneo=${t}&categoria=${c}&serie=${s}`;
  const parse = x => { try { const j = JSON.parse(x); return Array.isArray(j) ? j : []; } catch { return []; } };
  const jug = parse(await get(`${B}/resultados/api.php?action=cargarPartidos&${q}`));
  const pro = parse(await get(`${B}/partidos/api.php?action=cargarPartidos&${q}`));
  out[s] = { torneo: t, categoria: c, jugados: jug.filter(p => p.GL !== '' && p.GL != null).length, proximos: pro.length,
    equipos: [...new Set([...jug, ...pro].flatMap(p => [p.Locatario, p.Visitante]))].sort() };
  console.log(s, out[s].jugados, out[s].proximos, out[s].equipos.length);
}
writeFileSync('tmp/mapa2.json', JSON.stringify(out, null, 1));
