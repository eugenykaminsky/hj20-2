const buttons = document.getElementsByClassName('drum-kit__drum');

for (let btn of buttons) {
 let player = btn.getElementsByTagName('audio')[0];
 btn.onclick = () => {
  player.currentTime = 0; 
  player.play();
 }
}