//菜单缩放
let timer = null,
  move = (el, speed) => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (
        (speed < 0 && el.offsetLeft == -100) ||
        (speed > 0 && el.offsetLeft == 0)
      ) {
        clearInterval(timer);
      } else {
        el.style.left = el.offsetLeft + speed + 'px';
      }
    }, 1);
  };

//加载object
let obj_load = url => {
  document.getElementsByTagName(
    'article'
  )[0].innerHTML = `<object type='text/html' data='${url}' width='100%' height='100%'></object>`;
};
