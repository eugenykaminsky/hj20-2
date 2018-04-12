'use strict';

let mediaplayer = document.getElementsByClassName('mediaplayer')[0];
let controls = document.getElementsByTagName('audio')[0];
let playButton = document.getElementsByClassName('playstate')[0];
let stopButton = document.getElementsByClassName('stop')[0];
let previousButton = document.getElementsByClassName('back')[0];
let nextButton = document.getElementsByClassName('next')[0];
let title = document.getElementsByClassName('title')[0];
let tracks = [
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3',
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3',
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'
]

let step = 0;

controls.src = tracks[step];

function getTitle(path) {
	let start = path.lastIndexOf('/') + 1;
    let string = tracks[step].slice(start).slice(0, -4);
	return string.replace(/\%20/gm, ' ');
}

title.title = getTitle(tracks[step]);

playButton.onclick = () => {
    if (!mediaplayer.classList.contains('play')) {
        controls.play();
        mediaplayer.classList.add('play');
    } else {
        controls.pause();
        mediaplayer.classList.remove('play')
    }
}

stopButton.onclick = () => {
    if (mediaplayer.classList.contains('play')) {
        controls.pause();
        mediaplayer.classList.remove('play')
        controls.currentTime = 0;
    }
}

previousButton.onclick = () => {
    step--;
    if (step < 0) step = tracks.length - 1;
    controls.src = tracks[step];
    title.title = getTitle(tracks[step]);
    if (mediaplayer.classList.contains('play')) controls.play();
}

nextButton.onclick = () => {
    step++;
    if (step >= tracks.length) step = 0;
    controls.src = tracks[step];
    title.title = getTitle(tracks[step]);
    if (mediaplayer.classList.contains('play')) controls.play();
}