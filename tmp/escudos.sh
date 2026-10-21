#!/bin/bash
# Temporal: baja lud-stats y sus scripts para ver de dónde salen los escudos.
set -x
B=https://lud-stats.vercel.app
mkdir -p tmp/ls && cd tmp/ls
curl -sL "$B/?phase=1" -o index.html
grep -oE '(src|href)="[^"]+"' index.html | sed -E 's/^(src|href)="//;s/"$//' | sort -u > recursos.txt
while read r; do
  case "$r" in http*) u="$r";; /*) u="$B$r";; *) u="$B/$r";; esac
  case "$r" in *.js|*.json|*.css|*.js\?*) f="$(echo "$r" | tr '/?' '__')"; curl -sL "$u" -o "$f";; esac
done < recursos.txt
ls -la
