const button = document.getElementById('btn-back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
});
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});