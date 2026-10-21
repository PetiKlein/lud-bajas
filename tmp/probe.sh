#!/bin/bash
B=https://ligauniversitaria.org.uy/fallosypenas
mkdir -p tmp/fp && cd tmp/fp
curl -sL "$B/script.js" -o fp-script.js
wc -c fp-script.js
