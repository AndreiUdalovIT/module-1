let scrollY = 0;

function openPopup() {
  scrollY = window.scrollY;

  document.body.classList.add('no-scroll');
  document.body.style.top = '-${scrollY}px';
}

function closePopup() {
  document.body.classList.remove('no-scroll');

  window.scrollTo(0, scrollY);
} 