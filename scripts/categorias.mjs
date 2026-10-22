// Categorías y divisionales que sigue el robot. Los códigos (torneo, categoría y serie) salen de
// https://ligauniversitaria.org.uy/config/config.json y de las páginas de estadísticas de la Liga
// (temporada 113 = 2026). Cada divisional tiene una o más series: primera rueda y después
// título / permanencia (o copa de plata). Agregar una divisional = agregar una línea acá.
// torneoFallos es el nombre de la categoría en el buscador de Fallos y Penas.
const M = { torneo: 2, categoria: 1 };
const S20 = { torneo: 20, categoria: 20 };
const R = { torneo: '2B', categoria: 2 };
const PS = { torneo: 32, categoria: 32 };
const M40 = { torneo: 40, categoria: 40 };
const S18 = { torneo: 18, categoria: 18 };
const S16 = { torneo: 16, categoria: 16, duracion: 80 };
const div = (base, id, letra, series, extra = {}) => ({ ...base, id, letra, series, ...extra });
// Sub 18 y Sub 16 no tienen divisionales: una primera fase en series, una segunda rueda y después copas.
// Se bajan y analizan como un solo bloque (así cada equipo conserva su historia de las series), y la web
// muestra una "divisional" por copa: los equipos de esa copa, con todos sus partidos de la temporada.
// copas: serie de la copa -> [letra corta, nombre].
const formativas = (n, series6) => ({
  ...Object.fromEntries([1, 2, 3, 4, 5, ...(series6 ? [6] : [])].map(i => [`${n}-${i}-`, `Serie ${i}`])),
  ...Object.fromEntries([1, 2, 3, 4, 5].map(i => [`${n}-${i}2`, `Serie ${i} (2.ª rueda)`])),
});

export const CATEGORIAS = [
  {
    id: 'mayores', nombre: 'Mayores', torneoFallos: 'MAYORES MASCULINO', divisionales: [
      div(M, 'mayores-a', 'A', { A: 'Primera rueda', AT: 'Título', APD: 'Permanencia' }),
      div(M, 'mayores-b', 'B', { B: 'Primera rueda', BTA: 'Título y ascenso', BPD: 'Permanencia' }),
      div(M, 'mayores-c', 'C', { C: 'Primera rueda', CTA: 'Título y ascenso', CPD: 'Permanencia' }),
      div(M, 'mayores-d', 'D', { D: 'Primera rueda', DTA: 'Título y ascenso', DPD: 'Permanencia' }),
      div(M, 'mayores-e', 'E', { E: 'Primera rueda', ETA: 'Título y ascenso', EPD: 'Permanencia' }),
      div(M, 'mayores-f', 'F', { F: 'Primera rueda', FTA: 'Título y ascenso', FPD: 'Permanencia' }),
      div(M, 'mayores-g', 'G', { G: 'Primera rueda', GTA: 'Título y ascenso', GPD: 'Copa de Plata' }),
    ],
  },
  {
    id: 'sub20', nombre: 'Sub 20', torneoFallos: 'SUB 20 MASCULINO', divisionales: [
      div(S20, 'sub20-a', 'A', { '20A': 'Primera rueda', '20AT': 'Título', '20APD': 'Permanencia' }),
      div(S20, 'sub20-b', 'B', { '20B': 'Primera rueda', '20BTA': 'Título y ascenso', '20BPD': 'Permanencia' }),
      div(S20, 'sub20-c', 'C', { '20C': 'Primera rueda', '20C2': 'Título y ascenso', '20CP': 'Copa de Plata' }),
    ],
  },
  {
    id: 'reserva', nombre: 'Reserva', torneoFallos: 'RESERVA MASCULINO', divisionales: [
      div(R, 'reserva-a', 'A', { RS1: 'Primera rueda', RSAT: 'Título', RSAPD: 'Permanencia' }),
      div(R, 'reserva-b', 'B', { RS2: 'Primera rueda', RSBTA: 'Título y ascenso', RSBPD: 'Permanencia' }),
      div(R, 'reserva-c', 'C', { RS31: 'Primera rueda', RSCTA: 'Título y ascenso', RSCPD: 'Permanencia' }),
      div(R, 'reserva-d', 'D', { RS32: 'Serie 1', RS33: 'Serie 2', RSDTA: 'Título y ascenso', RSDPD: 'Copa de Plata' }),
    ],
  },
  {
    id: 'presenior', nombre: 'Pre Senior', torneoFallos: 'PRE-SENIOR MASCULINO', divisionales: [
      div(PS, 'presenior-a', 'A', { PSA: 'Primera rueda', PSAT: 'Título', PSAPD: 'Permanencia' }),
      div(PS, 'presenior-b', 'B', { PSB: 'Primera rueda', PSBTA: 'Título y ascenso', PSBPD: 'Permanencia' }),
      div(PS, 'presenior-c', 'C', { PSC: 'Primera rueda', PSCTA: 'Título y ascenso', PSCPD: 'Permanencia' }),
      div(PS, 'presenior-d', 'D', { PSD: 'Primera rueda', PSDTA: 'Título y ascenso', PSDPD: 'Permanencia' }),
      div(PS, 'presenior-e', 'E', { PSE1: 'Serie 1', PSE2: 'Serie 2', PSETA: 'Título y ascenso', PSET2: 'Título y ascenso (2.ª rueda)',
        PSEP: 'Copa de Plata', PSEP2: 'Copa de Plata (2.ª rueda)', PSEB: 'Copa de Bronce', PSEB2: 'Copa de Bronce (2.ª rueda)' }),
    ],
  },
  {
    id: 'mas40', nombre: 'Más 40', torneoFallos: 'MÁS 40 MASCULINO', divisionales: [
      div(M40, 'mas40-a', 'A', { M40S1: 'Primera rueda', '40CO': 'Título', '40CP': 'Permanencia' }),
      div(M40, 'mas40-b', 'B', { M40S2: 'Primera rueda', '40CB': 'Título y ascenso', '40CC': 'Permanencia' }),
      div(M40, 'mas40-c', 'C', { '40S22': 'Serie 1', '40S23': 'Serie 2', M40O: 'Copa de Oro',
        M40P: 'Copa de Plata', M40P2: 'Copa de Plata (2.ª rueda)', M40B: 'Copa de Bronce', M40B2: 'Copa de Bronce (2.ª rueda)' }),
    ],
  },
  {
    id: 'sub18', nombre: 'Sub 18', torneoFallos: 'SUB 18 MASCULINO', divisionales: [
      div(S18, 'sub18', 'Todas', { ...formativas(18, true), '18-61': 'Serie 6A (2.ª rueda)', '18-62': 'Serie 6B (2.ª rueda)',
        '18O': 'Copa de Oro', '18P': 'Copa de Plata', '18B': 'Copa de Bronce', '18C': 'Copa Competencia', '18F': 'Copa Confraternidad', '18A': 'Copa Amistad' },
        { nombre: 'Sub 18', copas: { '18O': ['Oro', 'Copa de Oro'], '18P': ['Plata', 'Copa de Plata'], '18B': ['Bronce', 'Copa de Bronce'], '18C': ['Compet.', 'Copa Competencia'], '18F': ['Confrat.', 'Copa Confraternidad'], '18A': ['Amistad', 'Copa Amistad'] } }),
    ],
  },
  {
    id: 'sub16', nombre: 'Sub 16', torneoFallos: 'SUB 16 MASCULINO', divisionales: [
      div(S16, 'sub16', 'Todas', { ...formativas(16, false),
        '16O': 'Copa de Oro', '16P': 'Copa de Plata', '16B': 'Copa de Bronce', '16C': 'Copa Competencia', '16F': 'Copa Confraternidad' },
        { nombre: 'Sub 16', copas: { '16O': ['Oro', 'Copa de Oro'], '16P': ['Plata', 'Copa de Plata'], '16B': ['Bronce', 'Copa de Bronce'], '16C': ['Compet.', 'Copa Competencia'], '16F': ['Confrat.', 'Copa Confraternidad'] } }),
    ],
  },
];

// Lista plana de divisionales, con el nombre completo ("Mayores A").
export const DIVISIONALES = CATEGORIAS.flatMap(c => c.divisionales.map(d => ({ ...d, categoriaId: c.id, nombre: d.nombre || `${c.nombre} ${d.letra}` })));

// Lo que muestra la web: las divisionales, salvo los bloques con copas, que se ven como una por copa
// (id "sub18-oro"). El bloque completo sigue existiendo (oculto) para los enlaces a sus partidos.
export const VISTAS = DIVISIONALES.flatMap(d => !d.copas ? [d] : Object.entries(d.copas).map(([serie, [letra, nombreCopa]]) => ({
  ...d, id: `${d.id}-${letra.toLowerCase().replace(/\W/g, '')}`, letra, nombre: `${d.nombre} ${nombreCopa.replace(/^Copa (de )?/, '')}`, nombreCopa, copa: serie, bloque: d.id, copas: undefined,
})));
