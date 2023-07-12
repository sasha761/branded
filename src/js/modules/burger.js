function burgerMenu() {
  const burger = document.querySelector('.c-burger');

  burger.addEventListener('click', () => {
    if (burger.classList.contains('is-open')) {
      burger.classList.remove('is-open');
      burger.setAttribute('data-modal', '#mobile-menu');
    } else {
      burger.classList.add('is-open');
      burger.setAttribute('data-modal', 'close');
    }
  });
}

export default burgerMenu;;