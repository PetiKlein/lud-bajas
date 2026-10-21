#!/bin/bash
# Temporal: probar la API de Fallos y Penas.
A=https://ligauniversitaria.org.uy/fallosypenas/api.php
mkdir -p tmp/fp && cd tmp/fp
g() { curl -sG --max-time 120 "$A" "$@"; }
g --data-urlencode action=cargarDeportes > deportes.json
DEP=$(python3 -c "import json;d=json.load(open('deportes.json'));print([x['nombre'] for x in d if 'TBOL' in x['nombre'].upper() and 'SAL' not in x['nombre'].upper() and 'PLAYA' not in x['nombre'].upper()][0])")
echo "deporte: $DEP"
g --data-urlencode action=cargarTorneos --data-urlencode "deporte=$DEP" > torneos.json
python3 - "$DEP" <<'PY'
import json,subprocess,sys,urllib.parse
dep=sys.argv[1]
A='https://ligauniversitaria.org.uy/fallosypenas/api.php'
def g(**k):
    u=A+'?'+urllib.parse.urlencode(k, quote_via=urllib.parse.quote)
    out=subprocess.run(['curl','-sL','--max-time','180',u],capture_output=True,text=True).stdout.strip()
    try: return json.loads(out)
    except Exception: return {'_raw': out[:500]}
tor=json.load(open('torneos.json')); print('torneos', [t['nombre'] for t in tor])
res={}
for t in [x['nombre'] for x in tor]:
    fechas=g(action='cargarFechas',deporte=dep,torneo=t)
    fs=[f['fecha_fallo'] for f in fechas] if isinstance(fechas,list) else []
    res[t]={'fechas':fs}
    print(t, len(fs), fs[:3], fs[-3:])
json.dump(res,open('fechas.json','w'),indent=1)
# muestras con la primera fecha (desde el comienzo) en Mayores y Sub 20
for t in [x['nombre'] for x in tor]:
    if not any(k in t.upper() for k in ('MAYORES','20','RESERVA')): continue
    fs=res[t]['fechas']
    if not fs: continue
    desde=sorted(fs)[0]
    for acc in ('cargarPartidos','cargarFallos','cargarFallosPersonas','cargarAmonestaciones'):
        d=g(action=acc,deporte=dep,torneo=t,fecha=desde)
        n=len(d) if isinstance(d,list) else d
        json.dump(d,open(f"{acc}-{t.replace(' ','_').replace('/','-')}.json",'w'),ensure_ascii=False,indent=1)
        print(t, acc, 'desde', desde, '->', n if isinstance(n,int) else str(n)[:200])
PY
ls -la
