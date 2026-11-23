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
const worlds=[
 {name:'Melody Meadow',desc:'Find middle C, D and E on the treble staff.',clef:'treble',notes:'C4 D4 E4',tip:'Middle C sits on its own little line just below the staff. Look for it!'},
 {name:'Willow Woods',desc:'Follow the notes up through the trees.',clef:'treble',notes:'C4 D4 E4 F4 G4',tip:'Move from a line to the next space and the note goes up one letter.'},
 {name:'Treble Tower',desc:'Climb a whole octave, one note at a time.',clef:'treble',notes:'C4 D4 E4 F4 G4 A4 B4 C5',tip:'G sits on the line that curls through the treble clef.'},
 {name:'Bass Brook',desc:'Find your footing in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3',tip:'The two dots of the bass clef sit on either side of the F line.'},
 {name:'Crystal Cavern',desc:'Explore a full octave in the bass clef.',clef:'bass',notes:'C3 D3 E3 F3 G3 A3 B3 C4',tip:'The top bass-clef line is A. Step into the space above it to find B.'},
 {name:'Chromatic Castle',desc:'Discover the notes between the natural bars.',clef:'treble',notes:'C4 C#4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4',tip:'A sharp raises a note by a semitone. A flat lowers it by a semitone.'}
];
const quests=[
 {kind:'meadow',song:'The Bellflower Song',verses:['C4 D4 E4 E4 D4 C4 D4 C4','E4 D4 C4 D4 E4 E4 D4 C4']},
 {kind:'woods',song:'The Firefly Call',verses:['C4 E4 G4 F4 E4 D4 G4 C4','G4 E4 C4 D4 F4 E4 D4 C4']},
 {kind:'tower',song:'The Tower Carillon',verses:['C4 E4 G4 C5 B4 A4 F4 D4 G4 C4','G4 B4 C5 A4 F4 D4 E4 C4']},
 {kind:'brook',song:'The Stepping-Stone Jig',verses:['C3 D3 E3 G3 F3 E3 D3 C3','G3 E3 C3 D3 F3 G3 D3 C3']},
 {kind:'cavern',song:'The Crystal Echo',verses:['C3 G3 E3 A3 F3 D3 B3 C4','C4 B3 G3 A3 F3 E3 D3 C3']},
 {kind:'castle',song:'The Castle Key',verses:['C4 E4 G4 B4 Bb4 A4 Ab4 G4 F#4 F4 E4 Eb4 D4 C#4 C4','C4 C#4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4 G4 E4 C4']}
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
 const position=n.diatonic-base;
 let ledger='';
 for(let k=-2;k>=position;k-=2)ledger+='<path d="M135 '+(79-k*6)+'h30"/>';
 for(let k=10;k<=position;k+=2)ledger+='<path d="M135 '+(79-k*6)+'h30"/>';
 return '<svg class="guideStaff" viewBox="0 0 274 112" aria-label="'+lessonName(n)+' on the '+clef+' staff" role="img"><g stroke="#66776b">'+lines+ledger+'</g><text x="33" y="'+(clef==='treble'?67:43)+'" font-family="Bravura" font-size="48">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text><ellipse cx="150" cy="'+y+'" rx="8.5" ry="5.6" transform="rotate(-17 150 '+y+')"/><path stroke="currentColor" stroke-width="2" d="M'+(y>55?158:142)+' '+y+'v'+(y>55?-30:30)+'"/></svg>';
}
function compareClefs(transition=false){
 if(round.locked&&!round.done)return;
 const clef=activeClef(),bass=clef==='bass',middle=readNote('C4');
 const title=transition?'Switch to '+clef+' clef':'Compare the clefs';
 if(round.teacher){
  show(transition?title:'Current clef','<p>The next note uses <b>'+clef+' clef</b>. Look for its symbol at the start of the stave.</p>');
  actions(action('Continue test',()=>$('dialog').close()));return;
 }
 if(!transition&&!round.done){round.assisted=true;streak=0;progress()}
 const card=(c,caption)=>'<div class="clefCard"><b>'+ (c==='treble'?'Treble clef':'Bass clef')+'</b>'+guideStaff(c,middle)+'<span>'+caption+'</span><button class="secondary hearMiddle">Hear middle C</button></div>';
 const example=!round.teacher&&bass?'<div class="lowerExample">'+guideStaff('bass',readNote('C3'))+'<div><b>The lower C in this world</b><p>Start at the bottom. The second space is C, one octave below middle C.</p><button id="hearLower" class="secondary">Hear the lower C</button></div></div>':'';
 show(title,'<p>The clef tells you which notes live on the lines and spaces. The bottom line is E in treble clef and G in bass clef.</p><h3>Same sound, same middle C</h3><div class="clefPair">'+card('treble','On the little line below the stave.')+card('bass','On the little line above the stave.')+'</div>'+example);
 $('dialogBody').querySelectorAll('.hearMiddle').forEach(b=>b.onclick=()=>playTone(60));
 if($('hearLower'))$('hearLower').onclick=()=>playTone(48);
 actions(action('Play in '+clef+' clef',()=>$('dialog').close()));
}
function announceClef(){
 const clef=activeClef(),previous=saved.lastClef;
 $('landscape').dataset.clef=clef;
 $('clefLabel').setAttribute('aria-label',(clef==='bass'?'Bass':'Treble')+' clef. Compare clefs');
 if(previous===clef)return;
 saved.lastClef=clef;save();
 if(previous||clef==='bass')compareClefs(true);
}
$('clefLabel').onclick=()=>compareClefs();

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
let replayTimer=0;
function stopReplay(){clearTimeout(replayTimer);replayTimer=0}
function replaySong(){
 stopReplay();$('dialog').close();
 const token=renderToken,notes=round.score;
 $('landscape').scrollIntoView({block:'nearest'});let step=0;
 function tick(){
  if(token!==renderToken)return;
  if($('dialog').open){replayTimer=0;staff();return}
  if(step===notes.length){replayTimer=0;complete();return}
  notes[step].forEach(n=>playTone(n.midi));
  trailStaff(notes,step,{accepted:true,travel:step>0});step++;
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
const defaults={xp:0,best:0,unlocked:0,world:0,sound:true,history:{},seen:{},songs:{},dashBest:{},dashLearned:{},instrument:'piano',finished:false};
let saved;
try{saved=Object.assign({},defaults,JSON.parse(localStorage.getItem('notequest-v1'))||{})}catch{saved={...defaults}}
// Earlier saves persisted the old default even when the player never chose it.
if(!saved.pianoDefault){saved.instrument='piano';saved.pianoDefault=true}
if(!['glockenspiel','piano','xylophone'].includes(saved.instrument))saved.instrument=defaults.instrument;
saved.world=Math.min(Math.max(0,Number(saved.world)||0),worlds.length-1);
// Keep independently read pitches available for the bonus game after later mistakes.
for(const [key,independent] of Object.entries(saved.history)){
 if(independent)saved.dashLearned[key]=true;
}
function save(){try{localStorage.setItem('notequest-v1',JSON.stringify(saved))}catch{}}
let round, audio, octave, streak=0, pending=0, renderToken=0, midiAccess, teacherText='C4 D4 E4 G4 E4 D4 C4',teacherClef='treble',teacherLabels=false;
const voices={
 piano:{partials:[[1,.53],[2,.19],[3,.085],[4,.035]],decay:.88},
 glockenspiel:{partials:[[1,.58],[2.76,.13],[5.4,.07]],decay:1.15}
};
let instrumentOutput;
const malletBuffers=new Map();
const recordedPitches=Object.keys(xylophoneSamples).map(Number);
function playXylophone(pitch,time){
 const nearest=recordedPitches.reduce((best,n)=>Math.abs(n-pitch)<Math.abs(best-pitch)?n:best);
 if(!malletBuffers.has(nearest)){
  const pcm=atob(xylophoneSamples[nearest]);
  const buffer=audio.createBuffer(1,pcm.length/2,22050),samples=buffer.getChannelData(0);
  for(let i=0;i<samples.length;i++){
   const value=pcm.charCodeAt(i*2)|(pcm.charCodeAt(i*2+1)<<8);
   samples[i]=(value>=32768?value-65536:value)/32768;
  }
  malletBuffers.set(nearest,buffer);
 }
 const strike=audio.createBufferSource(),level=audio.createGain();
 strike.buffer=malletBuffers.get(nearest);
 const rate=2**((pitch-nearest)/12),duration=Math.min(1.2,strike.buffer.duration/rate);
 strike.playbackRate.value=rate;
 level.gain.setValueAtTime(2.8,time);
 level.gain.setValueAtTime(2.8,time+duration*.85);
 level.gain.linearRampToValueAtTime(0,time+duration);
 strike.connect(level).connect(instrumentOutput);
 strike.start(time);strike.stop(time+duration);
 instrumentMic.blockSpeaker(duration);
}
function playTone(midi){
 if(!saved.sound)return;
 try{
  audio??=new (window.AudioContext||window.webkitAudioContext)();
  if(audio.state!=='running')audio.resume().catch(()=>{});
  if(!instrumentOutput){
   // Leave a single strike at full level and tame overlapping notes and chords.
   instrumentOutput=audio.createDynamicsCompressor();
   instrumentOutput.threshold.value=-6;instrumentOutput.knee.value=3;
   instrumentOutput.ratio.value=16;instrumentOutput.attack.value=.002;instrumentOutput.release.value=.09;
   const headroom=audio.createGain();headroom.gain.value=.74;
   instrumentOutput.connect(headroom).connect(audio.destination);
  }
  const offset=instrumentMic.session?.phase==='play'?instrumentMic.session.offset:0;
  const pitch=midi-offset,time=audio.currentTime;
  if(saved.instrument==='xylophone'){playXylophone(pitch,time);return}
  const {partials,decay}=voices[saved.instrument];
  instrumentMic.blockSpeaker(decay);
  const frequency=440*2**((pitch-69)/12);
  for(const [harmonic,volume] of partials){
   if(frequency*harmonic>=audio.sampleRate/2)continue;
   const osc=audio.createOscillator(),gain=audio.createGain();
   const end=time+decay/Math.sqrt(harmonic);
   osc.frequency.value=frequency*harmonic;
   gain.gain.setValueAtTime(0,time);
   gain.gain.linearRampToValueAtTime(volume,time+.005);
   gain.gain.exponentialRampToValueAtTime(volume*.33,time+(end-time)*.25);
   gain.gain.exponentialRampToValueAtTime(.0001,end);
   osc.connect(gain).connect(instrumentOutput);osc.start(time);osc.stop(end);
  }
 }catch{}
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function newRound(teacher,seq,clef){
 clearTimeout(pending);stopDash();stopReplay();renderToken++;streak=0;
 $('finishPanel').hidden=true;$('piano').hidden=false;
 round={teacher,seq,clef,score:seq.slice(),index:0,correct:0,assisted:false,pressed:new Set(),mistakes:[],locked:false,done:false,results:[]};
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
 if(weak.length)addEncore(shuffle(weak)[0]);

}
function addEncore(name){
 const encores=round.seq.slice(round.score.length);
 if(encores.length>=2||encores.some(chord=>chord[0].name===name))return;
 const chord=[readNote(name)];chord.review=true;
 round.seq.push(chord);
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
function noteHint(n,clef=activeClef()){
 const bottom=clef==='treble'?30:18,d=n.diatonic-bottom;
 const placement=d===-2?'on the first little line below the staff':d===-1?'in the space just below the staff':d===9?'in the space just above the staff':d===10?'on the first little line above the staff':d>=0&&d<=8?(d%2===0?'on line '+(d/2+1):'in space '+((d+1)/2))+' counting from the bottom':(d<0?'below':'above')+' the staff';
 const name=lessonName(n);
 return name[0].toUpperCase()+name.slice(1)+' sits '+placement+'.'+(n.acc==='b'?' A flat moves a semitone lower.':n.acc==='#'?' A sharp moves a semitone higher.':'');
}
function writtenNotes(notes,headX,base,bottom,step,y,accidentals){
  const ys=notes.map(y),sorted=[...notes].sort((a,b)=>a.diatonic-b.diatonic),down=(Math.max(...ys)+Math.min(...ys))/2<=bottom-4*step;
  const ledger=new Set();
  for(const n of sorted){const d=n.diatonic-base;for(let i=-2;i>=d;i-=2)ledger.add(i);for(let i=10;i<=d;i+=2)ledger.add(i)}
  let svg='';
  for(const n of ledger)svg+='<path d="M'+(headX-17)+' '+(bottom-n*step)+'h34" stroke="currentColor" stroke-width="2"/>';
  let prev=-20,shift=false,accIdx=0;
  for(const n of sorted){
   shift=n.diatonic-prev===1?!shift:false;prev=n.diatonic;
   const x=headX+(shift?(down?-13:13):0);
   svg+='<ellipse class="writtenPitch" cx="'+x+'" cy="'+y(n)+'" rx="9.1" ry="6.3" transform="rotate(-17 '+x+' '+y(n)+')" fill="currentColor"/>';
   if(n.acc||accidentals.get(n.diatonic)){
    const glyph=n.acc==='#'?'&#xe262;':n.acc==='b'?'&#xe260;':'&#xe261;';
    svg+='<text x="'+(headX-29-(accIdx++%3)*12)+'" y="'+y(n)+'" font-family="Bravura" font-size="52" fill="currentColor">'+glyph+'</text>';
   }
   accidentals.set(n.diatonic,n.acc);
  }
  const stemX=headX+(down?-8:8);
  svg+='<path stroke="currentColor" stroke-width="2.3" d="M'+stemX+' '+(down?Math.min(...ys):Math.max(...ys))+' V'+(down?Math.max(...ys)+34:Math.min(...ys)-34)+'"/>';

 return svg;
}
// The stave scrolls beneath the firefly. Every input uses hit(), so a real strike
// and a screen tap advance the same written pitch.
function trailStaff(sequence,index,{accepted=false,travel=false,finished=false}={}){
 const clef=activeClef(),base=clef==='treble'?30:18,bottom=92,step=6;
 const y=n=>bottom-(n.diatonic-base)*step;
 const first=107,stride=70,pageStart=i=>Math.floor(i/3)*3;
 const offset=-pageStart(index)*stride,priorIndex=Math.max(0,index-1);
 const priorOffset=-pageStart(priorIndex)*stride;
 const focus=first+index*stride+offset,priorFocus=first+priorIndex*stride+priorOffset;
 const animated=travel&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 const active=sequence[index][0],arrival=y(active)+20;
 const prior=sequence[Math.max(0,index-1)][0],lift=y(prior)+20-arrival;
 const clipId='musicWindow',end=first+(sequence.length-1)*stride+33;
 let svg='<svg class="staff trailStaff" viewBox="0 0 410 145" aria-hidden="true"><defs><clipPath id="'+clipId+'"><rect x="61" width="346" height="145"/></clipPath></defs>';
 const noteX=i=>first+i*stride;
 // The coloured section of each of the five real stave lines is the trail already read.
 const reached=finished?focus+33:accepted?focus:index?Math.max(65,focus-stride):65;
 for(let i=0;i<5;i++){
  const line=bottom-i*2*step;
  svg+='<path class="trailLine" d="M9 '+line+'H'+Math.min(405,end+offset+4)+'"/><path class="readLine" d="M9 '+line+'H'+reached+'"/>';
 }
 svg+='<text x="13" y="'+(clef==='treble'?bottom-step*2:bottom-step*6)+'" font-family="Bravura" font-size="48" fill="#fff7d9">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text>';
 svg+='<g clip-path="url(#'+clipId+')"><g transform="translate('+offset+' 0)">';
 if(animated&&priorOffset!==offset)svg+='<animateTransform attributeName="transform" type="translate" from="'+priorOffset+' 0" to="'+offset+' 0" dur=".26s" fill="freeze"/>';
 const accidentals=new Map();
 sequence.forEach((notes,i)=>{
  const x=noteX(i),here=i===index,read=i<index||(here&&accepted);
  if(here)svg+='<rect class="targetLane" x="'+(x-24)+'" y="9" width="48" height="125" rx="12"/>';
  svg+='<g class="trailNote '+(read?'read':here?'target':'ahead')+'" data-step="'+i+'">'+writtenNotes(notes,x,base,bottom,step,y,accidentals)+'</g>';
  if(read&&(!here||finished)){
   const dotY=y(notes[0])+19;
   svg+='<path class="trailCheck" d="M'+(x-5)+' '+dotY+'l3 3 7-7"/>';
  }
 });
 svg+='<path d="M'+end+' '+(bottom-48)+'v48m4-48v48" stroke="#fff3d6" stroke-width="2"/></g></g>';
 if(!finished){
  svg+='<g transform="translate('+focus+' '+arrival+')"><g class="trailFly">';
  if(animated)svg+='<animateMotion dur=".26s" path="M'+(priorFocus-focus)+' '+lift+' Q'+((priorFocus-focus)/2)+' '+(Math.min(0,lift)-20)+' 0 0" fill="freeze"/>';
  svg+='<circle r="10" fill="#ffd759" opacity=".20"/><path d="M0-1Q-10-12-9-5T-1 0M0-1Q10-12 9-5T1 0" fill="#ecfff2"/><ellipse ry="4.5" rx="3.6" fill="#ffdf63" stroke="#654722"/><circle cy="-3.6" r="2.1" fill="#4b3828"/></g></g>';
 }
 if(accepted&&!finished)svg+='<circle class="noteBloom" cx="'+focus+'" cy="'+y(active)+'" r="14"/>';
 $('score').innerHTML=svg+'</svg>';
 $('score').setAttribute('aria-label',(clef==='treble'?'Treble':'Bass')+' clef. '+(finished?'Tune complete.':'Follow the firefly. Note '+(index+1)+' of '+sequence.length+'.'));
}
function staff(travel=false){
 const clefName=activeClef()==='treble'?'Treble clef':'Bass clef';
 $('clefLabel').textContent=clefName;
 if(!round.teacher){
  const encore=current().review;
  const sequence=encore?round.seq.slice(round.score.length):round.score;
  const index=encore?round.index-round.score.length:round.index;
  trailStaff(sequence,index,{travel:travel&&index>0,accepted:round.locked,finished:round.done});
  return;
 }
 $('score').setAttribute('aria-label','Read the highlighted note or chord in '+clefName);
 const clef=activeClef(),base=clef==='treble'?30:18,spacing=13,step=spacing/2,bottom=89;
 const y=n=>bottom-(n.diatonic-base)*step;
 // A teacher phrase keeps its place on the page as the learner plays through it.
 let start=Math.floor(round.index/4)*4,end=Math.min(round.seq.length,start+4);
  if(round.clef==='auto'){
   const sameClef=i=>(round.seq[i][0].midi<60?'bass':'treble')===clef;
   for(let i=round.index-1;i>=start;i--)if(!sameClef(i)){start=i+1;break}
   for(let i=round.index+1;i<end;i++)if(!sameClef(i)){end=i;break}
  }
 const phrase=round.seq.slice(start,end),allY=phrase.flat().map(y);
 const top=Math.min(7,Math.min(...allY)-40),edge=Math.max(127,Math.max(...allY)+32);
 let svg='<svg class="staff" viewBox="0 '+top+' 410 '+(edge-top)+'" aria-hidden="true">';
 const slot=284/phrase.length,xAt=i=>phrase.length===1?217:91+slot*(i+.5);
 svg+='<rect x="'+(xAt(round.index-start)-22)+'" y="'+(top+2)+'" width="44" height="'+(edge-top-4)+'" rx="5" fill="#cee5bf"/>';
 svg+='<g stroke="#56625b" stroke-width="1.4">';
 for(let i=0;i<5;i++)svg+='<path d="M26 '+(bottom-spacing*i)+'h358"/>';
 svg+='</g><text x="46" y="'+(clef==='treble'?bottom-spacing:bottom-3*spacing)+'" font-family="Bravura" font-size="52" fill="#26352f">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text>';
 const accidentals=new Map();
 phrase.forEach((notes,i)=>{
  svg+='<g color="#22332d" opacity="'+(i+start<round.index?'.45':'1')+'">'+writtenNotes(notes,xAt(i),base,bottom,step,y,accidentals)+'</g>';
 });
 $('score').innerHTML=svg+'</svg>';
}
function renderPiano(p,firstOctave,hide,pressed,disabled,play){
 p.innerHTML='';p.setAttribute('aria-label','Playable '+saved.instrument);
 const start=12*(firstOctave+1);
 function key(m,black,i){
  const b=document.createElement('button');b.className=black?'black':'white';b.dataset.pitch=m;b.disabled=m<21||m>108||disabled;
  const letter=letters[i%7];
  const name=lessonName({l:letter,acc:black?'#':'',oct:firstOctave+(i===7?1:0)});
  b.setAttribute('aria-label','Play '+name);
  b.style.setProperty('--bar-index',i);
  b.style.setProperty('--bar-tone',['#eda99a','#eebc83','#ecd585','#a9cc99','#8ecac1','#9dbde0','#b3a8d7','#ddadc8'][i]);
  if(black){
   b.style.left=((i+1)*12.5)+'%';
   const flat=letters[i+1];
   b.setAttribute('aria-label','Play '+name+' or '+flat+' flat');
   if(!hide)b.innerHTML='<b>'+letter+'♯</b><small>'+flat+'♭</small>';
  }
  else b.innerHTML='<b>'+(hide?'':letter)+'</b><small>'+(!hide&&letter==='C'?(m===60?'middle C':m===48?'lower C':m===72?'upper C':'&nbsp;'):'&nbsp;')+'</small>';
  if(pressed.has(m))b.classList.add('played');
  b.addEventListener('pointerdown',e=>{
   delete b.dataset.directTap;
   if(e.pointerType==='touch'||e.pointerType==='pen'){
    b.dataset.directTap='yes';
    e.preventDefault();play(m);
   }
  });
  b.addEventListener('click',e=>{
   if(e.detail===0||b.dataset.directTap!=='yes')play(m);
   delete b.dataset.directTap;
  });p.append(b);
 }
 for(let i=0;i<8;i++)key(start+(i===7?12:semitones[i]),false,i);
 [0,1,3,4,5].forEach(i=>key(start+semitones[i]+1,true,i));
}
function keyboard(){
 renderPiano($('piano'),octave,round.teacher&&!teacherLabels,round.pressed,round.done,hit);
 $('octaveControls').hidden=!round.teacher;$('octaveLabel').textContent='From '+lessonName({l:'C',oct:octave});$('octDown').disabled=octave===0;$('octUp').disabled=octave===7;
}
function progress(){
 updateDashEntry();
 const level=Math.floor(saved.xp/100)+1,earned=saved.xp%100;
 $('levelName').textContent='Level '+level;$('xp').textContent=saved.xp+' XP';$('xpBar').style.width=earned+'%';$('levelGoal').textContent=(100-earned)+' XP to level '+(level+1);
 $('streak').textContent=streak;$('best').textContent=saved.best;
 const encore=!!current().review,start=encore?round.score.length:0;
 const total=encore?round.seq.length-start:round.score.length;
 const completed=round.done?total:Math.min(total,round.results.length-start);
 $('counter').textContent=round.done?'Round complete':(encore?'Encore ':'Note ')+(round.index-start+1)+' of '+total;$('roundCount').textContent=completed+' / '+total;
 $('segments').innerHTML=Array.from({length:Math.min(total,16)},(_,i)=>'<span class="'+((i+1)*total/Math.min(total,16)<=completed?'done':'')+'"></span>').join('');
}
function draw(travel=false){
 const w=worlds[saved.world],n=current()[0];
 $('landscape').dataset.world=round.teacher?'teacher':quests[saved.world].kind;
 const seenKey=activeClef()+':'+n.name;
 round.teaching=!round.teacher&&!saved.seen[seenKey]&&saved.history[saved.world+':'+n.name]===undefined;
 if(round.teaching)round.assisted=true;
 $('worldTitle').textContent=round.teacher?'Teacher challenge':w.name;$('worldBadge').textContent=round.teacher?'TEACHER MODE':'WORLD '+String(saved.world+1).padStart(2,'0');
 $('roundTitle').textContent=round.teacher?'Sight-reading test':current().review?'Encore practice':(saved.songs[saved.world]||0)%3===2?'Melody variation':quests[saved.world].song;$('prompt').textContent=round.teacher?(current().length>1?'Strike each bar of the chord, one at a time.':'Play the highlighted note and read ahead.'):current().review?'Encore! Play this note once more.':'Play the gold note to move the firefly.';
 $('tip').textContent=round.teacher?'“Take your time. Check the clef, find the note, then play.”':'“'+w.tip+'”';
 $('listen').hidden=round.teacher;$('hint').hidden=round.teacher;
 document.querySelectorAll('nav button').forEach(b=>{const active=b.dataset.view===(round.teacher?'teacher':'adventure');b.classList.toggle('active',active);b.setAttribute('aria-current',active?'page':'false')});
 staff(travel);keyboard();progress();soundButton();
 $('fieldGuide').hidden=round.teacher;
 if(round.teaching){
  const name=lessonName(n);
  $('prompt').textContent='Meet '+name+'. Strike the glowing bar to move the firefly.';
  $('tip').textContent='“'+noteHint(n)+' '+memoryHint(n)+'”';
  $('piano').querySelector('[data-pitch="'+n.midi+'"]')?.classList.add('suggest');
 }else if(!round.teacher&&saved.world===0){
  $('tip').textContent='“Start from middle C. Each step from a line to a space moves one natural bar to the right.”';
 }
 $('prompt').textContent=instrumentWords($('prompt').textContent);
 $('tip').textContent=instrumentWords($('tip').textContent);
 announceClef();
}
function feedback(text,retry=false){$('feedback').textContent=instrumentWords(text);$('feedback').classList.toggle('retry',retry)}
function instrumentWords(text){
 if(saved.instrument!=='piano')return text;
 return text.replace(/\bbars\b/g,'keys').replace(/\bbar\b/g,'key').replace(/\bStrike\b/g,'Play').replace(/\bstrike\b/g,'play');
}
function styleInstrument(){
 document.documentElement.dataset.instrument=saved.instrument;
 for(const [id,name] of Object.entries({chooseGlock:'glockenspiel',choosePiano:'piano',chooseXylo:'xylophone'})){
  $(id).setAttribute('aria-pressed',name===saved.instrument);
 }
 $('piano').setAttribute('aria-label','Playable '+saved.instrument);
}
function chooseInstrument(value){
 if(value===saved.instrument)return;
 saved.instrument=value;save();styleInstrument();
 if(instrumentMic.session?.phase==='play')instrumentMic.calibrate();
 else if(!instrumentMic.session)instrumentMic.message(instrumentWords('Tap the bars, or let the iPad listen to yours.'));
 if(!round.locked&&!round.done)draw();
}
$('chooseXylo').onclick=()=>chooseInstrument('xylophone');
$('choosePiano').onclick=()=>chooseInstrument('piano');
$('chooseGlock').onclick=()=>chooseInstrument('glockenspiel');
function soundButton(){$('sound').innerHTML=icon(saved.sound?'volume':'mute');$('sound').setAttribute('aria-label',saved.sound?'Mute sound':'Enable sound');$('sound').title=saved.sound?'Mute sound':'Enable sound'}
$('sound').onclick=()=>{saved.sound=!saved.sound;save();soundButton()};
function hint(){
 if(round.done||round.locked||round.teacher)return;round.assisted=true;streak=0;progress();
 const n=current()[0];feedback(noteHint(n)+' '+memoryHint(n),true);
 $('piano').querySelector('[data-pitch="'+n.midi+'"]')?.classList.add('suggest');
}
$('hint').onclick=hint;$('listen').onclick=()=>{if(!round.done&&!round.locked){if(!saved.sound){feedback('Sound is muted. Use the speaker button to listen.',true);return}round.assisted=true;streak=0;progress();current().forEach(n=>playTone(n.midi));feedback('Listen, then find the bar.',true)}};
function hit(m,fromMicrophone=false){
 if(dash&&$('dialog').open){dashHit(m,fromMicrophone);return}
 if(round.done||round.locked||$('dialog').open)return;
 if(!fromMicrophone)playTone(m);
 if(m<21||m>108)return;
 const n=current(),el=$('piano').querySelector('[data-pitch="'+m+'"]'),match=n.some(x=>x.midi===m);
 el?.classList.add(match?'played':'miss');if(el)setTimeout(()=>el.classList.remove(match?'played':'miss'),300);
 if(!match){
  streak=0;round.assisted=true;progress();
  if(round.teacher){finishNote(false);return}
  const previous=round.mistakes.includes(round.index);if(!previous){round.mistakes.push(round.index);if(!current().review)addEncore(n[0].name)}
  feedback(previous?noteHint(n[0]):(m>n[0].midi?'Try a lower bar.':'Try a higher bar.')+' Look at the line or space.',true);
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
 if(!round.teacher){saved.xp+=independent?10:3;const pitch=current()[0].name;saved.seen[activeClef()+':'+pitch]=true;if(!round.teaching)saved.history[saved.world+':'+pitch]=independent;if(independent)saved.dashLearned[saved.world+':'+pitch]=true}
 save();progress();
 if(!round.teacher)staff();
 feedback(round.teacher?'Answer recorded.':names+' · '+(independent?'+10 XP':'+3 XP'));
 const token=renderToken;
 pending=setTimeout(()=>{if(token!==renderToken)return;if(round.index+1>=round.seq.length){complete();return}
  round.index++;
  round.pressed.clear();round.locked=false;round.assisted=false;feedback('');draw(!round.teacher);
 },round.teacher?320:340);
}
function show(title,html){$('dialogTitle').textContent=title;$('dialogBody').innerHTML=html;paintIcons($('dialogBody'));if(!$('dialog').open)$('dialog').showModal()}
function action(label,fn,cls='primary'){const b=document.createElement('button');b.textContent=label;b.className=cls;b.onclick=fn;return b}
function actions(...buttons){const row=document.createElement('div');row.className='modalActions';row.append(...buttons);$('dialogBody').append(row)}
function nextRound(){
 if(round.teacher){newRound(true,round.score.slice(),round.clef);return}
 practice(round.nextWorld);
}
$('continueRound').onclick=nextRound;
function firstResultAction(label,fn){
 const button=action(label,fn,'primary nextRound');
 $('dialogBody').prepend(button);$('dialog').scrollTop=0;button.focus({preventScroll:true});
}
function complete(){
 stopReplay();const firstFinish=!round.done;round.done=true;staff();progress();keyboard();
 if(firstFinish&&!round.teacher){saved.songs[saved.world]=(saved.songs[saved.world]||0)+1;save();updateDashEntry()}
 const total=round.results.filter(r=>!r.lesson).length,counts=round.correct+' / '+total,world=saved.world;
 const cleared=!round.teacher&&total>0&&round.correct/total>=.8&&worlds[world].notes.split(' ').every(n=>saved.history[world+':'+n]);
 if(cleared){saved.unlocked=Math.max(saved.unlocked,Math.min(world+1,worlds.length-1));if(world===worlds.length-1)saved.finished=true;save()}
 const missed=[...new Set(round.results.filter(x=>!x.independent&&!x.lesson).map(x=>x.names))];
 show(round.teacher?'Challenge complete!':'Tune complete!',(!round.teacher?'<p>You reached the final bar. Listen back to the tune you just played.</p>':'')+'<div class="resultNumber">'+(total?counts:'Lesson cleared')+'</div><p>'+(total?'Read correctly on the first try without help.':'You’ve met the notes. Try them from memory next round.')+'</p>'+(missed.length?'<p>Practise next: <b>'+missed.join(', ')+'</b>.</p>':total?'<p>Every practice pitch played independently!</p>':'')+(!round.teacher?'<p>'+(cleared?(world===worlds.length-1?'You’ve cleared every world!':'You can now explore '+worlds[world+1].name+'.'):'Read every pitch independently and score at least 80% in a round to clear this world.')+'</p>':''));
 round.nextWorld=cleared?Math.min(world+1,worlds.length-1):world;
 const label=round.teacher?'Play this test again':round.nextWorld!==world?'Continue to '+worlds[round.nextWorld].name:'Play next round';
 $('finishTitle').textContent=round.teacher?'Test complete!':'Tune complete!';
 $('continueRound').textContent=label;
 $('piano').hidden=true;$('octaveControls').hidden=true;$('finishPanel').hidden=false;
 $('hint').hidden=true;$('listen').hidden=true;
 firstResultAction(label,nextRound);
 if(round.teacher)actions(action('New teacher test',teacherSetup,'secondary'),action('Back to adventure',()=>practice(),'secondary'));
 else actions(action('Replay your tune',replaySong,'secondary'),action('World map',map,'secondary'));
 if(!round.teacher&&dashPool().length>=2)actions(action('Play Firefly Dash',openDash,'dashLaunch'));
 feedback('');$('prompt').textContent='';$('feedback').append(action('See results',complete,'hint'));
}
function map(){
 show('World map','<p>Choose an open world and play your way along its stave.</p>');
 worlds.forEach((w,i)=>{const locked=i>saved.unlocked,b=document.createElement('button');b.disabled=locked;b.className='worldRow'+(i===saved.world?' current':'');
 b.innerHTML='<span class="worldNum">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+w.name+'</strong><small>'+w.clef[0].toUpperCase()+w.clef.slice(1)+' clef · '+w.notes.split(' ').length+' notes</small></span><i>'+icon(locked?'lock':i<saved.unlocked||saved.finished?'check':'flag')+'</i>';b.onclick=()=>practice(i);$('dialogBody').append(b)});
}
function teacherSetup(){
 show('Teacher mode','<p>Build a test in the order you want it played. The learner gets one attempt at each note or chord.</p><label for="seq">Notes or chords</label><textarea id="seq" spellcheck="false"></textarea><p>Use C4 for middle C, F#4 for a sharp, and Bb3 for a flat. Join chord notes with +, as in C4+E4+G4.</p><label for="selectClef">Clef</label><select id="selectClef"><option value="treble">Treble clef</option><option value="bass">Bass clef</option><option value="auto">Choose by pitch</option></select><label><input id="testLabels" type="checkbox"> Show note names during the test</label><p role="alert" class="error" id="parseError"></p>');
 $('seq').value=teacherText;$('selectClef').value=teacherClef;$('testLabels').checked=teacherLabels;
 actions(action('Start test',()=>{try{const sequence=parseSequence($('seq').value);teacherText=$('seq').value;teacherClef=$('selectClef').value;teacherLabels=$('testLabels').checked;newRound(true,sequence,teacherClef)}catch(e){$('parseError').textContent=e.message;$('seq').focus()}}),action('How to play',help,'secondary'));
}
async function connectMidi(){
 const status=$('midiStatus');
 if(!navigator.requestMIDIAccess){status.textContent='MIDI needs a browser with Web MIDI support, such as desktop Chrome or Edge. The on-screen instrument is ready.';return}
 try{
  midiAccess=await navigator.requestMIDIAccess({sysex:false});
  const bind=()=>{const inputs=[...midiAccess.inputs.values()].filter(i=>i.state==='connected');for(const input of inputs)input.onmidimessage=e=>{const [status,pitch,vel]=e.data;if((status&240)===144&&vel>0)hit(pitch)};if(status.isConnected)status.textContent=inputs.length?'Connected to '+inputs.map(i=>i.name).join(', ')+'.':'Plug in a USB MIDI keyboard. It will connect here.'};
  bind();midiAccess.onstatechange=bind;
 }catch{status.textContent='MIDI access is unavailable. You can still play with the on-screen bars.'}
}
function help(){
 show('How to play',instrumentWords('<p>Read the note from its place on the five staff lines. Tap a bar on screen or choose Use microphone to play your own instrument.</p><p>Put the iPad near your bars. Strike the C you use for the setup note, then play one bar at a time. Even if your instrument sounds higher than the lesson, the game will follow the octave you matched. Use Match C again to change it.</p><p>The microphone processes sound on this device. Use Stop microphone at any time. For a chord, strike the bars separately.</p><p>Each independent answer earns 10 XP. Use a hint or hear the note whenever you need help, then earn 3 XP by finding it.</p><p>In a teacher test, use the octave buttons to reach higher or lower notes. For a chord, play each pitch once, together or one at a time.</p><p id="midiStatus" role="status"></p>'));
 actions(action('Let’s play',()=>$('dialog').close()),action('Connect MIDI keyboard',connectMidi,'secondary'));
}
$('help').onclick=help;$('close').onclick=()=>$('dialog').close();
$('octDown').onclick=()=>{if(octave>0){octave--;keyboard()}};$('octUp').onclick=()=>{if(octave<7){octave++;keyboard()}};
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.dataset.view==='map')map();else if(b.dataset.view==='teacher')teacherSetup();else if(round.teacher)practice();else if(round.done)nextRound();else $('game').scrollIntoView({block:'nearest'})});
document.querySelector('.brand').onclick=e=>{e.preventDefault();if(round.teacher)practice();else if(round.done)nextRound();else window.scrollTo(0,0)};
let dash=null;
const dashLength=10;
function dashPool(){
 const w=saved.world;
 if(!saved.songs[w]&&saved.unlocked<=w&&!(w===worlds.length-1&&saved.finished))return [];
 return worlds[w].notes.split(' ').filter(pitch=>saved.dashLearned[w+':'+pitch]===true).map(readNote);
}
function updateDashEntry(){
 $('dashEntry').hidden=round.teacher;
 const ready=dashPool().length>=2;
 $('openDash').disabled=!ready||(round.locked&&!round.done);
 $('dashAccess').textContent=ready?'Catch notes you already know.':'Finish a round and read two pitches on your own to unlock.';
}
function stopDash(){
 if(!dash)return;
 cancelAnimationFrame(dash.frame);clearTimeout(dash.next);dash=null;
}
function openDash(){
 const pool=dashPool();
 if(round.teacher||pool.length<2)return;
 stopReplay();stopDash();
 show('Firefly Dash','<div class="dashIntro"><span aria-hidden="true">✦</span><p>Ten fireflies are drifting home. Play each note before it reaches the gold line to catch its light.</p></div><p>Three catches in a row make the next note a little faster. If one gets away, time stops so you can find it.</p><p>Tonight’s notes · '+pool.map(lessonName).join(', ')+'</p>');
 actions(action('Start dash',()=>startDash(pool)),action('Back to the world',()=>$('dialog').close(),'secondary'));
}
function startDash(pool){
 stopDash();
 const deck=[];
 while(deck.length<dashLength){
  const pass=shuffle(pool);
  if(deck.at(-1)?.midi===pass[0].midi)pass.push(pass.shift());
  deck.push(...pass);
 }
 dash={world:saved.world,clef:worlds[saved.world].clef,deck:deck.slice(0,dashLength),index:0,caught:0,chain:0,limit:7200,elapsed:0,phase:'ready',frame:0,next:0,
  reduced:window.matchMedia('(prefers-reduced-motion: reduce)').matches};
 show('Firefly Dash','<div class="dashStatus"><b id="dashCount"></b><span id="dashPace"></span><button id="dashPause" class="secondary">Pause</button></div><div class="dashTrack" id="dashTrack" role="img" aria-label="Read the firefly note on the staff"></div><div class="dashTime" aria-hidden="true"><div id="dashTimeLeft"></div></div><div class="jarLights" id="jarLights" aria-label="Firefly jar"></div><div class="piano dashPiano" id="dashPiano" aria-label="Firefly Dash glockenspiel"></div><p id="dashMessage" role="status"></p>');
 if(instrumentMic.session){
  const stop=action('Stop microphone',()=>{instrumentMic.stop();stop.remove()},'dashMicOff');
  $('dashPause').parentElement.append(stop);
 }
 $('dashPause').onclick=toggleDashPause;
 renderPiano($('dashPiano'),readNote(worlds[dash.world].notes.split(' ')[0]).oct,false,new Set(),false,dashHit);
 $('jarLights').innerHTML='<span aria-hidden="true">✦</span>'.repeat(dashLength);
 nextFirefly('Play its note before it reaches the gold line.');
}
function fireflyStaff(n,clef){
 const base=clef==='treble'?30:18,bottom=93,d=n.diatonic-base,y=bottom-7*d;
 const lineY=i=>bottom-14*i;
 const lines=Array.from({length:5},(_,i)=>'<path d="M8 '+lineY(i)+'h404"/>').join('');
 let ledger='';
 for(let i=-2;i>=d;i-=2)ledger+='<path d="M-15 '+(bottom-7*i)+'h30"/>';
 for(let i=10;i<=d;i+=2)ledger+='<path d="M-15 '+(bottom-7*i)+'h30"/>';
 const down=d>=4;
 const accidental=n.acc?'<text x="-24" y="'+y+'" font-family="Bravura" font-size="56">'+(n.acc==='#'?'&#xe262;':'&#xe260;')+'</text>':'';
 return '<svg viewBox="0 0 420 141" aria-hidden="true"><g aria-hidden="true"><path d="M77 9h10v4l2 3v8l-2 2H77l-2-2v-8l2-3z" fill="#617c76" stroke="#f4cc7e"/><path d="M77 7h10v3H77z" fill="#f4bd60"/><path d="M79 18h4v4h-4z" fill="#fff3a6"/></g><g stroke="#8da6a5">'+lines+'</g><text x="16" y="'+lineY(clef==='treble'?1:3)+'" font-family="Bravura" font-size="56">'+(clef==='treble'?'&#xe050;':'&#xe062;')+'</text><path stroke="#f4bd60" stroke-dasharray="4 3" stroke-width="2" d="M82 12v113"/><g id="flyingNote" fill="#fff1a5"><g stroke="#fff1a5">'+ledger+'</g>'+accidental+'<g class="flyGlow" transform="translate(0 '+y+')"><circle r="13" fill="#ffe887" opacity=".14"/><path d="M-8 -9h-4v-4h5v3h3v4h-4zM-1 -10v-4h5v4l-4 3z" fill="#c7e8cc" opacity=".78"/></g><ellipse cy="'+y+'" rx="9" ry="6.5" transform="rotate(-15 0 '+y+')"/><path stroke="#fff1a5" stroke-width="2" d="M'+(down?-8:8)+' '+y+'v'+(down?32:-32)+'"/></g></svg>';
}
function paintFlight(){
 const remaining=Math.max(0,1-dash.elapsed/dash.limit);
 $('flyingNote').setAttribute('transform','translate('+(dash.reduced?235:82+297*remaining)+' 0)');
 $('dashTimeLeft').style.transform='scaleX('+remaining+')';
}
function fly(now){
 if(!dash||dash.phase!=='flying')return;
 dash.elapsed+=Math.max(0,now-dash.last);dash.last=now;
 paintFlight();
 if(dash.elapsed>=dash.limit){coachFirefly('The firefly landed.');return}
 dash.frame=requestAnimationFrame(fly);
}
function nextFirefly(message){
 if(!dash||!$('dialog').open){stopDash();return}
 const n=dash.deck[dash.index];
 dash.phase='flying';dash.elapsed=0;dash.last=performance.now();
 $('dashTrack').classList.remove('justCaught');
 $('dashTrack').innerHTML=fireflyStaff(n,dash.clef);
 $('dashCount').textContent='Firefly '+(dash.index+1)+' of '+dashLength;
 $('dashPace').textContent=(dash.clef==='treble'?'Treble':'Bass')+' · '+(dash.limit/1000).toFixed(1)+' s';
 $('dashMessage').textContent=message;$('dashPause').disabled=false;$('dashPause').textContent='Pause';
 $('dashPiano').querySelectorAll('.suggest,.played').forEach(b=>b.classList.remove('suggest','played'));
 paintFlight();
 if(document.hidden)toggleDashPause();else dash.frame=requestAnimationFrame(fly);
}
function coachFirefly(reason){
 if(dash.phase!=='flying')return;
 cancelAnimationFrame(dash.frame);dash.phase='coaching';dash.chain=0;dash.limit=Math.min(10000,dash.limit+1200);
 const n=dash.deck[dash.index];
 $('dashMessage').textContent=instrumentWords(reason+' '+noteHint(n,dash.clef)+' Strike the matching bar when you’re ready.');
 $('dashPiano').querySelector('[data-pitch="'+n.midi+'"]').classList.add('suggest');
 $('dashPause').disabled=true;$('dashPause').textContent='Untimed';
}
function toggleDashPause(){
 if(!dash)return;
 if(dash.phase==='flying'){
  dash.elapsed+=Math.max(0,performance.now()-dash.last);
  if(dash.elapsed>=dash.limit){paintFlight();coachFirefly('The firefly landed.');return}
  cancelAnimationFrame(dash.frame);dash.phase='paused';
  $('dashPause').textContent='Resume';$('dashMessage').textContent='Paused. Your firefly will wait here.';
 }else if(dash.phase==='paused'){
  dash.phase='flying';dash.last=performance.now();$('dashPause').textContent='Pause';
  $('dashMessage').textContent='Catch this note.';dash.frame=requestAnimationFrame(fly);
 }
}
function dashHit(m,fromMicrophone=false){
 if(!dash||!$('dialog').open||!['flying','coaching'].includes(dash.phase))return;
 const n=dash.deck[dash.index];
 if(dash.phase==='flying'&&dash.elapsed+performance.now()-dash.last>=dash.limit)coachFirefly('The firefly landed.');
 if(!fromMicrophone)playTone(m);
 if(n.midi!==m){coachFirefly('Let’s look at that note.');return}
 cancelAnimationFrame(dash.frame);
 const solo=dash.phase==='flying';dash.phase='between';$('dashPause').disabled=true;
 let message=solo?'Caught it!':'You found it. The next one will drift more slowly.';
 if(solo){
  dash.caught++;dash.chain++;
  if(dash.chain===3){dash.chain=0;dash.limit=Math.max(3200,dash.limit-850);message='Three in a row! A little faster now.'}
 }
 $('dashPiano').querySelector('[data-pitch="'+m+'"]').classList.add('played');
 $('dashTrack').classList.add('justCaught');
 $('jarLights').children[dash.index].className=solo?'caught':'guided';
 $('jarLights').setAttribute('aria-label',dash.caught+' fireflies caught independently');
 $('dashMessage').textContent=message;
 dash.index++;
 dash.next=setTimeout(()=>{if(!dash||!$('dialog').open){stopDash();return}if(dash.index===dashLength)finishDash();else nextFirefly(message)},380);
}
function finishDash(){
 const {world,caught}=dash;
 saved.dashBest[world]=Math.max(saved.dashBest[world]||0,caught);save();stopDash();
 show('Fireflies home!','<div class="dashIntro"><span aria-hidden="true">✦</span><p>All ten made it back to '+worlds[world].name+'.</p></div><div class="resultNumber">'+caught+' / '+dashLength+'</div><p>Fireflies caught before they landed. Your best in this world is '+saved.dashBest[world]+'.</p>');
 firstResultAction(round.done?$('continueRound').textContent:'Continue adventure',()=>{if(round.done)nextRound();else $('dialog').close()});
 actions(action('Another dash',openDash,'secondary'));
}
$('openDash').onclick=openDash;
$('dialog').addEventListener('close',()=>{if(!$('dialog').open){stopDash();if(round.done&&!replayTimer)$('continueRound').focus({preventScroll:true})}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dash?.phase==='flying')toggleDashPause()});

styleInstrument();
instrumentMic.message(instrumentWords('Tap the bars, or let the iPad listen to yours.'));
practice();
