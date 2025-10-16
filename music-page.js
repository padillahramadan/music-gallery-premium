window.addEventListener('DOMContentLoaded', () => {
  const playlist = document.getElementById('playlist');
  const btnPlay = document.getElementById('btn-music-play');
  const btnPause = document.getElementById('btn-music-pause');

  let currentSound = null;
  let currentSrc = null;

  playlist.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
      const src = e.target.getAttribute('data-src');
      if(currentSound && currentSrc === src) {
        // sama lagu → toggle?
        return;
      }
      if(currentSound) currentSound.stop();
      currentSound = new Howl({
        src: [src],
        volume: 0.5,
        loop: false,
      });
      currentSrc = src;
      currentSound.play();
    }
  });

  btnPlay.addEventListener('click', () => {
    if(currentSound) currentSound.play();
  });
  btnPause.addEventListener('click', () => {
    if(currentSound) currentSound.pause();
  });
});
