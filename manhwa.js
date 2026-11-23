// Monta a página a partir de window.PJ (conteúdo) e PJ.L (rótulos do idioma).
const D = PJ, L = PJ.L, P = D.projetos, E = D.exp, F = D.formacao, c = D.contato;
const pad = n => String(n).padStart(2, '0');
const bars = (n, t = 10) => `<span class="bars" role="img" aria-label="${n} ${L.de} ${t}">${Array.from({length: t}, (_, i) => `<i${i < n ? ' class="on"' : ''}></i>`).join('')}</span>`;
const flow = f => `<ol class="flow">${f.map(s => `<li>${s}</li>`).join('')}</ol>`;

// Céu de Fortaleza em pixel: estrelas, lua, prédios e mar. Semente fixa, sempre igual.
function sky() {
  let r = 20251;
  const rnd = () => (r = (r * 16807) % 2147483647) / 2147483647;
  const W = 180, H = 230, base = 186;
  let s = '';
  for (let i = 0; i < 80; i++) {
    const x = Math.floor(rnd() * W), y = Math.floor(rnd() * 120);
    s += `<rect x="${x}" y="${y}" width="1" height="1" fill="#cfd8ff" opacity="${(.25 + rnd() * .7).toFixed(2)}"/>`;
  }
  const mx = 118, my = 36;
  for (let y = -8; y <= 8; y++) { const w = Math.floor(Math.sqrt(64 - y * y)); s += `<rect x="${mx - w}" y="${my + y}" width="${2 * w + 1}" height="1" fill="#e7ecf6"/>`; }
  s += `<rect x="${mx - 4}" y="32" width="2" height="2" fill="#b9c3dd"/><rect x="${mx + 3}" y="38" width="3" height="2" fill="#b9c3dd"/><rect x="${mx - 2}" y="41" width="1" height="1" fill="#b9c3dd"/>`;
  let x = 0, k = 0;
  while (x < W) {
    const w = 6 + Math.floor(rnd() * 11), h = 18 + Math.floor(rnd() * (x > 40 && x < 120 ? 62 : 40));
    const top = base - h;
    s += `<rect x="${x}" y="${top}" width="${w}" height="${h}" fill="${k++ % 2 ? '#0c1430' : '#0e1838'}"/>`;
    for (let yy = top + 3; yy < base - 2; yy += 4) for (let xx = x + 2; xx < x + w - 1; xx += 3)
      if (rnd() < .22) s += `<rect x="${xx}" y="${yy}" width="1" height="1" fill="${rnd() < .12 ? '#3fe0c5' : '#9fb0de'}" opacity=".75"/>`;
    x += w;
  }
  s += `<rect x="0" y="${base}" width="${W}" height="${H - base}" fill="#061024"/>`;
  for (let i = 0; i < 46; i++) {
    const yy = base + 2 + Math.floor(rnd() * (H - base - 4)), xx = Math.floor(rnd() * W);
    s += `<rect x="${xx}" y="${yy}" width="${2 + Math.floor(rnd() * 6)}" height="1" fill="#1b2a52"/>`;
  }
  for (let yy = base + 2; yy < H - 2; yy += 3) s += `<rect x="${mx - 3 + Math.floor(rnd() * 3)}" y="${yy}" width="${3 + Math.floor(rnd() * 4)}" height="1" fill="#e7ecf6" opacity=".35"/>`;
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" shape-rendering="crispEdges" aria-hidden="true">${s}</svg>`;
}

const proj = (p, i, cls = '', head) => `<section class="pn proj ${cls}"><div class="ph"><span>◆ ${head || p.tipo}</span><span>${pad(i + 1)}/${pad(P.length)}</span></div><h3>${p.titulo}</h3>${flow(p.fluxo)}<p>${p.texto}</p><p class="stack">${p.stack}</p>${p.link ? `<a class="lk" href="${p.link[1]}" target="_blank" rel="noopener">${p.link[0]} ↗</a>` : ''}</section>`;
const yr = (ano, quando, titulo) => `<header class="yr" data-ano="${ano}"><p class="n" aria-hidden="true">${ano}</p><p class="w">${quando}</p><h2>${titulo}</h2></header>`;
const rg = (de, para, sm, bub) => `<section class="pn rg${sm ? ' sm' : ''}" data-ano="${para}" aria-label="${L.regDe(de, para)}"><div class="in"><p class="rw">◀◀ ${L.regressao}</p><p class="ys"><s>${de}</s><span>${para}</span></p></div>${bub ? `<div class="bub">${bub}</div>` : ''}</section>`;

const bag = () => D.skills.map(([k, v], i) => `<div class="bag${i === D.skills.length - 1 ? ' dim' : ''}"><p class="k">${k}</p><div class="slots">${v.split(', ').map(s => `<span>${s}</span>`).join('')}</div></div>`).join('');
const acts = () => `<div class="acts"><a class="btn" href="mailto:${c.email}">${c.email}</a><a class="btn g" href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a class="btn g" href="${c.github}" target="_blank" rel="noopener">GitHub</a><a class="btn g" href="${c.cv}" download>${L.cv}</a></div>`;
const xis = `<button type="button" class="x" data-fecha aria-label="${L.fechar}">[x]</button>`;
document.getElementById('jc').innerHTML = `<div class="h"><span id="jc-t">◆ ${L.sistema} · ${L.contato}</span>${xis}</div><p class="tx">${D.contatoTexto}</p>${acts()}`;
document.getElementById('jh').innerHTML = `<div class="h"><span id="jh-t">◆ ${L.sistema} · ${L.habilidades}</span>${xis}</div>${bag()}`;

document.getElementById('strip').innerHTML = `
<section class="pn cover" data-ano="2026">${sky()}
  <div class="t"><p class="ep">${L.capitulo}</p><h1>Pedro<br>Julius</h1><p class="sub">${D.classe} · ${D.base}</p></div>
  <p class="hint"><span>${L.role}</span></p>
</section>
<p class="cap big rv"><span class="k">${D.nome}, ${D.classe}</span>${D.lead}.</p>
<section class="sys rv"><div class="h"><span>◆ ${L.sistema} · status</span><span>2026</span></div>
  <div class="row"><span>${L.nome}</span><b>${D.nome}</b></div>
  <div class="row"><span>${L.classe}</span><b>${D.classe}</b></div>
  <div class="row"><span>${L.base}</span><b>${D.base}</b></div>
  <div class="row"><span>${L.lucidez}</span>${bars(9)}</div>
  <div class="row"><span>${L.esperteza}</span>${bars(8)}</div>
  <div class="row"><span>${L.sorte}</span>${bars(1)}</div>
  <p class="note">${L.nota}</p>
</section>
${yr(2025, E[0].quando, `${E[0].cargo} · ${E[0].org}`)}
<p class="cap rv">${D.sobre[0]}</p>
<p class="cap r rv">${E[0].texto}</p>
<section class="pn proj wide rv"><div class="ph"><span>◆ ${P[0].tipo}</span><span>01/${pad(P.length)}</span></div><h3>${P[0].titulo}</h3>${flow(P[0].fluxo)}<p>${P[0].texto}</p><p class="stack">${P[0].stack}</p>${D.figura}</section>
${P.slice(1, 6).map((p, i) => proj(p, i + 1, (i % 2 ? '' : 'r ') + 'rv')).join('')}
<p class="cap rv"><span class="k">${L.foraExp}</span>${L.pessoais}</p>
${proj(P[6], 6, 'r rv')}
${proj(P[7], 7, 'extra rv', L.extra + ' · ' + P[7].tipo)}
${rg(2025, 2024, false, L.deNovo)}
${yr(2024, E[1].quando, `${E[1].cargo} · ${E[1].org}`)}
<p class="cap rv">${E[1].texto}</p>
${rg(2024, 2023, true)}
${yr(2023, E[2].quando, `${E[2].cargo} · ${E[2].org}`)}
<p class="cap r rv">${E[2].texto}</p>
<section class="sys rv"><div class="h"><span>◆ ${L.sistema} · ${L.missao}</span><span>2023</span></div>
  <div class="row"><span>${L.curso}</span><b>${F[0].curso} · ${F[0].org}</b></div>
  <div class="row"><span>${L.prazo}</span><b>${F[0].quando}</b></div>
</section>
${rg(2023, 2022, true)}
${yr(2022, E[3].quando, `${E[3].cargo} · ${E[3].org}`)}
<p class="cap rv">${E[3].texto}</p>
${rg(2022, 2018, true)}
${yr(2018, F[1].quando, `${F[1].curso} · ${F[1].org}`)}
<p class="cap rv"><span class="k">${L.origem}</span>${F[1].texto}</p>
<section class="sys rv"><div class="h"><span>◆ ${L.sistema} · ${L.itens}</span><span>${D.skills.length}</span></div>
  ${bag()}
</section>
<p class="cap r rv">${D.sobre[2]}</p>
<p class="cap rv"><span class="k">${L.foraTrab}</span>${D.fora}</p>
<div class="end" data-ano="2026"><p class="t">${L.fim}</p><p class="s">${L.fimSub}</p></div>
<section class="sys rv" id="contato"><div class="h"><span>◆ ${L.sistema} · ${L.proximo}</span><span>?</span></div>
  <p class="tx">${D.contatoTexto}</p>
  ${acts()}
</section>
<section class="cm" aria-label="${L.comentarios}"><h2>${L.comentarios} <span>(1)</span></h2>
  <div class="c"><span class="av" aria-hidden="true">MS</span><p class="nm">${D.citacao.autor}<small>${L.fixado}</small></p><p>“${D.citacao.texto}”</p><p class="m">♥ 1 · ${L.responder}</p></div>
</section>
<p class="foot">© 2026 ${D.completo}</p>`;

// Contador de ano: mostra o ano do último marco que passou do meio da tela.
const marks = [...document.querySelectorAll('[data-ano]')];
const Y = document.getElementById('y'), T = document.getElementById('tp'), ST = document.getElementById('st');
function tick() {
  let ano = 2026, idx = 0;
  marks.forEach((m, i) => { if (m.getBoundingClientRect().top < innerHeight * .5) { ano = +m.dataset.ano; idx = i; } });
  Y.textContent = ano;
  ST.textContent = idx === 0 ? L.presente : idx === marks.length - 1 ? L.deVolta : ano >= 2025 ? L.presente : L.regressao;
  const max = document.documentElement.scrollHeight - innerHeight;
  T.style.top = (max > 0 ? Math.min(1, scrollY / max) * 172 : 0) + 'px';
}
// Janelas dos atalhos: abrem por cima; fecham no [x], no Esc (nativo do <dialog>) ou clicando fora.
document.querySelectorAll('[data-abre]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('dialog[open]').forEach(d => d.close());
  document.getElementById(b.dataset.abre).showModal();
}));
document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => {
  if (e.target.closest('[data-fecha]')) return d.close();
  const r = d.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
}));
// Lembra o idioma escolhido; a página em português manda para /en/ quem escolheu inglês.
document.querySelectorAll('[data-lang]').forEach(a => a.addEventListener('click', () => { try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {} }));

addEventListener('scroll', tick, {passive: true}); addEventListener('resize', tick); tick();

if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -12% 0px'});
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
} else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
