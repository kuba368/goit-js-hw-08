import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const playerCurrentTime = function () {
  player.getCurrentTime().then(function (sec) {
    localStorage.setItem('videoplayer-current-time', sec);
  });
};

player.on('timeupdate', throttle(playerCurrentTime, 1000));
