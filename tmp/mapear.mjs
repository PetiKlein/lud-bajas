// Temporal: series de las categorías nuevas según las páginas de estadísticas de la Liga.
import { writeFileSync } from 'node:fs';
const B = 'https://ligauniversitaria.org.uy';
const PAGINAS = {
  'presenior-a': 'estadisticas-futbol-pre-senior-a', 'presenior-b': 'estadisticas-futbol-pre-senior-b', 'presenior-c': 'estadisticas-futbol-pre-senior-c',
  'presenior-d': 'estadisticas-futbol-pre-senior-d', 'presenior-e': 'estadisticas-futbol-pre-senior-e',
  'mas40-a': 'estadisticas-futbol-mas-40-a', 'mas40-b': 'estadisticas-futbol-mas-40-b', 'mas40-c': 'estadisticas-futbol-mas-40-c',
  'sub18-series': 'estadisticas-futbol-sub-18-series', 'sub18-copas': 'estadisticas-futbol-sub-18-copas',
  'sub16-series': 'estadisticas-futbol-sub-16-series', 'sub16-copas': 'estadisticas-futbol-sub-16-copas',
};
const get = async u => { try { const r = await fetch(u, { signal: AbortSignal.timeout(40000) }); return r.ok ? r.text() : ''; } catch { return ''; } };
const parse = t => { try { const j = JSON.parse(t.trim() || '[]'); return Array.isArray(j) ? j : []; } catch { return []; } };
const config = JSON.parse(await get(`${B}/config/config.json`));
const out = {};
for (const [k, slug] of Object.entries(PAGINAS)) {
  const html = await get(`${B}/${slug}/`);
  const secciones = [];
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>|resultados\/([A-Za-z0-9]+)\.html/g;
  let titulo = null, m;
  while ((m = re.exec(html))) {
    if (m[1] != null) titulo = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    else if (m[2] && !secciones.some(s => s.archivo === m[2])) secciones.push({ titulo, archivo: m[2] });
  }
  for (const s of secciones) {
    const h = await get(`${B}/resultados/${s.archivo}.html`);
    const id = (h.match(/name="config-id" content="([^"]+)"/) || [])[1];
    const cands = config.filter(c => c.ID === id && c.Temporada === '113');
    const c = cands[0];
    s.configId = id; s.config = c || null;
    if (c) {
      const q = `temporada=113&deporte=F&torneo=${encodeURIComponent(c.Torneo)}&categoria=${c.Categoria}&serie=${encodeURIComponent(c.Serie)}`;
      const jug = parse(await get(`${B}/resultados/api.php?action=cargarPartidos&${q}`));
      const pro = parse(await get(`${B}/partidos/api.php?action=cargarPartidos&${q}`));
      s.jugados = jug.filter(p => p.GL !== '' && p.GL != null).length; s.proximos = pro.length;
      s.equipos = [...new Set([...jug, ...pro].flatMap(p => [p.Locatario, p.Visitante]))].length;
      const uno = jug.find(p => p.GL !== '');
      if (uno) {
        const cam = parse(await get(`${B}/resultados/api.php?action=CambiosLocatario&id=${uno.ID}`));
        const tit = parse(await get(`${B}/resultados/api.php?action=Titulares%20Locatario&id=${uno.ID}`));
        s.muestra = { titulares: tit.length, cambios: cam.map(x => x.minutos) };
      }
    }
  }
  out[k] = secciones;
  console.log(k, secciones.map(s => `${s.titulo}=${s.config?.Serie ?? '?' + s.configId}/${s.config?.Torneo}/${s.config?.Categoria}:${s.jugados ?? '?'}+${s.proximos ?? '?'}`).join(' | '));
}
// candidatos del config por si alguna página no resuelve
out._config = config.filter(c => c.Temporada === '113' && c.Deporte === 'F' && !['1', '2', '20'].includes(c.Categoria));
writeFileSync('tmp/mapa.json', JSON.stringify(out, null, 1));
