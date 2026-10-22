# Genera los íconos y las pantallas de arranque de la app (para "Agregar a inicio").
# Uso: python3 herramientas/portada.py (necesita playwright). Después conviene comprimir los PNG.
from playwright.sync_api import sync_playwright
import os
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app') + '/'
import base64
d64=lambda f,t: f"data:{t};base64,"+base64.b64encode(open(f,'rb').read()).decode()
BS=d64('/mnt/skills/examples/canvas-design/canvas-fonts/BigShoulders-Bold.ttf','font/ttf')
INTER=d64('/usr/share/fonts/opentype/inter/Inter-Medium.otf','font/otf')
CSS=f"""@font-face{{font-family:BS;src:url({BS})}}@font-face{{font-family:IN;src:url({INTER})}}
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:100%;height:100%;overflow:hidden}}"""
def icono(px, borde=True, escala=1.0):
    # escala < 1: todo más chico, para la zona segura del ícono "maskable" de Android
    # Las mismas proporciones que el logo de la página (viewBox 64: r 17, trazo 5, guiones 9 y 6).
    k=px/64*escala*1.12; r=17*k; sw=5*k
    return f"""<svg width="{px}" height="{px}" viewBox="0 0 {px} {px}" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#22322b"/><stop offset="1" stop-color="#141d19"/></radialGradient></defs>
  <rect width="{px}" height="{px}" fill="url(#g)"/>
  <line x1="0" y1="{px/2}" x2="{px}" y2="{px/2}" stroke="#ece8dc" stroke-opacity=".10" stroke-width="{px*0.012}"/>
  <circle cx="{px/2}" cy="{px/2}" r="{r}" fill="#141d19"/>
  <circle cx="{px/2}" cy="{px/2}" r="{r}" fill="none" stroke="#f2c84b" stroke-width="{sw}" stroke-dasharray="{9*k} {6*k}" stroke-linecap="round" transform="rotate(-90 {px/2} {px/2})"/>
  <text x="{px/2}" y="{px/2}" text-anchor="middle" dominant-baseline="central" font-family="BS" font-size="{px*0.165*escala}" fill="#ece8dc" letter-spacing="{px*0.004}">LUD</text>
</svg>"""
def render(pg, w, h, body, path):
    pg.set_viewport_size({'width':w,'height':h})
    pg.set_content(f"<!doctype html><html><head><style>{CSS}</style></head><body>{body}</body></html>")
    pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(150)
    pg.screenshot(path=path, omit_background=False)
def splash(w, h):
    # w,h en píxeles CSS; se renderiza con device_scale_factor
    t=min(w,h)
    return f"""<div style="width:{w}px;height:{h}px;background:radial-gradient(120% 70% at 50% 35%,#1c2a24 0%,#121a17 60%,#0e1512 100%);position:relative;font-family:IN;color:#ece8dc">
  <svg style="position:absolute;inset:0" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
    <g fill="none" stroke="#ece8dc" stroke-opacity=".07" stroke-width="1.5">
      <rect x="{w*0.08}" y="{h*0.05}" width="{w*0.84}" height="{h*0.90}" rx="2"/>
      <line x1="{w*0.08}" y1="{h/2}" x2="{w*0.92}" y2="{h/2}"/>
      <circle cx="{w/2}" cy="{h/2}" r="{w*0.2}"/>
      <rect x="{w*0.28}" y="{h*0.05}" width="{w*0.44}" height="{h*0.11}"/>
      <rect x="{w*0.28}" y="{h*0.84}" width="{w*0.44}" height="{h*0.11}"/>
    </g>
  </svg>
  <div style="position:absolute;left:0;right:0;top:{h*0.5 - t*0.30}px;display:flex;flex-direction:column;align-items:center;gap:{t*0.05}px">
    <div style="width:{t*0.30}px;height:{t*0.30}px;border-radius:{t*0.07}px;overflow:hidden;box-shadow:0 0 0 1px rgba(236,232,220,.14),0 {t*0.03}px {t*0.08}px rgba(0,0,0,.45)">{icono(int(t*0.30))}</div>
    <div style="font-family:BS;font-size:{t*0.14}px;line-height:.9;letter-spacing:.01em;text-transform:uppercase">Planilla <span style="color:#f2c84b">LUD</span></div>
    <div style="font-size:{t*0.042}px;color:rgba(236,232,220,.68);letter-spacing:.01em">Bajas · Previas · Once probable</div>
  </div>
  <div style="position:absolute;left:0;right:0;bottom:{h*0.06}px;text-align:center;font-size:{t*0.032}px;color:rgba(236,232,220,.42);letter-spacing:.14em;text-transform:uppercase">Liga Universitaria de Deportes</div>
</div>"""
ESCUDOS=['elf','old-christians','nacional-u','carrasco-polo','seminario','old-boys']
def og():
    esc=''.join(f'<img src="{d64(os.path.join(OUT,"..","escudos",e+".png"),"image/png")}" style="height:64px;width:64px;object-fit:contain;background:rgba(236,232,220,.06);border:1px solid rgba(236,232,220,.12);border-radius:14px;padding:8px">' for e in ESCUDOS if os.path.exists(os.path.join(OUT,"..","escudos",e+".png")))
    cats=''.join(f'<span style="border:1px solid rgba(236,232,220,.18);border-radius:999px;padding:8px 16px">{c}</span>' for c in ['Mayores','Sub 20','Reserva','Pre Senior','Más 40','Sub 18','Sub 16'])
    return f'''<div style="width:1200px;height:630px;position:relative;overflow:hidden;font-family:IN;color:#ece8dc;background:radial-gradient(90% 120% at 75% 30%,#1f2e27 0%,#121a17 55%,#0e1512 100%)">
  <svg style="position:absolute;inset:0" width="1200" height="630"><g fill="none" stroke="#ece8dc" stroke-opacity=".07" stroke-width="2">
    <rect x="40" y="40" width="1120" height="550" rx="3"/><line x1="600" y1="40" x2="600" y2="590"/><circle cx="600" cy="315" r="95"/>
    <rect x="40" y="185" width="120" height="260"/><rect x="1040" y="185" width="120" height="260"/></g></svg>
  <div style="position:absolute;left:84px;top:78px;display:flex;align-items:center;gap:22px">
    <div style="width:96px;height:96px;border-radius:22px;overflow:hidden;box-shadow:0 0 0 1px rgba(236,232,220,.16)">{icono(96)}</div>
    <div style="font-family:BS;font-size:92px;line-height:.9;text-transform:uppercase;letter-spacing:.01em">Planilla <span style="color:#f2c84b">LUD</span></div>
  </div>
  <div style="position:absolute;left:84px;top:232px;font-size:17px;letter-spacing:.2em;text-transform:uppercase;color:#f2c84b">Liga Universitaria de Deportes</div>
  <div style="position:absolute;left:84px;top:268px;width:1000px;font-family:BS;font-size:66px;line-height:1;text-transform:uppercase">Bajas, previas y once probable<br>de cada partido</div>
  <div style="position:absolute;left:84px;bottom:76px;display:flex;flex-wrap:wrap;gap:10px;width:640px;font-size:19px;color:rgba(236,232,220,.85)">{cats}</div>
  <div style="position:absolute;right:84px;bottom:76px;display:flex;gap:10px">{esc}</div>
</div>'''

# Pantallas de iPhone (puntos CSS, escala)
IPHONES=[(440,956,3),(402,874,3),(430,932,3),(393,852,3),(428,926,3),(390,844,3),(375,812,3),(414,896,3),(414,896,2),(414,736,3),(375,667,2),(320,568,2)]
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page()
    render(pg,1200,630,og(),OUT + '../og.png')
    for px in (192,512): render(pg,px,px,icono(px),OUT+f'icono-{px}.png')
    render(pg,512,512,icono(512,escala=0.78),OUT+'icono-maskable-512.png')
    render(pg,180,180,icono(180),OUT + '../apple-touch-icon.png')
    for w,h,s in IPHONES:
        ctx=b.new_context(device_scale_factor=s, viewport={'width':w,'height':h}); q=ctx.new_page()
        render(q,w,h,splash(w,h),OUT+f'arranque-{w*s}x{h*s}.png'); ctx.close()
    ctx=b.new_context(device_scale_factor=1); q=ctx.new_page()
    render(q,1080,2160,splash(1080,2160),'/tmp/splash_preview.png')
    b.close()
print(sorted(os.listdir(OUT)))
