// Easter eggs, só no PC (tela larga + mouse) e só sem "reduzir movimento":
// - Michael Scott pixelado fixo no canto, piscando e acenando; clique = fala.
// - Digitar "arise" ou clicar no ano da lateral: sombra com olhos roxos levanta do chão.
// - Aparição rara: às vezes uma sombra atravessa o rodapé da tela.
(() => {
  const pc = matchMedia('(min-width: 1181px) and (hover: hover) and (pointer: fine)');
  const calmo = matchMedia('(prefers-reduced-motion: reduce)');
  if (!pc.matches || calmo.matches) return;

  const COR = {h: '#3a2a1f', s: '#e8b48a', d: '#c48a64', e: '#14161c', w: '#e7ecf6', m: '#8a4a3a',
    k: '#2b3242', t: '#3d6fb0', p: '#1b1f2a', b: '#0b0d12', x: '#07060d', v: '#c58bff', g: '#2a1747'};

  // Desenha um mapa de pixels (uma string por linha) num canvas; o CSS amplia sem suavizar.
  function sprite(linhas) {
    const c = document.createElement('canvas');
    c.width = linhas[0].length; c.height = linhas.length;
    const g = c.getContext('2d');
    linhas.forEach((l, y) => [...l].forEach((ch, x) => { if (COR[ch]) { g.fillStyle = COR[ch]; g.fillRect(x, y, 1, 1); } }));
    return c.toDataURL();
  }

  // ---------- Michael ----------
  const cab = ['....hhhhhhhh....', '...hhhhhhhhhh...', '...hhsssssshh...', '...hssssssssh...'];
  const olhos = '...ssessssess...', fechados = '...ssddssddss...';
  const rosto = ['...dssssssssd...', '...ssmwwwwmss...'];
  const corpo = ['....ssmmmmss....', '.....dssssd.....', '...kkkwttwkkk...', '..kkkkwttwkkkk..',
    '.kkkkkkttkkkkkk.', '.kkkkkkttkkkkkk.', '.kkkkkkttkkkkkk.', '.ss.kkkkkkkk.ss.'];
  const acena = (col) => ['....ssmmmmss' + (col ? '.ss.' : '..ss'), '.....dssssd.' + (col ? 'kk..' : '.kk.'),
    '...kkkwttwkkkk..', '..kkkkwttwkkkk..', '.kkkkkkttkkkkk..', '.kkkkkkttkkkkk..', '.kkkkkkttkkkkk..', '.ss.kkkkkkkk....'];
  const pernas = ['....kkkkkkkk....', '....pppppppp....', '....ppp..ppp....', '....ppp..ppp....', '....ppp..ppp....', '...bbbb..bbbb...'];
  const M = (o, c) => sprite([...cab, o, ...rosto, ...c, ...pernas]);
  const F = {parado: M(olhos, corpo), pisca: M(fechados, corpo), a1: M(olhos, acena(0)), a2: M(olhos, acena(1))};

  const css = document.createElement('style');
  css.textContent = `
.ms{position:fixed;right:calc(50% + 392px);bottom:20px;z-index:4;width:48px;height:63px;cursor:pointer;background:none;border:0;padding:0}
.ms img{width:48px;height:63px;image-rendering:pixelated;display:block;animation:ms-bob 1.6s steps(2) infinite}
@keyframes ms-bob{50%{transform:translateY(-3px)}}
.ms .fala{position:absolute;bottom:80px;right:-8px;width:max-content;max-width:220px;padding:8px 10px;background:#e7ecf6;color:#0b1020;font:11px/16px var(--px);text-align:left;box-shadow:3px 3px 0 var(--ac);opacity:0;transform:translateY(4px);transition:opacity .12s steps(2),transform .12s steps(2);pointer-events:none}
.ms .fala.on{opacity:1;transform:none}
.rail .y{pointer-events:auto;cursor:pointer}
.arise{position:fixed;inset:0;z-index:20;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:12vh;background:radial-gradient(ellipse at 50% 85%,rgba(88,40,160,.35),rgba(3,5,10,.82) 60%);animation:ar-fundo 2.8s steps(14) forwards}
.arise img{width:192px;height:288px;image-rendering:pixelated;filter:drop-shadow(0 0 10px rgba(160,90,255,.7));clip-path:inset(100% 0 0 0);animation:ar-sobe 1.2s steps(12) .25s forwards}
.arise p{margin-top:18px;font:44px/44px var(--px);letter-spacing:.3em;color:#c58bff;text-shadow:0 0 14px rgba(160,90,255,.8);opacity:0;animation:ar-txt .5s steps(4) 1.3s forwards}
.arise .chao{width:260px;height:8px;margin-top:-8px;background:repeating-linear-gradient(90deg,#2a1747 0 8px,#07060d 8px 16px);opacity:.9}
@keyframes ar-fundo{0%{opacity:0}8%{opacity:1}85%{opacity:1}100%{opacity:0}}
@keyframes ar-sobe{to{clip-path:inset(0 0 0 0)}}
@keyframes ar-txt{to{opacity:1}}
.passa{position:fixed;bottom:0;left:-60px;z-index:4;width:48px;height:72px;image-rendering:pixelated;pointer-events:none;filter:drop-shadow(0 0 6px rgba(160,90,255,.6));animation:passa 9s steps(90) forwards}
@keyframes passa{to{transform:translateX(calc(100vw + 120px))}}`;
  document.head.appendChild(css);

  const ms = document.createElement('button');
  ms.type = 'button'; ms.className = 'ms'; ms.setAttribute('aria-hidden', 'true'); ms.tabIndex = -1;
  ms.innerHTML = `<span class="fala"></span><img alt="" src="${F.parado}">`;
  document.body.appendChild(ms);
  const img = ms.querySelector('img'), fala = ms.querySelector('.fala');

  let ocupado = false;
  const quadros = (lista, ms_) => new Promise(ok => {
    ocupado = true; let i = 0;
    const t = setInterval(() => { if (i < lista.length) img.src = F[lista[i++]]; else { clearInterval(t); img.src = F.parado; ocupado = false; ok(); } }, ms_);
  });
  const acenar = () => quadros(['a1', 'a2', 'a1', 'a2', 'a1', 'a2'], 160);
  setInterval(() => { if (!ocupado && !document.hidden) quadros(['pisca'], 140); }, 3700);
  setInterval(() => { if (!ocupado && !document.hidden && Math.random() < .4) acenar(); }, 11000);

  const FALAS = ["That's what she said.", "I'm not superstitious, but I am a little stitious.",
    "I DECLARE BANKRUPTCY!", "Would I rather be feared or loved? Both.", "I am Beyoncé, always."];
  let n = 0, tf;
  ms.addEventListener('mouseenter', () => { if (!ocupado) acenar(); });
  ms.addEventListener('click', () => {
    fala.textContent = FALAS[n++ % FALAS.length]; fala.classList.add('on');
    clearTimeout(tf); tf = setTimeout(() => fala.classList.remove('on'), 2600);
    if (!ocupado) acenar();
  });

  // ---------- Sombra (arise) ----------
  const SOMBRA = sprite([
    '......xxxx......', '.....xxxxxx.....', '....xxxxxxxx....', '....xxxxxxxx....', '....xvvxxvvx....',
    '....xxxxxxxx....', '.....xxxxxx.....', '...xxxxxxxxxx...', '..xxxxxxxxxxxx..', '.xxxxxxxxxxxxxx.',
    '.xxx.xxxxxx.xxx.', '.xxx.xxxxxx.xxx.', '.xx..xxxxxx..xx.', '.xx..xxxxxx..xx.', '..x..xxxxxx..x..',
    '.....xxxxxx.....', '.....xx..xx.....', '.....xx..xx.....', '.....xx..xx.....', '....xxx..xxx....',
    '...g.x.g..x.g...', '..g..g..g...g...', '................', '................']);
  let subindo = false;
  function arise() {
    if (subindo || document.querySelector('dialog[open]')) return;
    subindo = true;
    const a = document.createElement('div');
    a.className = 'arise'; a.setAttribute('aria-hidden', 'true');
    a.innerHTML = `<img alt="" src="${SOMBRA}"><div class="chao"></div><p>ARISE</p>`;
    document.body.appendChild(a);
    setTimeout(() => { a.remove(); subindo = false; }, 2900);
  }
  let buf = '';
  addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-5);
    if (buf === 'arise') { buf = ''; arise(); }
  });
  const ano = document.getElementById('y');
  if (ano) ano.addEventListener('click', arise);

  // ---------- Aparição rara: 1 em 6 visitas, uma vez por sessão, após 30 s ----------
  let jaViu = false;
  try { jaViu = sessionStorage.getItem('sombra') === '1'; } catch (e) {}
  const forcar = location.hash === '#sombra';
  if (forcar || (!jaViu && Math.random() < 1 / 6)) setTimeout(() => {
    if (document.hidden && !forcar) return;
    try { sessionStorage.setItem('sombra', '1'); } catch (e) {}
    const s = document.createElement('img');
    s.className = 'passa'; s.alt = ''; s.src = SOMBRA; s.setAttribute('aria-hidden', 'true');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 9200);
  }, forcar ? 500 : 30000);

  // Se a janela encolher para tamanho de celular, some com o Michael.
  pc.addEventListener('change', () => { ms.style.display = pc.matches ? '' : 'none'; });
})();
