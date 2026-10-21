// Categorías y divisionales que sigue el robot. Los códigos (torneo, categoría y serie) salen de
// https://ligauniversitaria.org.uy/config/config.json y de las páginas de estadísticas de la Liga
// (temporada 113 = 2026). Cada divisional tiene una o más series: primera rueda y después
// título / permanencia (o copa de plata). Agregar una divisional = agregar una línea acá.
// torneoFallos es el nombre de la categoría en el buscador de Fallos y Penas.
const M = { torneo: 2, categoria: 1 };
const S20 = { torneo: 20, categoria: 20 };
const R = { torneo: '2B', categoria: 2 };
const div = (base, id, letra, series) => ({ ...base, id, letra, series });

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
];

// Lista plana de divisionales, con el nombre completo ("Mayores A").
export const DIVISIONALES = CATEGORIAS.flatMap(c => c.divisionales.map(d => ({ ...d, categoriaId: c.id, nombre: `${c.nombre} ${d.letra}` })));
