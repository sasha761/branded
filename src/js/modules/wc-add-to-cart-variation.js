/* global wc_add_to_cart_variation_params, wp */
/*!
 * Чистый JS аналог wc-add-to-cart-variation.js
 */

/**
 * Утилита: «имитация» блокировки формы (раньше делали $form.block(...))
 * Вы можете реализовать показ оверлея/спиннера как угодно
 */
function blockElement(el) {
  // Пример: el.classList.add('loading');
  // Или добавить оверлей:
  // const overlay = document.createElement('div');
  // overlay.classList.add('wc-block-overlay');
  // el.appendChild(overlay);
}

/**
 * Утилита: «имитация» разблокировки формы (раньше $form.unblock())
 */
function unblockElement(el) {
  // Пример: el.classList.remove('loading');
  // Или удалить оверлей:
  // const overlay = el.querySelector('.wc-block-overlay');
  // if (overlay) overlay.remove();
}

/**
 * Аналог wp.template, но без eval (как делали в файле)
 * По сути достаём содержимое <script type="text/html" id="tmpl-{{templateId}}">...</script>
 */
function wpTemplate(templateId) {
  const el = document.getElementById(`tmpl-${templateId}`);
  if (!el) {
    // Если не нашли <script>, возвращаем простую функцию
    return function () {
      return '';
    };
  }

  const html = el.textContent;

  // Упрощённая проверка (аналог из wc-add-to-cart-variation.js)
  const hard = /<#\s?data\.|{{{?\s?data\.(?!variation\.).+}}}?|{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(html);
  if (hard && typeof wp !== 'undefined' && wp.template) {
    // Если есть wp.template, fallback на него
    return wp.template(templateId);
  }

  return function template(dataObj) {
    const variation = dataObj?.variation || {};
    let processed = html.replace(/({{{?)\s?data\.variation\.([\w-]+)\s?(}}}?)/g, (match, open, key, close) => {
      const replacement = variation[key] || '';
      // {{{ }}} => unescaped, {{ }} => escaped
      if (open.length === 2) {
        // escaped
        return escapeHtml(replacement);
      }
      // unescaped
      return replacement;
    });
    // Уберём служебные комментарии
    processed = processed.replace('/*<![CDATA[*/', '').replace('/*]]>*/', '');
    return processed;
  };
}

// Простейший escape для {{ }}
function escapeHtml(str) {
  // Если число/boolean и т.д., приводим к строке
  if (typeof str !== 'string') str = String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Аналог старых jQuery-хелперов: wc_set_content, wc_reset_content, и т.д.
 * Здесь мы храним "оригинальный текст" / "оригинальные атрибуты" в dataset,
 * чтобы уметь сбрасывать.
 */

// Ставим текст (как в jQuery.fn.wc_set_content)
function setContent(el, content) {
  if (!el.dataset.o_content) {
    // Сохраняем исходный текст
    el.dataset.o_content = el.textContent;
  }
  el.textContent = content;
}

// Сбрасываем текст (как в jQuery.fn.wc_reset_content)
function resetContent(el) {
  if (el.dataset.o_content !== undefined) {
    el.textContent = el.dataset.o_content;
  }
}

// Ставим атрибут (wc_set_variation_attr)
function setVariationAttr(el, attr, value) {
  if (el.dataset[`o_${attr}`] === undefined) {
    el.dataset[`o_${attr}`] = el.getAttribute(attr) ?? '';
  }
  if (value === false) {
    el.removeAttribute(attr);
  } else {
    el.setAttribute(attr, value);
  }
}

// Сброс атрибута (wc_reset_variation_attr)
function resetVariationAttr(el, attr) {
  const saved = el.dataset[`o_${attr}`];
  if (saved !== undefined) {
    if (saved === '') {
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, saved);
    }
  }
}

// Аналог wc_maybe_trigger_slide_position_reset
function maybeTriggerSlidePositionReset(formEl, variation) {
  // Упрощённо
  const newImageId = variation && variation.image_id ? variation.image_id : '';
  const current = formEl.getAttribute('current-image');
  if (current !== newImageId) {
    // reset slide
    const productGallery = formEl.closest('.product')?.querySelector('.images');
    if (productGallery) {
      // В оригинале:
      // productGallery.trigger('woocommerce_gallery_reset_slide_position');
      const evt = new CustomEvent('woocommerce_gallery_reset_slide_position', { bubbles: true });
      productGallery.dispatchEvent(evt);
    }
  }
  formEl.setAttribute('current-image', newImageId);
}

// Аналог wc_variations_image_update
function variationsImageUpdate(formEl, variation) {
  const productEl = formEl.closest('.product');
  if (!productEl) return;

  const productGallery = productEl.querySelector('.images');
  const galleryNav = productEl.querySelector('.flex-control-nav');
  const galleryImg0 = galleryNav?.querySelector('li:nth-child(1) img');
  const productImgWrap = productGallery?.querySelector(
    '.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder'
  );
  const productImg = productImgWrap?.querySelector('.wp-post-image');
  const productLink = productImgWrap?.querySelector('a');

  if (
    variation &&
    variation.image &&
    variation.image.src &&
    variation.image.src.length > 1
  ) {
    // Есть ли миниатюра в галерее?
    if (galleryNav) {
      const same = galleryNav.querySelector(`li img[data-o_src="${variation.image.gallery_thumbnail_src}"]`);
      if (same) {
        // Если есть — значит мы можем просто reset()
        variationsImageReset(formEl);
      }
      // Проверяем, есть ли нужное изображение
      const slide = galleryNav.querySelector(`li img[src="${variation.image.gallery_thumbnail_src}"]`);
      if (slide) {
        // Триггерим «переход»
        const flexClick = new CustomEvent('flexslider-click', { bubbles: true });
        slide.dispatchEvent(flexClick);
        formEl.setAttribute('current-image', variation.image_id);

        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
          const zoomEvent = new CustomEvent('woocommerce_gallery_init_zoom', { bubbles: true });
          productGallery?.dispatchEvent(zoomEvent);
        }, 20);
        return;
      }
    }

    // Иначе просто меняем атрибуты на productImg
    if (productImg) {
      setVariationAttr(productImg, 'src', variation.image.src);
      setVariationAttr(productImg, 'width', variation.image.src_w);
      setVariationAttr(productImg, 'height', variation.image.src_h);
      setVariationAttr(productImg, 'srcset', variation.image.srcset);
      setVariationAttr(productImg, 'sizes', variation.image.sizes);
      setVariationAttr(productImg, 'title', variation.image.title);
      setVariationAttr(productImg, 'data-caption', variation.image.caption);
      setVariationAttr(productImg, 'alt', variation.image.alt);
      setVariationAttr(productImg, 'data-src', variation.image.full_src);
      setVariationAttr(productImg, 'data-large_image', variation.image.full_src);
      setVariationAttr(productImg, 'data-large_image_width', variation.image.full_src_w);
      setVariationAttr(productImg, 'data-large_image_height', variation.image.full_src_h);
    }
    if (productImgWrap) {
      setVariationAttr(productImgWrap, 'data-thumb', variation.image.src);
    }
    if (galleryImg0) {
      setVariationAttr(galleryImg0, 'src', variation.image.gallery_thumbnail_src);
    }
    if (productLink) {
      setVariationAttr(productLink, 'href', variation.image.full_src);
    }
  } else {
    variationsImageReset(formEl);
  }

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
    maybeTriggerSlidePositionReset(formEl, variation);
    if (productGallery) {
      const zoomEvent = new CustomEvent('woocommerce_gallery_init_zoom', { bubbles: true });
      productGallery.dispatchEvent(zoomEvent);
    }
  }, 20);
}

// Аналог wc_variations_image_reset
function variationsImageReset(formEl) {
  const productEl = formEl.closest('.product');
  if (!productEl) return;

  const productGallery = productEl.querySelector('.images');
  const galleryNav = productEl.querySelector('.flex-control-nav');
  const galleryImg0 = galleryNav?.querySelector('li:nth-child(1) img');
  const productImgWrap = productGallery?.querySelector(
    '.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder'
  );
  const productImg = productImgWrap?.querySelector('.wp-post-image');
  const productLink = productImgWrap?.querySelector('a');

  if (productImg) {
    resetVariationAttr(productImg, 'src');
    resetVariationAttr(productImg, 'width');
    resetVariationAttr(productImg, 'height');
    resetVariationAttr(productImg, 'srcset');
    resetVariationAttr(productImg, 'sizes');
    resetVariationAttr(productImg, 'title');
    resetVariationAttr(productImg, 'data-caption');
    resetVariationAttr(productImg, 'alt');
    resetVariationAttr(productImg, 'data-src');
    resetVariationAttr(productImg, 'data-large_image');
    resetVariationAttr(productImg, 'data-large_image_width');
    resetVariationAttr(productImg, 'data-large_image_height');
  }
  if (productImgWrap) {
    resetVariationAttr(productImgWrap, 'data-thumb');
  }
  if (galleryImg0) {
    resetVariationAttr(galleryImg0, 'src');
  }
  if (productLink) {
    resetVariationAttr(productLink, 'href');
  }
}

/**
 * Класс VariationForm (аналог jQuery-функции wc_variation_form)
 */
export class VariationForm {
  constructor(formEl) {
    this.formEl = formEl; // DOM-элемент формы (.variations_form)
    this.attributeFields = formEl.querySelectorAll('.variations select');
    this.singleVariation = formEl.querySelector('.single_variation');
    this.singleVariationWrap = formEl.querySelector('.single_variation_wrap');
    this.resetVariationsBtn = formEl.querySelector('.reset_variations');
    this.resetAlert = formEl.querySelector('.reset_variations_alert');
    this.productEl = formEl.closest('.product');

    // variationData = $form.data('product_variations');
    try {
      const dataAttr = formEl.dataset.product_variations;
      this.variationData = dataAttr ? JSON.parse(dataAttr) : null;
    } catch (e) {
      this.variationData = null;
    }
    this.useAjax = (this.variationData === null || this.variationData === false);

    this.xhr = null;
    this.loading = true;

    if (this.singleVariationWrap) {
      this.singleVariationWrap.style.display = 'block';
    }

    // Привязываем методы
    this.onReset = this.onReset.bind(this);
    this.onReload = this.onReload.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onResetDisplayedVariation = this.onResetDisplayedVariation.bind(this);
    this.onAnnounceReset = this.onAnnounceReset.bind(this);
    this.onResetVariationFocus = this.onResetVariationFocus.bind(this);
    this.onClearResetAnnouncement = this.onClearResetAnnouncement.bind(this);
    this.onResetImage = this.onResetImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFoundVariation = this.onFoundVariation.bind(this);
    this.onFindVariation = this.onFindVariation.bind(this);
    this.onUpdateAttributes = this.onUpdateAttributes.bind(this);

    // «Подписываемся» на события (аналог $form.on(...) )
    this.addEvents();

    // Init after gallery (timeout 100ms)
    setTimeout(() => {
      this.formEl.dispatchEvent(new CustomEvent('check_variations'));
      // Аналог $(form).trigger('wc_variation_form', self)
      const evt = new CustomEvent('wc_variation_form', { detail: this });
      this.formEl.dispatchEvent(evt);
      this.loading = false;
    }, 100);
  }

  addEvents() {
    // Список обрабатываемых событий (аналог jQuery delegated .on(...))
    if (this.resetVariationsBtn) {
      this.resetVariationsBtn.addEventListener('click', this.onReset);
    }

    this.formEl.addEventListener('reload_product_variations', this.onReload);
    this.formEl.addEventListener('hide_variation', this.onHide);
    this.formEl.addEventListener('show_variation', (e) => this.onShow(e));
    this.formEl.addEventListener('click', this.onAddToCart);
    this.formEl.addEventListener('reset_data', this.onResetDisplayedVariation);
    this.formEl.addEventListener('reset_focus', this.onResetVariationFocus);
    this.formEl.addEventListener('announce_reset', this.onAnnounceReset);
    this.formEl.addEventListener('clear_reset_announcement', this.onClearResetAnnouncement);
    this.formEl.addEventListener('reset_image', this.onResetImage);

    // Селекты .variations select -> change
    this.attributeFields.forEach(select => {
      select.addEventListener('change', this.onChange);
    });

    // Кастомное событие found_variation
    this.formEl.addEventListener('found_variation', e => {
      const variation = e.detail?.[0];
      this.onFoundVariation(e, variation);
    });

    // check_variations
    this.formEl.addEventListener('check_variations', e => {
      this.onFindVariation(e, undefined);
    });

    // update_variation_values
    this.formEl.addEventListener('update_variation_values', this.onUpdateAttributes);
  }

  onReset(e) {
    e.preventDefault();
    // Сбрасываем все селекты
    this.attributeFields.forEach(sel => {
      sel.value = '';
      // Тригерим change
      const evt = new Event('change', { bubbles: true });
      sel.dispatchEvent(evt);
    });
    // Аналог $form.trigger('announce_reset')
    this.formEl.dispatchEvent(new Event('announce_reset'));
    // Аналог $form.trigger('reset_data')
    this.formEl.dispatchEvent(new Event('reset_data'));
    // Аналог $form.trigger('reset_focus')
    this.formEl.dispatchEvent(new Event('reset_focus'));
  }

  onReload(e) {
    // this.variationData = this.formEl.data('product_variations');
    try {
      const dataAttr = this.formEl.dataset.product_variations;
      this.variationData = dataAttr ? JSON.parse(dataAttr) : null;
    } catch (err) {
      this.variationData = null;
    }
    this.useAjax = (this.variationData === null || this.variationData === false);
    this.formEl.dispatchEvent(new CustomEvent('check_variations'));
  }

  onHide(e) {
    e.preventDefault();
    // Убираем классы на кнопке
    const btn = this.formEl.querySelector('.single_add_to_cart_button');
    if (btn) {
      btn.classList.remove('wc-variation-is-unavailable');
      btn.classList.add('disabled', 'wc-variation-selection-needed');
    }
    const cartDiv = this.formEl.querySelector('.woocommerce-variation-add-to-cart');
    if (cartDiv) {
      cartDiv.classList.remove('woocommerce-variation-add-to-cart-enabled');
      cartDiv.classList.add('woocommerce-variation-add-to-cart-disabled');
    }
  }

  onShow(e) {
    const [variation, purchasable] = e.detail || [];
    // В оригинале тут event.preventDefault(), но там передавался variation, purchasable
    // Если вызов произошёл без detail, делаем упрощённо
    // ...
    if (purchasable) {
      // .single_add_to_cart_button убираем disabled и т.д.
      const btn = this.formEl.querySelector('.single_add_to_cart_button');
      if (btn) {
        btn.classList.remove('disabled', 'wc-variation-selection-needed', 'wc-variation-is-unavailable');
      }
      const cartDiv = this.formEl.querySelector('.woocommerce-variation-add-to-cart');
      if (cartDiv) {
        cartDiv.classList.remove('woocommerce-variation-add-to-cart-disabled');
        cartDiv.classList.add('woocommerce-variation-add-to-cart-enabled');
      }
    } else {
      const btn = this.formEl.querySelector('.single_add_to_cart_button');
      if (btn) {
        btn.classList.remove('wc-variation-selection-needed');
        btn.classList.add('disabled', 'wc-variation-is-unavailable');
      }
      const cartDiv = this.formEl.querySelector('.woocommerce-variation-add-to-cart');
      if (cartDiv) {
        cartDiv.classList.remove('woocommerce-variation-add-to-cart-enabled');
        cartDiv.classList.add('woocommerce-variation-add-to-cart-disabled');
      }
    }
  
    // Инициализация wp.mediaelement (если нужно)
    if (window.wp?.mediaelement) {
      const shortcodes = this.formEl.querySelectorAll('.wp-audio-shortcode, .wp-video-shortcode');
      shortcodes.forEach(el => {
        if (!el.closest('.mejs-mediaelement')) {
          window.wp.mediaelement.initialize();
        }
      });
    }
  }

  onAddToCart(e) {
    const target = e.target;
    // Ищем .single_add_to_cart_button
    const addBtn = target.closest('.single_add_to_cart_button');
    if (!addBtn) return;

    // Если disabled
    if (addBtn.classList.contains('disabled')) {
      e.preventDefault();
      if (addBtn.classList.contains('wc-variation-is-unavailable')) {
        window.alert(wc_add_to_cart_variation_params.i18n_unavailable_text);
      } else if (addBtn.classList.contains('wc-variation-selection-needed')) {
        window.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text);
      }
    }
  }

  onResetDisplayedVariation(e) {
    // Сбрасываем sku, weight, dimensions
    const skuEls = this.productEl?.querySelectorAll('.product_meta .sku') || [];
    skuEls.forEach(el => resetContent(el));

    const weightEls = this.productEl?.querySelectorAll('.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value') || [];
    weightEls.forEach(el => resetContent(el));

    const dimEls = this.productEl?.querySelectorAll('.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value') || [];
    dimEls.forEach(el => resetContent(el));

    // reset_image
    this.formEl.dispatchEvent(new CustomEvent('reset_image'));

    // slideUp(200) -> просто hide
    if (this.singleVariation) {
      this.singleVariation.style.display = 'none';
    }
    // trigger('hide_variation')
    const hideEvt = new CustomEvent('hide_variation');
    this.formEl.dispatchEvent(hideEvt);
  }

  onAnnounceReset(e) {
    if (this.resetAlert) {
      this.resetAlert.textContent = wc_add_to_cart_variation_params.i18n_reset_alert_text;
    }
  }

  onResetVariationFocus(e) {
    // Ставим фокус на первый select
    if (this.attributeFields.length > 0) {
      this.attributeFields[0].focus();
    }
  }

  onClearResetAnnouncement(e) {
    if (this.resetAlert) {
      this.resetAlert.textContent = '';
    }
  }

  onResetImage(e) {
    variationsImageReset(this.formEl);
  }

  onChange(e) {
    // Сбрасываем variation_id
    const variationIdEl = this.formEl.querySelector('input[name="variation_id"], input.variation_id');
    if (variationIdEl) {
      variationIdEl.value = '';
      variationIdEl.dispatchEvent(new Event('change', { bubbles: true }));
    }
    this.formEl.dispatchEvent(new Event('clear_reset_announcement'));
    // Удаляем .wc-no-matching-variations
    const noMatch = this.formEl.querySelectorAll('.wc-no-matching-variations');
    noMatch.forEach(el => el.parentNode.remove());

    if (this.useAjax) {
      this.formEl.dispatchEvent(new CustomEvent('check_variations'));
    } else {
      // trigger('woocommerce_variation_select_change')
      const evt1 = new CustomEvent('woocommerce_variation_select_change');
      this.formEl.dispatchEvent(evt1);

      this.formEl.dispatchEvent(new CustomEvent('check_variations'));
    }

    // trigger('woocommerce_variation_has_changed')
    this.formEl.dispatchEvent(new CustomEvent('woocommerce_variation_has_changed'));
  }

  onFoundVariation(e, variation) {
    // Аналог jQuery
    const skuEls = this.productEl?.querySelectorAll('.product_meta .sku') || [];
    const weightEls = this.productEl?.querySelectorAll('.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value') || [];
    const dimEls = this.productEl?.querySelectorAll('.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value') || [];

    // qty_input
    const qtyInput = this.singleVariationWrap?.querySelector('.quantity input.qty[name="quantity"]');
    const qtyDiv = qtyInput?.closest('.quantity');

    let purchasable = true;
    let variation_id = '';
    let templateHtml = '';

    if (variation?.sku) {
      skuEls.forEach(el => setContent(el, variation.sku));
    } else {
      skuEls.forEach(el => resetContent(el));
    }

    if (variation?.weight) {
      weightEls.forEach(el => setContent(el, variation.weight_html));
    } else {
      weightEls.forEach(el => resetContent(el));
    }

    if (variation?.dimensions) {
      dimEls.forEach(el => setContent(el, variation.dimensions_html));
    } else {
      dimEls.forEach(el => resetContent(el));
    }

    // Обновляем картинку
    variationsImageUpdate(this.formEl, variation);

    if (!variation.variation_is_visible) {
      // template = wp_template('unavailable-variation-template');
      const tmpl = wpTemplate('unavailable-variation-template');
      templateHtml = tmpl({ variation });
    } else {
      // template = wp_template('variation-template');
      const tmpl = wpTemplate('variation-template');
      templateHtml = tmpl({ variation });
      variation_id = variation.variation_id;
    }

    // вставляем в singleVariation
    if (this.singleVariation) {
      // заменяем
      this.singleVariation.innerHTML = templateHtml;
    }

    // Устанавливаем variation_id
    const varIdEls = this.formEl.querySelectorAll('input[name="variation_id"], input.variation_id');
    varIdEls.forEach(el => {
      el.value = variation.variation_id;
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Прячем/показываем qty
    if (variation.is_sold_individually === 'yes') {
      if (qtyInput) {
        qtyInput.value = '1';
        qtyInput.setAttribute('min', '1');
        qtyInput.removeAttribute('max');
        qtyInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (qtyDiv) qtyDiv.style.display = 'none';
    } else {
      if (qtyDiv) qtyDiv.style.display = ''; // show
      if (qtyInput) {
        let qtyVal = parseFloat(qtyInput.value);
        if (isNaN(qtyVal)) {
          qtyVal = variation.min_qty;
        } else {
          if (qtyVal > parseFloat(variation.max_qty)) {
            qtyVal = variation.max_qty;
          }
          if (qtyVal < parseFloat(variation.min_qty)) {
            qtyVal = variation.min_qty;
          }
        }
        qtyInput.setAttribute('min', variation.min_qty);
        qtyInput.setAttribute('max', variation.max_qty);
        qtyInput.value = qtyVal;
        qtyInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // опред. purchasable
    if (!variation.is_purchasable || !variation.is_in_stock || !variation.variation_is_visible) {
      purchasable = false;
    }

    
    // Показ
    if (this.singleVariation) {
      const text = this.singleVariation.textContent.trim();

      
      if (text) {
        this.singleVariation.style.display = '';
        const evtShow = new CustomEvent('show_variation', { detail: [variation, purchasable], bubbles: true });
        this.formEl.dispatchEvent(evtShow);
      } else {
        // Просто show
        this.singleVariation.style.display = '';
        const evtShow = new CustomEvent('show_variation', { detail: [variation, purchasable], bubbles: true });
        this.formEl.dispatchEvent(evtShow);
      }
    }
  }

  onFindVariation(e, chosenAttributes) {
    const attributes = chosenAttributes || this.getChosenAttributes();
    const currentAttrs = attributes.data;

    // Если выбраны все атрибуты
    if (attributes.count && attributes.count === attributes.chosenCount) {
      if (this.useAjax) {
        if (this.xhr) {
          this.xhr.abort();
        }
        blockElement(this.formEl);
        currentAttrs.product_id = parseInt(this.formEl.dataset.product_id || '0', 10);
        currentAttrs.custom_data = this.formEl.dataset.custom_data || '';

        // Делаем fetch
        const url = wc_add_to_cart_variation_params.wc_ajax_url
          .toString()
          .replace('%%endpoint%%', 'get_variation');

        this.xhr = fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(currentAttrs)
        })
          .then(resp => resp.json())
          .then(variation => {
            if (variation) {
              // trigger found_variation
              const evt = new CustomEvent('found_variation', { detail: [variation] });
              this.formEl.dispatchEvent(evt);
            } else {
              this.formEl.dispatchEvent(new Event('reset_data'));
              attributes.chosenCount = 0;
              if (!this.loading) {
                this.showNoMatchingVariationsMsg();
              }
            }
          })
          .finally(() => {
            unblockElement(this.formEl);
          });
      } else {
        // findMatchingVariations
        this.formEl.dispatchEvent(new Event('update_variation_values'));
        const match = this.findMatchingVariations(this.variationData, currentAttrs);
        const variation = match.shift();
        if (variation) {
          const evt = new CustomEvent('found_variation', { detail: [variation] });
          this.formEl.dispatchEvent(evt);
        } else {
          this.formEl.dispatchEvent(new Event('reset_data'));
          attributes.chosenCount = 0;
          if (!this.loading) {
            this.showNoMatchingVariationsMsg();
          }
        }
      }
    } else {
      this.formEl.dispatchEvent(new Event('update_variation_values'));
      this.formEl.dispatchEvent(new Event('reset_data'));
    }

    // Show reset link
    this.toggleResetLink(attributes.chosenCount > 0);
  }

  onUpdateAttributes(e) {
    if (this.useAjax) {
      return;
    }

    const attributes = this.getChosenAttributes();
    const currentAttrs = attributes.data;

    // Перебираем селекты и убираем недоступные опции
    this.attributeFields.forEach((selectEl) => {
      const showOptionNone = selectEl.dataset.show_option_none;
      const dataAttrName = selectEl.dataset.attribute_name || selectEl.name;
      let selectedVal = selectEl.value || '';
      let selectedValValid = true;

      // Если не сохранили исходные <option> — сохраним
      if (!selectEl.dataset.attribute_html) {
        // сохраняем «эталон»
        selectEl.dataset.attribute_html = selectEl.innerHTML;
      }

      // Создаём временный select
      const newSelect = document.createElement('select');
      newSelect.innerHTML = selectEl.dataset.attribute_html;

      // Не учитываем текущий атрибут (затираем)
      const checkAttributes = { ...currentAttrs };
      checkAttributes[dataAttrName] = '';

      const variations = this.findMatchingVariations(this.variationData, checkAttributes);

      // Помечаем «attached / enabled»
      for (let i = 0; i < variations.length; i++) {
        const v = variations[i];
        const vAttrs = v.attributes;
        for (const attrName in vAttrs) {
          if (Object.hasOwnProperty.call(vAttrs, attrName)) {
            const attrVal = vAttrs[attrName];
            if (attrName === dataAttrName) {
              let variationActive = '';
              if (v.variation_is_active) {
                variationActive = 'enabled';
              }
              if (attrVal) {
                // Нужно найти <option value="attrVal">
                // Сравниваем текст (decode entities)
                const optionsList = newSelect.querySelectorAll('option');
                for (let o = 0; o < optionsList.length; o++) {
                  const opt = optionsList[o];
                  if (opt.value === attrVal) {
                    opt.classList.add('attached', variationActive);
                    break;
                  }
                }
              } else {
                // attach all except placeholder
                const optionsList = newSelect.querySelectorAll('option:nth-child(n+2)');
                optionsList.forEach(opt => {
                  opt.classList.add('attached', variationActive);
                });
              }
            }
          }
        }
      }

      // Сколько options.attached
      const attachedCount = newSelect.querySelectorAll('option.attached').length;

      // Проверяем, валиден ли selectedVal
      if (selectedVal) {
        selectedValValid = false;
        if (attachedCount > 0) {
          const enabledOpts = newSelect.querySelectorAll('option.attached.enabled');
          enabledOpts.forEach(opt => {
            if (opt.value === selectedVal) {
              selectedValValid = true;
            }
          });
        }
      }

      // Если есть приписка show_option_none="no", убираем placeholder
      if (attachedCount > 0 && selectedVal && selectedValValid && showOptionNone === 'no') {
        // Удаляем первую опцию
        const firstOpt = newSelect.querySelector('option');
        if (firstOpt) {
          newSelect.removeChild(firstOpt);
        }
      }

      // Удаляем «не attached»
      const notAttached = newSelect.querySelectorAll('option:not(.attached)');
      notAttached.forEach(opt => {
        if (opt !== newSelect.querySelector('option')) {
          opt.remove();
        }
      });

      // Отключаем те, что не .enabled
      const notEnabled = newSelect.querySelectorAll('option.attached:not(.enabled)');
      notEnabled.forEach(opt => {
        opt.disabled = true;
      });

      // Заменяем selectEl содержимым newSelect
      selectEl.innerHTML = newSelect.innerHTML;

      // Устанавливаем выбранное значение, если оно валидно
      if (selectedVal) {
        if (selectedValValid) {
          selectEl.value = selectedVal;
        } else {
          selectEl.value = '';
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } else {
        // Пустой
        selectEl.value = '';
      }
    });

    // Тригерим «woocommerce_update_variation_values»
    const evt = new CustomEvent('woocommerce_update_variation_values');
    this.formEl.dispatchEvent(evt);
  }

  getChosenAttributes() {
    const data = {};
    let count = 0;
    let chosen = 0;

    this.attributeFields.forEach(selectEl => {
      const name = selectEl.dataset.attribute_name || selectEl.name;
      const val = selectEl.value || '';
      if (val.length > 0) chosen++;
      count++;
      data[name] = val;
    });

    return {
      count,
      chosenCount: chosen,
      data
    };
  }

  findMatchingVariations(variations, attributes) {
    if (!variations || !Array.isArray(variations)) return [];
    const matching = [];
    for (let i = 0; i < variations.length; i++) {
      const variation = variations[i];
      if (this.isMatch(variation.attributes, attributes)) {
        matching.push(variation);
      }
    }
    return matching;
  }

  isMatch(variationAttrs, attrs) {
    for (const attrName in variationAttrs) {
      if (Object.hasOwnProperty.call(variationAttrs, attrName)) {
        const val1 = variationAttrs[attrName];
        const val2 = attrs[attrName];
        if (val1 !== undefined && val2 !== undefined && val1.length !== 0 && val2.length !== 0 && val1 !== val2) {
          return false;
        }
      }
    }
    return true;
  }

  toggleResetLink(on) {
    if (this.resetAlert) {
      this.resetAlert.textContent = '';
    }
    if (this.resetVariationsBtn) {
      if (on) {
        // show
        this.resetVariationsBtn.style.visibility = 'visible';
        this.resetVariationsBtn.style.display = 'inline-block';
      } else {
        this.resetVariationsBtn.style.visibility = 'hidden';
        this.resetVariationsBtn.style.display = 'none';
      }
    }
  }

  showNoMatchingVariationsMsg() {
    // Вставляем сообщение
    const div = document.createElement('div');
    div.setAttribute('role', 'alert');

    const p = document.createElement('p');
    p.classList.add('wc-no-matching-variations', 'woocommerce-info');
    p.textContent = wc_add_to_cart_variation_params.i18n_no_matching_variations_text;

    div.appendChild(p);

    // Ставим после .single_variation
    if (this.singleVariation?.parentNode) {
      this.singleVariation.insertAdjacentElement('afterend', div);
      p.style.display = 'block';
    }
  }
}

/**
 * Функция-инициализатор (аналог $(document).ready -> $('.variations_form').wc_variation_form())
 * Вызывайте её, чтобы проинициализировать все формы вариаций на странице.
 */
export function initVariationForms() {
  const forms = document.querySelectorAll('.variations_form');
  forms.forEach((formEl) => {
    // Чтобы избежать повторной инициализации, можно сохранить инстанс
    if (!formEl.__variationFormInstance) {
      formEl.__variationFormInstance = new VariationForm(formEl);
    }
  });
}

// Автоматический запуск, как в конце wc-add-to-cart-variation.js
// document.addEventListener('DOMContentLoaded', () => {
//   if (typeof window.wc_add_to_cart_variation_params !== 'undefined') {
//     initVariationForms();
//   }
// });
