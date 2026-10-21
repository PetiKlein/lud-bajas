#!/bin/bash
# Temporal: los tres logos con Ñ en el nombre (hay que codificar la URL).
mkdir -p tmp/ls/logos && cd tmp/ls
python3 - <<'PY'
import json, urllib.request, urllib.parse, unicodedata
for raw, id_, u in json.load(open('../faltan.json')):
    ok = False
    for forma in ('NFC', 'NFD'):
        uu = urllib.parse.quote(unicodedata.normalize(forma, u), safe=':/')
        try:
            data = urllib.request.urlopen(urllib.request.Request(uu, headers={'User-Agent': 'lud-bajas'}), timeout=30).read()
            if data:
                open(f'logos/{id_}.png', 'wb').write(data); print('ok', raw, forma, len(data)); ok = True; break
        except Exception as e:
            print('fallo', raw, forma, e)
    if not ok: print('NO', raw)
PY
