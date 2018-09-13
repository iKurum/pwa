const nDiv = document
    .getElementsByTagName('header')[0]
    .getElementsByTagName('div')[0],
  nav = document.getElementsByTagName('nav')[0],
  nBack = document.getElementsByClassName('gback')[0];

let nB = false;
nDiv.addEventListener(
  'click',
  () => {
    if (!nB) {
      move(nav, 1);
      nB = !nB;
    } else {
      move(nav, -1);
      nB = !nB;
    }
  },
  false
);

nBack.addEventListener(
  'click',
  () => {
    move(nav, -1);
    nB = !nB;
  },
  false
);

obj_load('./page/home.html');
