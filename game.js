'use strict';
const $ = id => document.getElementById(id);
const icons = {
 music:'<path fill="currentColor" stroke="none" d="M6 5h4v-1h4V3h6v13h-2v2h-5v-4h2v-1h3V7l-9 2v10H7v2H2v-5h2v-1h2z"/>',
 pad:'<path d="M6 7h12l2 2 2 8-2 2h-2l-4-4h-4l-4 4H4l-2-2 2-8zM7 9v5m-2.5-2.5h5m6.5-.5h.1m2.4 2h.1"/>',
 map:'<path d="m2 5 6-2 8 3 6-3v16l-6 2-8-3-6 3zM8 3v15m8-12v15"/>',
 cap:'<path d="m2 9 10-5 10 5-10 5zm4 3v5q6 4 12 0v-5m4-3v7"/>',
 flag:'<path fill="currentColor" stroke="none" d="M4 2h2v2h13v3h-2v3h2v3H6v9H4z"/>',
 volume:'<path d="M3 9h4l5-5v16l-5-5H3zm13-2q5 5 0 10m3-13q8 8 0 16"/>',
 mute:'<path d="M3 9h4l5-5v16l-5-5H3zm13 0 6 6m0-6-6 6"/>',
 bulb:'<path d="M8 15a7 7 0 1 1 8 0l-1 3H9zM10 21h4"/>',
 keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M5 9h1m3 0h1m3 0h1m3 0h1M5 12h1m3 0h1m3 0h1m3 0h1M8 16h8"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-1 1-2 1-2 3m0 2h.01"/>',
 trophy:'<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M5 2h14v2h4v6h-2v2h-3v2h-2v2h-3v3h4v2H7v-2h4v-3H8v-2H6v-2H3v-2H1V4h4zm0 4H3v3h2zm14 0v3h2V6z"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 check:'<path d="m4 12 5 5L20 6"/>'
};
function icon(name){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">'+icons[name]+'</svg>'}
function paintIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon))}
paintIcons();
document.querySelector('.flameSprite').innerHTML='<svg viewBox="0 0 16 18" aria-hidden="true"><path fill="#ff8d51" d="M8 0h2v3h2v3h2v3h2v6h-2v2H4v-2H2V8h2V5h2v3h2z"/><path fill="#ffd36b" d="M8 8h2v3h2v4h-2v1H6v-2H5v-3h3z"/></svg>';
document.querySelector('.starSprite').innerHTML='<svg viewBox="0 0 18 18" aria-hidden="true"><path fill="#ffcc62" d="M8 0h2v3h2v3h6v3h-2v2h-3v3h1v3h-3v-2H7v1H4v1H2v-3h1v-3H1V9H0V6h6V3h2z"/><path fill="#fff3b3" d="M8 4h2v4H4V7h4z"/></svg>';
function drawFox(){
 const ctx=$('fox').getContext('2d'), colors={x:'#332b34',o:'#e58141',l:'#ffab59',w:'#ffecd1',b:'#34313a'};
 const rows=['                        ','  xx              xx    ','  xox            xox    ','  xolxx        xxlox    ','  xowlox      xolwox    ','  xowwloxxxxxxolwwox    ','   xwwooooooooowwwx     ','   xoooollllllooox      ','  xooooolllllloooox     ',' xoooooollllllooooox    ',' xoooooollllllooooox    ','xwwoobboollloobboowwx   ',' xwwobbollwwoobbwwwx    ','  xwwwwwlwwlwwwwwwx     ','   xwwwwwwwwwwwwwx      ','    xxwwwbbwwwwxx       ','      xxwbbwwxx         ','        xwwxx           ','      xooooloox         ','     xooowwwloox        ','    xoooowwwlooox       ','    xooooowooooox       ','     xbbxxxxxbbx        '];
 rows.forEach((r,y)=>[...r].forEach((c,x)=>{if(colors[c]){ctx.fillStyle=colors[c];ctx.fillRect(x+1,y,1,1)}}));
}
drawFox();
const worlds=[
 {name:'Melody Meadow',desc:'Find middle C, D and E on the treble staff.',clef:'treble',notes:'C4 D4 E4',tip:'Middle C sits on its own little line just below the staff. Look for it!'},
 {name:'Willow Woods',desc:'Follow the notes up through the trees.',clef:'treble',notes:'C4 D4 E4 F4 G4',tip:'Move from a line to the next space and the note goes up one letter.'},
 {name:'Treble Tower',desc:'Climb a whole octave, one note at a time.',clef:'treble',notes:'C4 D4 E4 F4 G4 A4 B4 C5',tip:'G sits on the line that curls through the treble clef.'},
 {name:'Bass Brook',desc:'Find your footing in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3',tip:'The two dots of the bass clef sit on either side of the F line.'},
 {name:'Crystal Cavern',desc:'Explore a full octave in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3 A3 B3 C4',tip:'The top bass-clef line is A. Step into the space above it to find B.'},
 {name:'Chromatic Castle',desc:'Discover the notes between the white keys.',clef:'treble',notes:'C4 C#4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4',tip:'A sharp raises a note by one piano key. A flat lowers it by one key.'}
];
const letters='CDEFGAB', semitones=[0,2,4,5,7,9,11], whiteKeys='asdfghjk', blackKeys='wetyu';
function readNote(text){
 const m=/^([A-G])([#b]?)([0-8])$/i.exec(text);
 if(!m)return null;
 const l=m[1].toUpperCase(),acc=m[2].toLowerCase(),oct=Number(m[3]),step=letters.indexOf(l);
 const midi=12*(oct+1)+semitones[step]+(acc==='#'?1:acc==='b'?-1:0);
 if(midi<21||midi>108)return null;
 return {l,acc,oct,midi,diatonic:oct*7+step,name:l+acc+oct};
}
function parseSequence(input){
 const groups=input.trim().replaceAll('♯','#').replaceAll('♭','b').split(/[\s,]+/);
 if(!input.trim()||groups.length>64)throw Error('Enter between 1 and 64 notes or chords.');
 return groups.map(group=>{
  const chord=group.split('+').map(readNote);
  if(chord.some(n=>!n))throw Error('Check “'+group+'”. Use a pitch and octave, such as C4 or Bb3, within A0–C8.');
  if(chord.length>8||new Set(chord.map(n=>n.midi)).size!==chord.length)throw Error('Use up to eight different pitches in each chord.');
  return chord;
 });
}
const defaults={xp:0,best:0,unlocked:0,world:0,sound:true,history:{},seen:{},finished:false};
let saved;
try{saved=Object.assign({},defaults,JSON.parse(localStorage.getItem('notequest-v1'))||{})}catch{saved={...defaults}}
saved.world=Math.min(Math.max(0,Number(saved.world)||0),worlds.length-1);
function save(){try{localStorage.setItem('notequest-v1',JSON.stringify(saved))}catch{}}
let round, audio, octave, streak=0, pending=0, renderToken=0, midiAccess, teacherText='C4 D4 E4 G4 E4 D4 C4',teacherClef='treble',teacherLabels=false;
function playTone(midi){
 if(!saved.sound)return;
 try{
  audio??=new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume().catch(()=>{});
  const time=audio.currentTime,frequency=440*2**((midi-69)/12);
  [[1,.19],[2,.055],[3,.025]].forEach(([harmonic,volume])=>{
   const osc=audio.createOscillator(),gain=audio.createGain();osc.frequency.value=frequency*harmonic;
   gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(volume,time+.009);gain.gain.exponentialRampToValueAtTime(.0001,time+.75/harmonic);
   osc.connect(gain).connect(audio.destination);osc.start(time);osc.stop(time+.8);
  });
 }catch{}
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function newRound(teacher,seq,clef){
 clearTimeout(pending);renderToken++;streak=0;
 round={teacher,seq,clef,index:0,correct:0,assisted:false,pressed:new Set(),mistakes:[],retry:[],locked:false,done:false,results:[]};
 octave=teacher?Math.max(0,Math.min(7,seq[0][0].oct)):readNote(worlds[saved.world].notes.split(' ')[0]).oct;feedback('');$('dialog').close();draw();
}
function practice(world=saved.world){
 saved.world=world;save();
 const w=worlds[world],pool=w.notes.split(' '),deck=[];
 // Sample every pitch before repeating a pitch in the next shuffled pass.
 while(deck.length<Math.max(8,pool.length)){let pass=shuffle(pool);if(deck.at(-1)===pass[0])pass.push(pass.shift());deck.push(...pass)}
 const review=shuffle(pool.filter(n=>saved.history[world+':'+n]===false));
 if(review.length){const j=deck.indexOf(review[0]);[deck[0],deck[j]]=[deck[j],deck[0]]}
 if(!saved.xp&&world===0){const c=deck.indexOf('C4');[deck[0],deck[c]]=[deck[c],deck[0]]}
 newRound(false,deck.slice(0,Math.max(8,pool.length)).map(x=>[readNote(x)]),w.clef);
}
function current(){return round.seq[round.index]}
function activeClef(){return round.clef==='auto'?(current()[0].midi<60?'bass':'treble'):round.clef}
function lessonName(n){
 if(n.l==='C'&&!n.acc){
  const distance=n.oct-4;
  if(distance===0)return 'middle C';
  const direction=distance>0?'above':'below';
  return Math.abs(distance)===1?'the C '+direction+' middle C':'the C '+Math.abs(distance)+' octaves '+direction+' middle C';
 }
 return n.l+(n.acc==='#'?' sharp':n.acc==='b'?' flat':'');
}
function noteHint(n){
 const bottom=activeClef()==='treble'?30:18,d=n.diatonic-bottom;
 const placement=d===-2?'on the first little line below the staff':d===-1?'in the space just below the staff':d===9?'in the space just above the staff':d===10?'on the first little line above the staff':d>=0&&d<=8?(d%2===0?'on line '+(d/2+1):'in space '+((d+1)/2))+' counting from the bottom':(d<0?'below':'above')+' the staff';
 const name=lessonName(n);
 return name[0].toUpperCase()+name.slice(1)+' sits '+placement+'.'+(n.acc==='b'?' A flat moves one key lower.':n.acc==='#'?' A sharp moves one key higher.':'');
}
function staff(){
 const clef=activeClef(),base=clef==='treble'?30:18,spacing=13,step=spacing/2,bottom=89;
 const y=n=>bottom-(n.diatonic-base)*step;
 // A teacher phrase keeps its place on the page as the learner plays through it.
 let start=round.index,end=start+1;
 if(round.teacher){
  start=Math.floor(round.index/4)*4;end=Math.min(round.seq.length,start+4);
  if(round.clef==='auto'){
   const sameClef=i=>(round.seq[i][0].midi<60?'bass':'treble')===clef;
   for(let i=round.index-1;i>=start;i--)if(!sameClef(i)){start=i+1;break}
   for(let i=round.index+1;i<end;i++)if(!sameClef(i)){end=i;break}
  }
 }
 const phrase=round.seq.slice(start,end),allY=phrase.flat().map(y);
 const top=Math.min(7,Math.min(...allY)-40),edge=Math.max(127,Math.max(...allY)+32);
 let svg='<svg class="staff" viewBox="0 '+top+' 410 '+(edge-top)+'" aria-hidden="true">';
 const slot=284/phrase.length,xAt=i=>phrase.length===1?217:91+slot*(i+.5);
 if(round.teacher)svg+='<rect x="'+(xAt(round.index-start)-22)+'" y="'+(top+2)+'" width="44" height="'+(edge-top-4)+'" rx="5" fill="#cee5bf"/>';
 svg+='<g stroke="#56625b" stroke-width="1.4">';
 for(let i=0;i<5;i++)svg+='<path d="M26 '+(bottom-spacing*i)+'h358"/>';
 svg+='</g><text x="46" y="'+(clef==='treble'?bottom-spacing:bottom-3*spacing)+'" font-family="Bravura" font-size="52" fill="#26352f">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text>';
 const accidentals=new Map();
 phrase.forEach((notes,index)=>{
  const headX=xAt(index),ys=notes.map(y),sorted=[...notes].sort((a,b)=>a.diatonic-b.diatonic),down=(Math.max(...ys)+Math.min(...ys))/2<=bottom-2*spacing;
  const ledger=new Set();
  for(const n of sorted){const d=n.diatonic-base;for(let i=-2;i>=d;i-=2)ledger.add(i);for(let i=10;i<=d;i+=2)ledger.add(i)}
  svg+='<g opacity="'+(index+start<round.index?'.45':'1')+'">';
  for(const n of ledger)svg+='<path d="M'+(headX-17)+' '+(bottom-n*step)+'h34" stroke="#26352f" stroke-width="2"/>';
  let prev=-20,shift=false,accIdx=0;
  for(const n of sorted){
   shift=n.diatonic-prev===1?!shift:false;prev=n.diatonic;
   const x=headX+(shift?(down?-13:13):0);
   svg+='<ellipse cx="'+x+'" cy="'+y(n)+'" rx="9.1" ry="6.3" transform="rotate(-17 '+x+' '+y(n)+')" fill="#22332d"/>';
   if(n.acc||accidentals.get(n.diatonic)){
    const glyph=n.acc==='#'?'&#xe262;':n.acc==='b'?'&#xe260;':'&#xe261;';
    svg+='<text x="'+(headX-29-(accIdx++%3)*12)+'" y="'+y(n)+'" font-family="Bravura" font-size="52" fill="#26352f">'+glyph+'</text>';
   }
   accidentals.set(n.diatonic,n.acc);
  }
  const stemX=headX+(down?-8:8);
  svg+='<path stroke="#22332d" stroke-width="2.3" d="M'+stemX+' '+(down?Math.min(...ys):Math.max(...ys))+' V'+(down?Math.max(...ys)+34:Math.min(...ys)-34)+'"/></g>';
 });
 $('score').innerHTML=svg+'</svg>';$('clefLabel').textContent=clef==='treble'?'Treble clef':'Bass clef';
}
function keyboard(){
 const p=$('piano');p.innerHTML='';
 const start=12*(octave+1),hide=round.teacher&&!teacherLabels;
 function key(m,black,i,shortcut){
  const b=document.createElement('button');b.className=black?'black':'white';b.dataset.pitch=m;b.disabled=m<21||m>108||round.done;
  const letter=letters[i%7];
  const name=lessonName({l:letter,acc:black?'#':'',oct:octave+(i===7?1:0)});
  b.setAttribute('aria-label','Play '+name+' ('+shortcut.toUpperCase()+')');
  if(black)b.style.left=((i+1)*12.5)+'%';
  else b.innerHTML='<b>'+(hide?'':letter)+'</b><small>'+(!hide&&m===60?'middle C':'&nbsp;')+'</small>';
  if(round.pressed.has(m))b.classList.add('played');
  b.addEventListener('pointerdown',e=>{
   delete b.dataset.directTap;
   if(e.pointerType==='touch'||e.pointerType==='pen'){
    b.dataset.directTap='yes';
    e.preventDefault();hit(m);
   }
  });
  b.addEventListener('click',e=>{
   if(e.detail===0||b.dataset.directTap!=='yes')hit(m);
   delete b.dataset.directTap;
  });p.append(b);
 }
 for(let i=0;i<8;i++)key(start+(i===7?12:semitones[i]),false,i,whiteKeys[i]);
 [0,1,3,4,5].forEach((i,j)=>key(start+semitones[i]+1,true,i,blackKeys[j]));
 $('octaveControls').hidden=!round.teacher;$('octaveLabel').textContent='From '+lessonName({l:'C',oct:octave});$('octDown').disabled=octave===0;$('octUp').disabled=octave===7;
}
function progress(){
 const level=Math.floor(saved.xp/100)+1,earned=saved.xp%100;
 $('levelName').textContent='Level '+level;$('xp').textContent=saved.xp+' XP';$('xpBar').style.width=earned+'%';$('levelGoal').textContent=(100-earned)+' XP to level '+(level+1);
 $('streak').textContent=streak;$('best').textContent=saved.best;
 const total=round.seq.length,completed=round.done?total:round.index;
 $('counter').textContent=round.done?'Round complete':'Note '+(round.index+1)+' of '+total;$('roundCount').textContent=completed+' / '+total;
 $('segments').innerHTML=Array.from({length:Math.min(total,16)},(_,i)=>'<span class="'+((i+1)*total/Math.min(total,16)<=completed?'done':'')+'"></span>').join('');
}
function draw(){
 const w=worlds[saved.world],n=current()[0];
 const seenKey=activeClef()+':'+n.name;
 round.teaching=!round.teacher&&!saved.seen[seenKey]&&saved.history[saved.world+':'+n.name]===undefined;
 if(round.teaching)round.assisted=true;
 $('worldTitle').textContent=round.teacher?'Teacher challenge':w.name;$('worldBadge').textContent=round.teacher?'TEACHER MODE':'WORLD '+String(saved.world+1).padStart(2,'0');$('worldDesc').textContent=round.teacher?'Read and play your teacher’s sequence.':w.desc;
 $('roundTitle').textContent=round.teacher?'Sight-reading test':'Note practice';$('prompt').textContent=round.teacher?(current().length>1?'Play every pitch in this chord.':'Play the highlighted note and read ahead.'):'Read the note, then play its piano key.';
 $('tip').textContent=round.teacher?'“Take your time. Check the clef, find the note, then play.”':'“'+w.tip+'”';
 $('listen').hidden=round.teacher;$('hint').hidden=round.teacher;
 document.querySelectorAll('nav button').forEach(b=>{const active=b.dataset.view===(round.teacher?'teacher':'adventure');b.classList.toggle('active',active);b.setAttribute('aria-current',active?'page':'false')});
 staff();keyboard();progress();soundButton();
 if(round.teaching){
  const name=lessonName(n);
  const landmark={C:'just left of the two black keys',D:'between the two black keys',E:'just right of the two black keys',F:'just left of the three black keys',G:'between the first two of the three black keys',A:'between the last two of the three black keys',B:'just right of the three black keys'};
  $('prompt').textContent='Meet '+name+'. Look at the note, then play the glowing key.';
  $('tip').textContent='“'+noteHint(n)+(n.acc?'':' Find '+n.l+' '+landmark[n.l]+'.')+'”';
  document.querySelector('[data-pitch="'+n.midi+'"]')?.classList.add('suggest');
 }else if(!round.teacher&&saved.world===0){
  $('tip').textContent='“Start from middle C. Each step from a line to a space moves one white key to the right.”';
 }
}
function feedback(text,retry=false){$('feedback').textContent=text;$('feedback').classList.toggle('retry',retry)}
function soundButton(){$('sound').innerHTML=icon(saved.sound?'volume':'mute');$('sound').setAttribute('aria-label',saved.sound?'Mute sound':'Enable sound');$('sound').title=saved.sound?'Mute sound':'Enable sound'}
$('sound').onclick=()=>{saved.sound=!saved.sound;save();soundButton()};
function hint(){
 if(round.done||round.locked||round.teacher)return;round.assisted=true;streak=0;progress();
 const n=current()[0];feedback(noteHint(n),true);
 document.querySelector('[data-pitch="'+n.midi+'"]')?.classList.add('suggest');
}
$('hint').onclick=hint;$('listen').onclick=()=>{if(!round.done&&!round.locked){if(!saved.sound){feedback('Sound is muted. Use the speaker button to listen.',true);return}round.assisted=true;streak=0;progress();current().forEach(n=>playTone(n.midi));feedback('Listen, then find the key.',true)}};
function hit(m){
 if(round.done||round.locked||$('dialog').open)return;
 playTone(m);
 if(m<21||m>108)return;
 const n=current(),el=document.querySelector('[data-pitch="'+m+'"]'),match=n.some(x=>x.midi===m);
 el?.classList.add(match?'played':'miss');if(el)setTimeout(()=>el.classList.remove(match?'played':'miss'),300);
 if(!match){
  streak=0;round.assisted=true;progress();
  if(round.teacher){finishNote(false);return}
  const previous=round.mistakes.includes(round.index);if(!previous){round.mistakes.push(round.index);round.retry.push({name:n[0].name,after:round.index+2})}
  feedback(previous?noteHint(n[0]):(m>n[0].midi?'Try a lower key.':'Try a higher key.')+' Look at the line or space.',true);
  if(previous)hint();return;
 }
 round.pressed.add(m);
 if(round.pressed.size<n.length){feedback(round.pressed.size+' of '+n.length+' chord notes played.');return}
 finishNote(!round.assisted);
}
function finishNote(independent){
 round.locked=true;const names=current().map(lessonName).join(' + ');round.results.push({names,independent,lesson:round.teaching});
 if(independent){round.correct++;streak++;saved.best=Math.max(saved.best,streak)}
 else streak=0;
 if(!round.teacher){saved.xp+=independent?10:3;const pitch=current()[0].name;saved.seen[activeClef()+':'+pitch]=true;if(!round.teaching)saved.history[saved.world+':'+pitch]=independent}
 save();progress();
 feedback(round.teacher?'Answer recorded.':independent?'You got it! '+names+' · +10 XP':'That’s '+names+'! · +3 XP');
 const token=renderToken;
 pending=setTimeout(()=>{if(token!==renderToken)return;if(round.index+1>=round.seq.length){complete();return}
  round.index++;
  if(!round.teacher){
   const due=round.retry.findIndex(x=>x.after<=round.index);
   if(due>=0){const item=round.retry.splice(due,1)[0];const j=round.seq.findIndex((ns,k)=>k>=round.index&&ns[0].name===item.name);
    if(j>=0)[round.seq[j],round.seq[round.index]]=[round.seq[round.index],round.seq[j]];
    else if(round.seq.length<Math.max(8,worlds[saved.world].notes.split(' ').length)+2)round.seq.splice(round.index,0,[readNote(item.name)]);
   }
  }
  round.pressed.clear();round.locked=false;round.assisted=false;feedback('');draw();
 },round.teacher?320:700);
}
function show(title,html){$('dialogTitle').textContent=title;$('dialogBody').innerHTML=html;paintIcons($('dialogBody'));if(!$('dialog').open)$('dialog').showModal()}
function action(label,fn,cls='primary'){const b=document.createElement('button');b.textContent=label;b.className=cls;b.onclick=fn;return b}
function actions(...buttons){const row=document.createElement('div');row.className='modalActions';row.append(...buttons);$('dialogBody').append(row)}
function complete(){
 round.done=true;progress();keyboard();
 const total=round.results.filter(r=>!r.lesson).length,counts=round.correct+' / '+total,world=saved.world;
 const cleared=!round.teacher&&total>0&&round.correct/total>=.8&&worlds[world].notes.split(' ').every(n=>saved.history[world+':'+n]);
 if(cleared){saved.unlocked=Math.max(saved.unlocked,Math.min(world+1,worlds.length-1));if(world===worlds.length-1)saved.finished=true;save()}
 const missed=[...new Set(round.results.filter(x=>!x.independent&&!x.lesson).map(x=>x.names))];
 show(round.teacher?'Challenge complete!':'Round complete!','<div class="resultNumber">'+(total?counts:'Lesson cleared')+'</div><p>'+(total?'Read correctly on the first try without help.':'You’ve met the notes. Try them from memory next round.')+'</p>'+(missed.length?'<p>Practise next: <b>'+missed.join(', ')+'</b>.</p>':total?'<p>Every practice pitch played independently!</p>':'')+(!round.teacher?'<p>'+(cleared?(world===worlds.length-1?'You’ve cleared every world!':'You can now explore '+worlds[world+1].name+'.'):'Read every pitch independently and score at least 80% in a round to clear this world.')+'</p>':''));
 if(round.teacher)actions(action('New teacher test',teacherSetup),action('Back to adventure',()=>practice(),'secondary'));
 else actions(action(cleared&&world<worlds.length-1?'Next world':'Play another round',()=>practice(cleared?Math.min(world+1,worlds.length-1):world)),action('World map',map,'secondary'));
 feedback('Round complete.');$('feedback').append(' ',action('See results',complete,'hint'));
}
function map(){
 show('World map','<p>Explore each world by reading its notes independently.</p>');
 worlds.forEach((w,i)=>{const locked=i>saved.unlocked,b=document.createElement('button');b.disabled=locked;b.className='worldRow'+(i===saved.world?' current':'');
 b.innerHTML='<span class="worldNum">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+w.name+'</strong><small>'+w.clef[0].toUpperCase()+w.clef.slice(1)+' clef · '+w.notes.split(' ').length+' notes</small></span><i>'+icon(locked?'lock':i<saved.unlocked||saved.finished?'check':'flag')+'</i>';b.onclick=()=>practice(i);$('dialogBody').append(b)});
}
function teacherSetup(){
 show('Teacher mode','<p>Build a test in the order you want it played. The learner gets one attempt at each note or chord.</p><label for="seq">Notes or chords</label><textarea id="seq" spellcheck="false"></textarea><p>Use C4 for middle C, F#4 for a sharp, and Bb3 for a flat. Join chord notes with +, as in C4+E4+G4.</p><label for="selectClef">Clef</label><select id="selectClef"><option value="treble">Treble clef</option><option value="bass">Bass clef</option><option value="auto">Choose by pitch</option></select><label><input id="testLabels" type="checkbox"> Show piano key names during the test</label><p role="alert" class="error" id="parseError"></p>');
 $('seq').value=teacherText;$('selectClef').value=teacherClef;$('testLabels').checked=teacherLabels;
 actions(action('Start test',()=>{try{const sequence=parseSequence($('seq').value);teacherText=$('seq').value;teacherClef=$('selectClef').value;teacherLabels=$('testLabels').checked;newRound(true,sequence,teacherClef)}catch(e){$('parseError').textContent=e.message;$('seq').focus()}}),action('How to play',help,'secondary'));
}
async function connectMidi(){
 const status=$('midiStatus');
 if(!navigator.requestMIDIAccess){status.textContent='MIDI needs a browser with Web MIDI support, such as desktop Chrome or Edge. The on-screen piano is ready.';return}
 try{
  midiAccess=await navigator.requestMIDIAccess({sysex:false});
  const bind=()=>{const inputs=[...midiAccess.inputs.values()].filter(i=>i.state==='connected');for(const input of inputs)input.onmidimessage=e=>{const [status,pitch,vel]=e.data;if((status&240)===144&&vel>0)hit(pitch)};if(status.isConnected)status.textContent=inputs.length?'Connected to '+inputs.map(i=>i.name).join(', ')+'.':'Plug in a USB MIDI keyboard. It will connect here.'};
  bind();midiAccess.onstatechange=bind;
 }catch{status.textContent='MIDI access is unavailable. You can still play with the on-screen keys.'}
}
function help(){
 show('How to play','<p>Read the note from its place on the five staff lines. Tap the matching piano key or play a connected MIDI keyboard.</p><p>From the left, the white keys use <kbd>A S D F G H J K</kbd>. The black keys use <kbd>W E T Y U</kbd>. Computer key letters are shortcuts.</p><p>In the meadow, find middle C just left of a pair of black keys. D is between them and E is just to their right.</p><p>Each independent answer earns 10 XP. Use a hint or hear the note whenever you need help, then earn 3 XP by finding it.</p><p>In a teacher test, switch octaves with + and −. For a chord, play each pitch once, together or one at a time.</p><p id="midiStatus" role="status"></p>');
 actions(action('Let’s play',()=>$('dialog').close()),action('Connect MIDI keyboard',connectMidi,'secondary'));
}
$('help').onclick=help;$('close').onclick=()=>$('dialog').close();
$('octDown').onclick=()=>{if(octave>0){octave--;keyboard()}};$('octUp').onclick=()=>{if(octave<7){octave++;keyboard()}};
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.dataset.view==='map')map();else if(b.dataset.view==='teacher')teacherSetup();else if(round.teacher||round.done)practice();else $('game').scrollIntoView({block:'nearest'})});
document.querySelector('.brand').onclick=e=>{e.preventDefault();if(round.teacher||round.done)practice();else window.scrollTo(0,0)};
document.addEventListener('keydown',e=>{
 if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||$('dialog').open)return;
 const k=e.key.toLowerCase(),w=whiteKeys.indexOf(k),b=blackKeys.indexOf(k);
 if(w>=0&&k.length===1){e.preventDefault();hit(12*(octave+1)+(w===7?12:semitones[w]))}
 else if(b>=0&&k.length===1){e.preventDefault();hit(12*(octave+1)+[1,3,6,8,10][b])}
 else if(round.teacher&&(k==='+'||k==='='))$('octUp').click();else if(round.teacher&&k==='-')$('octDown').click();
});
practice();
