const animateMeter = () => {
  const el = document.querySelector("meter");
  var value = 0;

  setInterval(() => {
    if (value === 100) {
      value = 0;
    } else {
      value++;
      el.value = value;
    }
  }, 30);
};

const animateProgress = () => {
  const el = document.querySelector("progress");
  var value = 0;

  setInterval(() => {
    if (value === 100) {
      value = 0;
    } else {
      value++;
      el.value = value;
    }
  }, 30);
};

animateMeter();
animateProgress();
