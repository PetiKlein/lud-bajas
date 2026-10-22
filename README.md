# LUD Bajas

Minutos jugados y posibles bajas de la Liga Universitaria de Deportes (Uruguay), sacados de las
planillas oficiales. Sigue Mayores (A a G), Sub 20 (A a C) y Reserva (A a D), con todas sus
etapas: primera rueda, título y ascenso, permanencia o copa de plata.

Página: https://petiklein.github.io/lud-bajas/

## Diseño

Tema "pizarra", el mismo de la página de presentación: vestuario de noche, pizarra táctica y tiza.
Fondo verde pizarra (siempre oscuro), texto color tiza y un solo acento amarillo marcador, usado poco
(botón principal, sección activa, Mi equipo). Los estados van en tiza de color (rojo = nivel alto,
naranja = medio) y las barras de minutos son trazos de tiza. Tipografía Big Shoulders Display (títulos y
cifras, en mayúscula), Instrument Sans (texto) e IBM Plex Mono (etiquetas chicas, como una planilla).
La portada tiene una cancha de tiza de fondo y toda la página una capa fija de grano. Aparición suave al
hacer scroll (se apaga si el teléfono pide reducir movimiento).
Todos los colores, radios, sombras y espacios son variables al principio del `<style>` de `index.html`.

En el celular hay barra de navegación abajo (Inicio, Bajas, Previas, Equipos y Más) y la divisional se
elige desde el botón del encabezado. En la compu las secciones van en una fila arriba. `og.png` es la
imagen que aparece al compartir el link por WhatsApp.

## Qué muestra

- **Inicio:** la próxima fecha de un vistazo: cifras clave, lo más picante de todas las divisionales
  (cruces entre los cuatro de arriba, y entre los cuatro de abajo de la permanencia, la pelea por no
  descender, de Mayores, Sub 20 y Reserva juntas, ordenados por "picantez": suman las posiciones, 1° = 4
  hasta 4° = 1 por equipo arriba, y último = 4 hasta cuarto desde abajo = 1 en el descenso, y la divisional,
  A = 6 hasta G = 0; la copa de plata no cuenta porque no tiene descenso), partidos con la forma de cada
  equipo y las bajas más importantes. En Inicio, Previas y Bajas los partidos van ordenados por importancia:
  primero el grupo de arriba (título / título y ascenso), después la copa de plata y la permanencia, y dentro
  de cada grupo los cruces entre los mejor ubicados. Cada partido muestra la posición de los dos equipos.
- **Bajas:** para cada partido de la próxima fecha, los jugadores de cada equipo que pueden faltar:
  expulsados, suspendidos probables, titulares habituales que no jugaron el último partido,
  lesiones probables (salió temprano y no jugó el siguiente) y titulares que salieron antes del entretiempo.
- **Partidos:** arriba, la próxima fecha con la previa de cada partido; abajo, los resultados de la temporada.
  La previa de cada partido trae el once probable de cada equipo (titulares de los
  últimos 5 partidos, sin suspendidos, con las dudas marcadas y un solo arquero), las bajas, cómo vienen (últimos 5),
  el cara a cara de la temporada entre esos clubes en todas las categorías, en qué minutos hacen y
  reciben goles, y los goleadores en racha. Se puede compartir por WhatsApp.
- **Mi equipo:** elegís tu club una vez (queda guardado en el navegador) y la web abre directo en lo
  tuyo: próximo partido, bajas y suspendidos de todos los equipos del club, en todas las categorías.
- **Equipos:** plantel con partidos, titularidades, minutos, goles y los últimos 5 partidos.
- **Jugadores:** ficha de cada uno, partido a partido (cuándo entró, cuándo salió, reingresos y goles).
- **Partidos:** minuto a minuto y formaciones con los minutos de cada jugador.
- **Rankings:** más minutos, goleadores, minutos por gol, los que siempre están en cancha, los que más
  entran desde el banco, expulsiones y equipos que más rotan.
- **Sanciones:** suspensiones automáticas y fallos del Tribunal (de Fallos y Penas), con cuántas fechas
  le quedarían a cada uno.

En Bajas, cada partido tiene un botón para compartir las bajas por WhatsApp (o con el menú de compartir
del celular), y otro para mandar toda la fecha.

Son pistas sacadas de las planillas, no partes médicos: un titular que no juega puede estar
lesionado, de viaje o de exámenes. Las suspensiones se confirman en Fallos y Penas de la Liga
(se publican los jueves a las 21 h).

## Cómo funciona

- `scripts/detalle.mjs` baja la planilla de cada partido jugado a `planillas/<categoria>/<ID>.json`
  desde la API de la Liga (`resultados/api.php?action=...&id=<ID>`) y el fixture de los próximos
  partidos. Solo baja lo que falta; un partido se vuelve a bajar durante 4 días por si la Liga
  corrige la planilla. Con `REBAJAR=1` baja todo de nuevo.
- `scripts/sanciones.mjs` baja las sanciones de la temporada del buscador de Fallos y Penas
  (`ligauniversitaria.org.uy/fallosypenas/api.php`) a `planillas/_sanciones/<categoria>.json`.
  Cada sanción trae carné, serie y número de partido, así que se cruza con las planillas.
- `scripts/analizar.mjs` revisa cada planilla, calcula minutos (con reingresos) y alertas, y escribe
  `data/<categoria>.json`, que es lo que lee `index.html`. Al final llama a `scripts/picantes.mjs`, que arma
  `data/posiciones.json` (la tabla de cada etapa, sacada de la tabla oficial de la Liga:
  `posiciones/api.php?action=cargarPosiciones`) y `data/picantes.json` (los partidos más picantes de todas
  las divisionales, para la portada). Se puede correr solo con `node scripts/picantes.mjs`.
  La tabla oficial importa: incluye los partidos que da el Tribunal, los W.O. y los formatos especiales
  (copa de plata, Reserva D). Si la Liga no responde, se calcula como el reglamento (art. 3): en la segunda
  etapa cada equipo conserva lo de la primera rueda (puntos, goles y partidos jugados).
- `scripts/categorias.mjs` define qué categorías y divisionales se siguen y qué series tiene cada una
  (códigos de `ligauniversitaria.org.uy/config/config.json` y de las páginas de estadísticas de la Liga).
  Para sumar una divisional alcanza con agregar una línea ahí: la web la muestra sola.
  `scripts/comun.mjs` tiene la temporada y los nombres cortos.
- El mismo club juega con nombres distintos según la categoría ("Elf Blanco", "Old Christians Azul"...):
  `clubDe()` en `analizar.mjs` los junta, con una lista de alias para los casos raros.
- Los datos quedan uno por divisional (`data/mayores-a.json`, `data/reserva-d.json`, ...) y
  `data/indice.json` lista las disponibles. `data/clubes.json` tiene el resumen por club para "Mi equipo".
- Variables útiles al correr a mano: `SOLO=mayores-b,reserva-a` (solo esas divisionales),
  `REBAJAR=1` (bajar todo de nuevo), `MAX_MIN=60` (cortar la bajada a los 60 minutos y seguir en la próxima).
- GitHub Actions (`.github/workflows/actualizar.yml`) corre todo solo el domingo a las 18:35, de lunes
  a jueves a las 20:35 y el jueves a las 22:35, después de que salen los fallos (hora de Montevideo). También se puede correr a mano: Actions > "Actualizar
  planillas y bajas" > Run workflow.

## Arqueros

La planilla no trae posiciones. El arquero se deduce (`arqueros()` en `analizar.mjs`): arranca con la 1 o
la 12 en al menos 6 de cada 10 partidos que es titular (y 2 como mínimo), casi nunca sale reemplazado antes
del 80' y no hace goles. Se identifica en unos 190 de los 230 equipos; en el resto nadie usa la 1 o la 12
de forma fija y la web lo aclara. El once probable lleva siempre un solo arquero (el más reciente).

## Lo que hay que saber de las planillas de la Liga

- En la LUD hay reingreso: un jugador puede salir y volver. Los minutos lo tienen en cuenta.
- No hay acumulación de amarillas y la Liga no carga los amonestados.
- Los expulsados vienen sin minuto, así que sus minutos pueden quedar de más.
- El campo `EnContra` no indica gol en contra. Un gol en contra viene con el carné de un jugador rival.
- A veces la planilla hace salir a alguien que ya había salido: se toma como salida de quien había
  entrado por él. Lo que no tiene arreglo obvio se descarta del cálculo y queda anotado.

## Cómo se cuentan las fechas de suspensión

La Liga publica cuántas fechas le dieron a cada uno (`F:2` = 2 fechas). Las cumplidas se cuentan con los
partidos que jugó su equipo, en la divisional de la expulsión, después de ese partido. Es aproximado: si
la Liga cuenta partidos de otra categoría, puede variar.

## Temporada nueva

Cambiar `TEMPORADA` e `INICIO_TEMPORADA` en `scripts/comun.mjs` (y los códigos de serie en `categorias.mjs` si cambian).
