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

setInterval(showSlides, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
