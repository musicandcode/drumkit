const drums = new Howl({
    "src": [
      "./drums/drums.webm",
      "./drums/drums.mp3"
    ],
   "sprite": {
      "clap": [
        0,
        734.2630385487529
      ],
      "closed-hihat": [
        2000,
        445.94104308390035
      ],
      "crash": [
        4000,
        1978.6848072562354
      ],
      "kick": [
        7000,
        553.0839002267571
      ],
      "open-hihat": [
        9000,
        962.7664399092968
      ],
      "snare": [
        11000,
        354.48979591836684
      ]
    }
  });

  const drumkit = document.querySelector('.drumkit');
  function playDrum(event) {
    if (event.target.classList.contains('pad')) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      drums.play(soundToPlay);
    }
  }

  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    console.log(vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  
  setViewportHeight();
  window.addEventListener('resize', () => {
    setTimeout(setViewportHeight, 100);
  });

  drumkit.addEventListener('click', playDrum);
  drumkit.addEventListener('touchstart', playDrum);
