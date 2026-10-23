-- Contador de Planilla LUD: entradas a la página, partidos más vistos y clubes favoritos.
-- Se pega una vez en Supabase (SQL Editor > New query > Run). Se puede volver a correr sin problema.
--
-- La web usa la clave pública (anon) de Supabase, que va a la vista de todos dentro de index.html. Por eso
-- nadie puede leer ni escribir las tablas directo (RLS activado y sin políticas): solo se puede llamar a
-- las cuatro funciones de abajo, que validan lo que reciben.

create table if not exists vistas (
  clave text primary key check (char_length(clave) <= 160),
  n bigint not null default 0,
  titulo text check (char_length(titulo) <= 120),
  div text check (char_length(div) <= 40),
  enlace text check (char_length(enlace) <= 200),
  actualizado timestamptz not null default now()
);
create table if not exists favoritos (
  dispositivo uuid primary key,
  club text not null check (char_length(club) <= 80),
  nombre text check (char_length(nombre) <= 80),
  actualizado timestamptz not null default now()
);
alter table vistas enable row level security;
alter table favoritos enable row level security;

-- Una entrada: cada vez que se abre la página.
create or replace function entrada() returns void
language sql security definer set search_path = public as $$
  insert into vistas (clave, n) values ('entradas', 1)
  on conflict (clave) do update set n = vistas.n + 1, actualizado = now();
$$;

-- Una vista de un partido (su previa o su página después de jugado). Clave: p:<divisional>:<local>~<visitante>~<día>.
create or replace function ver_partido(p_clave text, p_titulo text, p_div text, p_enlace text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_clave is null or p_clave !~ '^p:[a-z0-9-]{2,30}:.{5,120}$' then return; end if;
  insert into vistas (clave, n, titulo, div, enlace)
  values (p_clave, 1, left(p_titulo, 120), left(p_div, 40), left(p_enlace, 200))
  on conflict (clave) do update set n = vistas.n + 1, titulo = excluded.titulo, div = excluded.div,
    enlace = excluded.enlace, actualizado = now();
end $$;

-- El club que cada celular o compu tiene en "Mi equipo" (uno por dispositivo; club vacío = lo sacó).
create or replace function elegir_club(p_dispositivo uuid, p_club text, p_nombre text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_dispositivo is null then return; end if;
  if p_club is null or p_club = '' then delete from favoritos where dispositivo = p_dispositivo; return; end if;
  insert into favoritos (dispositivo, club, nombre) values (p_dispositivo, left(p_club, 80), left(p_nombre, 80))
  on conflict (dispositivo) do update set club = excluded.club, nombre = excluded.nombre, actualizado = now();
end $$;

-- Lo que muestra la barra de arriba: entradas, los 3 partidos más vistos y los 3 clubes más elegidos.
create or replace function resumen() returns json
language sql security definer set search_path = public stable as $$
  select json_build_object(
    'entradas', coalesce((select n from vistas where clave = 'entradas'), 0),
    'partidos', coalesce((select json_agg(x) from (
      select titulo, div, enlace, n from vistas where clave like 'p:%' order by n desc, actualizado desc limit 3) x), '[]'::json),
    'clubes', coalesce((select json_agg(x) from (
      select club, max(nombre) as nombre, count(*) as n from favoritos group by club order by count(*) desc, club limit 3) x), '[]'::json)
  );
$$;

revoke all on function entrada(), ver_partido(text, text, text, text), elegir_club(uuid, text, text), resumen() from public;
grant execute on function entrada(), ver_partido(text, text, text, text), elegir_club(uuid, text, text), resumen() to anon, authenticated;
