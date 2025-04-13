function confettiEffect() {
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 }
    });
  }
  
  function playMusic() {
    const iframe = document.getElementById('yt-player');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }