#!/bin/bash
# Temporal: baja la lista de equipos de lud-stats (con logo_url) y cada logo.
A=https://lud-backend-ld7d.onrender.com/api
mkdir -p tmp/ls/logos && cd tmp/ls
for i in 1 2 3 4; do curl -sL --max-time 120 "$A/teams/?ordering=name&limit=500" -o teams.json && python3 -c "import json;json.load(open('teams.json'))" && break; sleep 20; done
python3 - <<'PY'
import json, urllib.request, os, re, hashlib
d = json.load(open('teams.json'))
equipos = d['results'] if isinstance(d, dict) and 'results' in d else d
print('equipos:', len(equipos), 'claves:', list(equipos[0].keys()))
ok = 0
for e in equipos:
    u = e.get('logo_url')
    if not u: continue
    ext = os.path.splitext(u.split('?')[0])[1].lower() or '.png'
    nombre = f"{e.get('id')}{ext}"
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'lud-bajas'})
        open('logos/' + nombre, 'wb').write(urllib.request.urlopen(req, timeout=30).read()); ok += 1
    except Exception as ex:
        print('fallo', u, ex)
print('logos bajados:', ok)
PY
ls logos | head; du -sh logos
# v2
