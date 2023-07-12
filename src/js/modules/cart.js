const Cart = function () {
  this.cart = window.innerWidth >= 992
    ? document.querySelector('.js-minicart')
    : document.querySelector('.js-minicart-mobile');
  this.modal = document.querySelector('.c-cart-modal');
  this.bindEvents();
}

Cart.prototype = {
  bindEvents () {
    this.cart.addEventListener( 'click', () => this.toggle() );
  },

  toggle () {
    this.modal.classList.toggle('is-open');
  }
};

new Cart();