var e=e=>String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function t(t){let n=e(t.title||`Проект`),r=e((t.description||`Сделано с love для Minecraft`).slice(0,140)),i=e(t.display||t.user||`автор`);return`<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><title>Cubenorix — ${n}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; margin: 0; }
  body { height: 100vh; display: grid; place-items: center; background: #0a0a12; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; }
  .banner {
    position: relative; width: min(560px, 92vw); padding: 34px 38px; border-radius: 24px;
    border: 2px solid rgba(var(--acc), .55); overflow: hidden; cursor: pointer; text-decoration: none;
    display: block; background: #101018;
  }
  .beam { position: absolute; inset: -60%; background: conic-gradient(from 0deg, transparent 0 70%, rgba(var(--acc), .28) 85%, transparent 100%); animation: spin 5s linear infinite; }
  .inner { position: relative; display: flex; align-items: center; gap: 20px; }
  .cube { width: 64px; height: 64px; animation: pop 2.4s ease-in-out infinite; flex-shrink: 0; }
  h1 { color: #fff; font-size: 24px; letter-spacing: .3px; }
  .desc { color: #b9c3d6; font-size: 14px; margin-top: 5px; }
  .by { color: rgba(var(--acc-soft), .95); font-size: 12px; font-weight: 700; margin-top: 10px; letter-spacing: .4px; }
  .cta { margin-left: auto; background: rgb(var(--acc)); color: #fff; font-weight: 800; padding: 12px 20px; border-radius: 14px; font-size: 15px; animation: pulse 1.6s ease-in-out infinite; flex-shrink: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse { 50% { transform: scale(1.07); box-shadow: 0 0 26px rgba(var(--acc), .65); } }
  @keyframes pop { 50% { transform: rotate(-6deg) scale(1.1); } }
</style></head>
<body>
<a class="banner" style="--acc: 255 122 0; --acc-soft: 255 190 120" href="${e(`https://cubenorix.github.io/#/project/`+encodeURIComponent(String(t.title||``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)))}" target="_blank" rel="noopener">
  <span class="beam"></span>
  <span class="inner">
    <svg class="cube" viewBox="0 0 100 117"><g fill="none" stroke="#FF6B00" stroke-width="6.4" stroke-linejoin="round" stroke-linecap="round"><path d="M49.9 3.4 L3.3 29.3 L3.3 88.2 L49.9 113.8 L96.6 88.2 L96.6 29.3 Z"/><path d="M6.7 32.4 C 33 33.6, 45.5 51.5, 76.4 98.9"/><path d="M93.2 32.4 C 67 33.6, 54.5 51.5, 23.5 98.9"/></g></svg>
    <span style="display:block; min-width:0">
      <h1>${n}</h1>
      <span class="desc" style="display:block">${r}</span>
      <span class="by" style="display:block">от ${i} · Cubenorix — центр твоего Minecraft</span>
    </span>
    <span class="cta">Смотреть →</span>
  </span>
</a>
</body></html>`}export{t as buildPromoHtml};