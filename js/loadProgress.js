(function() {
  const progress = document.getElementsByTagName('progress')[0];

  let v = 0,
    load = false,
    random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

  setInterval(() => {
    if (load) {
      progress.value = 100;
      progress.style.display = 'none';
      return;
    }

    v += random(1, 10);
    progress.value = v;

    if (progress.value > 98) {
      progress.value = 98;
    }
  }, random(10, 50));

  window.onload = () => {
    load = true;
  };
})();
