import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function savedCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const throttledSavedCurrentTime = throttle(savedCurrentTime, 1000);

player.on('timeupdate', throttledSavedCurrentTime);

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);
