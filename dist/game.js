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
function drawFox(canvas){
 const ctx=canvas.getContext('2d'), colors={x:'#332b34',o:'#e58141',l:'#ffab59',w:'#ffecd1',b:'#34313a'};
 const rows=['                        ','  xx              xx    ','  xox            xox    ','  xolxx        xxlox    ','  xowlox      xolwox    ','  xowwloxxxxxxolwwox    ','   xwwooooooooowwwx     ','   xoooollllllooox      ','  xooooolllllloooox     ',' xoooooollllllooooox    ',' xoooooollllllooooox    ','xwwoobboollloobboowwx   ',' xwwobbollwwoobbwwwx    ','  xwwwwwlwwlwwwwwwx     ','   xwwwwwwwwwwwwwx      ','    xxwwwbbwwwwxx       ','      xxwbbwwxx         ','        xwwxx           ','      xooooloox         ','     xooowwwloox        ','    xoooowwwlooox       ','    xooooowooooox       ','     xbbxxxxxbbx        '];
 rows.forEach((r,y)=>[...r].forEach((c,x)=>{if(colors[c]){ctx.fillStyle=colors[c];ctx.fillRect(x+1,y,1,1)}}));
}
drawFox($('fox'));
drawFox($('journeyFox'));
const worlds=[
 {name:'Melody Meadow',desc:'Find middle C, D and E on the treble staff.',clef:'treble',notes:'C4 D4 E4',tip:'Middle C sits on its own little line just below the staff. Look for it!'},
 {name:'Willow Woods',desc:'Follow the notes up through the trees.',clef:'treble',notes:'C4 D4 E4 F4 G4',tip:'Move from a line to the next space and the note goes up one letter.'},
 {name:'Treble Tower',desc:'Climb a whole octave, one note at a time.',clef:'treble',notes:'C4 D4 E4 F4 G4 A4 B4 C5',tip:'G sits on the line that curls through the treble clef.'},
 {name:'Bass Brook',desc:'Find your footing in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3',tip:'The two dots of the bass clef sit on either side of the F line.'},
 {name:'Crystal Cavern',desc:'Explore a full octave in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3 A3 B3 C4',tip:'The top bass-clef line is A. Step into the space above it to find B.'},
 {name:'Chromatic Castle',desc:'Discover the notes between the white keys.',clef:'treble',notes:'C4 C#4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4',tip:'A sharp raises a note by one piano key. A flat lowers it by one key.'}
];
const quests=[
 {kind:'meadow',song:'The Bellflower Song',mission:'Pip’s bellflowers are asleep. Play middle C, D and E to open the three flower beds.',start:'Three sleepy flower beds',verbs:['One flower opens','Another petal unfolds'],ending:'The meadow is awake!',reward:'Pip gathers the bellflower seeds for the path into Willow Woods.',voices:[[1,.10],[3,.03],[5,.012]],verses:['C4 D4 E4 E4 D4 C4 D4 C4','E4 D4 C4 D4 E4 E4 D4 C4']},
 {kind:'woods',song:'The Firefly Call',mission:'Pip has lost the woodland trail. Call fireflies into the lanterns to light the way.',start:'The woodland lanterns are dark',verbs:['A firefly lands','The lantern glows brighter'],ending:'The trail is lit!',reward:'Follow the fireflies to the bell tower at the edge of the woods.',voices:[[1,.09],[2,.015],[4,.02]],verses:['C4 E4 G4 F4 E4 D4 G4 C4','G4 E4 C4 D4 F4 E4 D4 C4']},
 {kind:'tower',song:'The Tower Carillon',mission:'The tower bells have fallen silent. Read the pitches to pull their ropes and ring the morning call.',start:'The bells are waiting',verbs:['A bell swings','The bell answers again'],ending:'The tower is ringing!',reward:'The carillon carries across the valley. Down at Bass Brook, Pip hears an answering ripple.',voices:[[1,.09],[2,.055],[4,.024]],verses:['C4 E4 G4 C5 B4 A4 F4 D4 G4 C4','G4 B4 C5 A4 F4 D4 E4 C4']},
 {kind:'brook',song:'The Stepping-Stone Jig',mission:'Pip needs to cross Bass Brook. Each bass note lifts the next stone out of the water.',start:'Pip waits on the riverbank',verbs:['A stepping stone rises','Pip hops across'],ending:'Pip crossed the brook!',reward:'The last stone lifts Pip onto the far bank, beside a cave full of humming crystals.',voices:[[1,.10],[2,.035],[3,.02]],verses:['C3 D3 E3 G3 F3 E3 D3 C3','G3 E3 C3 D3 F3 G3 D3 C3']},
 {kind:'cavern',song:'The Crystal Echo',mission:'Pip needs light underground. Send each bass note into a matching crystal and watch it grow.',start:'The cave is dark',verbs:['A crystal catches the note','The crystal grows taller'],ending:'The cavern is shining!',reward:'The crystals light a stairway up to the castle gate.',voices:[[1,.095],[3,.045],[6,.018]],verses:['C3 G3 E3 A3 F3 D3 B3 C4','C4 B3 G3 A3 F3 E3 D3 C3']},
 {kind:'castle',song:'The Castle Key',mission:'The gate has a musical lock. Play its sharps, flats and naturals to turn the tumblers in order.',start:'The gate is locked',verbs:['A lock tumbler turns','Another pin clicks into place'],ending:'The castle gate is open!',reward:'Pip opens the gate and sends your castle tune ringing over all six worlds.',voices:[[1,.09],[2,.035],[4,.018]],verses:['C4 E4 G4 B4 Bb4 A4 Ab4 G4 F#4 F4 E4 Eb4 D4 C#4 C4','C4 C#4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4 G4 E4 C4']}
];
const memoryPhrases={
 treble:[
  {label:'Lines',words:['Every','Good','Boy','Deserves','Fruit'],notes:'E4 G4 B4 D5 F5'},
  {label:'Spaces',words:['F','A','C','E'],notes:'F4 A4 C5 E5'}
 ],
 bass:[
  {label:'Lines',words:['Good','Boys','Do','Fine','Always'],notes:'G2 B2 D3 F3 A3'},
  {label:'Spaces',words:['All','Cows','Eat','Grass'],notes:'A2 C3 E3 G3'}
 ]
};
function memoryFor(n,clef){
 const pos=n.diatonic-(clef==='treble'?30:18);
 if(pos<0||pos>8)return null;
 return {group:pos%2,index:Math.floor(pos/2)};
}
function memoryHint(n){
 const clef=activeClef(),place=memoryFor(n,clef);
 if(!place)return n.diatonic<(clef==='treble'?30:18)?'The line-and-space sayings start higher up.':'The line-and-space sayings end below this note.';
 const phrase=memoryPhrases[clef][place.group];
 const words=phrase.words.join(clef==='treble'&&place.group===1?'':' ');
 return words+' — '+phrase.words[place.index]+' gives you '+n.l+'.';
}
function guideStaff(clef,n){
 const base=clef==='treble'?30:18,y=79-(n.diatonic-base)*6;
 const lines=Array.from({length:5},(_,i)=>'<path d="M18 '+(79-12*i)+'h238"/>').join('');
 return '<svg class="guideStaff" viewBox="0 0 274 112" aria-label="'+lessonName(n)+' on the '+clef+' staff" role="img"><g stroke="#66776b">'+lines+'</g><text x="33" y="'+(clef==='treble'?67:43)+'" font-family="Bravura" font-size="48">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text><ellipse cx="150" cy="'+y+'" rx="8.5" ry="5.6" transform="rotate(-17 150 '+y+')"/><path stroke="currentColor" stroke-width="2" d="M'+(y>55?158:142)+' '+y+'v'+(y>55?-30:30)+'"/></svg>';
}
function openGuide(){
 if(round.teacher)return;
 if(!round.done&&!round.locked){round.assisted=true;streak=0;progress()}
 const startingClef=activeClef(),place=memoryFor(current()[0],startingClef);
 function page(clef,group,index){
  const phrase=memoryPhrases[clef][group],n=readNote(phrase.notes.split(' ')[index]);
  show('Lines & spaces','<p>Count up from the bottom. Tap a word to see and hear its note.</p><div class="guideTabs" id="clefTabs"></div><div class="guideTabs" id="placeTabs"></div>'+guideStaff(clef,n)+'<p class="memoryTitle">'+(clef==='treble'&&group===1?'FACE':phrase.words.join(' '))+'</p><div class="memoryWords" id="wordChoices"></div><p id="guideDetail"></p>');
  function option(parent,label,selected,fn){const b=action(label,fn,'guideOption');b.setAttribute('aria-pressed',selected);$(parent).append(b)}
  for(const c of ['treble','bass'])option('clefTabs',c==='treble'?'Treble clef':'Bass clef',clef===c,()=>page(c,group,0));
  memoryPhrases[clef].forEach((p,i)=>option('placeTabs',p.label,group===i,()=>page(clef,i,0)));
  phrase.words.forEach((word,i)=>option('wordChoices',word,i===index,()=>{playTone(readNote(phrase.notes.split(' ')[i]).midi);page(clef,group,i);$('wordChoices').children[i].focus()}));
  $('guideDetail').textContent=(group?'Space ':'Line ')+(index+1)+' from the bottom is '+lessonName(n)+'.';
 }
 page(startingClef,place?.group||0,place?.index||0);
}
$('fieldGuide').onclick=openGuide;

// Each instrument has its own resting shape and response to repeated pitches.
function drawInstrument(canvas,kind,hits){
 const g=canvas.getContext('2d'),on=hits>0;
 const rect=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h)};
 const poly=(points,c)=>{g.fillStyle=c;g.beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill()};
 const gold=on?'#ffd174':'#827863',light=on?'#fff5b0':'#a49677';
 g.clearRect(0,0,32,40);
 if(kind==='meadow'){
  const y=on?Math.max(7,17-hits*3):22;
  rect(14,y+4,3,34-y,'#47763e');poly([[15,31],[5,24],[10,23],[16,27]],'#83ba52');poly([[16,26],[23,19],[27,19],[22,25]],'#9dce61');
  if(on){for(const [x,dy] of [[8,0],[16,-4],[20,3],[12,7],[6,5]])rect(x,y+dy,8,7,'#ff97a6');rect(12,y+2,8,6,'#ffdd80')}
  else{poly([[10,23],[12,17],[19,15],[22,20],[17,24]],'#9caf70');rect(12,20,5,3,'#bdce80')}
 }else if(kind==='woods'){
  rect(15,1,2,8,'#786e58');rect(9,8,14,3,gold);poly([[9,11],[23,11],[25,25],[20,31],[12,31],[7,25]],on?'#e5ab48':'#506457');
  rect(11,14,10,12,on?'#fff59c':'#6e8370');rect(10,29,12,3,gold);rect(14,32,4,2,gold);
  if(on){rect(4,12,2,2,light);rect(24,7,2,2,light);if(hits>1)rect(27,22,2,2,light)}
 }else if(kind==='tower'){
  rect(15,0,2,12,'#937154');rect(12,10,8,3,gold);poly([[11,13],[21,13],[23,17],[24,25],[28,30],[4,30],[8,25],[9,17]],gold);
  rect(11,17,3,9,light);rect(4,29,24,3,on?'#cf8844':'#6b6155');rect(14,32,5,4,light);
 }else if(kind==='brook'){
  const y=on?20:31;
  poly([[3,y+1],[8,y-4],[22,y-5],[29,y],[25,y+5],[7,y+6]],on?'#b3c6a7':'#548b98');poly([[4,y+3],[11,y+5],[26,y+2],[24,y+7],[9,y+8]],'#5c8077');
  rect(1,33,10,2,'#96ded8');rect(17,35,14,2,'#a6e1d5');if(on)rect(11,y-4,8,2,'#c2df83');
 }else if(kind==='cavern'){
  const y=on?Math.max(2,13-3*hits):23;
  poly([[7,31],[4,22],[7,19],[13,26],[11,34]],on?'#9c7dff':'#62567d');
  poly([[10,33],[11,y+7],[18,y],[22,y+6],[18,34]],on?'#c3a0ff':'#77688d');poly([[18,y],[22,y+6],[18,34],[15,33]],on?'#8665e5':'#62567e');
  poly([[17,34],[21,22],[27,17],[28,23],[23,34]],on?'#87dcf0':'#677d91');rect(5,34,21,3,'#695e85');
 }else{
  rect(2,13,28,20,'#48405a');rect(4,11,24,3,'#897782');rect(5,16,22,14,'#272e47');
  rect(13,13,6,19,gold);rect(8,18,16,8,gold);rect(11,16,10,12,gold);rect(13,19,6,6,light);
  rect(on?20:11,on?24:13,3,5,on?'#aceca7':'#c79a77');rect(4,32,24,3,'#76637a');
 }
}
let replayTimer=0;
function stopReplay(){clearTimeout(replayTimer);replayTimer=0}
function worldEcho(midi){playTone(midi,quests[saved.world].voices,.09, .95)}
function renderScene(animate=false,playedOverride){
 const hero=$('landscape'),stage=$('worldStage');
 stage.hidden=round.teacher;hero.dataset.world=round.teacher?'teacher':quests[saved.world].kind;
 if(round.teacher)return;
 const q=quests[saved.world],score=round.score;
 const steps=playedOverride??round.results.filter(r=>!r.review).length;
 const melody=score.slice(0,steps).map(chord=>chord[0].midi),last=melody.at(-1);
 const path=q.kind==='brook'||q.kind==='castle';
 const notes=path?score.map(chord=>chord[0].midi):[...new Set(score.map(chord=>chord[0].midi))].sort((a,b)=>a-b);
 const active=path?steps-1:notes.indexOf(last),objects=$('instruments');
 objects.innerHTML='';
 notes.forEach((pitch,i)=>{
  const hits=path?Number(i<steps):melody.filter(m=>m===pitch).length;
  const token=document.createElement('canvas');token.width=32;token.height=40;
  token.className='instrument'+(hits?' lit':'')+(animate&&i===active?' responding':'');
  token.dataset.hits=hits;token.style.setProperty('--lift',q.kind==='tower'?i*2+'px':'0px');
  drawInstrument(token,q.kind,hits);objects.append(token);
 });
 const fox=$('traveller');fox.style.left=(active<0?3:(active+.5)/notes.length*100)+'%';
 hero.classList.toggle('restored',steps>=score.length);
 $('songCount').textContent=steps+' / '+score.length;
 const count=melody.filter(n=>n===last).length;
 $('sceneAction').textContent=steps>=score.length?q.ending:steps?(path?q.verbs[(steps-1)%2]:q.verbs[count>1?1:0])+' · '+lessonName(score[steps-1][0]):q.start;
}
function replaySong(){
 stopReplay();$('dialog').close();
 const token=renderToken,notes=round.score,quest=quests[saved.world];
 $('landscape').scrollIntoView({block:'nearest'});let step=0;
 function tick(){
  if(token!==renderToken||$('dialog').open)return;
  if(step===notes.length){replayTimer=0;complete();return}
  const n=notes[step][0];playTone(n.midi,quest.voices,0,.9);
  renderScene(true,++step);
  replayTimer=setTimeout(tick,step%4===0?610:330);
 }
 tick();
}
const letters='CDEFGAB', semitones=[0,2,4,5,7,9,11];
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
const defaults={xp:0,best:0,unlocked:0,world:0,sound:true,history:{},seen:{},songs:{},finished:false};
let saved;
try{saved=Object.assign({},defaults,JSON.parse(localStorage.getItem('notequest-v1'))||{})}catch{saved={...defaults}}
saved.world=Math.min(Math.max(0,Number(saved.world)||0),worlds.length-1);
function save(){try{localStorage.setItem('notequest-v1',JSON.stringify(saved))}catch{}}
let round, audio, octave, streak=0, pending=0, renderToken=0, midiAccess, teacherText='C4 D4 E4 G4 E4 D4 C4',teacherClef='treble',teacherLabels=false;
function playTone(midi,partials=[[1,.19],[2,.055],[3,.025]],delay=0,decay=.75){
 if(!saved.sound)return;
 try{
  audio??=new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume().catch(()=>{});
  const time=audio.currentTime+delay,frequency=440*2**((midi-69)/12);
  partials.forEach(([harmonic,volume])=>{
   const osc=audio.createOscillator(),gain=audio.createGain();osc.frequency.value=frequency*harmonic;
   gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(volume,time+.009);gain.gain.exponentialRampToValueAtTime(.0001,time+decay/Math.sqrt(harmonic));
   osc.connect(gain).connect(audio.destination);osc.start(time);osc.stop(time+decay+.05);
  });
 }catch{}
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function newRound(teacher,seq,clef){
 clearTimeout(pending);stopReplay();renderToken++;streak=0;
 round={teacher,seq,clef,score:seq.slice(),index:0,correct:0,assisted:false,pressed:new Set(),mistakes:[],retry:[],locked:false,done:false,results:[]};
 octave=teacher?Math.max(0,Math.min(7,seq[0][0].oct)):readNote(worlds[saved.world].notes.split(' ')[0]).oct;feedback('');$('dialog').close();draw();
}
function practice(world=saved.world){
 saved.world=world;save();
 const w=worlds[world],quest=quests[world];
 const visit=(saved.songs[world]||0)%(quest.verses.length+1);
 const pool=w.notes.split(' ');
 let melody;
 if(visit<quest.verses.length){
  melody=quest.verses[visit].split(' ');
 }else{
  // An unfamiliar variation tests whether the learner can read outside the written tune.
  melody=shuffle(pool);
  while(melody.length<8)melody.push(...shuffle(pool));
  melody=melody.slice(0,Math.max(8,pool.length));
 }
 newRound(false,melody.map(symbol=>[readNote(symbol)]),w.clef);
 const weak=pool.filter(name=>saved.history[world+':'+name]===false);
 if(weak.length)round.retry.push({name:shuffle(weak)[0],after:2});

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
 function key(m,black,i){
  const b=document.createElement('button');b.className=black?'black':'white';b.dataset.pitch=m;b.disabled=m<21||m>108||round.done;
  const letter=letters[i%7];
  const name=lessonName({l:letter,acc:black?'#':'',oct:octave+(i===7?1:0)});
  b.setAttribute('aria-label','Play '+name);
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
 for(let i=0;i<8;i++)key(start+(i===7?12:semitones[i]),false,i);
 [0,1,3,4,5].forEach(i=>key(start+semitones[i]+1,true,i));
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
 $('worldTitle').textContent=round.teacher?'Teacher challenge':w.name;$('worldBadge').textContent=round.teacher?'TEACHER MODE':'WORLD '+String(saved.world+1).padStart(2,'0');$('worldDesc').textContent=round.teacher?'Read and play your teacher’s sequence.':quests[saved.world].mission;
 $('roundTitle').textContent=round.teacher?'Sight-reading test':current().review?'Echo practice':(saved.songs[saved.world]||0)%3===2?'Pip’s new variation':quests[saved.world].song;$('prompt').textContent=round.teacher?(current().length>1?'Play every pitch in this chord.':'Play the highlighted note and read ahead.'):'Read the note, then play its piano key.';
 $('tip').textContent=round.teacher?'“Take your time. Check the clef, find the note, then play.”':'“'+w.tip+'”';
 $('listen').hidden=round.teacher;$('hint').hidden=round.teacher;
 document.querySelectorAll('nav button').forEach(b=>{const active=b.dataset.view===(round.teacher?'teacher':'adventure');b.classList.toggle('active',active);b.setAttribute('aria-current',active?'page':'false')});
 staff();keyboard();progress();soundButton();renderScene();
 $('fieldGuide').hidden=round.teacher;
 if(round.teaching){
  const name=lessonName(n);
  const landmark={C:'just left of the two black keys',D:'between the two black keys',E:'just right of the two black keys',F:'just left of the three black keys',G:'between the first two of the three black keys',A:'between the last two of the three black keys',B:'just right of the three black keys'};
  $('prompt').textContent='Meet '+name+'. Look at the note, then play the glowing key.';
  $('tip').textContent='“'+noteHint(n)+' '+memoryHint(n)+(n.acc?'':' Find '+n.l+' '+landmark[n.l]+'.')+'”';
  document.querySelector('[data-pitch="'+n.midi+'"]')?.classList.add('suggest');
 }else if(!round.teacher&&saved.world===0){
  $('tip').textContent='“Start from middle C. Each step from a line to a space moves one white key to the right.”';
 }
}
function feedback(text,retry=false){$('feedback').textContent=text;$('feedback').classList.toggle('retry',retry)}
function soundButton(){$('sound').innerHTML=icon(saved.sound?'volume':'mute');$('sound').setAttribute('aria-label',saved.sound?'Mute sound':'Enable sound');$('sound').title=saved.sound?'Mute sound':'Enable sound'}
$('sound').onclick=()=>{saved.sound=!saved.sound;if(!saved.sound)stopReplay();save();soundButton()};
function hint(){
 if(round.done||round.locked||round.teacher)return;round.assisted=true;streak=0;progress();
 const n=current()[0];feedback(noteHint(n)+' '+memoryHint(n),true);
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
  const previous=round.mistakes.includes(round.index);if(!previous){round.mistakes.push(round.index);if(!current().review)round.retry.push({name:n[0].name,after:round.index+2})}
  feedback(previous?noteHint(n[0]):(m>n[0].midi?'Try a lower key.':'Try a higher key.')+' Look at the line or space.',true);
  if(previous)hint();return;
 }
 round.pressed.add(m);
 if(round.pressed.size<n.length){feedback(round.pressed.size+' of '+n.length+' chord notes played.');return}
 finishNote(!round.assisted);
}
function finishNote(independent){
 round.locked=true;const names=current().map(lessonName).join(' + ');round.results.push({names,independent,lesson:round.teaching,review:!!current().review});
 if(independent){round.correct++;streak++;saved.best=Math.max(saved.best,streak)}
 else streak=0;
 if(!round.teacher){saved.xp+=independent?10:3;const pitch=current()[0].name;saved.seen[activeClef()+':'+pitch]=true;if(!round.teaching)saved.history[saved.world+':'+pitch]=independent}
 save();progress();
 if(!round.teacher){renderScene(true);if(!current().review)worldEcho(current()[0].midi)}
 const event=current().review?'Echo answered · '+names:$('sceneAction').textContent;
 feedback(round.teacher?'Answer recorded.':event+(independent?' · +10 XP':' · +3 XP'));
 const token=renderToken;
 pending=setTimeout(()=>{if(token!==renderToken)return;if(round.index+1>=round.seq.length){complete();return}
  round.index++;
  if(!round.teacher){
   const due=round.retry.findIndex(x=>x.after<=round.index);
   if(due>=0&&round.seq.length<round.score.length+2){
    const echo=[readNote(round.retry.splice(due,1)[0].name)];
    echo.review=true;
    round.seq.splice(round.index,0,echo);
   }
  }
  round.pressed.clear();round.locked=false;round.assisted=false;feedback('');draw();
 },round.teacher?320:700);
}
function show(title,html){$('dialogTitle').textContent=title;$('dialogBody').innerHTML=html;paintIcons($('dialogBody'));if(!$('dialog').open)$('dialog').showModal()}
function action(label,fn,cls='primary'){const b=document.createElement('button');b.textContent=label;b.className=cls;b.onclick=fn;return b}
function actions(...buttons){const row=document.createElement('div');row.className='modalActions';row.append(...buttons);$('dialogBody').append(row)}
function complete(){
 stopReplay();const firstFinish=!round.done;round.done=true;progress();keyboard();renderScene();
 if(firstFinish&&!round.teacher){saved.songs[saved.world]=(saved.songs[saved.world]||0)+1;save()}
 const total=round.results.filter(r=>!r.lesson).length,counts=round.correct+' / '+total,world=saved.world;
 const cleared=!round.teacher&&total>0&&round.correct/total>=.8&&worlds[world].notes.split(' ').every(n=>saved.history[world+':'+n]);
 if(cleared){saved.unlocked=Math.max(saved.unlocked,Math.min(world+1,worlds.length-1));if(world===worlds.length-1)saved.finished=true;save()}
 const missed=[...new Set(round.results.filter(x=>!x.independent&&!x.lesson).map(x=>x.names))];
 show(round.teacher?'Challenge complete!':quests[world].ending,(!round.teacher?'<p>'+quests[world].reward+'</p>':'')+'<div class="resultNumber">'+(total?counts:'Lesson cleared')+'</div><p>'+(total?'Read correctly on the first try without help.':'You’ve met the notes. Try them from memory next round.')+'</p>'+(missed.length?'<p>Practise next: <b>'+missed.join(', ')+'</b>.</p>':total?'<p>Every practice pitch played independently!</p>':'')+(!round.teacher?'<p>'+(cleared?(world===worlds.length-1?'You’ve cleared every world!':'You can now explore '+worlds[world+1].name+'.'):'Read every pitch independently and score at least 80% in a round to clear this world.')+'</p>':''));
 if(round.teacher)actions(action('New teacher test',teacherSetup),action('Back to adventure',()=>practice(),'secondary'));
 else actions(action('Replay your tune',replaySong,'secondary'),action(cleared&&world<worlds.length-1?'Next world':'Play another round',()=>practice(cleared?Math.min(world+1,worlds.length-1):world)),action('World map',map,'secondary'));
 feedback('Round complete.');$('feedback').append(' ',action('See results',complete,'hint'));
}
function map(){
 show('World map','<p>Follow Pip’s journey. Choose an open world to play its song.</p>');
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
 show('How to play','<p>Read the note from its place on the five staff lines. Tap the matching piano key or play a connected MIDI keyboard.</p><p>In the meadow, find middle C just left of a pair of black keys. D is between them and E is just to their right.</p><p>Each independent answer earns 10 XP. Use a hint or hear the note whenever you need help, then earn 3 XP by finding it.</p><p>In a teacher test, use the octave buttons to reach higher or lower notes. For a chord, play each pitch once, together or one at a time.</p><p id="midiStatus" role="status"></p>');
 actions(action('Let’s play',()=>$('dialog').close()),action('Connect MIDI keyboard',connectMidi,'secondary'));
}
$('help').onclick=help;$('close').onclick=()=>$('dialog').close();
$('octDown').onclick=()=>{if(octave>0){octave--;keyboard()}};$('octUp').onclick=()=>{if(octave<7){octave++;keyboard()}};
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.dataset.view==='map')map();else if(b.dataset.view==='teacher')teacherSetup();else if(round.teacher||round.done)practice();else $('game').scrollIntoView({block:'nearest'})});
document.querySelector('.brand').onclick=e=>{e.preventDefault();if(round.teacher||round.done)practice();else window.scrollTo(0,0)};
practice();
