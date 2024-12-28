/*!
 * Variation Swatches for WooCommerce (Vanilla JS version)
 * Переведено с jQuery на чистый JS.
 */

/** 
 * Вспомогательная функция для проверки, нужно ли добавлять queryParams 
 * к запросам, связанным с woo-variation-swatches.
 * По умолчанию в вашем коде используется wp.apiFetch + wp.url.
 * Здесь приведён лишь пример, как можно «подменить» эту логику на чистый JS.
 */
function isWooVariationSwatchesAPIRequest(options) {
  if (!options) return false;

  // В оригинале проверялись поля options.path и options.url
  // с помощью wp.url. Здесь — упрощённо:
  if (typeof options.path === 'string' && options.path.includes('woo-variation-swatches')) {
    return true;
  }
  if (typeof options.url === 'string' && options.url.includes('woo-variation-swatches')) {
    return true;
  }
  return false;
}

export function createMiddlewareForExtraQueryParams(params = {}) {
  return function (options, next) {
    if (isWooVariationSwatchesAPIRequest(options) && Object.keys(params).length > 0) {
      // Допустим, у нас есть функции addQueryArg / hasQueryArg на чистом JS 
      // (здесь можно дописать полноценные реализации или использовать любой небольшой хелпер).
      for (const [key, value] of Object.entries(params)) {
        if (typeof options.url === 'string') {
          if (!hasQueryArg(options.url, key)) {
            options.url = addQueryArg(options.url, key, value);
          }
        }
        if (typeof options.path === 'string') {
          if (!hasQueryArg(options.path, key)) {
            options.path = addQueryArg(options.path, key, value);
          }
        }
      }
    }
    return next(options);
  };
}

// Пример упрощённых функций (заглушки вместо wp.url.*):
function hasQueryArg(url, argKey) {
  const urlObj = new URL(url, location.origin);
  return urlObj.searchParams.has(argKey);
}
function addQueryArg(url, argKey, argValue) {
  const urlObj = new URL(url, location.origin);
  urlObj.searchParams.set(argKey, argValue);
  return urlObj.toString();
}

// ==================================================================
// Вспомогательные функции вместо underscore: _.includes, _.difference
// ==================================================================
function arrayIncludes(arr, value) {
  return arr.indexOf(value) !== -1;
}

function arrayDifference(arrA, arrB) {
  return arrA.filter(item => !arrB.includes(item));
}

// ==================================================================
// Класс WooVariationSwatchesPlugin (аналог jQuery-плагина)
// ==================================================================
export class WooVariationSwatchesPlugin {
  constructor(element, options = {}, pluginName = 'WooVariationSwatches') {
    // Задаём поля
    this.name = pluginName;
    this.element = element; // DOM-элемент
    this.settings = Object.assign({}, this.defaults, options);

    // Data-атрибуты, которые в jQuery получали через .data()
    // Пример: data('product_variations') => element.dataset.product_variations
    // Но помните, что в data-* хранится строка, нужно распарсить JSON (если там JSON).
    this.productVariations = [];
    try {
      if (element.dataset.product_variations) {
        this.productVariations = JSON.parse(element.dataset.product_variations);
      }
    } catch (e) {
      // если не JSON, оставляем пустой массив
    }
    this.isAjaxVariation = this.productVariations.length < 1;

    this.productId = element.dataset.product_id || null;

    // Кнопка reset_variations (.reset_variations)
    this.resetVariationsBtn = element.querySelector('.reset_variations');

    // Селекты (.variations select)
    this.attributeFields = element.querySelectorAll('.variations select');

    // Шаблон для .woo-selected-variation-item-name
    this.selectedItemTemplate = `<span class="woo-selected-variation-item-name" data-default=""></span>`;

    // Ставим класс .wvs-loaded
    this.element.classList.add('wvs-loaded');

    // Инициализация
    this.init();
    this.update();

    // Тригерим кастомное событие (аналог jQuery.trigger('woo_variation_swatches_loaded', this))
    const event = new CustomEvent('woo_variation_swatches_loaded', { detail: this });
    document.dispatchEvent(event);
  }

  get defaults() {
    return {};
  }

  init() {
    this.prepareLabel();
    this.prepareItems();
    this.setupItems();
    this.setupEvents();
    this.setUpStockInfo();
  }

  // Аналог wasAjaxVariation()
  // но в оригинале метод назывался isAjaxVariation()
  isAjaxVariationMethod() {
    return this.isAjaxVariation;
  }

  prepareLabel() {
    // Пример: if (woo_variation_swatches_options.show_variation_label) { ... }
    if (window.woo_variation_swatches_options && window.woo_variation_swatches_options.show_variation_label) {
      const labels = this.element.querySelectorAll('.variations .label');
      labels.forEach((el) => {
        el.insertAdjacentHTML('beforeend', this.selectedItemTemplate);
      });
    }
  }

  prepareItems() {
    // Ищем все .variable-items-wrapper и добавляем родителю класс .woo-variation-items-wrapper
    const wrappers = this.element.querySelectorAll('ul.variable-items-wrapper');
    wrappers.forEach((ul) => {
      if (ul.parentElement) {
        ul.parentElement.classList.add('woo-variation-items-wrapper');
      }
    });
  }

  setupItems() {
    // Для каждого ul.variable-items-wrapper анализируем, какие варианты доступны/выбраны
    const wrappers = this.element.querySelectorAll('ul.variable-items-wrapper');
    wrappers.forEach((ul) => {
      let selected = '';
      const selectedVariationItem = ul.parentElement.previousElementSibling
        ? ul.parentElement.previousElementSibling.querySelector('.woo-selected-variation-item-name')
        : null;

      // select.woo-variation-raw-select
      const select = ul.parentElement.querySelector('select.woo-variation-raw-select');
      if (!select) return;

      // Собираем options
      const optionElements = Array.from(select.querySelectorAll('option'));
      const disabledOptions = optionElements.filter(o => o.disabled);
      const outOfStockOptions = optionElements.filter(o => o.classList.contains('out-of-stock'));
      const currentSelected = optionElements.find(o => o.selected);
      const eq = optionElements[1]; // eq(1) в jQuery

      // Все «валидные» опции (не пустые)
      const allValues = [];
      optionElements.forEach(opt => {
        if (opt.value) {
          allValues.push(opt.value);
        }
      });

      // Массив disabled
      const disabledValues = disabledOptions
        .map(opt => (opt.value ? opt.value : ''))
        .filter(v => v);

      // Массив out_of_stock
      const outOfStockValues = outOfStockOptions
        .map(opt => (opt.value ? opt.value : ''))
        .filter(v => v);

      // Выбранная опция
      if (!currentSelected) {
        // Если selected нет, берём eq(1), если он есть
        selected = eq ? eq.value : '';
      } else {
        selected = currentSelected.value;
      }

      const inStockValues = arrayDifference(allValues, disabledValues);

      // Вызываем метод, который «подготовит» элементы li
      this.setupItem(ul, selected, inStockValues, outOfStockValues, selectedVariationItem);
    });
  }

  setupItem(ulElement, selectedValue, inStocks, outOfStocks, selectedVariationItem) {
    // Для каждого li.variable-item сбрасываем классы, выставляем selected, disabled и т.п.
    const liItems = ulElement.querySelectorAll('li.variable-item');
    liItems.forEach((li) => {
      const attrValue = li.dataset.value || '';
      const attrTitle = li.dataset.title || '';

      // Сброс классов
      li.classList.remove('selected', 'disabled', 'no-stock');
      li.classList.add('disabled');
      li.setAttribute('aria-checked', 'false');
      li.setAttribute('tabindex', '-1');
      li.removeAttribute('data-wvstooltip-out-of-stock');

      // Для input[type="radio"]
      const radio = li.querySelector('input.variable-item-radio-input[type="radio"]');
      if (radio) {
        radio.disabled = true;
        radio.checked = false;
      }

      // Если вообще нет выбранного (selectedValue = '') и show_variation_label = true,
      // то очищаем текст label'а
      if (
        !selectedValue &&
        window.woo_variation_swatches_options &&
        window.woo_variation_swatches_options.show_variation_label &&
        selectedVariationItem
      ) {
        selectedVariationItem.textContent = '';
      }

      // Если вариации AJAX (т.е. productVariations пустой)
      if (this.isAjaxVariationMethod()) {
        // Разрешаем нажимать (radio.disabled = false)
        if (radio) radio.disabled = false;
        li.classList.remove('disabled', 'no-stock');

        // Если значение совпадает с выбранным — ставим класс selected
        if (attrValue === selectedValue) {
          li.classList.add('selected');
          li.setAttribute('aria-checked', 'true');
          li.setAttribute('tabindex', '0');
          if (radio) radio.checked = true;
          // Меняем текст label (если нужно)
          if (
            window.woo_variation_swatches_options &&
            window.woo_variation_swatches_options.show_variation_label &&
            selectedVariationItem
          ) {
            selectedVariationItem.textContent =
              `${window.woo_variation_swatches_options.variation_label_separator} ${attrTitle}`;
          }
          // Тригерим кастомное событие
          li.dispatchEvent(new CustomEvent('wvs-item-updated', {
            detail: [selectedValue, attrValue]
          }));
        }
      } else {
        // Не ajax
        // Если attrValue есть в inStocks => li можно активировать
        
        if (arrayIncludes(inStocks, attrValue)) {
          li.classList.remove('selected', 'disabled');
          li.removeAttribute('aria-hidden');
          li.setAttribute('tabindex', '0');
          if (radio) {
            radio.disabled = false;
          }

          // Если текущий вариант == выбранный
          if (attrValue === selectedValue) {
            li.classList.add('selected');
            li.setAttribute('aria-checked', 'true');
            if (radio) radio.checked = true;
            if (
              window.woo_variation_swatches_options &&
              window.woo_variation_swatches_options.show_variation_label &&
              selectedVariationItem
            ) {
              selectedVariationItem.textContent =
                `${window.woo_variation_swatches_options.variation_label_separator} ${attrTitle}`;
            }
            li.dispatchEvent(new CustomEvent('wvs-item-updated', {
              detail: [selectedValue, attrValue]
            }));
          }
        }

        // out-of-stock (если настроена кликабельность)
        if (
          arrayIncludes(outOfStocks, attrValue) &&
          window.woo_variation_swatches_options &&
          window.woo_variation_swatches_options.clickable_out_of_stock
        ) {
          li.classList.remove('disabled');
          li.classList.add('no-stock');
          li.setAttribute('data-wvstooltip-out-of-stock', window.woo_variation_swatches_options.out_of_stock_tooltip_text);
        }
      }
    });
  }

  setupEvents() {
    // Логика кликов и радио-кнопок
    const wrappers = this.element.querySelectorAll('ul.variable-items-wrapper');

    wrappers.forEach((ul) => {
      const select = ul.parentElement.querySelector('select.woo-variation-raw-select');
      if (!select) return;

      // "clear_on_reselect" вариант
      if (
        window.woo_variation_swatches_options &&
        window.woo_variation_swatches_options.clear_on_reselect
      ) {
        // Клик по li.variable-item (НЕ .selected, НЕ radio-variable-item)
        ul.addEventListener('click', (e) => {
          const li = e.target.closest('li.variable-item:not(.radio-variable-item)');
          if (!li) return;

          e.preventDefault();
          e.stopPropagation();

          // Если кликнули по li.selected => снимаем выбор
          if (li.classList.contains('selected')) {
            select.value = '';
            // Аналог select.trigger('change')
            const eventChange = new Event('change', { bubbles: true });
            select.dispatchEvent(eventChange);

            // Аналог триггера 'click'
            const eventClick = new Event('click', { bubbles: true });
            select.dispatchEvent(eventClick);

            // Кастомное событие li
            li.dispatchEvent(new CustomEvent('wvs-unselected-item', {
              detail: [select.value, select, this.element]
            }));
          } else {
            // Иначе ставим выбор
            const value = li.dataset.value;
            select.value = value;

            const eventChange = new Event('change', { bubbles: true });
            select.dispatchEvent(eventChange);

            const eventClick = new Event('click', { bubbles: true });
            select.dispatchEvent(eventClick);

            li.dispatchEvent(new CustomEvent('wvs-selected-item', {
              detail: [value, select, this.element]
            }));
          }
        });

        // RADIO: клик по input.variable-item-radio-input
        ul.addEventListener('click', (e) => {
          const radio = e.target.closest('input.variable-item-radio-input[type="radio"]');
          if (!radio) return;
          e.stopPropagation();

          // Аналог radio.change
          const value = radio.value;
          const parentLi = radio.closest('li.radio-variable-item');
          const isSelected = parentLi && parentLi.classList.contains('selected');

          // Если уже selected => убираем
          if (isSelected) {
            select.value = '';
            // Триггерим change
            const changeEvt = new Event('change', { bubbles: true });
            select.dispatchEvent(changeEvt);
            // Аналог click
            const clickEvt = new Event('click', { bubbles: true });
            select.dispatchEvent(clickEvt);

            parentLi.dispatchEvent(new CustomEvent('wvs-unselected-item', {
              detail: [value, select, this.element]
            }));
          } else {
            // Ставим
            select.value = value;
            const changeEvt = new Event('change', { bubbles: true });
            select.dispatchEvent(changeEvt);

            const clickEvt = new Event('click', { bubbles: true });
            select.dispatchEvent(clickEvt);

            parentLi.dispatchEvent(new CustomEvent('wvs-selected-item', {
              detail: [value, select, this.element]
            }));
          }
        });

      } else {
        // Если clear_on_reselect = false
        ul.addEventListener('click', (e) => {
          const li = e.target.closest('li.variable-item:not(.radio-variable-item)');
          if (!li) return;
          e.preventDefault();
          e.stopPropagation();

          const value = li.dataset.value;
          select.value = value;
          const eventChange = new Event('change', { bubbles: true });
          select.dispatchEvent(eventChange);

          const eventClick = new Event('click', { bubbles: true });
          select.dispatchEvent(eventClick);

          li.dispatchEvent(new CustomEvent('wvs-selected-item', {
            detail: [value, select, this.element]
          }));

          this.setupItems();
        });

        // RADIO
        ul.addEventListener('change', (e) => {
          const radio = e.target.closest('input.variable-item-radio-input[type="radio"]');
          if (!radio) return;

          e.preventDefault();
          e.stopPropagation();

          const value = radio.value;
          select.value = value;

          select.dispatchEvent(new Event('change', { bubbles: true }));
          select.dispatchEvent(new Event('click', { bubbles: true }));
          // this.setupItems();

          // Ставим .selected на текущий li
          const parentLi = radio.closest('li.radio-variable-item');
          if (parentLi) {
            parentLi.classList.remove('selected', 'disabled', 'no-stock');
            parentLi.classList.add('selected');

            parentLi.dispatchEvent(new CustomEvent('wvs-selected-item', {
              detail: [value, select, this.element]
            }));
          }
        });
      }

      // Keyboard Access (пробел/enter)
      ul.addEventListener('keydown', (e) => {
        const li = e.target.closest('li.variable-item:not(.disabled)');
        if (!li) return;

        // 13 (Enter) или 32 (Space)
        if (e.keyCode === 13 || e.keyCode === 32) {
          e.preventDefault();
          li.click();
        }
      });
    });

    // Показываем все варианты, если есть .woo-variation-swatches-variable-item-more
    const moreButtons = this.element.querySelectorAll('.woo-variation-swatches-variable-item-more');
    moreButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.parentElement;
        if (!parent) return;
        parent.classList.remove('enabled-display-limit-mode', 'enabled-catalog-display-limit-mode');
        btn.remove();
      });
    });

    // Tooltip (data-wvstooltip)
    const tooltipEls = this.element.querySelectorAll('[data-wvstooltip]');
    tooltipEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        // Пример логики «позиционирования» тултипа
        const rect = el.getBoundingClientRect();

        // Псевдо-решение (аналог вычислений :before, :after):
        // Если нужно — добавьте реализацию вашего тултипа вручную.
        // Ниже лишь заготовка:
        const offset = 2;
        const tooltipHeight = 30; // Условно
        const arrowHeight = 6;    // Условно

        const calculateTooltipPosition = tooltipHeight + arrowHeight + offset;
        if (rect.top < calculateTooltipPosition) {
          el.classList.add('wvs-tooltip-position-bottom');
        } else {
          el.classList.remove('wvs-tooltip-position-bottom');
        }
      });
    });
  }

  update() {
    // Ранее: .on('woocommerce_variation_has_changed.wvs', fn)
    // Теперь слушаем через addEventListener на document:
    // Но WooCommerce может триггерить на самом .variations_form 
    // В реальном проекте проверьте, где именно «диспетчер» события.
    this.element.addEventListener('woocommerce_variation_has_changed', () => {
      this.setupItems();
    });
  }

  setUpStockInfo() {
    
    if (
      window.woo_variation_swatches_options &&
      window.woo_variation_swatches_options.show_variation_stock
    ) {
      
      const maxStockLabel = parseInt(window.woo_variation_swatches_options.stock_label_threshold, 10) || 0;

      // Когда выбирается item (событие wvs-selected-item)
      this.element.addEventListener('wvs-selected-item', () => {
        const attrs = this.getChosenAttributes();
        const variations = this.findStockVariations(this.productVariations, attrs);
        if (attrs.count > 1 && attrs.count === attrs.chosenCount) {
          this.resetStockInfo();
        }
        if (attrs.count > 1 && attrs.count === attrs.mayChosenCount) {
          // Для кажdого data (attribute_name, attribute_value, variation)
          variations.forEach((data) => {
            const sel = `[data-attribute_name="${data.attribute_name}"] > [data-value="${data.attribute_value}"]`;
            const liEl = this.element.querySelector(sel);
            if (!liEl) return;

            const stockInfo = liEl.querySelector('.wvs-stock-left-info');
            if (data.variation.is_in_stock &&
                data.variation.max_qty &&
                data.variation.variation_stock_left &&
                data.variation.max_qty <= maxStockLabel
            ) {
              if (stockInfo) {
                stockInfo.setAttribute('data-wvs-stock-info', data.variation.variation_stock_left);
              }
              liEl.classList.add('wvs-show-stock-left-info');
            } else {
              liEl.classList.remove('wvs-show-stock-left-info');
              if (stockInfo) {
                stockInfo.setAttribute('data-wvs-stock-info', '');
              }
            }
          });
        }
      });

      // Аналог hide_variation.wvs
      this.element.addEventListener('hide_variation', () => {
        this.resetStockInfo();
      });
    }
  }

  resetStockInfo() {
    const items = this.element.querySelectorAll('.variable-item');
    items.forEach((li) => {
      li.classList.remove('wvs-show-stock-left-info');
      const stockInfo = li.querySelector('.wvs-stock-left-info');
      if (stockInfo) {
        stockInfo.setAttribute('data-wvs-stock-info', '');
      }
    });
  }

  getChosenAttributes() {
    let count = 0;
    let chosen = 0;
    const data = {};

    this.attributeFields.forEach((select) => {
      const attrName = select.dataset.attribute_name || select.name;
      const value = select.value || '';
      if (value.length > 0) chosen++;
      count++;
      data[attrName] = value;
    });

    return {
      count: count,
      chosenCount: chosen,
      mayChosenCount: chosen + 1,
      data: data
    };
  }

  findStockVariations(allVariations, selectedAttributes) {
    const found = [];
    for (const [attrName, attrValue] of Object.entries(selectedAttributes.data)) {
      if (!attrValue) {
        // Пытаемся найти ul c data-attribute_name=attrName
        const ul = this.element.querySelector(`ul[data-attribute_name='${attrName}']`);
        if (!ul) continue;

        // ul.dataset.attribute_values может быть строкой, нужно распарсить
        let values = [];
        try {
          if (ul.dataset.attribute_values) {
            values = JSON.parse(ul.dataset.attribute_values);
          }
        } catch (e) {
          values = [];
        }

        values.forEach((value) => {
          // Склонируем объект:
          const compare = Object.assign({}, selectedAttributes.data);
          compare[attrName] = value;

          const matched = this.findMatchingVariations(allVariations, compare);
          if (matched.length > 0) {
            const variation = matched[0];
            found.push({
              attribute_name: attrName,
              attribute_value: value,
              variation: variation
            });
          }
        });
      }
    }
    return found;
  }

  findMatchingVariations(variations, attrs) {
    const matching = [];
    for (let i = 0; i < variations.length; i++) {
      const variation = variations[i];
      if (this.isMatch(variation.attributes, attrs)) {
        matching.push(variation);
      }
    }
    return matching;
  }

  isMatch(variationAttrs, selectedAttrs) {
    let match = true;
    for (const attrName in variationAttrs) {
      if (Object.prototype.hasOwnProperty.call(variationAttrs, attrName)) {
        const val1 = variationAttrs[attrName];
        const val2 = selectedAttrs[attrName];
        if (val1 && val2 && val1 !== val2) {
          match = false;
          break;
        }
      }
    }
    return match;
  }

  destroy() {
    this.element.classList.remove('wvs-loaded');
    // В jQuery было .removeData(this.name), тут можно, например:
    // delete this.element.__wooVariationSwatchesInstance;
  }
}

// ==================================================================
// Инициализация (аналог jQuery(document).ready + jQuery(...))
// ==================================================================

/**
 * Функция, которая найдёт все подходящие .variations_form и «навесит» на них плагин.
 * Можно делать что-то вроде: initAllVariationSwatches();
 */
export function initAllVariationSwatches() {
  // ищем все .variations_form:not(.wvs-loaded) и т.д.
  const forms = document.querySelectorAll('.variations_form:not(.wvs-loaded), .woo_variation_swatches_variations_form:not(.wvs-loaded), .ywcp_inner_selected_container:not(.wvs-loaded)');
  forms.forEach((formEl) => {
    // Чтобы при повторном вызове не вызывать несколько раз, 
    // можно хранить экземпляр в приватном поле:
    if (!formEl.__wooVariationSwatchesInstance) {
      formEl.__wooVariationSwatchesInstance = new WooVariationSwatchesPlugin(formEl, {}, 'WooVariationSwatches');
    }
  });
}

// Аналог jQuery(document).on('woo_variation_swatches_init', ...)
document.addEventListener('woo_variation_swatches_init', () => {
  initAllVariationSwatches();
});

// Аналог jQuery(document).on('wc_variation_form.wvs', ...)
document.addEventListener('wc_variation_form-wvs', () => {
  // Запускаем повторно
  const e = new CustomEvent('woo_variation_swatches_init');
  document.dispatchEvent(e);
});

// Аналог jQuery(document).ajaxComplete(...)
// Увы, в чистом JS нет "глобального ajaxComplete". 
// Если у вас используется fetch/XHR, нужно перехватывать в своих обработчиках.
// Примерно так:
function onAjaxComplete() {
  // Через некое время (1000мс) пересоздать формы
  setTimeout(() => {
    const forms = document.querySelectorAll('.variations_form:not(.wvs-loaded)');
    forms.forEach((f) => {
      // Вызываем метод (аналог wc_variation_form())
      // В jQuery было: $(f).wc_variation_form();
      // На чистом JS WooCommerce сам инициализирует вариации. 
      // Мы можем только заново запустить сватчи, если нужно.
      if (!f.__wooVariationSwatchesInstance) {
        f.__wooVariationSwatchesInstance = new WooVariationSwatchesPlugin(f, {}, 'WooVariationSwatches');
      }
    });
  }, 1000);
}

// Пример привязки к XHR
// Если нужно, замените на свою логику, например, monkeypatch `XMLHttpRequest.prototype.open`.
(function() {
  const oldOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(...args) {
    this.addEventListener('load', function() {
      onAjaxComplete();
    });
    return oldOpen.apply(this, args);
  };
})();

// Аналог (document).ready:
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Инициализация плагина
    initAllVariationSwatches();
  } catch (err) {
    console.error('Variation Swatches init error:', err);
  }
});

// ==================================================================
// Пример работы с Composite Products (как в исходном коде)
// ==================================================================

// Примерно так можно «перевести» логику add_action('component_options_state_changed')
document.body.addEventListener('wc-composite-initializing', (event) => {
  const composite = event.detail; 
  // В реальном плагине WooCommerce Composite Products там передаётся 
  // объект composite через кастомные события — это сильно зависит 
  // от реализации.

  // Пример «добавления действия»:
  if (composite && composite.actions) {
    // Если у вас есть метод add_action, то это тоже что-то кастомное. 
    composite.actions.add_action('component_options_state_changed', (self) => {
      const forms = self.$component_content.querySelectorAll('.variations_form');
      forms.forEach((f) => {
        if (f.__wooVariationSwatchesInstance) {
          f.__wooVariationSwatchesInstance.destroy();
          delete f.__wooVariationSwatchesInstance;
        }
      });
    });
  }
});
