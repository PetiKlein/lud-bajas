#!/bin/bash
# Temporal: ver cómo arma la Liga el buscador de Fallos y Penas.
B=https://ligauniversitaria.org.uy
mkdir -p tmp/fp && cd tmp/fp
curl -sL "$B/fallos-y-penas-2/" -o fallos.html
grep -oiE '<iframe[^>]+>' fallos.html > iframes.txt
grep -oiE '(src|href|data-src)="[^"]*(penas|fallo|sancion|amonest|laliga|dnsalias|api)[^"]*"' fallos.html | sort -u > links.txt
grep -oiE '<script[^>]*src="[^"]+"' fallos.html | sort -u > scripts.txt
# todo lo que esté en el contenido principal del post (forms, selects, tablas)
python3 - <<'PY'
import re
h=open('fallos.html',encoding='utf-8',errors='ignore').read()
i=h.find('RESOLUCIONES Y FALLOS'); j=h.find('Tipo de Sanci')
open('trozo.html','w').write(h[max(0,j-4000):j+6000] if j>0 else h[i-3000:i+3000])
for pat in [r'<form[^>]*>', r'<select[^>]*>', r'action=[\w%]+', r'api\.php[^"\' ]*', r'\.php\?[^"\' ]*']:
    print(pat, sorted(set(re.findall(pat,h)))[:20])
PY
for u in $(grep -oE 'src="[^"]+"' iframes.txt | sed 's/src="//;s/"$//'); do
  case "$u" in http*) ;; /*) u="$B$u";; esac
  n=$(echo "$u" | md5sum | cut -c1-6); curl -sL "$u" -o "iframe-$n.html"; echo "$u -> iframe-$n.html" >> iframes.txt
  for s in $(grep -oE 'src="[^"]+\.js[^"]*"' "iframe-$n.html" | sed 's/src="//;s/"$//'); do
    case "$s" in http*) su="$s";; /*) su="$(echo $u | grep -oE 'https?://[^/]+')$s";; *) su="$(dirname $u)/$s";; esac
    curl -sL "$su" -o "js-$(basename ${s%%\?*})"; echo "$su" >> iframes.txt
  done
done
ls -la
