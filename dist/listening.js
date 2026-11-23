'use strict';

// A bar can ring across several prompts. Detect fresh spectral attacks and
// estimate the struck pitch independently of the note the game is asking for.
class BarStrikeDetector {
 constructor(){
  this.baseline=new Float64Array(128);
  this.level=new Float64Array(128);
  this.votes=new Float64Array(128);
  this.lastTime=0;
  this.attack=-1;
  this.armed=true;
  this.lastStrike=-Infinity;
 }
 read(bins,rate,fftSize,now){
  const dt=this.lastTime?Math.min(100,now-this.lastTime):16;
  this.lastTime=now;
  this.level.fill(0);
  const hz=rate/fftSize,low=Math.max(2,Math.floor(58/hz)),high=Math.min(bins.length-1,Math.ceil(6100/hz));
  let strongest=0,totalPower=0;
  for(let i=low;i<high;i++){
   const db=bins[i];
   if(db<-79||!Number.isFinite(db))continue;
   const power=10**(db/10);
   totalPower+=power;
   if(db<=bins[i-1]||db<bins[i+1])continue;
   // Parabolic interpolation in log magnitude resolves notes between FFT bins.
   const left=Math.max(-150,bins[i-1]),right=Math.max(-150,bins[i+1]);
   const shift=.5*(left-right)/(left-2*db+right);
   const pitch=69+12*Math.log2((i+shift)*hz/440),note=Math.round(pitch);
   if(!Number.isFinite(pitch)||Math.abs(pitch-note)>.43||note<34||note>115)continue;
   const a=Math.sqrt(power);
   this.level[note]=Math.max(this.level[note],a);
   strongest=Math.max(strongest,a);
  }
  const tonal=strongest>.00075&&strongest*strongest>.07*totalPower;
  const smoothing=1-Math.exp(-dt/135);
  let fresh=0;
  for(let n=34;n<=115;n++){
   const amp=this.level[n],rise=Math.max(0,amp-1.45*this.baseline[n]);
   if(tonal&&amp>=strongest*.09)fresh=Math.max(fresh,rise);
  }
  if(fresh<Math.max(.0004,strongest*.055))this.armed=true;
  if(this.armed&&this.attack<0&&now-this.lastStrike>=150&&fresh>Math.max(.00065,strongest*.12)){
   this.attack=now;
   this.armed=false;
   this.votes.fill(0);
  }
  for(let n=34;n<=115;n++){
   const amp=this.level[n];
   if(this.attack>=0&&tonal&&amp>=strongest*.09){
    this.votes[n]+=Math.max(0,amp-this.baseline[n]*1.10)*Math.min(dt,35);
   }
   this.baseline[n]+=(amp-this.baseline[n])*smoothing;
  }
  if(this.attack<0||now-this.attack<65)return null;
  this.attack=-1;
  const peak=Math.max(...this.votes);
  if(peak<.029)return null;
  // A metal bar may have a louder upper partial. Use the lowest prominent
  // attack, not a ringing pitch left over from the previous strike.
  for(let n=34;n<=115;n++){
   if(this.votes[n]<peak*.30)continue;
   this.lastStrike=now;
   return n;
  }
  return null;
 }
}

const instrumentMic={
 session:null, ignoreUntil:0,
 message(text){document.getElementById('micStatus').textContent=instrumentWords(text)},
 paint(){
  const s=this.session;
  const button=document.getElementById('micButton');
  button.textContent=s?'Stop microphone':'Use microphone';
  button.setAttribute('aria-pressed',String(!!s));
  document.getElementById('micCalibrate').hidden=!s||s.phase!=='play';
  document.getElementById('instrumentInput').dataset.state=s?.phase||'off';
 },
 stop(message='Microphone off. Tap the bars to play.'){
  const s=this.session;this.session=null;
  if(s){
   cancelAnimationFrame(s.frame);
   s.stream?.getTracks().forEach(track=>track.stop());
   s.source?.disconnect();s.analyser?.disconnect();s.silent?.disconnect();
   if(s.ctx&&s.ctx.state!=='closed')s.ctx.close().catch(()=>{});
  }
  this.paint();this.message(message);
 },
 calibrate(){
  const s=this.session;
  if(!s?.stream)return;
  s.reference=Math.min(108,12*(octave+1));
  s.phase='calibrate';
  if(s.detector){
   // A ringing note from the old instrument must not become the new reference.
   s.detector.attack=-1;s.detector.armed=false;
  }else s.detector=new BarStrikeDetector();
  this.paint();
  const name=lessonName(readNote('C'+(s.reference/12-1)));
  this.message('Strike the C bar you use for '+name+'. This sets the pitch for your instrument.');
 },
 blockSpeaker(seconds){
  this.ignoreUntil=Math.max(this.ignoreUntil,performance.now()+seconds*1000+220);
 },
 async start(){
  if(this.session){this.stop();return}
  if(!navigator.mediaDevices?.getUserMedia||!(window.AudioContext||window.webkitAudioContext)){
   this.message('Microphone listening is unavailable here. Open the HTTPS game link in Safari or Chrome, or tap the bars.');return;
  }
  const s={phase:'permission',frame:0,stream:null};this.session=s;
  this.paint();this.message('Allow microphone access, then strike one C bar.');
  try{
   // Both operations start from the tap so Safari can unlock its audio context.
   s.ctx=new (window.AudioContext||window.webkitAudioContext)();
   const resumed=s.ctx.resume();
   resumed.catch(()=>{});
   const stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:false,noiseSuppression:false,autoGainControl:false},video:false});
   if(this.session!==s){stream.getTracks().forEach(t=>t.stop());return}
   s.stream=stream;
   s.ctx.addEventListener('statechange',()=>{
    if(this.session===s&&s.phase!=='permission'&&['interrupted','suspended'].includes(s.ctx.state)){
     this.stop('Audio was interrupted. Tap Use microphone to start again.');
    }
   });
   stream.getAudioTracks()[0].addEventListener('ended',()=>{if(this.session===s)this.stop('Microphone disconnected. Tap Use microphone to reconnect.')});
   await resumed;
   if(this.session!==s)return;
   s.source=s.ctx.createMediaStreamSource(stream);
   s.analyser=s.ctx.createAnalyser();s.analyser.fftSize=4096;s.analyser.smoothingTimeConstant=0;
   s.silent=s.ctx.createGain();s.silent.gain.value=0;
   s.source.connect(s.analyser);s.analyser.connect(s.silent);s.silent.connect(s.ctx.destination);
   const bins=new Float32Array(s.analyser.frequencyBinCount);
   this.calibrate();
   const listen=now=>{
    if(this.session!==s)return;
    s.analyser.getFloatFrequencyData(bins);
    const pitch=s.detector.read(bins,s.ctx.sampleRate,s.analyser.fftSize,now);
    if(pitch!==null&&now>=this.ignoreUntil)this.strike(s,pitch);
    if(this.session===s)s.frame=requestAnimationFrame(listen);
   };
   s.frame=requestAnimationFrame(listen);
  }catch(e){
   if(this.session!==s)return;
   const msg=e.name==='NotAllowedError'?'Microphone permission is off. Allow it in this site’s browser settings, then try again.':e.name==='NotFoundError'?'No microphone was found. Connect one or tap the bars.':'The microphone could not start. Check that it is available, then try again.';
   this.stop(msg);
  }
 },
 strike(s,heard){
  if(s.phase==='calibrate'){
   if(heard%12!==0){this.message('I heard '+['C','C sharp','D','E flat','E','F','F sharp','G','A flat','A','B flat','B'][heard%12]+'. Strike the bar marked C to set up.');return}
   s.offset=s.reference-heard;s.phase='play';this.paint();
   this.message('Listening. C is matched. Now strike the written note, one bar at a time.');return;
  }
  const written=heard+s.offset;
  if(written<21||written>108)return;
  const pitchNames=['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
  this.message('Listening · Heard '+(written===60?'middle C':pitchNames[written%12])+'.');
  hit(written,true);
 }
};
document.getElementById('micButton').addEventListener('click',()=>instrumentMic.start());
document.getElementById('micCalibrate').addEventListener('click',()=>instrumentMic.calibrate());
document.addEventListener('visibilitychange',()=>{if(document.hidden&&instrumentMic.session)instrumentMic.stop('Microphone stopped while the game was in the background. Tap Use microphone to play again.')});
window.addEventListener('pagehide',()=>{if(instrumentMic.session)instrumentMic.stop()});
