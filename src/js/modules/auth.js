const ErrorModal = function () {
  this.modal = document.querySelector('.c-error-modal-wrapper');
  this.message_el = this.modal.querySelector('h3');
  this.close_btn = this.modal.querySelector('.remove-icon');

  this.bindEvents();
};

ErrorModal.prototype = {
  open () {
    this.modal.classList.add('is-active');
    window.blockBodyScroll();
  },

  close () {
    this.modal.classList.remove('is-active');
    window.enableBodyScroll();
  },

  text ( text ) {
    this.message_el.textContent = text;
  },

  bindEvents () {
    this.close_btn.addEventListener( 'click', () => this.close() );
  }
};

const Auth = function () {
  this.wrapper = document.querySelector('.c-registration-form');
  this.reg_form = document.querySelector('.js-registration-form form');
  this.login_form = document.querySelector('.js-login-form form');
  this.error_modal = new ErrorModal();
  this.bindEvents();
};

Auth.prototype = {
  bindEvents() {
    if (this.reg_form !== null) {
      this.reg_form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.register(e.currentTarget);
      });
    }

    if (this.login_form) {
      this.login_form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.login(e.currentTarget);
      });
    }
  },

  async register(form) {
    this.wrapper.classList.remove('is-error');

    if (this.reg_form.querySelector('.is-error')) {
      this.reg_form.querySelectorAll('.is-error').forEach((el) => el.classList.remove('is-error'));
    }

    var form_data = new FormData(form);
    form_data.append('action', 'register_user');

    var resp = await fetch(MyAjax.ajaxurl, {
      method: 'POST',
      body: form_data,
    });

    var data = await resp.json();

    if (data.errors) {
      console.log(data.errors);
      data.errors.forEach((error) => {
        this.reg_form.querySelector(`[name="${error.field_name}"]`).classList.add('is-error');
      });
      return;
    }

    if (data.error_message) {
      this.error_modal.text( data.error_message );
      this.error_modal.open();
      return;
    }

    document.location = data.redirect;
  },

  async login(form) {
    this.wrapper.classList.remove('is-error');

    var form_data = new FormData(form);
    form_data.append('action', 'login_user');

    var resp = await fetch(MyAjax.ajaxurl, {
      method: 'POST',
      body: form_data,
    });

    var data = await resp.json();

    if (data.error_message) {
      this.error_modal.text( data.error_message );
      this.error_modal.open();
      return;
    }

    document.location = data.redirect;
  },
};

new Auth();
