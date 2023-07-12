  
  var sortContainer = document.getElementsByClassName("js-filter-sort");
  // Desktop filter
  if (sortContainer.length) {
    const ProductFilter = function () {
      this.list = document.querySelector('.c-sort__box');
      this.form = this.list.querySelector('form');
      this.select = this.form.querySelector('select');
      this.selected = document.querySelector('.c-sort__selected');
      this.render();
      this.bindEvents();
    }

    ProductFilter.prototype = {
      bindEvents () {
        this.list.addEventListener( 'click', () => this.toggleList() );
      },

      toggleList () {
        this.list.classList.toggle('is-active');
      },

      render () {
        this.selected.textContent = this.select.querySelectorAll('option')[this.select.selectedIndex].textContent;

        var fragment = document.createDocumentFragment();

        this.select.querySelectorAll('option').forEach( (option, index) => {
          var li = document.createElement('li');
          li.dataset.value = option.value;
          li.dataset.index = index;
          li.textContent = option.textContent;
          li.addEventListener( 'click', () => this.selectIndex( index ) );
          fragment.appendChild( li );
        } );

        this.list.querySelector('ul').appendChild( fragment );
      },

      selectIndex ( index ) {
        this.select.selectedIndex = index;
        this.form.submit();
      }
    }

    // Mobile filter
    // const ProductFilterMobile = function () {
    //   this.oepn_menu_buttons = document.querySelectorAll('.p-shop-filter-buttons button');
    //   this.close_menu_buttons = document.querySelectorAll('.c-floating-menu .remove-icon');
    //   this.sort_form = document.querySelector('.js-sort-menu .woocommerce-ordering');
    //   this.bindEvents();
    // }

    // ProductFilterMobile.prototype = {
    //   bindEvents () {
    //     this.oepn_menu_buttons.forEach(btn => btn.addEventListener( 'click', (e) => this.openMenu(e) ));
    //     this.close_menu_buttons.forEach(btn => btn.addEventListener( 'click', (e) => this.closeMenu(e) ));
    //     this.sort_form.querySelectorAll('li').forEach(el => el.addEventListener( 'click', e => this.sortBy(e) ));
    //   },

    //   openMenu (e) {
    //     var menu_selector = `.${e.currentTarget.dataset.menu}`;
    //     document.querySelector( menu_selector ).classList.toggle('is-active');
    //   },

    //   closeMenu (e) {
    //     var menu = e.currentTarget.parentElement;
    //     menu.classList.remove('is-active');
    //   },

    //   sortBy (e) {
    //     var sort_option = e.currentTarget.dataset.value;
    //     this.sort_form.querySelector('input[name="orderby"]').value = sort_option;
    //     this.sort_form.submit();
    //   }
    // }

    // if ( window.innerWidth >= 768 ) {
    //   new ProductFilter();
    // } else {
    //   new ProductFilterMobile();
    // }
    new ProductFilter();
  }