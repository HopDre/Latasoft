const slider = document.getElementById('slider');
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }

  const translateValue = -slideIndex * 100;
  slider.style.transform = `translateX(${translateValue}%)`;
}

setInterval(showSlides, 3000);


const slider2 = document.getElementById('slider2');
let slideIndex2 = 0;

function showSlides2() {
  slideIndex2++;
  if (slideIndex2 >= slider2.children.length) {
    slideIndex2 = 0;
  }

  const translateValue = -slideIndex2 * 100;
  slider2.style.transform = `translateX(${translateValue}%)`;
}

setInterval(showSlides2, 3000);