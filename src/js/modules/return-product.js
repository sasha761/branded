// Select
const ReturnStepSelect = function () {
  this.el = document.querySelector('.c-return-step-select');
  this.input = this.el.querySelector('input[name="product"]');
  this.order_id_input = this.el.querySelector('input[name="order_id"]');
  this.item_id_input = this.el.querySelector('input[name="item_id"]');
  this.bindEvents();
}

ReturnStepSelect.prototype = {
  bindEvents () {
    this.el.querySelectorAll('li').forEach( option => option.addEventListener( 'click', e => this.selectProduct(e) ) );
    this.el.addEventListener( 'click', () => this.toggleMenu() );
  },

  toggleMenu () {
    this.el.classList.toggle('is-active');
  },

  selectProduct (e) {
    this.input.value = e.currentTarget.textContent;
    this.order_id_input.value = e.currentTarget.dataset.order;
    this.item_id_input.value = e.currentTarget.dataset.product;
  }
}

// Form
const ReturnForm = function () {
  this.form = document.querySelector('.js-return-product-form');
  this.message_element = document.querySelector('.c-return-step__result-message');
  this.bindEvents();
}

ReturnForm.prototype = {
  bindEvents () {
    this.form.addEventListener( 'submit', e => {
      e.preventDefault();
      this.sendForm( e.currentTarget );
    } );
  },

  async sendForm ( form ) {
    var form_data = new FormData( form );
    form_data.append('action', 'return_product');

    var resp = await fetch(MyAjax.ajaxurl, {
      body: form_data,
      method: 'POST'
    });

    var data = await resp.json();

    this.message_element.textContent = data.message;

    if ( !data.success ) {
      this.message_element.classList.add('is-error');
    } else {
      this.message_element.classList.remove('is-error');
    }

    this.message_element.parentElement.classList.remove('is-hidden');
  }
}

new ReturnStepSelect();
new ReturnForm();