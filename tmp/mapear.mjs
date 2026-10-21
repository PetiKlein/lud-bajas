// Temporal: lee las páginas de estadísticas de la Liga para saber qué series forman cada divisional,
// y cuenta partidos jugados y por jugar de cada una.
import { writeFileSync } from 'node:fs';
const B = 'https://ligauniversitaria.org.uy';
const PAGINAS = {
  'mayores-a': 'estadisticas-futbol-mayores-a', 'mayores-b': 'estadisticas-futbol-mayores-a-2', 'mayores-c': 'estadisticas-futbol-mayores-c',
  'mayores-d': 'estadisticas-futbol-mayores-d', 'mayores-e': 'estadisticas-futbol-mayores-e', 'mayores-f': 'estadisticas-futbol-mayores-f',
  'mayores-g': 'estadisticas-futbol-mayores-g',
  'sub20-a': 'estadisticas-futbol-sub-20-a', 'sub20-b': 'estadisticas-futbol-sub-20-b', 'sub20-c': 'estadisticas-futbol-sub-20-c',
  'reserva-a': 'estadisticas-futbol-reserva-a', 'reserva-b': 'estadisticas-futbol-reserva-b', 'reserva-c': 'estadisticas-futbol-reserva-c', 'reserva-d': 'estadisticas-futbol-reserva-d',
};
const get = async u => { const r = await fetch(u, { signal: AbortSignal.timeout(30000) }); return r.ok ? r.text() : ''; };
const config = JSON.parse(await get(`${B}/config/config.json`));
const out = {};
for (const [k, slug] of Object.entries(PAGINAS)) {
  const html = await get(`${B}/${slug}/`);
  // Encabezados h2 seguidos de los links de esa sección.
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
    const c = config.find(c => c.ID === id);
    s.config = c || id;
    if (c) {
      const q = `temporada=${c.Temporada}&deporte=${c.Deporte}&torneo=${c.Torneo}&categoria=${c.Categoria}&serie=${c.Serie}`;
      const t1 = (await get(`${B}/resultados/api.php?action=cargarPartidos&${q}`)).trim();
      const t2 = (await get(`${B}/partidos/api.php?action=cargarPartidos&${q}`)).trim();
      const jug = t1 ? JSON.parse(t1) : [], pro = t2 ? JSON.parse(t2) : [];
      s.jugados = Array.isArray(jug) ? jug.filter(p => p.GL !== '' && p.GL != null).length : 0;
      s.proximos = Array.isArray(pro) ? pro.length : 0;
      s.equipos = [...new Set((Array.isArray(jug) ? jug : []).concat(Array.isArray(pro) ? pro : []).flatMap(p => [p.Locatario, p.Visitante]))].sort();
      const conDetalle = (Array.isArray(jug) ? jug : []).find(p => p.GL !== '');
      if (conDetalle) {
        const tit = (await get(`${B}/resultados/api.php?action=Titulares%20Locatario&id=${conDetalle.ID}`)).trim();
        s.muestraTitulares = tit ? (JSON.parse(tit).length ?? 0) : 0;
      }
    }
  }
  out[k] = secciones;
  console.log(k, secciones.map(s => `${s.titulo}=${s.config?.Serie ?? s.config}:${s.jugados ?? '?'}+${s.proximos ?? '?'}`).join(' | '));
}
writeFileSync('tmp/mapa.json', JSON.stringify(out, null, 1));
