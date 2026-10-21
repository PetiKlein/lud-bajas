# LUD Bajas

Minutos jugados y posibles bajas de la Liga Universitaria de Deportes (Uruguay), sacados de las
planillas oficiales. Sigue Mayores (A a G), Sub 20 (A a C) y Reserva (A a D), con todas sus
etapas: primera rueda, título y ascenso, permanencia o copa de plata.

Página: https://petiklein.github.io/lud-bajas/

## Qué muestra

- **Bajas:** para cada partido de la próxima fecha, los jugadores de cada equipo que pueden faltar:
  expulsados, suspendidos probables, titulares habituales que no jugaron el último partido,
  lesiones probables (salió temprano y no jugó el siguiente) y titulares que salieron antes del entretiempo.
- **Equipos:** plantel con partidos, titularidades, minutos, goles y los últimos 5 partidos.
- **Jugadores:** ficha de cada uno, partido a partido (cuándo entró, cuándo salió, reingresos y goles).
- **Partidos:** minuto a minuto y formaciones con los minutos de cada jugador.
- **Planillas:** lo que no cierra en las planillas de la Liga y cómo se resolvió.

Son pistas sacadas de las planillas, no partes médicos: un titular que no juega puede estar
lesionado, de viaje o de exámenes. Las suspensiones se confirman en Fallos y Penas de la Liga
(se publican los jueves a las 21 h).

## Cómo funciona

- `scripts/detalle.mjs` baja la planilla de cada partido jugado a `planillas/<categoria>/<ID>.json`
  desde la API de la Liga (`resultados/api.php?action=...&id=<ID>`) y el fixture de los próximos
  partidos. Solo baja lo que falta; un partido se vuelve a bajar durante 4 días por si la Liga
  corrige la planilla. Con `REBAJAR=1` baja todo de nuevo.
- `scripts/analizar.mjs` revisa cada planilla, calcula minutos (con reingresos) y alertas, y escribe
  `data/<categoria>.json`, que es lo que lee `index.html`.
- `scripts/categorias.mjs` define qué categorías y divisionales se siguen y qué series tiene cada una
  (códigos de `ligauniversitaria.org.uy/config/config.json` y de las páginas de estadísticas de la Liga).
  Para sumar una divisional alcanza con agregar una línea ahí: la web la muestra sola.
  `scripts/comun.mjs` tiene la temporada y los nombres cortos.
- Los datos quedan uno por divisional (`data/mayores-a.json`, `data/reserva-d.json`, ...) y
  `data/indice.json` lista las disponibles.
- Variables útiles al correr a mano: `SOLO=mayores-b,reserva-a` (solo esas divisionales),
  `REBAJAR=1` (bajar todo de nuevo), `MAX_MIN=60` (cortar la bajada a los 60 minutos y seguir en la próxima).
- GitHub Actions (`.github/workflows/actualizar.yml`) corre todo solo el domingo a las 18:35 y de lunes
  a jueves a las 20:35 (hora de Montevideo). También se puede correr a mano: Actions > "Actualizar
  planillas y bajas" > Run workflow.

## Lo que hay que saber de las planillas de la Liga

- En la LUD hay reingreso: un jugador puede salir y volver. Los minutos lo tienen en cuenta.
- No hay acumulación de amarillas y la Liga no carga los amonestados.
- Los expulsados vienen sin minuto, así que sus minutos pueden quedar de más.
- El campo `EnContra` no indica gol en contra. Un gol en contra viene con el carné de un jugador rival.
- A veces la planilla hace salir a alguien que ya había salido: se toma como salida de quien había
  entrado por él. Lo que no tiene arreglo obvio se descarta del cálculo y queda anotado.

## Temporada nueva

Cambiar `TEMPORADA` en `scripts/comun.mjs` (y los códigos de serie en `categorias.mjs` si cambian).
