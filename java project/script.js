const slides = document.querySelectorAll('.slideshow-element');
let current = 0;
let countElements = 1;

setInterval(() => {
  slides[current].classList.remove('current');
  current = (current + 1) % slides.length;
  countElements++;

  if (countElements > slides.length) {
    current = 0;
    countElements = 1;
  }

  slides[current].classList.add('current');
}, 2000);

