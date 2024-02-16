const slides = document.querySelectorAll('.slide');
const infoButtons = document.querySelectorAll('.info-button');
const infos = document.querySelectorAll('.info');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let intervalId;

function toggleInfo(index) {
  infos.forEach((info, i) => {
    if (i === index) {
      info.style.display = info.style.display === 'block' ? 'none' : 'block';
    } else {
      info.style.display = 'none';
    }
  });
}

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function startSlider() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000); // Cambia el intervalo de cambio de imágenes (en milisegundos) según lo necesites
}

function restartSlider() {
  clearInterval(intervalId);
  startSlider();
}

infoButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clearInterval(intervalId);
    toggleInfo(index);
  });
});

infos.forEach(info => {
  info.addEventListener('click', restartSlider);
});

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

startSlider();