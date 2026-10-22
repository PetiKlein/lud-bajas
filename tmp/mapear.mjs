// Temporal: cuántos partidos tiene cada serie candidata.
import { writeFileSync } from 'node:fs';
const B = 'https://ligauniversitaria.org.uy';
const get = async u => { try { const r = await fetch(u, { signal: AbortSignal.timeout(40000) }); return r.ok ? r.text() : ''; } catch { return ''; } };
const parse = t => { try { const j = JSON.parse(t.trim() || '[]'); return Array.isArray(j) ? j : []; } catch { return []; } };
const C = { 32: 'PSA PSAT PSAPD PSB PSBTA PSBPD PSC PSCTA PSCPD PSCDP PSD PSDTA PSDPD PSE1 PSE2 PSE12 PSE22 PSETA PSET2 PSEP PSEP2 PSEB PSEB2',
  40: 'M40S1 M40S2 40S21 40S22 40S23 40CO 40CP 40CB 40CC 40CB2 40C2 40C3 M40O M40P M40P2 M40B M40B2',
  18: '18-1- 18-2- 18-3- 18-4- 18-5- 18-6- 18-12 18-22 18-32 18-42 18-52 18-61 18-62 18O 18P 18B 18C 18F 18A S18FO 18FCP',
  16: '16-1- 16-2- 16-3- 16-4- 16-5- 16-12 16-22 16-32 16-42 16-52 16O 16P 16B 16C 16F S16FO S16F0' };
const out = {};
for (const [t, ss] of Object.entries(C)) for (const s of ss.split(' ')) {
  const q = `temporada=113&deporte=F&torneo=${t}&categoria=${t}&serie=${encodeURIComponent(s)}`;
  const jug = parse(await get(`${B}/resultados/api.php?action=cargarPartidos&${q}`));
  const pro = parse(await get(`${B}/partidos/api.php?action=cargarPartidos&${q}`));
  const todos = [...jug, ...pro];
  const fechas = todos.map(p => p.FechaHora || p.Fecha || '').filter(Boolean).sort();
  out[`${t}/${s}`] = { jugados: jug.filter(p => p.GL !== '' && p.GL != null).length, proximos: pro.length,
    equipos: [...new Set(todos.flatMap(p => [p.Locatario, p.Visitante]))].sort(), desde: fechas[0], hasta: fechas.at(-1), claves: Object.keys(jug[0] || pro[0] || {}) };
  console.log(t, s, out[`${t}/${s}`].jugados, out[`${t}/${s}`].proximos, out[`${t}/${s}`].equipos.length);
}
const cfg = JSON.parse(await get(`${B}/fallosypenas/api.php?action=cargarTorneos&deporte=F`) || '[]');
out._fallos = cfg;
writeFileSync('tmp/mapa2.json', JSON.stringify(out, null, 1));
