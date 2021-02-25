//Common JS
document.querySelectorAll('.section-watches__control, .controls a, iphone-btn').forEach(control => {
  control.addEventListener('click', e => {
    e.preventDefault()
  })
})
//End Common js
// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector('.bottom-x-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector('.left-y-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`;
});

document.querySelector('.right-y-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`;
});

document.querySelector('.top-z-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`;
});

document.querySelector('.bottom-z-control').addEventListener('click', () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`;
});


const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
  bool = false;
  playPause();
})

document.querySelector('.controls').addEventListener('mouseout', () => {
  bool = true;
  playPause();
})
// End Cube

//Slideshow
const slideshowDivs = () => {
  for(let i = 1; i <= 5; i++) {
    const div = document.createElement('div');

    div.style.backgroundImage = `url(/assets/img/slideshow/section-1-bg-${i}.jpg)`;

    i == 1 && div.classList.add('change');

    document.querySelector('.section-apple__slideshow').appendChild(div);
  }
}

slideshowDivs();

const divs = document.querySelectorAll('.section-apple__slideshow div');

let a = 1;

const slideshow = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector('.section-apple__slideshow .change');

    div.classList.remove('change');

    if (a < divs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      divs[0].classList.add('change');
      a = 1;
    }

  }, 10000)
}

slideshow();
//End of Slideshow

//Section-macbook
const section3Content =document.querySelector('.section-macbook__content');

window.addEventListener('scroll', () => {
  if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
    section3Content.classList.add('change')
  }
})
//End section-macbook

//Watches
const watchBands = document.querySelector('.watch-bands');
const watchCase = document.querySelector('.watch-case');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  if (axisY === -4240) {
    watchTopControl.classList.add('hideControl');
  } else {
    watchTopControl.classList.remove('hideControl')
  }

  if (axisY === 4240) {
    watchBottomControl.classList.add('hideControl');
  } else {
    watchBottomControl.classList.remove('hideControl')
  }

  if (axisX === 4240) {
    watchRightControl.classList.add('hideControl');
  } else {
    watchRightControl.classList.remove('hideControl')
  }

  if (axisX === -4240) {
    watchLeftControl.classList.add('hideControl');
  } else {
    watchLeftControl.classList.remove('hideControl')
  }
}

watchTopControl.addEventListener('click', () => {
  watchCase.style.marginTop = `${axisY -= 1060}px`;
  hideControl();
})

watchBottomControl.addEventListener('click', () => {
  watchCase.style.marginTop = `${axisY += 1060}px`;
  hideControl();
})

watchRightControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${axisX += 1060}px`;
  hideControl();
})

watchLeftControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${axisX -= 1060}px`;
  hideControl();
})

//End Watches