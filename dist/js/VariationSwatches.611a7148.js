!function(){function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2.register)("ah4V4",function(e,a){function i(t={}){return function(e,a){if(e&&("string"==typeof e.path&&e.path.includes("woo-variation-swatches")||"string"==typeof e.url&&e.url.includes("woo-variation-swatches"))&&Object.keys(t).length>0)for(let[a,i]of Object.entries(t))"string"!=typeof e.url||o(e.url,a)||(e.url=s(e.url,a,i)),"string"!=typeof e.path||o(e.path,a)||(e.path=s(e.path,a,i));return a(e)}}function o(t,e){return new URL(t,location.origin).searchParams.has(e)}function s(t,e,a){let i=new URL(t,location.origin);return i.searchParams.set(e,a),i.toString()}function n(t,e){return -1!==t.indexOf(e)}t(e.exports,"createMiddlewareForExtraQueryParams",function(){return i}),t(e.exports,"WooVariationSwatchesPlugin",function(){return r}),t(e.exports,"initAllVariationSwatches",function(){return l});class r{constructor(t,e={},a="WooVariationSwatches"){this.name=a,this.element=t,this.settings=Object.assign({},this.defaults,e),this.productVariations=[];try{t.dataset.product_variations&&(this.productVariations=JSON.parse(t.dataset.product_variations))}catch(t){}this.isAjaxVariation=this.productVariations.length<1,this.productId=t.dataset.product_id||null,this.resetVariationsBtn=t.querySelector(".reset_variations"),this.attributeFields=t.querySelectorAll(".variations select"),this.selectedItemTemplate='<span class="woo-selected-variation-item-name" data-default=""></span>',this.element.classList.add("wvs-loaded"),this.init(),this.update();let i=new CustomEvent("woo_variation_swatches_loaded",{detail:this});document.dispatchEvent(i)}get defaults(){return{}}init(){this.prepareLabel(),this.prepareItems(),this.setupItems(),this.setupEvents(),this.setUpStockInfo()}isAjaxVariationMethod(){return this.isAjaxVariation}prepareLabel(){window.woo_variation_swatches_options&&window.woo_variation_swatches_options.show_variation_label&&this.element.querySelectorAll(".variations .label").forEach(t=>{t.insertAdjacentHTML("beforeend",this.selectedItemTemplate)})}prepareItems(){this.element.querySelectorAll("ul.variable-items-wrapper").forEach(t=>{t.parentElement&&t.parentElement.classList.add("woo-variation-items-wrapper")})}setupItems(){this.element.querySelectorAll("ul.variable-items-wrapper").forEach(t=>{let e="",a=t.parentElement.previousElementSibling?t.parentElement.previousElementSibling.querySelector(".woo-selected-variation-item-name"):null,i=t.parentElement.querySelector("select.woo-variation-raw-select");if(!i)return;let o=Array.from(i.querySelectorAll("option")),s=o.filter(t=>t.disabled),n=o.filter(t=>t.classList.contains("out-of-stock")),r=o.find(t=>t.selected),l=o[1],c=[];o.forEach(t=>{t.value&&c.push(t.value)});let d=s.map(t=>t.value?t.value:"").filter(t=>t),u=n.map(t=>t.value?t.value:"").filter(t=>t);e=r?r.value:l?l.value:"";let v=c.filter(t=>!d.includes(t));this.setupItem(t,e,v,u,a)})}setupItem(t,e,a,i,o){t.querySelectorAll("li.variable-item").forEach(t=>{let s=t.dataset.value||"",r=t.dataset.title||"";t.classList.remove("selected","disabled","no-stock"),t.classList.add("disabled"),t.setAttribute("aria-checked","false"),t.setAttribute("tabindex","-1"),t.removeAttribute("data-wvstooltip-out-of-stock");let l=t.querySelector('input.variable-item-radio-input[type="radio"]');l&&(l.disabled=!0,l.checked=!1),!e&&window.woo_variation_swatches_options&&window.woo_variation_swatches_options.show_variation_label&&o&&(o.textContent=""),this.isAjaxVariationMethod()?(l&&(l.disabled=!1),t.classList.remove("disabled","no-stock"),s===e&&(t.classList.add("selected"),t.setAttribute("aria-checked","true"),t.setAttribute("tabindex","0"),l&&(l.checked=!0),window.woo_variation_swatches_options&&window.woo_variation_swatches_options.show_variation_label&&o&&(o.textContent=`${window.woo_variation_swatches_options.variation_label_separator} ${r}`),t.dispatchEvent(new CustomEvent("wvs-item-updated",{detail:[e,s]})))):(n(a,s)&&(t.classList.remove("selected","disabled"),t.removeAttribute("aria-hidden"),t.setAttribute("tabindex","0"),l&&(l.disabled=!1),s===e&&(t.classList.add("selected"),t.setAttribute("aria-checked","true"),l&&(l.checked=!0),window.woo_variation_swatches_options&&window.woo_variation_swatches_options.show_variation_label&&o&&(o.textContent=`${window.woo_variation_swatches_options.variation_label_separator} ${r}`),t.dispatchEvent(new CustomEvent("wvs-item-updated",{detail:[e,s]})))),n(i,s)&&window.woo_variation_swatches_options&&window.woo_variation_swatches_options.clickable_out_of_stock&&(t.classList.remove("disabled"),t.classList.add("no-stock"),t.setAttribute("data-wvstooltip-out-of-stock",window.woo_variation_swatches_options.out_of_stock_tooltip_text)))})}setupEvents(){this.element.querySelectorAll("ul.variable-items-wrapper").forEach(t=>{let e=t.parentElement.querySelector("select.woo-variation-raw-select");e&&(window.woo_variation_swatches_options&&window.woo_variation_swatches_options.clear_on_reselect?(t.addEventListener("click",t=>{let a=t.target.closest("li.variable-item:not(.radio-variable-item)");if(a){if(t.preventDefault(),t.stopPropagation(),a.classList.contains("selected")){e.value="";let t=new Event("change",{bubbles:!0});e.dispatchEvent(t);let i=new Event("click",{bubbles:!0});e.dispatchEvent(i),a.dispatchEvent(new CustomEvent("wvs-unselected-item",{detail:[e.value,e,this.element]}))}else{let t=a.dataset.value;e.value=t;let i=new Event("change",{bubbles:!0});e.dispatchEvent(i);let o=new Event("click",{bubbles:!0});e.dispatchEvent(o),a.dispatchEvent(new CustomEvent("wvs-selected-item",{detail:[t,e,this.element]}))}}}),t.addEventListener("click",t=>{let a=t.target.closest('input.variable-item-radio-input[type="radio"]');if(!a)return;t.stopPropagation();let i=a.value,o=a.closest("li.radio-variable-item");if(o&&o.classList.contains("selected")){e.value="";let t=new Event("change",{bubbles:!0});e.dispatchEvent(t);let a=new Event("click",{bubbles:!0});e.dispatchEvent(a),o.dispatchEvent(new CustomEvent("wvs-unselected-item",{detail:[i,e,this.element]}))}else{e.value=i;let t=new Event("change",{bubbles:!0});e.dispatchEvent(t);let a=new Event("click",{bubbles:!0});e.dispatchEvent(a),o.dispatchEvent(new CustomEvent("wvs-selected-item",{detail:[i,e,this.element]}))}})):(t.addEventListener("click",t=>{let a=t.target.closest("li.variable-item:not(.radio-variable-item)");if(!a)return;t.preventDefault(),t.stopPropagation();let i=a.dataset.value;e.value=i;let o=new Event("change",{bubbles:!0});e.dispatchEvent(o);let s=new Event("click",{bubbles:!0});e.dispatchEvent(s),a.dispatchEvent(new CustomEvent("wvs-selected-item",{detail:[i,e,this.element]})),this.setupItems()}),t.addEventListener("change",t=>{let a=t.target.closest('input.variable-item-radio-input[type="radio"]');if(!a)return;t.preventDefault(),t.stopPropagation();let i=a.value;e.value=i,e.dispatchEvent(new Event("change",{bubbles:!0})),e.dispatchEvent(new Event("click",{bubbles:!0}));let o=a.closest("li.radio-variable-item");o&&(o.classList.remove("selected","disabled","no-stock"),o.classList.add("selected"),o.dispatchEvent(new CustomEvent("wvs-selected-item",{detail:[i,e,this.element]})))})),t.addEventListener("keydown",t=>{let e=t.target.closest("li.variable-item:not(.disabled)");e&&(13===t.keyCode||32===t.keyCode)&&(t.preventDefault(),e.click())}))}),this.element.querySelectorAll(".woo-variation-swatches-variable-item-more").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();let a=t.parentElement;a&&(a.classList.remove("enabled-display-limit-mode","enabled-catalog-display-limit-mode"),t.remove())})}),this.element.querySelectorAll("[data-wvstooltip]").forEach(t=>{t.addEventListener("mouseenter",()=>{t.getBoundingClientRect().top<38?t.classList.add("wvs-tooltip-position-bottom"):t.classList.remove("wvs-tooltip-position-bottom")})})}update(){this.element.addEventListener("woocommerce_variation_has_changed",()=>{this.setupItems()})}setUpStockInfo(){if(window.woo_variation_swatches_options&&window.woo_variation_swatches_options.show_variation_stock){let t=parseInt(window.woo_variation_swatches_options.stock_label_threshold,10)||0;this.element.addEventListener("wvs-selected-item",()=>{let e=this.getChosenAttributes(),a=this.findStockVariations(this.productVariations,e);e.count>1&&e.count===e.chosenCount&&this.resetStockInfo(),e.count>1&&e.count===e.mayChosenCount&&a.forEach(e=>{let a=`[data-attribute_name="${e.attribute_name}"] > [data-value="${e.attribute_value}"]`,i=this.element.querySelector(a);if(!i)return;let o=i.querySelector(".wvs-stock-left-info");e.variation.is_in_stock&&e.variation.max_qty&&e.variation.variation_stock_left&&e.variation.max_qty<=t?(o&&o.setAttribute("data-wvs-stock-info",e.variation.variation_stock_left),i.classList.add("wvs-show-stock-left-info")):(i.classList.remove("wvs-show-stock-left-info"),o&&o.setAttribute("data-wvs-stock-info",""))})}),this.element.addEventListener("hide_variation",()=>{this.resetStockInfo()})}}resetStockInfo(){this.element.querySelectorAll(".variable-item").forEach(t=>{t.classList.remove("wvs-show-stock-left-info");let e=t.querySelector(".wvs-stock-left-info");e&&e.setAttribute("data-wvs-stock-info","")})}getChosenAttributes(){let t=0,e=0,a={};return this.attributeFields.forEach(i=>{let o=i.dataset.attribute_name||i.name,s=i.value||"";s.length>0&&e++,t++,a[o]=s}),{count:t,chosenCount:e,mayChosenCount:e+1,data:a}}findStockVariations(t,e){let a=[];for(let[i,o]of Object.entries(e.data))if(!o){let o=this.element.querySelector(`ul[data-attribute_name='${i}']`);if(!o)continue;let s=[];try{o.dataset.attribute_values&&(s=JSON.parse(o.dataset.attribute_values))}catch(t){s=[]}s.forEach(o=>{let s=Object.assign({},e.data);s[i]=o;let n=this.findMatchingVariations(t,s);if(n.length>0){let t=n[0];a.push({attribute_name:i,attribute_value:o,variation:t})}})}return a}findMatchingVariations(t,e){let a=[];for(let i=0;i<t.length;i++){let o=t[i];this.isMatch(o.attributes,e)&&a.push(o)}return a}isMatch(t,e){let a=!0;for(let i in t)if(Object.prototype.hasOwnProperty.call(t,i)){let o=t[i],s=e[i];if(o&&s&&o!==s){a=!1;break}}return a}destroy(){this.element.classList.remove("wvs-loaded")}}function l(){document.querySelectorAll(".variations_form:not(.wvs-loaded), .woo_variation_swatches_variations_form:not(.wvs-loaded), .ywcp_inner_selected_container:not(.wvs-loaded)").forEach(t=>{t.__wooVariationSwatchesInstance||(t.__wooVariationSwatchesInstance=new r(t,{},"WooVariationSwatches"))})}document.addEventListener("woo_variation_swatches_init",()=>{l()}),document.addEventListener("wc_variation_form-wvs",()=>{let t=new CustomEvent("woo_variation_swatches_init");document.dispatchEvent(t)}),function(){let t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(...e){return this.addEventListener("load",function(){setTimeout(()=>{document.querySelectorAll(".variations_form:not(.wvs-loaded)").forEach(t=>{t.__wooVariationSwatchesInstance||(t.__wooVariationSwatchesInstance=new r(t,{},"WooVariationSwatches"))})},1e3)}),t.apply(this,e)}}(),document.addEventListener("DOMContentLoaded",()=>{try{l()}catch(t){console.error("Variation Swatches init error:",t)}}),document.body.addEventListener("wc-composite-initializing",t=>{let e=t.detail;e&&e.actions&&e.actions.add_action("component_options_state_changed",t=>{t.$component_content.querySelectorAll(".variations_form").forEach(t=>{t.__wooVariationSwatchesInstance&&(t.__wooVariationSwatchesInstance.destroy(),delete t.__wooVariationSwatchesInstance)})})})})}();