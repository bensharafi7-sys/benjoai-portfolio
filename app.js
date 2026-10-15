const WA='https://wa.me/972506466300?text='+encodeURIComponent('היי בן, ראיתי את תיק העבודות של Benjo Ai ואשמח לשמוע פרטים');
document.querySelectorAll('.wa').forEach(a=>a.href=WA);
const M='https://bensharafi7-sys.github.io/benjoai-media/';
const F=[
{id:'games',t:'משחקים ממותגים',ico:'🎮',cov:['assets/poster/game-efratushka.jpg','assets/poster/game-minimarket.jpg','assets/poster/game-honor.jpg'],items:[
 {k:'game',t:'אפרתושקה: מסיבת הקסם',d:'משחק דפדפן צבעוני לילדים, עם עולמות, חברי קסם וחנות כוכבים.',img:'assets/poster/game-efratushka.jpg',u:'https://bensharafi7-sys.github.io/efratushka-game/'},
 {k:'game',t:'מגדל אור, מבית מינימרקט אור',d:'משחקים ממותגים לסופרמרקט שכונתי, בצבעים ובלוגו של העסק.',img:'assets/poster/game-minimarket.jpg',u:'https://bensharafi7-sys.github.io/minimarket-or/'}]},
{id:'songs',t:'שירים אישיים',ico:'🎵',cov:[],items:[],soon:true},
{id:'videos',t:'סרטוני AI',ico:'🎬',cov:['assets/poster/efratushka-clip.jpg','assets/poster/aceaf-trailer-v1.jpg','assets/poster/bedtime-story.jpg'],items:[
 {k:'video',t:'אפרתושקה: קליפ',d:'קליפ אנימציה מלא לדמות אפרתושקה.',f:'efratushka-clip'},
 {k:'video',t:'Ace-Af: טריילר',d:'טריילר קולנועי לשיר.',f:'aceaf-trailer-v1'},
 {k:'video',t:'סיפור לפני השינה',d:'סרטון רגשי בסגנון קולנועי.',f:'bedtime-story'},
 {k:'video',t:'יום הולדת מסבתא',d:'ברכת יום הולדת מרגשת בסגנון קולנועי.',f:'birthday-grandma'},
 {k:'video',t:'הסיפור של סבתא',d:'סרטון זיכרון אישי.',f:'grandma-story-v2'},
 {k:'video',t:'מינימרקט אור: פרסומת',d:'סרטון פרסומת לעסק עם המשחק הממותג.',f:'minimarket-or-v2'},
 {k:'video',t:'גיבור העסק',d:'סרטון תדמית למשחק ממותג.',f:'business-hero-v4'},
 {k:'video',t:'אפרתושקה: המשחק',d:'סרטון קצר שמציג את המשחק.',f:'efratushka-game-stars'}]},
{id:'chars',t:'דמויות',ico:'✨',cov:['assets/img/efratushka.webp','assets/img/zumi.webp','assets/img/benjo.webp'],items:[
 {k:'pic',t:'אפרתושקה',d:'הדמות הראשית של משחק וקליפ אפרתושקה.',img:'assets/img/efratushka.webp'},
 {k:'pic',t:'זומי בומי',d:'החבר של אפרתושקה על הבמה.',img:'assets/img/zumi.webp'},
 {k:'pic',t:'Benjo',d:'דמות תלת־ממד של בן.',img:'assets/img/benjo.webp'},
 {k:'pic',t:'הסבתא ממגדל אור',d:'דמות מונפשת מהמשחק של מינימרקט אור.',img:'assets/img/granny.webp'}]}];
const g=document.getElementById('grid');
F.forEach(f=>{const el=document.createElement('div');el.className='folder';el.tabIndex=0;
el.innerHTML=`<div class="cov">${f.cov.map(s=>`<img src="${s}" alt="" loading="lazy">`).join('')}</div><span class="ico">${f.ico}</span><div class="meta"><div><h3>${f.t}</h3><div class="cnt">${f.items.length?f.items.length+' עבודות':'בקרוב'}</div></div><span class="go">←</span></div>`;
el.onclick=()=>open(f);el.onkeydown=e=>e.key==='Enter'&&open(f);g.appendChild(el)});
const io=new IntersectionObserver((es,o)=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*120);o.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll('.folder').forEach(x=>io.observe(x));
const md=document.getElementById('modal'),gal=document.getElementById('gal');
function card(it,i){const s=`style="animation-delay:${i*70}ms"`,b=`<div class="body"><h4>${it.t}</h4><p>${it.d}</p>`;
if(it.k==='game')return `<div class="item" ${s}><a class="thumb" href="${it.u}" target="_blank" rel="noopener"><img src="${it.img}" alt="${it.t}" loading="lazy"><span class="btn gold play">▶ לשחק עכשיו</span></a>${b}</div></div>`;
if(it.k==='video')return `<div class="item" ${s}><video controls playsinline preload="none" poster="assets/poster/${it.f}.jpg" src="${M}${it.f}.mp4"></video>${b}</div></div>`;
if(it.k==='audio')return `<div class="item" ${s}>${b}<audio controls preload="none" src="${it.src}"></audio></div></div>`;
return `<div class="item" ${s}><img class="pic" src="${it.img}" alt="${it.t}" loading="lazy">${b}</div></div>`}
function open(f){document.getElementById('mt').textContent=f.ico+' '+f.t;
gal.innerHTML=f.items.map(card).join('')+(f.soon||!f.items.length?`<div class="soon"><b>בקרוב</b><p>עוד עבודות בדרך לתיקייה הזו.</p></div>`:'');
md.classList.add('open');md.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';history.pushState({m:1},'','#'+f.id)}
function close(){md.classList.remove('open');md.setAttribute('aria-hidden','true');document.body.style.overflow='';gal.querySelectorAll('video,audio').forEach(v=>v.pause())}
document.getElementById('close').onclick=()=>history.back();md.onclick=e=>e.target===md&&history.back();
addEventListener('popstate',close);addEventListener('keydown',e=>e.key==='Escape'&&md.classList.contains('open')&&history.back());
const c=document.getElementById('stars'),x=c.getContext('2d');let S=[];function rs(){c.width=innerWidth;c.height=innerHeight;S=Array.from({length:90},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.4+.2,p:Math.random()*6}))}rs();addEventListener('resize',rs);
(function t(n){x.clearRect(0,0,c.width,c.height);S.forEach(s=>{x.globalAlpha=.35+.35*Math.sin(n/700+s.p);x.fillStyle=s.r>1.2?'#f5c96a':'#fff';x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()});requestAnimationFrame(t)})(0);
