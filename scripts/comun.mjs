// Cosas compartidas: temporada actual y nombres cortos de los equipos.
export const TEMPORADA = 113; // temporada 2026 en el sistema de la Liga Universitaria

// Nombres como los muestra la Liga -> como los mostramos acá.
export const NOMBRES = {
  'E.L.F.': 'ELF',
  'TAPE': 'TAPE',
  'OLD BOYS CLUB': 'Old Boys',
  'OLD WOODLANDS CLUB': 'Old Woodlands',
  'CARRASCO POLO CLUB': 'Carrasco Polo',
  'TENIS EL PINAR': 'Tenis El Pinar',
  'URUNDAY UNIVERSITARIO': 'Urunday',
  'NACIONAL UNIVERSITARIO': 'Nacional U.',
  'SANTA ELENA LAGOMAR': 'Santa Elena',
  'HEBRAICA UNIVERSITARIO': 'Hebraica y Macabi',
  'CARRASCO LAWN TENNIS': 'Carrasco Lawn Tennis',
  'OLD IVY': 'Old Ivy',
  'JUAN XXIII': 'Juan XXIII',
  'CLUB SEMINARIO': 'Seminario',
  'PLAYA HONDA UNIVERSITARIO': 'Playa Honda',
  'OLD CHRISTIANS CLUB': 'Old Christians',
  'OLD BRENDANS CLUB': 'Old Brendans',
  'NAUTICO CARRASCO Y PUNTA GORDA': 'Náutico',
  'SAN PABLO UNIVERSITARIO': 'San Pablo',
  'MATURANA UNIVERSITARIO': 'Maturana',
};

const titleCase = s => s.toLowerCase().replace(/(^|[\s(.-])([a-záéíóúñ])/g, (m, a, b) => a + b.toUpperCase());
export const corto = n => NOMBRES[n.trim()] || titleCase(n.trim());
