// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6Ayda":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69972a5eef2d9f38";
module.bundle.HMR_BUNDLE_ID = "f1d3b2f6ec1ccfff";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1pyDU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lightboxJs = require("./modules/lightbox.js");
var _lightboxJsDefault = parcelHelpers.interopDefault(_lightboxJs);
var _modalContainerJs = require("./modules/modal-container.js");
var _modalContainerJsDefault = parcelHelpers.interopDefault(_modalContainerJs);
var _tabsJs = require("./modules/tabs.js");
var _tabsJsDefault = parcelHelpers.interopDefault(_tabsJs);
var _accordionJs = require("./modules/accordion.js");
var _accordionJsDefault = parcelHelpers.interopDefault(_accordionJs);
var _niceSelectJs = require("./modules/niceSelect.js");
var _niceSelectJsDefault = parcelHelpers.interopDefault(_niceSelectJs);
var _validationJs = require("./modules/validation.js");
var _validationJsDefault = parcelHelpers.interopDefault(_validationJs);
var _vanillaLazyload = require("vanilla-lazyload");
var _vanillaLazyloadDefault = parcelHelpers.interopDefault(_vanillaLazyload);
var _localStorageJs = require("./modules/local-storage.js");
var _localStorageJsDefault = parcelHelpers.interopDefault(_localStorageJs);
var _readMoreJs = require("./modules/read-more.js");
var _readMoreJsDefault = parcelHelpers.interopDefault(_readMoreJs);
var _swiperJs = require("./modules/swiper.js");
var _swiperJsDefault = parcelHelpers.interopDefault(_swiperJs);
var _dropdownJs = require("./modules/dropdown.js");
var _dropdownJsDefault = parcelHelpers.interopDefault(_dropdownJs);
var _menuJs = require("./modules/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _loadMoreJs = require("./modules/load-more.js");
var _loadMoreJsDefault = parcelHelpers.interopDefault(_loadMoreJs);
var _quickBuyJs = require("./modules/quick-buy.js");
var _quickBuyJsDefault = parcelHelpers.interopDefault(_quickBuyJs);
var _googleAdsJs = require("./modules/google-ads.js");
document.addEventListener("DOMContentLoaded", function(event) {
    window.lazyLoadInstance = new (0, _vanillaLazyloadDefault.default)({
        cancel_on_exit: false,
        threshold: 150,
        unobserve_entered: true
    });
    new (0, _modalContainerJsDefault.default)(".c-modal", ".l-modal-container");
    new (0, _localStorageJsDefault.default)("[data-lang]");
    new (0, _tabsJsDefault.default)(".js-tab-mobile-menu");
    new (0, _accordionJsDefault.default)(".js-accordion__item", ".js-accordion");
    (0, _dropdownJsDefault.default)();
    (0, _menuJsDefault.default)();
    const pageClass = document.querySelector("main").classList.value;
    const from_validator = new (0, _validationJsDefault.default)();
    switch(pageClass){
        case "p-main":
            (0, _swiperJsDefault.default)();
            break;
        case "p-shop":
            new (0, _niceSelectJsDefault.default)(".js-filter-select, .js-filter-sort select");
            (0, _readMoreJsDefault.default)();
            (0, _loadMoreJsDefault.default)();
            (0, _googleAdsJs.GA_view_item_list)();
            (0, _googleAdsJs.GA_select_item)();
            break;
        case "p-product":
            (0, _swiperJsDefault.default)();
            new (0, _lightboxJsDefault.default)(".js-lightbox", ".js-lightbox-modal");
            if (document.querySelector("form[name='quick-buy']")) {
                from_validator.validate("firstName", '[name="name"]');
                from_validator.validate("lastName", '[name="surname"]');
                from_validator.validate("post", '[name="address"]');
                from_validator.validate("billingCity", '[name="city"]');
                from_validator.validate("phone", '[name="phone"]');
                from_validator.validate("email", '[name="email"]');
                from_validator.validate("submit", 'button[name="quick-buy-submit"]');
            }
            (0, _quickBuyJsDefault.default)();
            (0, _googleAdsJs.GA_view_item)();
            (0, _googleAdsJs.GA_add_to_cart)();
            break;
        case "p-checkout":
            if (document.querySelector("form[name='checkout']")) {
                from_validator.validate("firstName", '[name="billing_first_name"]');
                from_validator.validate("lastName", '[name="billing_last_name"]');
                from_validator.validate("post", '[name="billing_address_1"]');
                from_validator.validate("billingCity", '[name="billing_city"]');
                from_validator.validate("phone", '[name="billing_phone"]');
                from_validator.validate("email", '[name="billing_email"]');
                from_validator.validate("submit", 'button[name="woocommerce_checkout_place_order"]');
            }
            break;
        case "p-shop p-search":
            new (0, _niceSelectJsDefault.default)(".js-filter-sort select");
            break;
        case "p-cart":
            break;
        case "p-thank":
            (0, _googleAdsJs.GA_purchase)();
            break;
        case "p-page is-page":
            break;
        case "p-reviews":
            break;
        default:
            break;
    }
});

},{"./modules/lightbox.js":"3TLSX","./modules/modal-container.js":"jlfZ9","./modules/tabs.js":"24HXn","./modules/accordion.js":"lONHC","./modules/niceSelect.js":"8X66M","./modules/validation.js":"9ihtd","vanilla-lazyload":"jxeny","./modules/local-storage.js":"8J1IW","./modules/read-more.js":"7zsXE","./modules/swiper.js":"dos1y","./modules/dropdown.js":"k7Nli","./modules/menu.js":"eKfmm","./modules/load-more.js":"cJQa1","./modules/quick-buy.js":"ZVlin","./modules/google-ads.js":"kK52e","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"3TLSX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiperBundle = require("../../../node_modules/swiper/swiper-bundle");
var _swiperBundleDefault = parcelHelpers.interopDefault(_swiperBundle);
class lightbox {
    swiper;
    switcher = true;
    constructor(selector, modalContainer){
        this.el = selector;
        this.modal = modalContainer;
        this.init();
    }
    init() {
        let images = document.querySelectorAll(this.el);
        let hrefArray = [];
        images.forEach((image, index)=>{
            let href = image.getAttribute("href");
            hrefArray.push(href);
            // console.log(href.split('.').pop());
            image.addEventListener("click", (event)=>{
                event.preventDefault();
                if (this.switcher == true) this.createModal(hrefArray);
                this.switcher = false;
                this.openModal(index);
            }, false);
        });
    }
    initSlider() {
        const swiper = new (0, _swiperBundleDefault.default)(".js-lightbox-image", {
            watchOverflow: true,
            zoom: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                320: {
                    navigation: false
                },
                576: {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            }
        });
        this.swiper = swiper;
    }
    openModal(index) {
        document.querySelector('[data-modal="#lightbox"]').click();
        this.swiper.slideTo(index, 0);
        document.querySelector(".js-lightbox-modal .js-load-more-icon").style.display = "none";
    }
    closeModal() {
        document.querySelector('.js-lightbox-modal [data-modal="close"]').click();
    }
    createModal(hrefArray) {
        let lightboxModal = document.querySelectorAll(this.modal);
        let htmlSlide = "";
        hrefArray.forEach((href)=>{
            let hrefType = href.split(".").pop();
            let file;
            if (hrefType == "mp4" || hrefType == "mov") file = `<video src="${href}" muted playsinline autoplay loop poster="${hrefArray[1]}"></video>`;
            else file = `<img src="${href}">`;
            htmlSlide = htmlSlide + `<div class="swiper-slide">
																	<div class="swiper-zoom-container">
																		${file}
																	</div>
																</div>`;
        });
        let html = ` 
				<div class="swiper js-lightbox-image">
          <div class="swiper-wrapper">
          	${htmlSlide}
          </div>
          <div class="d-none d-sm-block swiper-button-next"></div>
		      <div class="d-none d-sm-block swiper-button-prev"></div>
		      <div class="swiper-pagination"></div>
        </div>
			`;
        lightboxModal[0].insertAdjacentHTML("afterBegin", html);
        this.initSlider();
    }
}
exports.default = lightbox;

},{"../../../node_modules/swiper/swiper-bundle":"jcfb3","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"jcfb3":[function(require,module,exports) {
/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */ /* eslint-disable no-param-reassign */ function isObject$1(obj) {
        return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
    }
    function extend$1(target, src) {
        if (target === void 0) target = {};
        if (src === void 0) src = {};
        Object.keys(src).forEach((key)=>{
            if (typeof target[key] === "undefined") target[key] = src[key];
            else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) extend$1(target[key], src[key]);
        });
    }
    const ssrDocument = {
        body: {},
        addEventListener () {},
        removeEventListener () {},
        activeElement: {
            blur () {},
            nodeName: ""
        },
        querySelector () {
            return null;
        },
        querySelectorAll () {
            return [];
        },
        getElementById () {
            return null;
        },
        createEvent () {
            return {
                initEvent () {}
            };
        },
        createElement () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute () {},
                getElementsByTagName () {
                    return [];
                }
            };
        },
        createElementNS () {
            return {};
        },
        importNode () {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function getDocument() {
        const doc = typeof document !== "undefined" ? document : {};
        extend$1(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState () {},
            pushState () {},
            go () {},
            back () {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener () {},
        removeEventListener () {},
        getComputedStyle () {
            return {
                getPropertyValue () {
                    return "";
                }
            };
        },
        Image () {},
        Date () {},
        screen: {},
        setTimeout () {},
        clearTimeout () {},
        matchMedia () {
            return {};
        },
        requestAnimationFrame (callback) {
            if (typeof setTimeout === "undefined") {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame (id) {
            if (typeof setTimeout === "undefined") return;
            clearTimeout(id);
        }
    };
    function getWindow() {
        const win = typeof window !== "undefined" ? window : {};
        extend$1(win, ssrWindow);
        return win;
    }
    /**
     * Dom7 4.0.4
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2022, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: January 11, 2022
     */ /* eslint-disable no-proto */ function makeReactive(obj) {
        const proto = obj.__proto__;
        Object.defineProperty(obj, "__proto__", {
            get () {
                return proto;
            },
            set (value) {
                proto.__proto__ = value;
            }
        });
    }
    class Dom7 extends Array {
        constructor(items){
            if (typeof items === "number") super(items);
            else {
                super(...items || []);
                makeReactive(this);
            }
        }
    }
    function arrayFlat(arr) {
        if (arr === void 0) arr = [];
        const res = [];
        arr.forEach((el)=>{
            if (Array.isArray(el)) res.push(...arrayFlat(el));
            else res.push(el);
        });
        return res;
    }
    function arrayFilter(arr, callback) {
        return Array.prototype.filter.call(arr, callback);
    }
    function arrayUnique(arr) {
        const uniqueArray = [];
        for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
        return uniqueArray;
    }
    function qsa(selector, context) {
        if (typeof selector !== "string") return [
            selector
        ];
        const a = [];
        const res = context.querySelectorAll(selector);
        for(let i = 0; i < res.length; i += 1)a.push(res[i]);
        return a;
    }
    function $(selector, context) {
        const window1 = getWindow();
        const document1 = getDocument();
        let arr = [];
        if (!context && selector instanceof Dom7) return selector;
        if (!selector) return new Dom7(arr);
        if (typeof selector === "string") {
            const html = selector.trim();
            if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                let toCreate = "div";
                if (html.indexOf("<li") === 0) toCreate = "ul";
                if (html.indexOf("<tr") === 0) toCreate = "tbody";
                if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
                if (html.indexOf("<tbody") === 0) toCreate = "table";
                if (html.indexOf("<option") === 0) toCreate = "select";
                const tempParent = document1.createElement(toCreate);
                tempParent.innerHTML = html;
                for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
            } else arr = qsa(selector.trim(), context || document1);
             // arr = qsa(selector, document);
        } else if (selector.nodeType || selector === window1 || selector === document1) arr.push(selector);
        else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector;
            arr = selector;
        }
        return new Dom7(arrayUnique(arr));
    }
    $.fn = Dom7.prototype; // eslint-disable-next-line
    function addClass() {
        for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++)classes[_key] = arguments[_key];
        const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
        this.forEach((el)=>{
            el.classList.add(...classNames);
        });
        return this;
    }
    function removeClass() {
        for(var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)classes[_key2] = arguments[_key2];
        const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
        this.forEach((el)=>{
            el.classList.remove(...classNames);
        });
        return this;
    }
    function toggleClass() {
        for(var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)classes[_key3] = arguments[_key3];
        const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
        this.forEach((el)=>{
            classNames.forEach((className)=>{
                el.classList.toggle(className);
            });
        });
    }
    function hasClass() {
        for(var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)classes[_key4] = arguments[_key4];
        const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
        return arrayFilter(this, (el)=>{
            return classNames.filter((className)=>el.classList.contains(className)).length > 0;
        }).length > 0;
    }
    function attr(attrs, value) {
        if (arguments.length === 1 && typeof attrs === "string") {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs);
            return undefined;
        } // Set attrs
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i].setAttribute(attrs, value);
            else // Object
            for(const attrName in attrs){
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
        }
        return this;
    }
    function removeAttr(attr) {
        for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
        return this;
    }
    function transform(transform) {
        for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform;
        return this;
    }
    function transition$1(duration) {
        for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
        return this;
    }
    function on() {
        for(var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)args[_key5] = arguments[_key5];
        let [eventType, targetSelector, listener, capture] = args;
        if (typeof args[1] === "function") {
            [eventType, listener, capture] = args;
            targetSelector = undefined;
        }
        if (!capture) capture = false;
        function handleLiveEvent(e) {
            const target = e.target;
            if (!target) return;
            const eventData = e.target.dom7EventData || [];
            if (eventData.indexOf(e) < 0) eventData.unshift(e);
            if ($(target).is(targetSelector)) listener.apply(target, eventData);
            else {
                const parents = $(target).parents(); // eslint-disable-line
                for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
            }
        }
        function handleEvent(e) {
            const eventData = e && e.target ? e.target.dom7EventData || [] : [];
            if (eventData.indexOf(e) < 0) eventData.unshift(e);
            listener.apply(this, eventData);
        }
        const events = eventType.split(" ");
        let j;
        for(let i = 0; i < this.length; i += 1){
            const el = this[i];
            if (!targetSelector) for(j = 0; j < events.length; j += 1){
                const event1 = events[j];
                if (!el.dom7Listeners) el.dom7Listeners = {};
                if (!el.dom7Listeners[event1]) el.dom7Listeners[event1] = [];
                el.dom7Listeners[event1].push({
                    listener,
                    proxyListener: handleEvent
                });
                el.addEventListener(event1, handleEvent, capture);
            }
            else // Live events
            for(j = 0; j < events.length; j += 1){
                const event1 = events[j];
                if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                if (!el.dom7LiveListeners[event1]) el.dom7LiveListeners[event1] = [];
                el.dom7LiveListeners[event1].push({
                    listener,
                    proxyListener: handleLiveEvent
                });
                el.addEventListener(event1, handleLiveEvent, capture);
            }
        }
        return this;
    }
    function off() {
        for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
        let [eventType, targetSelector, listener, capture] = args;
        if (typeof args[1] === "function") {
            [eventType, listener, capture] = args;
            targetSelector = undefined;
        }
        if (!capture) capture = false;
        const events = eventType.split(" ");
        for(let i = 0; i < events.length; i += 1){
            const event1 = events[i];
            for(let j = 0; j < this.length; j += 1){
                const el = this[j];
                let handlers;
                if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event1];
                else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event1];
                if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                    const handler = handlers[k];
                    if (listener && handler.listener === listener) {
                        el.removeEventListener(event1, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                        el.removeEventListener(event1, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    } else if (!listener) {
                        el.removeEventListener(event1, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    }
                }
            }
        }
        return this;
    }
    function trigger() {
        const window1 = getWindow();
        for(var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++)args[_key9] = arguments[_key9];
        const events = args[0].split(" ");
        const eventData = args[1];
        for(let i = 0; i < events.length; i += 1){
            const event1 = events[i];
            for(let j = 0; j < this.length; j += 1){
                const el = this[j];
                if (window1.CustomEvent) {
                    const evt = new window1.CustomEvent(event1, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true
                    });
                    el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0);
                    el.dispatchEvent(evt);
                    el.dom7EventData = [];
                    delete el.dom7EventData;
                }
            }
        }
        return this;
    }
    function transitionEnd$1(callback) {
        const dom = this;
        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            dom.off("transitionend", fireCallBack);
        }
        if (callback) dom.on("transitionend", fireCallBack);
        return this;
    }
    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                const styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
        }
        return null;
    }
    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                const styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
        }
        return null;
    }
    function offset() {
        if (this.length > 0) {
            const window1 = getWindow();
            const document1 = getDocument();
            const el = this[0];
            const box = el.getBoundingClientRect();
            const body = document1.body;
            const clientTop = el.clientTop || body.clientTop || 0;
            const clientLeft = el.clientLeft || body.clientLeft || 0;
            const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
            const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }
        return null;
    }
    function styles() {
        const window1 = getWindow();
        if (this[0]) return window1.getComputedStyle(this[0], null);
        return {};
    }
    function css(props, value) {
        const window1 = getWindow();
        let i;
        if (arguments.length === 1) {
            if (typeof props === "string") {
                // .css('width')
                if (this[0]) return window1.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                // .css({ width: '100px' })
                for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === "string") {
            // .css('width', '100px')
            for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
            return this;
        }
        return this;
    }
    function each(callback) {
        if (!callback) return this;
        this.forEach((el, index)=>{
            callback.apply(el, [
                el,
                index
            ]);
        });
        return this;
    }
    function filter(callback) {
        const result = arrayFilter(this, callback);
        return $(result);
    }
    function html(html) {
        if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
        for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html;
        return this;
    }
    function text(text) {
        if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
        for(let i = 0; i < this.length; i += 1)this[i].textContent = text;
        return this;
    }
    function is(selector) {
        const window1 = getWindow();
        const document1 = getDocument();
        const el = this[0];
        let compareWith;
        let i;
        if (!el || typeof selector === "undefined") return false;
        if (typeof selector === "string") {
            if (el.matches) return el.matches(selector);
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
            if (el.msMatchesSelector) return el.msMatchesSelector(selector);
            compareWith = $(selector);
            for(i = 0; i < compareWith.length; i += 1){
                if (compareWith[i] === el) return true;
            }
            return false;
        }
        if (selector === document1) return el === document1;
        if (selector === window1) return el === window1;
        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [
                selector
            ] : selector;
            for(i = 0; i < compareWith.length; i += 1){
                if (compareWith[i] === el) return true;
            }
            return false;
        }
        return false;
    }
    function index() {
        let child = this[0];
        let i;
        if (child) {
            i = 0; // eslint-disable-next-line
            while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
            return i;
        }
        return undefined;
    }
    function eq(index) {
        if (typeof index === "undefined") return this;
        const length = this.length;
        if (index > length - 1) return $([]);
        if (index < 0) {
            const returnIndex = length + index;
            if (returnIndex < 0) return $([]);
            return $([
                this[returnIndex]
            ]);
        }
        return $([
            this[index]
        ]);
    }
    function append() {
        let newChild;
        const document1 = getDocument();
        for(let k = 0; k < arguments.length; k += 1){
            newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
            for(let i = 0; i < this.length; i += 1){
                if (typeof newChild === "string") {
                    const tempDiv = document1.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
                else this[i].appendChild(newChild);
            }
        }
        return this;
    }
    function prepend(newChild) {
        const document1 = getDocument();
        let i;
        let j;
        for(i = 0; i < this.length; i += 1){
            if (typeof newChild === "string") {
                const tempDiv = document1.createElement("div");
                tempDiv.innerHTML = newChild;
                for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
            else this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
        return this;
    }
    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                    this[0].nextElementSibling
                ]);
                return $([]);
            }
            if (this[0].nextElementSibling) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        return $([]);
    }
    function nextAll(selector) {
        const nextEls = [];
        let el = this[0];
        if (!el) return $([]);
        while(el.nextElementSibling){
            const next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if ($(next).is(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return $(nextEls);
    }
    function prev(selector) {
        if (this.length > 0) {
            const el = this[0];
            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                    el.previousElementSibling
                ]);
                return $([]);
            }
            if (el.previousElementSibling) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        return $([]);
    }
    function prevAll(selector) {
        const prevEls = [];
        let el = this[0];
        if (!el) return $([]);
        while(el.previousElementSibling){
            const prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if ($(prev).is(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return $(prevEls);
    }
    function parent(selector) {
        const parents = []; // eslint-disable-line
        for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
            if (selector) {
                if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
        }
        return $(parents);
    }
    function parents(selector) {
        const parents = []; // eslint-disable-line
        for(let i = 0; i < this.length; i += 1){
            let parent = this[i].parentNode; // eslint-disable-line
            while(parent){
                if (selector) {
                    if ($(parent).is(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentNode;
            }
        }
        return $(parents);
    }
    function closest(selector) {
        let closest = this; // eslint-disable-line
        if (typeof selector === "undefined") return $([]);
        if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
        return closest;
    }
    function find(selector) {
        const foundElements = [];
        for(let i = 0; i < this.length; i += 1){
            const found = this[i].querySelectorAll(selector);
            for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
        }
        return $(foundElements);
    }
    function children(selector) {
        const children = []; // eslint-disable-line
        for(let i = 0; i < this.length; i += 1){
            const childNodes = this[i].children;
            for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
        }
        return $(children);
    }
    function remove() {
        for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
        return this;
    }
    const Methods = {
        addClass,
        removeClass,
        hasClass,
        toggleClass,
        attr,
        removeAttr,
        transform,
        transition: transition$1,
        on,
        off,
        trigger,
        transitionEnd: transitionEnd$1,
        outerWidth,
        outerHeight,
        styles,
        offset,
        css,
        each,
        html,
        text,
        is,
        index,
        eq,
        append,
        prepend,
        next,
        nextAll,
        prev,
        prevAll,
        parent,
        parents,
        closest,
        find,
        children,
        filter,
        remove
    };
    Object.keys(Methods).forEach((methodName)=>{
        Object.defineProperty($.fn, methodName, {
            value: Methods[methodName],
            writable: true
        });
    });
    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach((key)=>{
            try {
                object[key] = null;
            } catch (e) {}
            try {
                delete object[key];
            } catch (e) {}
        });
    }
    function nextTick(callback, delay) {
        if (delay === void 0) delay = 0;
        return setTimeout(callback, delay);
    }
    function now() {
        return Date.now();
    }
    function getComputedStyle$1(el) {
        const window1 = getWindow();
        let style;
        if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
        if (!style && el.currentStyle) style = el.currentStyle;
        if (!style) style = el.style;
        return style;
    }
    function getTranslate(el, axis) {
        if (axis === void 0) axis = "x";
        const window1 = getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = getComputedStyle$1(el);
        if (window1.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
             // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            matrix = transformMatrix.toString().split(",");
        }
        if (axis === "x") {
            // Latest Chrome and webkits Fix
            if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }
        if (axis === "y") {
            // Latest Chrome and webkits Fix
            if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    }
    function isObject(o) {
        return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
    }
    function isNode(node) {
        // eslint-disable-next-line
        if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend() {
        const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
        const noExtend = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        for(let i = 1; i < arguments.length; i += 1){
            const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
                for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                            else extend(to[nextKey], nextSource[nextKey]);
                        } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                            else extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    }
    function setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
        let { swiper , targetPosition , side  } = _ref;
        const window1 = getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = "none";
        window1.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? "next" : "prev";
        const isOutOfBound = (current, target)=>{
            return dir === "next" && current >= target || dir === "prev" && current <= target;
        };
        const animate = ()=>{
            time = new Date().getTime();
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.scrollSnapType = "";
                setTimeout(()=>{
                    swiper.wrapperEl.style.overflow = "";
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                });
                window1.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
        };
        animate();
    }
    let support;
    function calcSupport() {
        const window1 = getWindow();
        const document1 = getDocument();
        return {
            smoothScroll: document1.documentElement && "scrollBehavior" in document1.documentElement.style,
            touch: !!("ontouchstart" in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch),
            passiveListener: function checkPassiveListener() {
                let supportsPassive = false;
                try {
                    const opts = Object.defineProperty({}, "passive", {
                        // eslint-disable-next-line
                        get () {
                            supportsPassive = true;
                        }
                    });
                    window1.addEventListener("testPassiveListener", null, opts);
                } catch (e) {}
                return supportsPassive;
            }(),
            gestures: function checkGestures() {
                return "ongesturestart" in window1;
            }()
        };
    }
    function getSupport() {
        if (!support) support = calcSupport();
        return support;
    }
    let deviceCached;
    function calcDevice(_temp) {
        let { userAgent  } = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window1 = getWindow();
        const platform = window1.navigator.platform;
        const ua = userAgent || window1.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window1.screen.width;
        const screenHeight = window1.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === "Win32";
        let macos = platform === "MacIntel"; // iPadOs 13 fix
        const iPadScreens = [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810"
        ];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [
                0,
                1,
                "13_0_0"
            ];
            macos = false;
        } // Android
        if (android && !windows) {
            device.os = "android";
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = "ios";
            device.ios = true;
        } // Export object
        return device;
    }
    function getDevice(overrides) {
        if (overrides === void 0) overrides = {};
        if (!deviceCached) deviceCached = calcDevice(overrides);
        return deviceCached;
    }
    let browser;
    function calcBrowser() {
        const window1 = getWindow();
        function isSafari() {
            const ua = window1.navigator.userAgent.toLowerCase();
            return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
        }
        return {
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent)
        };
    }
    function getBrowser() {
        if (!browser) browser = calcBrowser();
        return browser;
    }
    function Resize(_ref) {
        let { swiper , on , emit  } = _ref;
        const window1 = getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = ()=>{
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("beforeResize");
            emit("resize");
        };
        const createObserver = ()=>{
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver((entries)=>{
                animationFrame = window1.requestAnimationFrame(()=>{
                    const { width , height  } = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach((_ref2)=>{
                        let { contentBoxSize , contentRect , target  } = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });
                    if (newWidth !== width || newHeight !== height) resizeHandler();
                });
            });
            observer.observe(swiper.el);
        };
        const removeObserver = ()=>{
            if (animationFrame) window1.cancelAnimationFrame(animationFrame);
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = ()=>{
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("orientationchange");
        };
        on("init", ()=>{
            if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== "undefined") {
                createObserver();
                return;
            }
            window1.addEventListener("resize", resizeHandler);
            window1.addEventListener("orientationchange", orientationChangeHandler);
        });
        on("destroy", ()=>{
            removeObserver();
            window1.removeEventListener("resize", resizeHandler);
            window1.removeEventListener("orientationchange", orientationChangeHandler);
        });
    }
    function Observer(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const observers = [];
        const window1 = getWindow();
        const attach = function(target, options) {
            if (options === void 0) options = {};
            const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
            const observer = new ObserverFunc((mutations)=>{
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                    emit("observerUpdate", mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate() {
                    emit("observerUpdate", mutations[0]);
                };
                if (window1.requestAnimationFrame) window1.requestAnimationFrame(observerUpdate);
                else window1.setTimeout(observerUpdate, 0);
            });
            observer.observe(target, {
                attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                childList: typeof options.childList === "undefined" ? true : options.childList,
                characterData: typeof options.characterData === "undefined" ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = ()=>{
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = swiper.$el.parents();
                for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
            } // Observe container
            attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            }); // Observe wrapper
            attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        };
        const destroy = ()=>{
            observers.forEach((observer)=>{
                observer.disconnect();
            });
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on("init", init);
        on("destroy", destroy);
    }
    /* eslint-disable no-underscore-dangle */ var eventsEmitter = {
        on (events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            events.split(" ").forEach((event1)=>{
                if (!self.eventsListeners[event1]) self.eventsListeners[event1] = [];
                self.eventsListeners[event1][method](handler);
            });
            return self;
        },
        once (events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny (handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
            return self;
        },
        offAny (handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) self.eventsAnyListeners.splice(index, 1);
            return self;
        },
        off (events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(" ").forEach((event1)=>{
                if (typeof handler === "undefined") self.eventsListeners[event1] = [];
                else if (self.eventsListeners[event1]) self.eventsListeners[event1].forEach((eventHandler, index)=>{
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event1].splice(index, 1);
                });
            });
            return self;
        },
        emit () {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            if (typeof args[0] === "string" || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(" ");
            eventsArray.forEach((event1)=>{
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                    eventHandler.apply(context, [
                        event1,
                        ...data
                    ]);
                });
                if (self.eventsListeners && self.eventsListeners[event1]) self.eventsListeners[event1].forEach((eventHandler)=>{
                    eventHandler.apply(context, data);
                });
            });
            return self;
        }
    };
    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const $el = swiper.$el;
        if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
        else width = $el[0].clientWidth;
        if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
        else height = $el[0].clientHeight;
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
         // Subtract paddings
        width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
        height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }
    function updateSlides() {
        const swiper = this;
        function getDirectionLabel(property) {
            if (swiper.isHorizontal()) return property;
             // prettier-ignore
            return ({
                "width": "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                "marginRight": "marginBottom"
            })[property];
        }
        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const { $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === "undefined") return;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
        swiper.virtualSize = -spaceBetween; // reset margins
        if (rtl) slides.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
        });
        else slides.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
        }); // reset cssMode offsets
        if (params.centeredSlides && params.cssMode) {
            setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
            setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) swiper.grid.initSlides(slidesLength);
         // Calc slides
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
            return typeof params.breakpoints[key].slidesPerView !== "undefined";
        }).length > 0;
        for(let i = 0; i < slidesLength; i += 1){
            slideSize = 0;
            const slide = slides.eq(i);
            if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
            if (slide.css("display") === "none") continue; // eslint-disable-line
            if (params.slidesPerView === "auto") {
                if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                const slideStyles = getComputedStyle(slide[0]);
                const currentTransform = slide[0].style.transform;
                const currentWebKitTransform = slide[0].style.webkitTransform;
                if (currentTransform) slide[0].style.transform = "none";
                if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                else {
                    // eslint-disable-next-line
                    const width = getDirectionPropertyValue(slideStyles, "width");
                    const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                    const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                    const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                    const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                    const boxSizing = slideStyles.getPropertyValue("box-sizing");
                    if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                    else {
                        const { clientWidth , offsetWidth  } = slide[0];
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) slide[0].style.transform = currentTransform;
                if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
            }
            if (slides[i]) slides[i].swiperSlideSize = slideSize;
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
            width: `${swiper.virtualSize + params.spaceBetween}px`
        });
        if (params.setWrapperSize) $wrapperEl.css({
            [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
        });
        if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
         // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
        }
        if (snapGrid.length === 0) snapGrid = [
            0
        ];
        if (params.spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
            slides.filter((_, slideIndex)=>{
                if (!params.cssMode) return true;
                if (slideIndex === slides.length - 1) return false;
                return true;
            }).css({
                [key]: `${spaceBetween}px`
            });
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue)=>{
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            const maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map((snap)=>{
                if (snap < 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue)=>{
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            if (allSlidesSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach((snap, snapIndex)=>{
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach((snap, snapIndex)=>{
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
            setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
        }
        if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit("snapGridLengthChange");
        }
        if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
        if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
        }
    }
    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === "number") swiper.setTransition(speed);
        else if (speed === true) swiper.setTransition(swiper.params.speed);
        const getSlideByIndex = (index)=>{
            if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index)[0];
            return swiper.slides.eq(index)[0];
        }; // Find slides currently in view
        if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) (swiper.visibleSlides || $([])).each((slide)=>{
                activeSlides.push(slide);
            });
            else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            }
        } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
         // Find new height from highest slide in view
        for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
         // Update Height
        if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
    }
    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
    function updateSlidesProgress(translate) {
        if (translate === void 0) translate = this && this.translate || 0;
        const swiper = this;
        const params = swiper.params;
        const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate; // Visible Slides
        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        for(let i = 0; i < slides.length; i += 1){
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
                slides.eq(i).addClass(params.slideVisibleClass);
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
        swiper.visibleSlides = $(swiper.visibleSlides);
    }
    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === "undefined") {
            const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let { progress , isBeginning , isEnd  } = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Object.assign(swiper, {
            progress,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
        if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
        swiper.emit("progress", progress);
    }
    function updateSlidesClasses() {
        const swiper = this;
        const { slides , params , $wrapperEl , activeIndex , realIndex  } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
        let activeSlide;
        if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
        else activeSlide = slides.eq(activeIndex);
         // Active classes
        activeSlide.addClass(params.slideActiveClass);
        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        } // Next Slide
        let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        } // Prev Slide
        let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
            else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
            if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
        }
        swiper.emitSlidesClasses();
    }
    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const { slidesGrid , snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        if (typeof activeIndex === "undefined") {
            for(let i = 0; i < slidesGrid.length; i += 1){
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                    else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
            } // Normalize slideIndex
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            }
        }
        if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
        else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit("snapIndexChange");
            }
            return;
        } // Get real index
        const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
        Object.assign(swiper, {
            snapIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        swiper.emit("activeIndexChange");
        swiper.emit("snapIndexChange");
        if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
        if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
    }
    function updateClickedSlide(e) {
        const swiper = this;
        const params = swiper.params;
        const slide = $(e).closest(`.${params.slideClass}`)[0];
        let slideFound = false;
        let slideIndex;
        if (slide) {
            for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt($(slide).attr("data-swiper-slide-index"), 10);
            else swiper.clickedIndex = slideIndex;
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
    }
    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };
    function getSwiperTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
        const swiper = this;
        const { params , rtlTranslate: rtl , translate , $wrapperEl  } = swiper;
        if (params.virtualTranslate) return rtl ? -translate : translate;
        if (params.cssMode) return translate;
        let currentTranslate = getTranslate($wrapperEl[0], axis);
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }
    function setTranslate(translate, byController) {
        const swiper = this;
        const { rtlTranslate: rtl , params , $wrapperEl , wrapperEl , progress  } = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) x = rtl ? -translate : translate;
        else y = translate;
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
        else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0;
        else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== progress) swiper.updateProgress(translate);
        swiper.emit("setTranslate", swiper.translate, byController);
    }
    function minTranslate() {
        return -this.snapGrid[0];
    }
    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }
    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) translate = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (translateBounds === void 0) translateBounds = true;
        const swiper = this;
        const { params , wrapperEl  } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) return false;
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
        else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
        else newTranslate = translate; // Update progress
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
            else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: -newTranslate,
                    behavior: "smooth"
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionEnd");
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionStart");
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    if (runCallbacks) swiper.emit("transitionEnd");
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }
    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };
    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
        swiper.emit("setTransition", duration, byController);
    }
    function transitionEmit(_ref) {
        let { swiper , runCallbacks , direction , step  } = _ref;
        const { activeIndex , previousIndex  } = swiper;
        let dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) dir = "next";
            else if (activeIndex < previousIndex) dir = "prev";
            else dir = "reset";
        }
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === "next") swiper.emit(`slideNextTransition${step}`);
            else swiper.emit(`slidePrevTransition${step}`);
        }
    }
    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const { params  } = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) swiper.updateAutoHeight();
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "Start"
        });
    }
    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const { params  } = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "End"
        });
    }
    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };
    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
        if (typeof index === "string") {
            /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */ const indexAsNumber = parseInt(index, 10);
            /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */ const isValidNumber = isFinite(indexAsNumber);
            if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
             // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.
            index = indexAsNumber;
        }
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex]; // Normalize slideIndex
        if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
                else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
            } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
        }
         // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) return false;
            }
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
         // Update progress
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = "next";
        else if (slideIndex < activeIndex) direction = "prev";
        else direction = "reset"; // Update Index
        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex); // Update Height
            if (params.autoHeight) swiper.updateAutoHeight();
            swiper.updateSlidesClasses();
            if (params.effect !== "slide") swiper.setTranslate(translate);
            if (direction !== "reset") {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = "none";
                    swiper._immediateVirtual = true;
                }
                wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                if (isVirtual) requestAnimationFrame(()=>{
                    swiper.wrapperEl.style.scrollSnapType = "";
                    swiper._swiperImmediateVirtual = false;
                });
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: t,
                    behavior: "smooth"
                });
            }
            return true;
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
        else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
            swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }
    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index === "string") {
            /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */ const indexAsNumber = parseInt(index, 10);
            /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */ const isValidNumber = isFinite(indexAsNumber);
            if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
             // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.
            index = indexAsNumber;
        }
        const swiper = this;
        let newIndex = index;
        if (swiper.params.loop) newIndex += swiper.loopedSlides;
        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */ function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const { animating , enabled , params  } = swiper;
        if (!enabled) return swiper;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */ function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const { params , animating , snapGrid , slidesGrid , rtlTranslate , enabled  } = swiper;
        if (!enabled) return swiper;
        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === "undefined" && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex)=>{
                if (normalizedTranslate >= snap) // prevSnap = snap;
                prevSnapIndex = snapIndex;
            });
            if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
        let prevIndex = 0;
        if (typeof prevSnap !== "undefined") {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */ function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */ function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (threshold === void 0) threshold = 0.5;
        const swiper = this;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }
    function slideToClickedSlide() {
        const swiper = this;
        const { params , $wrapperEl  } = swiper;
        const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    nextTick(()=>{
                        swiper.slideTo(slideToIndex);
                    });
                } else swiper.slideTo(slideToIndex);
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                nextTick(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else swiper.slideTo(slideToIndex);
    }
    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };
    function loopCreate() {
        const swiper = this;
        const document1 = getDocument();
        const { params , $wrapperEl  } = swiper; // Remove duplicated slides
        const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
        $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
        let slides = $selector.children(`.${params.slideClass}`);
        if (params.loopFillGroupWithBlank) {
            const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
            if (blankSlidesNum !== params.slidesPerGroup) {
                for(let i = 0; i < blankSlidesNum; i += 1){
                    const blankNode = $(document1.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                    $selector.append(blankNode);
                }
                slides = $selector.children(`.${params.slideClass}`);
            }
        }
        if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
        const prependSlides = [];
        const appendSlides = [];
        slides.each((el, index)=>{
            const slide = $(el);
            slide.attr("data-swiper-slide-index", index);
        });
        for(let i = 0; i < swiper.loopedSlides; i += 1){
            const index = i - Math.floor(i / slides.length) * slides.length;
            appendSlides.push(slides.eq(index)[0]);
            prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
        }
        for(let i = 0; i < appendSlides.length; i += 1)$selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        for(let i = prependSlides.length - 1; i >= 0; i -= 1)$selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    function loopFix() {
        const swiper = this;
        swiper.emit("beforeLoopFix");
        const { activeIndex , slides , loopedSlides , allowSlidePrev , allowSlideNext , snapGrid , rtlTranslate: rtl  } = swiper;
        let newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        const snapTranslate = -snapGrid[activeIndex];
        const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
        if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            const slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            const slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit("loopFix");
    }
    function loopDestroy() {
        const swiper = this;
        const { $wrapperEl , params , slides  } = swiper;
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
        slides.removeAttr("data-swiper-slide-index");
    }
    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };
    function setGrabCursor(moving) {
        const swiper = this;
        if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
        el.style.cursor = "move";
        el.style.cursor = moving ? "grabbing" : "grab";
    }
    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    }
    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };
    function closestElement(selector, base) {
        if (base === void 0) base = this;
        function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) return null;
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    function onTouchStart(event1) {
        const swiper = this;
        const document1 = getDocument();
        const window1 = getWindow();
        const data = swiper.touchEventsData;
        const { params , touches , enabled  } = swiper;
        if (!enabled) return;
        if (swiper.animating && params.preventInteractionOnTransition) return;
        if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
        let e = event1;
        if (e.originalEvent) e = e.originalEvent;
        let $targetEl = $(e.target);
        if (params.touchEventsTarget === "wrapper") {
            if (!$targetEl.closest(swiper.wrapperEl).length) return;
        }
        data.isTouchEvent = e.type === "touchstart";
        if (!data.isTouchEvent && "which" in e && e.which === 3) return;
        if (!data.isTouchEvent && "button" in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return; // change target el for shadow root component
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ""; // eslint-disable-next-line
        const eventPath = event1.composedPath ? event1.composedPath() : event1.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = $(eventPath[0]);
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return;
        }
        touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
        const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === "prevent") event1.preventDefault();
            else return;
        }
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;
        if (e.type !== "touchstart") {
            let preventDefault = true;
            if ($targetEl.is(data.focusableElements)) {
                preventDefault = false;
                if ($targetEl[0].nodeName === "SELECT") data.isTouched = false;
            }
            if (document1.activeElement && $(document1.activeElement).is(data.focusableElements) && document1.activeElement !== $targetEl[0]) document1.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
        }
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
        swiper.emit("touchStart", e);
    }
    function onTouchMove(event1) {
        const document1 = getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
        if (!enabled) return;
        let e = event1;
        if (e.originalEvent) e = e.originalEvent;
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
            return;
        }
        if (data.isTouchEvent && e.type !== "touchmove") return;
        const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
        const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!$(e.target).is(data.focusableElements)) swiper.allowClick = false;
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) // Vertical
            {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
        }
        if (data.isTouchEvent && document1.activeElement) {
            if (e.target === document1.activeElement && $(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === "undefined") {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
            else // eslint-disable-next-line
            if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
            }
        }
        if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
        if (typeof data.startMoving === "undefined") {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) return;
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
        if (!data.isMoved) {
            if (params.loop && !params.cssMode) swiper.loopFix();
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
            data.allowMomentumBounce = false; // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
            swiper.emit("sliderFirstMove", e);
        }
        swiper.emit("sliderMove", e);
        data.isMoved = true;
        let diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) diff = -diff;
        swiper.swipeDirection = diff > 0 ? "prev" : "next";
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) resistanceRatio = 0;
        if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
        if (disableParentSwiper) e.preventedByNestedSwiper = true;
         // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
         // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger || params.cssMode) return; // Update active index in free mode
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
         // Update progress
        swiper.updateProgress(data.currentTranslate); // Update translate
        swiper.setTranslate(data.currentTranslate);
    }
    function onTouchEnd(event1) {
        const swiper = this;
        const data = swiper.touchEventsData;
        const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
        if (!enabled) return;
        let e = event1;
        if (e.originalEvent) e = e.originalEvent;
        if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
            data.isMoved = false;
            data.startMoving = false;
            return;
        } // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
         // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
            swiper.emit("tap click", e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
        }
        data.lastClickTime = now();
        nextTick(()=>{
            if (!swiper.destroyed) swiper.allowClick = true;
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
        else currentPos = -data.currentTranslate;
        if (params.cssMode) return;
        if (swiper.params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        } // Find current slide
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== "undefined") {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) {
            if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            else if (swiper.isEnd) rewindFirstIndex = 0;
        } // Find current slide size
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === "next") {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
                else swiper.slideTo(stopIndex);
            }
            if (swiper.swipeDirection === "prev") {
                if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
                else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
                else swiper.slideTo(stopIndex);
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
            } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
    }
    function onResize() {
        const swiper = this;
        const { params , el  } = swiper;
        if (el && el.offsetWidth === 0) return; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
         // Save locks
        const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper; // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        else swiper.slideTo(swiper.activeIndex, 0, false, true);
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
         // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
    }
    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }
    function onScroll() {
        const swiper = this;
        const { wrapperEl , rtlTranslate , enabled  } = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
        else swiper.translate = -wrapperEl.scrollTop;
         // eslint-disable-next-line
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0;
        else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        swiper.emit("setTranslate", swiper.translate, false);
    }
    let dummyEventAttached = false;
    function dummyEventListener() {}
    const events = (swiper, method)=>{
        const document1 = getDocument();
        const { params , touchEvents , el , wrapperEl , device , support  } = swiper;
        const capture = !!params.nested;
        const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
        const swiperMethod = method; // Touch Events
        if (!support.touch) {
            el[domMethod](touchEvents.start, swiper.onTouchStart, false);
            document1[domMethod](touchEvents.move, swiper.onTouchMove, capture);
            document1[domMethod](touchEvents.end, swiper.onTouchEnd, false);
        } else {
            const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
            el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                passive: false,
                capture
            } : capture);
            el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
            if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        } // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
        if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
         // Resize handler
        if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
        else swiper[swiperMethod]("observerUpdate", onResize, true);
    };
    function attachEvents() {
        const swiper = this;
        const document1 = getDocument();
        const { params , support  } = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
        swiper.onClick = onClick.bind(swiper);
        if (support.touch && !dummyEventAttached) {
            document1.addEventListener("touchstart", dummyEventListener);
            dummyEventAttached = true;
        }
        events(swiper, "on");
    }
    function detachEvents() {
        const swiper = this;
        events(swiper, "off");
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };
    const isGridEnabled = (swiper, params)=>{
        return swiper.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
        const swiper = this;
        const { activeIndex , initialized , loopedSlides =0 , params , $el  } = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
        const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            $el.addClass(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } // Toggle navigation, pagination, scrollbar
        [
            "navigation",
            "pagination",
            "scrollbar"
        ].forEach((prop)=>{
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
            if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
        });
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        if (directionChanged && initialized) swiper.changeDirection();
        extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) swiper.disable();
        else if (!wasEnabled && isEnabled) swiper.enable();
        swiper.currentBreakpoint = breakpoint;
        swiper.emit("_beforeBreakpoint", breakpointParams);
        if (needsReLoop && initialized) {
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.updateSlides();
            swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
        }
        swiper.emit("breakpoint", breakpointParams);
    }
    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) base = "window";
        if (!breakpoints || base === "container" && !containerEl) return undefined;
        let breakpoint = false;
        const window1 = getWindow();
        const currentHeight = base === "window" ? window1.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map((point)=>{
            if (typeof point === "string" && point.indexOf("@") === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        });
        points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
        for(let i = 0; i < points.length; i += 1){
            const { point , value  } = points[i];
            if (base === "window") {
                if (window1.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
            } else if (value <= containerEl.clientWidth) breakpoint = point;
        }
        return breakpoint || "max";
    }
    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };
    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach((item)=>{
            if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
                if (item[classNames]) resultClasses.push(prefix + classNames);
            });
            else if (typeof item === "string") resultClasses.push(prefix + item);
        });
        return resultClasses;
    }
    function addClasses() {
        const swiper = this;
        const { classNames , params , rtl , $el , device , support  } = swiper; // prettier-ignore
        const suffixes = prepareClasses([
            "initialized",
            params.direction,
            {
                "pointer-events": !support.touch
            },
            {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            },
            {
                "autoheight": params.autoHeight
            },
            {
                "rtl": rtl
            },
            {
                "grid": params.grid && params.grid.rows > 1
            },
            {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            },
            {
                "android": device.android
            },
            {
                "ios": device.ios
            },
            {
                "css-mode": params.cssMode
            },
            {
                "centered": params.cssMode && params.centeredSlides
            },
            {
                "watch-progress": params.watchSlidesProgress
            }
        ], params.containerModifierClass);
        classNames.push(...suffixes);
        $el.addClass([
            ...classNames
        ].join(" "));
        swiper.emitContainerClasses();
    }
    function removeClasses() {
        const swiper = this;
        const { $el , classNames  } = swiper;
        $el.removeClass(classNames.join(" "));
        swiper.emitContainerClasses();
    }
    var classes = {
        addClasses,
        removeClasses
    };
    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        const window1 = getWindow();
        let image;
        function onReady() {
            if (callback) callback();
        }
        const isPicture = $(imageEl).parent("picture")[0];
        if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
                image = new window1.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady();
        } else // image already loaded...
        onReady();
    }
    function preloadImages() {
        const swiper = this;
        swiper.imagesToLoad = swiper.$el.find("img");
        function onReady() {
            if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) swiper.update();
                swiper.emit("imagesReady");
            }
        }
        for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
            const imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
        }
    }
    var images = {
        loadImage,
        preloadImages
    };
    function checkOverflow() {
        const swiper = this;
        const { isLocked: wasLocked , params  } = swiper;
        const { slidesOffsetBefore  } = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else swiper.isLocked = swiper.snapGrid.length === 1;
        if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
        if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
        if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
    var checkOverflow$1 = {
        checkOverflow
    };
    var defaults = {
        init: true,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        enabled: true,
        focusableElements: "input, select, option, textarea, button, video, label",
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: "slide",
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        breakpointsBase: "window",
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: true,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: true,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        // rewind
        rewind: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        // NS
        containerModifierClass: "swiper-",
        // NEW
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };
    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) obj = {};
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== "object" || moduleParams === null) {
                extend(allModulesParams, obj);
                return;
            }
            if ([
                "navigation",
                "pagination",
                "scrollbar"
            ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                auto: true
            };
            if (!(moduleParamName in params && "enabled" in moduleParams)) {
                extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) params[moduleParamName] = {
                enabled: true
            };
            if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            extend(allModulesParams, obj);
        };
    }
    /* eslint no-param-reassign: "off" */ const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes,
        images
    };
    const extendedDefaults = {};
    class Swiper {
        constructor(){
            let el;
            let params;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
            else [el, params] = args;
            if (!params) params = {};
            params = extend({}, params);
            if (el && !params.el) params.el = el;
            if (params.el && $(params.el).length > 1) {
                const swipers = [];
                $(params.el).each((containerEl)=>{
                    const newParams = extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                }); // eslint-disable-next-line no-constructor-return
                return swipers;
            } // Swiper Instance
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [
                ...swiper.__modules__
            ];
            if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
            const allModulesParams = {};
            swiper.modules.forEach((mod)=>{
                mod({
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            }); // Extend defaults with modules params
            const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params
            swiper.params = extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend({}, swiper.params);
            swiper.passedParams = extend({}, params); // add event listeners
            if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
                swiper.on(eventName, swiper.params.on[eventName]);
            });
            if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
             // Save Dom lib
            swiper.$ = $; // Extend Swiper
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal () {
                    return swiper.params.direction === "horizontal";
                },
                isVertical () {
                    return swiper.params.direction === "vertical";
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEvents: function touchEvents() {
                    const touch = [
                        "touchstart",
                        "touchmove",
                        "touchend",
                        "touchcancel"
                    ];
                    const desktop = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ];
                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                        cancel: touch[3]
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2]
                    };
                    return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    focusableElements: swiper.params.focusableElements,
                    // Last click time
                    lastClickTime: now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit("_swiper"); // Init
            if (swiper.params.init) swiper.init();
             // Return app instance
            // eslint-disable-next-line no-constructor-return
            return swiper;
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) swiper.setGrabCursor();
            swiper.emit("enable");
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) swiper.unsetGrabCursor();
            swiper.emit("disable");
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(" ").filter((className)=>{
                return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit("_containerClasses", cls.join(" "));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return "";
            return slideEl.className.split(" ").filter((className)=>{
                return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(" ");
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.each((slideEl)=>{
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit("_slideClass", slideEl, classNames);
            });
            swiper.emit("_slideClasses", updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) view = "current";
            if (exact === void 0) exact = false;
            const swiper = this;
            const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
            let spv = 1;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex].swiperSlideSize;
                let breakLoop;
                for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
                for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
            } else {
                // eslint-disable-next-line
                if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                }
                else // previous
                for(let i = activeIndex - 1; i >= 0; i -= 1){
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const { snapGrid , params  } = swiper; // Breakpoints
            if (params.breakpoints) swiper.setBreakpoint();
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                setTranslate();
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            } else {
                if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (!translated) setTranslate();
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            swiper.emit("update");
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) needUpdate = true;
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) // eslint-disable-next-line
            newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
            if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
            swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.each((slideEl)=>{
                if (newDirection === "vertical") slideEl.style.width = "";
                else slideEl.style.height = "";
            });
            swiper.emit("changeDirection");
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
            swiper.rtl = direction === "rtl";
            swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
            if (swiper.rtl) {
                swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "rtl";
            } else {
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "ltr";
            }
            swiper.update();
        }
        mount(el) {
            const swiper = this;
            if (swiper.mounted) return true; // Find el
            const $el = $(el || swiper.params.el);
            el = $el[0];
            if (!el) return false;
            el.swiper = swiper;
            const getWrapperSelector = ()=>{
                return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
            };
            const getWrapper = ()=>{
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                    res.children = (options)=>$el.children(options);
                    return res;
                }
                if (!$el.children) return $($el).children(getWrapperSelector());
                return $el.children(getWrapperSelector());
            }; // Find Wrapper
            let $wrapperEl = getWrapper();
            if ($wrapperEl.length === 0 && swiper.params.createElements) {
                const document1 = getDocument();
                const wrapper = document1.createElement("div");
                $wrapperEl = $(wrapper);
                wrapper.className = swiper.params.wrapperClass;
                $el.append(wrapper);
                $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                    $wrapperEl.append(slideEl);
                });
            }
            Object.assign(swiper, {
                $el,
                el,
                $wrapperEl,
                wrapperEl: $wrapperEl[0],
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
                rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
                wrongRTL: $wrapperEl.css("display") === "-webkit-box"
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit("beforeInit"); // Set breakpoint
            if (swiper.params.breakpoints) swiper.setBreakpoint();
             // Add Classes
            swiper.addClasses(); // Create loop
            if (swiper.params.loop) swiper.loopCreate();
             // Update size
            swiper.updateSize(); // Update slides
            swiper.updateSlides();
            if (swiper.params.watchOverflow) swiper.checkOverflow();
             // Set Grab Cursor
            if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
            if (swiper.params.preloadImages) swiper.preloadImages();
             // Slide To Initial Slide
            if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
            else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
             // Attach events
            swiper.attachEvents(); // Init Flag
            swiper.initialized = true; // Emit
            swiper.emit("init");
            swiper.emit("afterInit");
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;
            const swiper = this;
            const { params , $el , $wrapperEl , slides  } = swiper;
            if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
            swiper.emit("beforeDestroy"); // Init Flag
            swiper.initialized = false; // Detach events
            swiper.detachEvents(); // Destroy loop
            if (params.loop) swiper.loopDestroy();
             // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr("style");
                $wrapperEl.removeAttr("style");
                if (slides && slides.length) slides.removeClass([
                    params.slideVisibleClass,
                    params.slideActiveClass,
                    params.slideNextClass,
                    params.slidePrevClass
                ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
            }
            swiper.emit("destroy"); // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach((eventName)=>{
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
        }
        static use(module1) {
            if (Array.isArray(module1)) {
                module1.forEach((m)=>Swiper.installModule(m));
                return Swiper;
            }
            Swiper.installModule(module1);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach((prototypeGroup)=>{
        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        });
    });
    Swiper.use([
        Resize,
        Observer
    ]);
    function Virtual(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        extendParams({
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        let cssModeTimeout;
        swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        function renderSlide(slide, index) {
            const params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
            const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
            if (!$slideEl.attr("data-swiper-slide-index")) $slideEl.attr("data-swiper-slide-index", index);
            if (params.cache) swiper.virtual.cache[index] = $slideEl;
            return $slideEl;
        }
        function update(force) {
            const { slidesPerView , slidesPerGroup , centeredSlides  } = swiper.params;
            const { addSlidesBefore , addSlidesAfter  } = swiper.params.virtual;
            const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
            if (!swiper.params.cssMode) swiper.updateActiveIndex();
            const activeIndex = swiper.activeIndex || 0;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = "right";
            else offsetProp = swiper.isHorizontal() ? "left" : "top";
            let slidesAfter;
            let slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = slidesPerGroup + addSlidesBefore;
            }
            const from = Math.max((activeIndex || 0) - slidesBefore, 0);
            const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid
            });
            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
                emit("virtualUpdate");
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
                swiper.updateProgress();
                emit("virtualUpdate");
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset,
                    from,
                    to,
                    slides: function getSlides() {
                        const slidesToRender = [];
                        for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                        return slidesToRender;
                    }()
                });
                if (swiper.params.virtual.renderExternalUpdate) onRendered();
                else emit("virtualUpdate");
                return;
            }
            const prependIndexes = [];
            const appendIndexes = [];
            if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
            else {
                for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
            }
            for(let i = 0; i < slides.length; i += 1)if (i >= from && i <= to) {
                if (typeof previousTo === "undefined" || force) appendIndexes.push(i);
                else {
                    if (i > previousTo) appendIndexes.push(i);
                    if (i < previousFrom) prependIndexes.push(i);
                }
            }
            appendIndexes.forEach((index)=>{
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort((a, b)=>b - a).forEach((index)=>{
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, `${offset}px`);
            onRendered();
        }
        function appendSlide(slides) {
            if (typeof slides === "object" && "length" in slides) {
                for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
            } else swiper.virtual.slides.push(slides);
            update(true);
        }
        function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else swiper.virtual.slides.unshift(slides);
            if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach((cachedIndex)=>{
                    const $cachedEl = cache[cachedIndex];
                    const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
                    if (cachedElIndex) $cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                });
                swiper.virtual.cache = newCache;
            }
            update(true);
            swiper.slideTo(newActiveIndex, 0);
        }
        function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
                swiper.virtual.slides.splice(slidesIndexes[i], 1);
                if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
                if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            else {
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            update(true);
            swiper.slideTo(activeIndex, 0);
        }
        function removeAllSlides() {
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) swiper.virtual.cache = {};
            update(true);
            swiper.slideTo(0, 0);
        }
        on("beforeInit", ()=>{
            if (!swiper.params.virtual.enabled) return;
            swiper.virtual.slides = swiper.params.virtual.slides;
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
            if (!swiper.params.initialSlide) update();
        });
        on("setTranslate", ()=>{
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode && !swiper._immediateVirtual) {
                clearTimeout(cssModeTimeout);
                cssModeTimeout = setTimeout(()=>{
                    update();
                }, 100);
            } else update();
        });
        on("init update resize", ()=>{
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode) setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
        });
        Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
        });
    }
    /* eslint-disable consistent-return */ function Keyboard(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const document1 = getDocument();
        const window1 = getWindow();
        swiper.keyboard = {
            enabled: false
        };
        extendParams({
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        });
        function handle(event1) {
            if (!swiper.enabled) return;
            const { rtlTranslate: rtl  } = swiper;
            let e = event1;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40; // Directions locks
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
            if (document1.activeElement && document1.activeElement.nodeName && (document1.activeElement.nodeName.toLowerCase() === "input" || document1.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false; // Check that swiper should be inside of visible area of window
                if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
                const $el = swiper.$el;
                const swiperWidth = $el[0].clientWidth;
                const swiperHeight = $el[0].clientHeight;
                const windowWidth = window1.innerWidth;
                const windowHeight = window1.innerHeight;
                const swiperOffset = swiper.$el.offset();
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [
                    [
                        swiperOffset.left,
                        swiperOffset.top
                    ],
                    [
                        swiperOffset.left + swiperWidth,
                        swiperOffset.top
                    ],
                    [
                        swiperOffset.left,
                        swiperOffset.top + swiperHeight
                    ],
                    [
                        swiperOffset.left + swiperWidth,
                        swiperOffset.top + swiperHeight
                    ]
                ];
                for(let i = 0; i < swiperCoord.length; i += 1){
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                        inView = true;
                    }
                }
                if (!inView) return undefined;
            }
            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }
            emit("keyPress", kc);
            return undefined;
        }
        function enable() {
            if (swiper.keyboard.enabled) return;
            $(document1).on("keydown", handle);
            swiper.keyboard.enabled = true;
        }
        function disable() {
            if (!swiper.keyboard.enabled) return;
            $(document1).off("keydown", handle);
            swiper.keyboard.enabled = false;
        }
        on("init", ()=>{
            if (swiper.params.keyboard.enabled) enable();
        });
        on("destroy", ()=>{
            if (swiper.keyboard.enabled) disable();
        });
        Object.assign(swiper.keyboard, {
            enable,
            disable
        });
    }
    /* eslint-disable consistent-return */ function Mousewheel(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const window1 = getWindow();
        extendParams({
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        });
        swiper.mousewheel = {
            enabled: false
        };
        let timeout;
        let lastScrollTime = now();
        let lastEventBeforeSnap;
        const recentWheelEvents = [];
        function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0; // spinX, spinY
            let pX = 0;
            let pY = 0; // pixelX, pixelY
            // Legacy
            if ("detail" in e) sY = e.detail;
            if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
            if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
            if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
             // side scrolling on FF with DOMMouseScroll
            if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ("deltaY" in e) pY = e.deltaY;
            if ("deltaX" in e) pX = e.deltaX;
            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            } // Fall-back if spin cannot be determined
            if (pX && !sX) sX = pX < 1 ? -1 : 1;
            if (pY && !sY) sY = pY < 1 ? -1 : 1;
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
        }
        function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
        }
        function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
            return false;
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
            return false;
             // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) // Return false as a default
            return true;
             // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.
            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    emit("scroll", newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit("scroll", newEvent.raw);
            } // If you got here is because an animation has been triggered so store the current time
            lastScrollTime = new window1.Date().getTime(); // Return false as a default
            return false;
        }
        function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
                return true;
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
            return false;
        }
        function handle(event1) {
            let e = event1;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;
            const params = swiper.params.mousewheel;
            if (swiper.params.cssMode) e.preventDefault();
            let target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarget !== "container") target = $(swiper.params.mousewheel.eventsTarget);
            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                    else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                else return true;
            } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            if (delta === 0) return true;
            if (params.invert) delta = -delta; // Get the scroll positions
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                // Register the new event in a variable which stores the relevant data
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event1
                }; // Keep the most recent events
                if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.
                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                } else animateSlider(newEvent);
                 // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.
                if (releaseScroll(newEvent)) return true;
            } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                    lastEventBeforeSnap = undefined;
                    if (swiper.params.loop) swiper.loopFix();
                    let position = swiper.getTranslate() + delta * params.sensitivity;
                    const wasBeginning = swiper.isBeginning;
                    const wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                    if (swiper.params.freeMode.sticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(timeout);
                        timeout = undefined;
                        if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                        const firstEvent = recentWheelEvents[0];
                        recentWheelEvents.push(newEvent);
                        if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                        recentWheelEvents.splice(0);
                        else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            timeout = nextTick(()=>{
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }
                        if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                        // we'll consider a scroll "complete" when there haven't been any wheel events
                        // for 500ms.
                        timeout = nextTick(()=>{
                            const snapToThreshold = 0.5;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 500);
                    } // Emit event
                    if (!ignoreWheelEvents) emit("scroll", e); // Stop autoplay
                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                    if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                }
            }
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        function events(method) {
            let target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarget !== "container") target = $(swiper.params.mousewheel.eventsTarget);
            target[method]("mouseenter", handleMouseEnter);
            target[method]("mouseleave", handleMouseLeave);
            target[method]("wheel", handle);
        }
        function enable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener("wheel", handle);
                return true;
            }
            if (swiper.mousewheel.enabled) return false;
            events("on");
            swiper.mousewheel.enabled = true;
            return true;
        }
        function disable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
            }
            if (!swiper.mousewheel.enabled) return false;
            events("off");
            swiper.mousewheel.enabled = false;
            return true;
        }
        on("init", ()=>{
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
            if (swiper.params.mousewheel.enabled) enable();
        });
        on("destroy", ()=>{
            if (swiper.params.cssMode) enable();
            if (swiper.mousewheel.enabled) disable();
        });
        Object.assign(swiper.mousewheel, {
            enable,
            disable
        });
    }
    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        const document1 = getDocument();
        if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
            if (!params[key] && params.auto === true) {
                let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                if (!element) {
                    element = document1.createElement("div");
                    element.className = checkProps[key];
                    swiper.$el.append(element);
                }
                params[key] = element;
                originalParams[key] = element;
            }
        });
        return params;
    }
    function Navigation(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        });
        swiper.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        };
        function getEl(el) {
            let $el;
            if (el) {
                $el = $(el);
                if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
            }
            return $el;
        }
        function toggleEl($el, disabled) {
            const params = swiper.params.navigation;
            if ($el && $el.length > 0) {
                $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
        }
        function update() {
            // Update Navigation Buttons
            if (swiper.params.loop) return;
            const { $nextEl , $prevEl  } = swiper.navigation;
            toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
        }
        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit("navigationPrev");
        }
        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit("navigationNext");
        }
        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            });
            if (!(params.nextEl || params.prevEl)) return;
            const $nextEl = getEl(params.nextEl);
            const $prevEl = getEl(params.prevEl);
            if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
            if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
            Object.assign(swiper.navigation, {
                $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl,
                prevEl: $prevEl && $prevEl[0]
            });
            if (!swiper.enabled) {
                if ($nextEl) $nextEl.addClass(params.lockClass);
                if ($prevEl) $prevEl.addClass(params.lockClass);
            }
        }
        function destroy() {
            const { $nextEl , $prevEl  } = swiper.navigation;
            if ($nextEl && $nextEl.length) {
                $nextEl.off("click", onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off("click", onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        }
        on("init", ()=>{
            if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
            disable();
            else {
                init();
                update();
            }
        });
        on("toEdge fromEdge lock unlock", ()=>{
            update();
        });
        on("destroy", ()=>{
            destroy();
        });
        on("enable disable", ()=>{
            const { $nextEl , $prevEl  } = swiper.navigation;
            if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
        });
        on("click", (_s, e)=>{
            const { $nextEl , $prevEl  } = swiper.navigation;
            const targetEl = e.target;
            if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                if (isHidden === true) emit("navigationShow");
                else emit("navigationHide");
                if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
        });
        const enable = ()=>{
            swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
            init();
            update();
        };
        const disable = ()=>{
            swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }
    function classesToSelector(classes) {
        if (classes === void 0) classes = "";
        return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1") // eslint-disable-line
        .replace(/ /g, ".")}`;
    }
    function Pagination(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const pfx = "swiper-pagination";
        extendParams({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: "bullets",
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: (number)=>number,
                formatFractionTotal: (number)=>number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;
        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
        }
        function setSideBullets($bulletEl, position) {
            const { bulletActiveClass  } = swiper.params.pagination;
            $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
        }
        function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const $el = swiper.pagination.$el; // Current/Total
            let current;
            const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
                if (current > total - 1) current -= total;
                if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
            } else if (typeof swiper.snapIndex !== "undefined") current = swiper.snapIndex;
            else current = swiper.activeIndex || 0;
             // Types
            if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                    $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                        else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass([
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main"
                ].map((suffix)=>`${params.bulletActiveClass}${suffix}`).join(" "));
                if ($el.length > 1) bullets.each((bullet)=>{
                    const $bullet = $(bullet);
                    const bulletIndex = $bullet.index();
                    if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                        if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                        if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                    }
                });
                else {
                    const $bullet = bullets.eq(current);
                    const bulletIndex = $bullet.index();
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        const $firstDisplayedBullet = bullets.eq(firstIndex);
                        const $lastDisplayedBullet = bullets.eq(lastIndex);
                        for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                        if (swiper.params.loop) {
                            if (bulletIndex >= bullets.length) {
                                for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        } else {
                            setSideBullets($firstDisplayedBullet, "prev");
                            setSideBullets($lastDisplayedBullet, "next");
                        }
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? "right" : "left";
                    bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                }
            }
            if (params.type === "fraction") {
                $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
            }
            if (params.type === "progressbar") {
                let progressbarDirection;
                if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
                else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === "horizontal") scaleX = scale;
                else scaleY = scale;
                $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
            }
            if (params.type === "custom" && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                emit("paginationRender", $el[0]);
            } else emit("paginationUpdate", $el[0]);
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
        function render() {
            // Render Container
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const $el = swiper.pagination.$el;
            let paginationHTML = "";
            if (params.type === "bullets") {
                let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
            }
            if (params.type === "fraction") {
                if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                $el.html(paginationHTML);
            }
            if (params.type === "progressbar") {
                if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                $el.html(paginationHTML);
            }
            if (params.type !== "custom") emit("paginationRender", swiper.pagination.$el[0]);
        }
        function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: "swiper-pagination"
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let $el = $(params.el);
            if ($el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
                $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
                if ($el.length > 1) $el = $el.filter((el)=>{
                    if ($(el).parents(".swiper")[0] !== swiper.el) return false;
                    return true;
                });
            }
            if (params.type === "bullets" && params.clickable) $el.addClass(params.clickableClass);
            $el.addClass(params.modifierClass + params.type);
            $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === "bullets" && params.dynamicBullets) {
                $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
            }
            if (params.type === "progressbar" && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
            if (params.clickable) $el.on("click", classesToSelector(params.bulletClass), function onClick(e) {
                e.preventDefault();
                let index = $(this).index() * swiper.params.slidesPerGroup;
                if (swiper.params.loop) index += swiper.loopedSlides;
                swiper.slideTo(index);
            });
            Object.assign(swiper.pagination, {
                $el,
                el: $el[0]
            });
            if (!swiper.enabled) $el.addClass(params.lockClass);
        }
        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
            if (params.clickable) $el.off("click", classesToSelector(params.bulletClass));
        }
        on("init", ()=>{
            if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
            disable();
            else {
                init();
                render();
                update();
            }
        });
        on("activeIndexChange", ()=>{
            if (swiper.params.loop) update();
            else if (typeof swiper.snapIndex === "undefined") update();
        });
        on("snapIndexChange", ()=>{
            if (!swiper.params.loop) update();
        });
        on("slidesLengthChange", ()=>{
            if (swiper.params.loop) {
                render();
                update();
            }
        });
        on("snapGridLengthChange", ()=>{
            if (!swiper.params.loop) {
                render();
                update();
            }
        });
        on("destroy", ()=>{
            destroy();
        });
        on("enable disable", ()=>{
            const { $el  } = swiper.pagination;
            if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
        });
        on("lock unlock", ()=>{
            update();
        });
        on("click", (_s, e)=>{
            const targetEl = e.target;
            const { $el  } = swiper.pagination;
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                if (isHidden === true) emit("paginationShow");
                else emit("paginationHide");
                $el.toggleClass(swiper.params.pagination.hiddenClass);
            }
        });
        const enable = ()=>{
            swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
            if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
            init();
            render();
            update();
        };
        const disable = ()=>{
            swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
            if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }
    function Scrollbar(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const document1 = getDocument();
        let isTouched = false;
        let timeout = null;
        let dragTimeout = null;
        let dragStartPos;
        let dragSize;
        let trackSize;
        let divider;
        extendParams({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: `swiper-scrollbar-horizontal`,
                verticalClass: `swiper-scrollbar-vertical`
            }
        });
        swiper.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        };
        function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const { scrollbar , rtlTranslate: rtl , progress  } = swiper;
            const { $dragEl , $el  } = scrollbar;
            const params = swiper.params.scrollbar;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
            if (swiper.isHorizontal()) {
                $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
                $dragEl[0].style.width = `${newSize}px`;
            } else {
                $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
                $dragEl[0].style.height = `${newSize}px`;
            }
            if (params.hide) {
                clearTimeout(timeout);
                $el[0].style.opacity = 1;
                timeout = setTimeout(()=>{
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        }
        function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.$dragEl.transition(duration);
        }
        function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const { scrollbar  } = swiper;
            const { $dragEl , $el  } = scrollbar;
            $dragEl[0].style.width = "";
            $dragEl[0].style.height = "";
            trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
            if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
            else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
            else $dragEl[0].style.height = `${dragSize}px`;
            if (divider >= 1) $el[0].style.display = "none";
            else $el[0].style.display = "";
            if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
            if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
        }
        function getPointerPosition(e) {
            if (swiper.isHorizontal()) return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
            return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
        }
        function setDragPosition(e) {
            const { scrollbar , rtlTranslate: rtl  } = swiper;
            const { $el  } = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) positionRatio = 1 - positionRatio;
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const { scrollbar , $wrapperEl  } = swiper;
            const { $el , $dragEl  } = scrollbar;
            isTouched = true;
            dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            setDragPosition(e);
            clearTimeout(dragTimeout);
            $el.transition(0);
            if (params.hide) $el.css("opacity", 1);
            if (swiper.params.cssMode) swiper.$wrapperEl.css("scroll-snap-type", "none");
            emit("scrollbarDragStart", e);
        }
        function onDragMove(e) {
            const { scrollbar , $wrapperEl  } = swiper;
            const { $el , $dragEl  } = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            emit("scrollbarDragMove", e);
        }
        function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const { scrollbar , $wrapperEl  } = swiper;
            const { $el  } = scrollbar;
            if (!isTouched) return;
            isTouched = false;
            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css("scroll-snap-type", "");
                $wrapperEl.transition("");
            }
            if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick(()=>{
                    $el.css("opacity", 0);
                    $el.transition(400);
                }, 1000);
            }
            emit("scrollbarDragEnd", e);
            if (params.snapOnRelease) swiper.slideToClosest();
        }
        function events(method) {
            const { scrollbar , touchEventsTouch , touchEventsDesktop , params , support  } = swiper;
            const $el = scrollbar.$el;
            if (!$el) return;
            const target = $el[0];
            const activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            const passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
            if (!support.touch) {
                target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                document1[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                document1[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
            } else {
                target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
            }
        }
        function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events("on");
        }
        function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events("off");
        }
        function init() {
            const { scrollbar , $el: $swiperEl  } = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let $el = $(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
            $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
            if ($dragEl.length === 0) {
                $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
                $el.append($dragEl);
            }
            Object.assign(scrollbar, {
                $el,
                el: $el[0],
                $dragEl,
                dragEl: $dragEl[0]
            });
            if (params.draggable) enableDraggable();
            if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
        }
        function destroy() {
            const params = swiper.params.scrollbar;
            const $el = swiper.scrollbar.$el;
            if ($el) $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            disableDraggable();
        }
        on("init", ()=>{
            if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
            disable();
            else {
                init();
                updateSize();
                setTranslate();
            }
        });
        on("update resize observerUpdate lock unlock", ()=>{
            updateSize();
        });
        on("setTranslate", ()=>{
            setTranslate();
        });
        on("setTransition", (_s, duration)=>{
            setTransition(duration);
        });
        on("enable disable", ()=>{
            const { $el  } = swiper.scrollbar;
            if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
        });
        on("destroy", ()=>{
            destroy();
        });
        const enable = ()=>{
            swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.$el) swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
            init();
            updateSize();
            setTranslate();
        };
        const disable = ()=>{
            swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.$el) swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
            destroy();
        };
        Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy
        });
    }
    function Parallax(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            parallax: {
                enabled: false
            }
        });
        const setTransform = (el, progress)=>{
            const { rtl  } = swiper;
            const $el = $(el);
            const rtlFactor = rtl ? -1 : 1;
            const p = $el.attr("data-swiper-parallax") || "0";
            let x = $el.attr("data-swiper-parallax-x");
            let y = $el.attr("data-swiper-parallax-y");
            const scale = $el.attr("data-swiper-parallax-scale");
            const opacity = $el.attr("data-swiper-parallax-opacity");
            if (x || y) {
                x = x || "0";
                y = y || "0";
            } else if (swiper.isHorizontal()) {
                x = p;
                y = "0";
            } else {
                y = p;
                x = "0";
            }
            if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
            else x = `${x * progress * rtlFactor}px`;
            if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
            else y = `${y * progress}px`;
            if (typeof opacity !== "undefined" && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === "undefined" || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
            else {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
            }
        };
        const setTranslate = ()=>{
            const { $el , slides , progress , snapGrid  } = swiper;
            $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                setTransform(el, progress);
            });
            slides.each((slideEl, slideIndex)=>{
                let slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                    setTransform(el, slideProgress);
                });
            });
        };
        const setTransition = function(duration) {
            if (duration === void 0) duration = swiper.params.speed;
            const { $el  } = swiper;
            $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((parallaxEl)=>{
                const $parallaxEl = $(parallaxEl);
                let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                $parallaxEl.transition(parallaxDuration);
            });
        };
        on("beforeInit", ()=>{
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        });
        on("init", ()=>{
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on("setTranslate", ()=>{
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on("setTransition", (_swiper, duration)=>{
            if (!swiper.params.parallax.enabled) return;
            setTransition(duration);
        });
    }
    function Zoom(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        const window1 = getWindow();
        extendParams({
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        });
        swiper.zoom = {
            enabled: false
        };
        let currentScale = 1;
        let isScaling = false;
        let gesturesEnabled;
        let fakeGestureTouched;
        let fakeGestureMoved;
        const gesture = {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
        };
        const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
        };
        const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
        };
        let scale = 1;
        Object.defineProperty(swiper.zoom, "scale", {
            get () {
                return scale;
            },
            set (value) {
                if (scale !== value) {
                    const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                    const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                    emit("zoomChange", value, imageEl, slideEl);
                }
                scale = value;
            }
        });
        function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            const x1 = e.targetTouches[0].pageX;
            const y1 = e.targetTouches[0].pageY;
            const x2 = e.targetTouches[1].pageX;
            const y2 = e.targetTouches[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
        } // Events
        function onGestureStart(e) {
            const support = swiper.support;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            if (!support.gestures) {
                if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
                fakeGestureTouched = true;
                gesture.scaleStart = getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            if (gesture.$imageEl) gesture.$imageEl.transition(0);
            isScaling = true;
        }
        function onGestureChange(e) {
            const support = swiper.support;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            if (!support.gestures) {
                if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
                fakeGestureMoved = true;
                gesture.scaleMove = getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                if (e.type === "gesturechange") onGestureStart(e);
                return;
            }
            if (support.gestures) zoom.scale = e.scale * currentScale;
            else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
            if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
            gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        }
        function onGestureEnd(e) {
            const device = swiper.device;
            const support = swiper.support;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            if (!support.gestures) {
                if (!fakeGestureTouched || !fakeGestureMoved) return;
                if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !device.android) return;
                fakeGestureTouched = false;
                fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale === 1) gesture.$slideEl = undefined;
        }
        function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
        }
        function onTouchMove(e) {
            const zoom = swiper.zoom;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) return;
            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = getTranslate(gesture.$imageWrapEl[0], "x") || 0;
                image.startY = getTranslate(gesture.$imageWrapEl[0], "y") || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
            } // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
            if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
            image.isMoved = true;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
            if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
            if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
            if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
            if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
             // Velocity
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
        }
        function onTouchEnd() {
            const zoom = swiper.zoom;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY; // Fix duration
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY; // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
        }
        function onTransitionEnd() {
            const zoom = swiper.zoom;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                if (gesture.$imageEl) gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
                if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform("translate3d(0,0,0)");
                zoom.scale = 1;
                currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        }
        function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.$slideEl) {
                if (e && e.target) gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                if (!gesture.$slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                    else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.touchAction = "none";
            }
            gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
            if (typeof image.touchesStart.x === "undefined" && e) {
                touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left + window1.scrollX;
                offsetY = gesture.$slideEl.offset().top + window1.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) translateX = translateMinX;
                if (translateX > translateMaxX) translateX = translateMaxX;
                if (translateY < translateMinY) translateY = translateMinY;
                if (translateY > translateMaxY) translateY = translateMaxY;
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
            gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        }
        function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.style.touchAction = "";
            }
            zoom.scale = 1;
            currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
            gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
            gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
            gesture.$slideEl = undefined;
        } // Toggle Zoom
        function zoomToggle(e) {
            const zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) // Zoom Out
            zoomOut();
            else // Zoom In
            zoomIn(e);
        }
        function getListeners() {
            const support = swiper.support;
            const passiveListener = swiper.touchEvents.start === "touchstart" && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            const activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            return {
                passiveListener,
                activeListenerWithCapture
            };
        }
        function getSlideSelector() {
            return `.${swiper.params.slideClass}`;
        }
        function toggleGestures(method) {
            const { passiveListener  } = getListeners();
            const slideSelector = getSlideSelector();
            swiper.$wrapperEl[method]("gesturestart", slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl[method]("gesturechange", slideSelector, onGestureChange, passiveListener);
            swiper.$wrapperEl[method]("gestureend", slideSelector, onGestureEnd, passiveListener);
        }
        function enableGestures() {
            if (gesturesEnabled) return;
            gesturesEnabled = true;
            toggleGestures("on");
        }
        function disableGestures() {
            if (!gesturesEnabled) return;
            gesturesEnabled = false;
            toggleGestures("off");
        } // Attach/Detach Events
        function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const support = swiper.support;
            const { passiveListener , activeListenerWithCapture  } = getListeners();
            const slideSelector = getSlideSelector(); // Scale image
            if (support.gestures) {
                swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === "touchstart") {
                swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
            } // Move image
            swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
        }
        function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            const support = swiper.support;
            zoom.enabled = false;
            const { passiveListener , activeListenerWithCapture  } = getListeners();
            const slideSelector = getSlideSelector(); // Scale image
            if (support.gestures) {
                swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === "touchstart") {
                swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
            } // Move image
            swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
        }
        on("init", ()=>{
            if (swiper.params.zoom.enabled) enable();
        });
        on("destroy", ()=>{
            disable();
        });
        on("touchStart", (_s, e)=>{
            if (!swiper.zoom.enabled) return;
            onTouchStart(e);
        });
        on("touchEnd", (_s, e)=>{
            if (!swiper.zoom.enabled) return;
            onTouchEnd();
        });
        on("doubleTap", (_s, e)=>{
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
        });
        on("transitionEnd", ()=>{
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
        });
        on("slideChange", ()=>{
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
        });
        Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
        });
    }
    function Lazy(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        extendParams({
            lazy: {
                checkInView: false,
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        });
        swiper.lazy = {};
        let scrollHandlerAttached = false;
        let initialImageLoaded = false;
        function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) loadInDuplicate = true;
            const params = swiper.params.lazy;
            if (typeof index === "undefined") return;
            if (swiper.slides.length === 0) return;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
            const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
            if ($images.length === 0) return;
            $images.each((imageEl)=>{
                const $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                const background = $imageEl.attr("data-background");
                const src = $imageEl.attr("data-src");
                const srcset = $imageEl.attr("data-srcset");
                const sizes = $imageEl.attr("data-sizes");
                const $pictureEl = $imageEl.parent("picture");
                swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                    if (typeof swiper === "undefined" || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                    if (background) {
                        $imageEl.css("background-image", `url("${background}")`);
                        $imageEl.removeAttr("data-background");
                    } else {
                        if (srcset) {
                            $imageEl.attr("srcset", srcset);
                            $imageEl.removeAttr("data-srcset");
                        }
                        if (sizes) {
                            $imageEl.attr("sizes", sizes);
                            $imageEl.removeAttr("data-sizes");
                        }
                        if ($pictureEl.length) $pictureEl.children("source").each((sourceEl)=>{
                            const $source = $(sourceEl);
                            if ($source.attr("data-srcset")) {
                                $source.attr("srcset", $source.attr("data-srcset"));
                                $source.removeAttr("data-srcset");
                            }
                        });
                        if (src) {
                            $imageEl.attr("src", src);
                            $imageEl.removeAttr("data-src");
                        }
                    }
                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(`.${params.preloaderClass}`).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                            loadInSlide(originalSlide.index(), false);
                        } else {
                            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                            loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                });
                emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
            });
        }
        function load() {
            const { $wrapperEl , params: swiperParams , slides , activeIndex  } = swiper;
            const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            const params = swiperParams.lazy;
            let slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = 0;
            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
                } else if (slides[index]) return true;
                return false;
            }
            function slideIndex(slideEl) {
                if (isVirtual) return $(slideEl).attr("data-swiper-slide-index");
                return $(slideEl).index();
            }
            if (!initialImageLoaded) initialImageLoaded = true;
            if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
                const index = isVirtual ? $(slideEl).attr("data-swiper-slide-index") : $(slideEl).index();
                loadInSlide(index);
            });
            else if (slidesPerView > 1) {
                for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
            } else loadInSlide(activeIndex);
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    const amount = params.loadPrevNextAmount;
                    const spv = Math.ceil(slidesPerView);
                    const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                    for(let i = activeIndex + spv; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                     // Prev Slides
                    for(let i = minIndex; i < activeIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                } else {
                    const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                    if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                    const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                    if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                }
            }
        }
        function checkInViewOnLoad() {
            const window1 = getWindow();
            if (!swiper || swiper.destroyed) return;
            const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window1);
            const isWindow = $scrollElement[0] === window1;
            const scrollElementWidth = isWindow ? window1.innerWidth : $scrollElement[0].offsetWidth;
            const scrollElementHeight = isWindow ? window1.innerHeight : $scrollElement[0].offsetHeight;
            const swiperOffset = swiper.$el.offset();
            const { rtlTranslate: rtl  } = swiper;
            let inView = false;
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiper.width,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiper.height
                ],
                [
                    swiperOffset.left + swiper.width,
                    swiperOffset.top + swiper.height
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            const passiveListener = swiper.touchEvents.start === "touchstart" && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (inView) {
                load();
                $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
            } else if (!scrollHandlerAttached) {
                scrollHandlerAttached = true;
                $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
            }
        }
        on("beforeInit", ()=>{
            if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
        });
        on("init", ()=>{
            if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        });
        on("scroll", ()=>{
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
        });
        on("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
            if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        });
        on("transitionStart", ()=>{
            if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                    if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                    else load();
                }
            }
        });
        on("transitionEnd", ()=>{
            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        });
        on("slideChange", ()=>{
            const { lazy , cssMode , watchSlidesProgress , touchReleaseOnEdges , resistanceRatio  } = swiper.params;
            if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
        });
        on("destroy", ()=>{
            if (!swiper.$el) return;
            swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
        });
        Object.assign(swiper.lazy, {
            load,
            loadInSlide
        });
    }
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function Controller(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            controller: {
                control: undefined,
                inverse: false,
                by: "slide" // or 'container'
            }
        });
        swiper.controller = {
            control: undefined
        };
        function LinearSpline(x, y) {
            const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val)=>{
                    minIndex = -1;
                    maxIndex = array.length;
                    while(maxIndex - minIndex > 1){
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) minIndex = guess;
                        else maxIndex = guess;
                    }
                    return maxIndex;
                };
            }();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            let i1;
            let i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
            return this;
        } // xxx: for now i will just save one spline function to to
        function getInterpolateFunction(c) {
            if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
        function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;
            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === "slide") {
                    getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === "container") {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
            } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
        }
        function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;
            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) nextTick(()=>{
                        c.updateAutoHeight();
                    });
                    c.$wrapperEl.transitionEnd(()=>{
                        if (!controlled) return;
                        if (c.params.loop && swiper.params.controller.by === "slide") c.loopFix();
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
            } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
        }
        function removeSpline() {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        }
        on("beforeInit", ()=>{
            swiper.controller.control = swiper.params.controller.control;
        });
        on("update", ()=>{
            removeSpline();
        });
        on("resize", ()=>{
            removeSpline();
        });
        on("observerUpdate", ()=>{
            removeSpline();
        });
        on("setTranslate", (_s, translate, byController)=>{
            if (!swiper.controller.control) return;
            swiper.controller.setTranslate(translate, byController);
        });
        on("setTransition", (_s, duration, byController)=>{
            if (!swiper.controller.control) return;
            swiper.controller.setTransition(duration, byController);
        });
        Object.assign(swiper.controller, {
            setTranslate,
            setTransition
        });
    }
    function A11y(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;
        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            notification.html("");
            notification.html(message);
        }
        function getRandomNumber(size) {
            if (size === void 0) size = 16;
            const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
            return "x".repeat(size).replace(/x/g, randomChar);
        }
        function makeElFocusable($el) {
            $el.attr("tabIndex", "0");
        }
        function makeElNotFocusable($el) {
            $el.attr("tabIndex", "-1");
        }
        function addElRole($el, role) {
            $el.attr("role", role);
        }
        function addElRoleDescription($el, description) {
            $el.attr("aria-roledescription", description);
        }
        function addElControls($el, controls) {
            $el.attr("aria-controls", controls);
        }
        function addElLabel($el, label) {
            $el.attr("aria-label", label);
        }
        function addElId($el, id) {
            $el.attr("id", id);
        }
        function addElLive($el, live) {
            $el.attr("aria-live", live);
        }
        function disableEl($el) {
            $el.attr("aria-disabled", true);
        }
        function enableEl($el) {
            $el.attr("aria-disabled", false);
        }
        function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const $targetEl = $(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                if (swiper.isEnd) notify(params.lastSlideMessage);
                else notify(params.nextSlideMessage);
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                if (swiper.isBeginning) notify(params.firstSlideMessage);
                else notify(params.prevSlideMessage);
            }
            if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) $targetEl[0].click();
        }
        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
            const { $nextEl , $prevEl  } = swiper.navigation;
            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    disableEl($prevEl);
                    makeElNotFocusable($prevEl);
                } else {
                    enableEl($prevEl);
                    makeElFocusable($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    disableEl($nextEl);
                    makeElNotFocusable($nextEl);
                } else {
                    enableEl($nextEl);
                    makeElFocusable($nextEl);
                }
            }
        }
        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }
        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }
        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination()) return;
            swiper.pagination.bullets.each((bulletEl)=>{
                const $bulletEl = $(bulletEl);
                if (swiper.params.pagination.clickable) {
                    makeElFocusable($bulletEl);
                    if (!swiper.params.pagination.renderBullet) {
                        addElRole($bulletEl, "button");
                        addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                    }
                }
                if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr("aria-current", "true");
                else $bulletEl.removeAttr("aria-current");
            });
        }
        const initNavEl = ($el, wrapperId, message)=>{
            makeElFocusable($el);
            if ($el[0].tagName !== "BUTTON") {
                addElRole($el, "button");
                $el.on("keydown", onEnterOrSpaceKey);
            }
            addElLabel($el, message);
            addElControls($el, wrapperId);
        };
        const handlePointerDown = ()=>{
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = ()=>{
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    if (!swiper.destroyed) swiper.a11y.clicked = false;
                });
            });
        };
        const handleFocus = (e)=>{
            if (swiper.a11y.clicked) return;
            const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
            if (!slideEl || !swiper.slides.includes(slideEl)) return;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible) return;
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
            if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
            else swiper.el.scrollTop = 0;
            swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        };
        const initSlides = ()=>{
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
            if (params.slideRole) addElRole($(swiper.slides), params.slideRole);
            const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
            if (params.slideLabelMessage) swiper.slides.each((slideEl, index)=>{
                const $slideEl = $(slideEl);
                const slideIndex = swiper.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index;
                const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                addElLabel($slideEl, ariaLabelMessage);
            });
        };
        const init = ()=>{
            const params = swiper.params.a11y;
            swiper.$el.append(liveRegion); // Container
            const $containerEl = swiper.$el;
            if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
            if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
             // Wrapper
            const $wrapperEl = swiper.$wrapperEl;
            const wrapperId = params.id || $wrapperEl.attr("id") || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
            addElId($wrapperEl, wrapperId);
            addElLive($wrapperEl, live); // Slide
            initSlides(); // Navigation
            let $nextEl;
            let $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
            if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
            if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
            if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
             // Pagination
            if (hasClickablePagination()) swiper.pagination.$el.on("keydown", classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
             // Tab focus
            swiper.$el.on("focus", handleFocus, true);
            swiper.$el.on("pointerdown", handlePointerDown, true);
            swiper.$el.on("pointerup", handlePointerUp, true);
        };
        function destroy() {
            if (liveRegion && liveRegion.length > 0) liveRegion.remove();
            let $nextEl;
            let $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
            if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
            if ($nextEl) $nextEl.off("keydown", onEnterOrSpaceKey);
            if ($prevEl) $prevEl.off("keydown", onEnterOrSpaceKey);
             // Pagination
            if (hasClickablePagination()) swiper.pagination.$el.off("keydown", classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
             // Tab focus
            swiper.$el.off("focus", handleFocus, true);
            swiper.$el.off("pointerdown", handlePointerDown, true);
            swiper.$el.off("pointerup", handlePointerUp, true);
        }
        on("beforeInit", ()=>{
            liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
        });
        on("afterInit", ()=>{
            if (!swiper.params.a11y.enabled) return;
            init();
        });
        on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
            if (!swiper.params.a11y.enabled) return;
            initSlides();
        });
        on("fromEdge toEdge afterInit lock unlock", ()=>{
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
        });
        on("paginationUpdate", ()=>{
            if (!swiper.params.a11y.enabled) return;
            updatePagination();
        });
        on("destroy", ()=>{
            if (!swiper.params.a11y.enabled) return;
            destroy();
        });
    }
    function History(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            history: {
                enabled: false,
                root: "",
                replaceState: false,
                key: "slides",
                keepQuery: false
            }
        });
        let initialized = false;
        let paths = {};
        const slugify = (text)=>{
            return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        };
        const getPathValues = (urlOverride)=>{
            const window1 = getWindow();
            let location;
            if (urlOverride) location = new URL(urlOverride);
            else location = window1.location;
            const pathArray = location.pathname.slice(1).split("/").filter((part)=>part !== "");
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
                key,
                value
            };
        };
        const setHistory = (key, index)=>{
            const window1 = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
            if (swiper.params.url) location = new URL(swiper.params.url);
            else location = window1.location;
            const slide = swiper.slides.eq(index);
            let value = slugify(slide.attr("data-history"));
            if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
                value = `${root}/${key}/${value}`;
            } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
            if (swiper.params.history.keepQuery) value += location.search;
            const currentState = window1.history.state;
            if (currentState && currentState.value === value) return;
            if (swiper.params.history.replaceState) window1.history.replaceState({
                value
            }, null, value);
            else window1.history.pushState({
                value
            }, null, value);
        };
        const scrollToSlide = (speed, value, runCallbacks)=>{
            if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHistory = slugify(slide.attr("data-history"));
                if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, runCallbacks);
                }
            }
            else swiper.slideTo(0, speed, runCallbacks);
        };
        const setHistoryPopState = ()=>{
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, paths.value, false);
        };
        const init = ()=>{
            const window1 = getWindow();
            if (!swiper.params.history) return;
            if (!window1.history || !window1.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) return;
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) window1.addEventListener("popstate", setHistoryPopState);
        };
        const destroy = ()=>{
            const window1 = getWindow();
            if (!swiper.params.history.replaceState) window1.removeEventListener("popstate", setHistoryPopState);
        };
        on("init", ()=>{
            if (swiper.params.history.enabled) init();
        });
        on("destroy", ()=>{
            if (swiper.params.history.enabled) destroy();
        });
        on("transitionEnd _freeModeNoMomentumRelease", ()=>{
            if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
        });
        on("slideChange", ()=>{
            if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
        });
    }
    function HashNavigation(_ref) {
        let { swiper , extendParams , emit , on  } = _ref;
        let initialized = false;
        const document1 = getDocument();
        const window1 = getWindow();
        extendParams({
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false
            }
        });
        const onHashChange = ()=>{
            emit("hashChange");
            const newHash = document1.location.hash.replace("#", "");
            const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr("data-hash");
            if (newHash !== activeSlideHash) {
                const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                if (typeof newIndex === "undefined") return;
                swiper.slideTo(newIndex);
            }
        };
        const setHash = ()=>{
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
            if (swiper.params.hashNavigation.replaceState && window1.history && window1.history.replaceState) {
                window1.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || "");
                emit("hashSet");
            } else {
                const slide = swiper.slides.eq(swiper.activeIndex);
                const hash = slide.attr("data-hash") || slide.attr("data-history");
                document1.location.hash = hash || "";
                emit("hashSet");
            }
        };
        const init = ()=>{
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document1.location.hash.replace("#", "");
            if (hash) {
                const speed = 0;
                for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                    const slide = swiper.slides.eq(i);
                    const slideHash = slide.attr("data-hash") || slide.attr("data-history");
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        const index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) $(window1).on("hashchange", onHashChange);
        };
        const destroy = ()=>{
            if (swiper.params.hashNavigation.watchState) $(window1).off("hashchange", onHashChange);
        };
        on("init", ()=>{
            if (swiper.params.hashNavigation.enabled) init();
        });
        on("destroy", ()=>{
            if (swiper.params.hashNavigation.enabled) destroy();
        });
        on("transitionEnd _freeModeNoMomentumRelease", ()=>{
            if (initialized) setHash();
        });
        on("slideChange", ()=>{
            if (initialized && swiper.params.cssMode) setHash();
        });
    }
    /* eslint no-underscore-dangle: "off" */ function Autoplay(_ref) {
        let { swiper , extendParams , on , emit  } = _ref;
        let timeout;
        swiper.autoplay = {
            running: false,
            paused: false
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        function run() {
            if (!swiper.size) {
                swiper.autoplay.running = false;
                swiper.autoplay.paused = false;
                return;
            }
            const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            let delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
            clearTimeout(timeout);
            timeout = nextTick(()=>{
                let autoplayResult;
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.isEnd) {
                    autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                    emit("autoplay");
                } else stop();
                if (swiper.params.cssMode && swiper.autoplay.running) run();
                else if (autoplayResult === false) run();
            }, delay);
        }
        function start() {
            if (typeof timeout !== "undefined") return false;
            if (swiper.autoplay.running) return false;
            swiper.autoplay.running = true;
            emit("autoplayStart");
            run();
            return true;
        }
        function stop() {
            if (!swiper.autoplay.running) return false;
            if (typeof timeout === "undefined") return false;
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            swiper.autoplay.running = false;
            emit("autoplayStop");
            return true;
        }
        function pause(speed) {
            if (!swiper.autoplay.running) return;
            if (swiper.autoplay.paused) return;
            if (timeout) clearTimeout(timeout);
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                run();
            } else [
                "transitionend",
                "webkitTransitionEnd"
            ].forEach((event1)=>{
                swiper.$wrapperEl[0].addEventListener(event1, onTransitionEnd);
            });
        }
        function onVisibilityChange() {
            const document1 = getDocument();
            if (document1.visibilityState === "hidden" && swiper.autoplay.running) pause();
            if (document1.visibilityState === "visible" && swiper.autoplay.paused) {
                run();
                swiper.autoplay.paused = false;
            }
        }
        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== swiper.$wrapperEl[0]) return;
            [
                "transitionend",
                "webkitTransitionEnd"
            ].forEach((event1)=>{
                swiper.$wrapperEl[0].removeEventListener(event1, onTransitionEnd);
            });
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) stop();
            else run();
        }
        function onMouseEnter() {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else {
                emit("autoplayPause");
                pause();
            }
            [
                "transitionend",
                "webkitTransitionEnd"
            ].forEach((event1)=>{
                swiper.$wrapperEl[0].removeEventListener(event1, onTransitionEnd);
            });
        }
        function onMouseLeave() {
            if (swiper.params.autoplay.disableOnInteraction) return;
            swiper.autoplay.paused = false;
            emit("autoplayResume");
            run();
        }
        function attachMouseEvents() {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.$el.on("mouseenter", onMouseEnter);
                swiper.$el.on("mouseleave", onMouseLeave);
            }
        }
        function detachMouseEvents() {
            swiper.$el.off("mouseenter", onMouseEnter);
            swiper.$el.off("mouseleave", onMouseLeave);
        }
        on("init", ()=>{
            if (swiper.params.autoplay.enabled) {
                start();
                const document1 = getDocument();
                document1.addEventListener("visibilitychange", onVisibilityChange);
                attachMouseEvents();
            }
        });
        on("beforeTransitionStart", (_s, speed, internal)=>{
            if (swiper.autoplay.running) {
                if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
                else stop();
            }
        });
        on("sliderFirstMove", ()=>{
            if (swiper.autoplay.running) {
                if (swiper.params.autoplay.disableOnInteraction) stop();
                else pause();
            }
        });
        on("touchEnd", ()=>{
            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
        });
        on("destroy", ()=>{
            detachMouseEvents();
            if (swiper.autoplay.running) stop();
            const document1 = getDocument();
            document1.removeEventListener("visibilitychange", onVisibilityChange);
        });
        Object.assign(swiper.autoplay, {
            pause,
            run,
            start,
            stop
        });
    }
    function Thumb(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let initialized = false;
        let swiperCreated = false;
        swiper.thumbs = {
            swiper: null
        };
        function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
            let slideToIndex;
            if (thumbsSwiper.params.loop) slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
            else slideToIndex = clickedIndex;
            if (swiper.params.loop) {
                let currentIndex = swiper.activeIndex;
                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix(); // eslint-disable-next-line
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }
                const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
                else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
                else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
                else slideToIndex = prevIndex;
            }
            swiper.slideTo(slideToIndex);
        }
        function init() {
            const { thumbs: thumbsParams  } = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
            } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
            }
            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on("tap", onThumbClick);
            return true;
        }
        function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
            if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.removeClass(thumbActiveClass);
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
            else for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                let currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix(); // eslint-disable-next-line
                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    } // Find actual thumbs index to slide to
                    const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                    const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                    if (typeof prevThumbsIndex === "undefined") newThumbsIndex = nextThumbsIndex;
                    else if (typeof nextThumbsIndex === "undefined") newThumbsIndex = prevThumbsIndex;
                    else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                    else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                    else newThumbsIndex = prevThumbsIndex;
                    direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                }
                if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                    } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
        }
        on("beforeInit", ()=>{
            const { thumbs  } = swiper.params;
            if (!thumbs || !thumbs.swiper) return;
            init();
            update(true);
        });
        on("slideChange update resize observerUpdate", ()=>{
            update();
        });
        on("setTransition", (_s, duration)=>{
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            thumbsSwiper.setTransition(duration);
        });
        on("beforeDestroy", ()=>{
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            if (swiperCreated) thumbsSwiper.destroy();
        });
        Object.assign(swiper.thumbs, {
            init,
            update
        });
    }
    function freeMode(_ref) {
        let { swiper , extendParams , emit , once  } = _ref;
        extendParams({
            freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: 0.02
            }
        });
        function onTouchStart() {
            const translate = swiper.getTranslate();
            swiper.setTranslate(translate);
            swiper.setTransition(0);
            swiper.touchEventsData.velocities.length = 0;
            swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
            });
        }
        function onTouchMove() {
            const { touchEventsData: data , touches  } = swiper; // Velocity
            if (data.velocities.length === 0) data.velocities.push({
                position: touches[swiper.isHorizontal() ? "startX" : "startY"],
                time: data.touchStartTime
            });
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
                time: now()
            });
        }
        function onTouchEnd(_ref2) {
            let { currentPos  } = _ref2;
            const { params , $wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper; // Time diff
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
                else swiper.slideTo(swiper.slides.length - 1);
                return;
            }
            if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                    const lastMoveEvent = data.velocities.pop();
                    const velocityEvent = data.velocities.pop();
                    const distance = lastMoveEvent.position - velocityEvent.position;
                    const time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                     // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || now() - lastMoveEvent.time > 300) swiper.velocity = 0;
                } else swiper.velocity = 0;
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1000 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else newPosition = swiper.maxTranslate();
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else newPosition = swiper.minTranslate();
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                    let nextSlide;
                    for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                        nextSlide = j;
                        break;
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                    else newPosition = snapGrid[nextSlide - 1];
                    newPosition = -newPosition;
                }
                if (needsLoopFix) once("transitionEnd", ()=>{
                    swiper.loopFix();
                });
                 // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    if (params.freeMode.sticky) {
                        // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                        if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                        else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                        else momentumDuration = params.speed * 2.5;
                    }
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        emit("momentumBounce");
                        swiper.setTransition(params.speed);
                        setTimeout(()=>{
                            swiper.setTranslate(afterBouncePosition);
                            $wrapperEl.transitionEnd(()=>{
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    emit("_freeModeNoMomentumRelease");
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else swiper.updateProgress(newPosition);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }
        Object.assign(swiper, {
            freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        });
    }
    function Grid(_ref) {
        let { swiper , extendParams  } = _ref;
        extendParams({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        let slidesNumberEvenToRows;
        let slidesPerRow;
        let numFullColumns;
        const initSlides = (slidesLength)=>{
            const { slidesPerView  } = swiper.params;
            const { rows , fill  } = swiper.params.grid;
            slidesPerRow = slidesNumberEvenToRows / rows;
            numFullColumns = Math.floor(slidesLength / rows);
            if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
            else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
            if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        };
        const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
            const { slidesPerGroup , spaceBetween  } = swiper.params;
            const { rows , fill  } = swiper.params.grid; // Set slides order
            let newSlideOrderIndex;
            let column;
            let row;
            if (fill === "row" && slidesPerGroup > 1) {
                const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                slide.css({
                    "-webkit-order": newSlideOrderIndex,
                    order: newSlideOrderIndex
                });
            } else if (fill === "column") {
                column = Math.floor(i / rows);
                row = i - column * rows;
                if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                    row += 1;
                    if (row >= rows) {
                        row = 0;
                        column += 1;
                    }
                }
            } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
            }
            slide.css(getDirectionLabel("margin-top"), row !== 0 ? spaceBetween && `${spaceBetween}px` : "");
        };
        const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
            const { spaceBetween , centeredSlides , roundLengths  } = swiper.params;
            const { rows  } = swiper.params.grid;
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
            swiper.$wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + spaceBetween}px`
            });
            if (centeredSlides) {
                snapGrid.splice(0, snapGrid.length);
                const newSlidesGrid = [];
                for(let i = 0; i < snapGrid.length; i += 1){
                    let slidesGridItem = snapGrid[i];
                    if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid.push(...newSlidesGrid);
            }
        };
        swiper.grid = {
            initSlides,
            updateSlide,
            updateWrapperSize
        };
    }
    function appendSlide(slides) {
        const swiper = this;
        const { $wrapperEl , params  } = swiper;
        if (params.loop) swiper.loopDestroy();
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        } else $wrapperEl.append(slides);
        if (params.loop) swiper.loopCreate();
        if (!params.observer) swiper.update();
    }
    function prependSlide(slides) {
        const swiper = this;
        const { params , $wrapperEl , activeIndex  } = swiper;
        if (params.loop) swiper.loopDestroy();
        let newActiveIndex = activeIndex + 1;
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
            newActiveIndex = activeIndex + slides.length;
        } else $wrapperEl.prepend(slides);
        if (params.loop) swiper.loopCreate();
        if (!params.observer) swiper.update();
        swiper.slideTo(newActiveIndex, 0, false);
    }
    function addSlide(index, slides) {
        const swiper = this;
        const { $wrapperEl , params , activeIndex  } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
        }
        const baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        const slidesBuffer = [];
        for(let i = baseLength - 1; i >= index; i -= 1){
            const currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else $wrapperEl.append(slides);
        for(let i = 0; i < slidesBuffer.length; i += 1)$wrapperEl.append(slidesBuffer[i]);
        if (params.loop) swiper.loopCreate();
        if (!params.observer) swiper.update();
        if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        else swiper.slideTo(newActiveIndex, 0, false);
    }
    function removeSlide(slidesIndexes) {
        const swiper = this;
        const { params , $wrapperEl , activeIndex  } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
        }
        let newActiveIndex = activeIndexBuffer;
        let indexToRemove;
        if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
            for(let i = 0; i < slidesIndexes.length; i += 1){
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        if (params.loop) swiper.loopCreate();
        if (!params.observer) swiper.update();
        if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        else swiper.slideTo(newActiveIndex, 0, false);
    }
    function removeAllSlides() {
        const swiper = this;
        const slidesIndexes = [];
        for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
        swiper.removeSlide(slidesIndexes);
    }
    function Manipulation(_ref) {
        let { swiper  } = _ref;
        Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper)
        });
    }
    function effectInit(params) {
        const { effect , swiper , on , setTranslate , setTransition , overwriteParams , perspective , recreateShadows , getEffectParams  } = params;
        on("beforeInit", ()=>{
            if (swiper.params.effect !== effect) return;
            swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
            if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
            const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
            Object.assign(swiper.params, overwriteParamsResult);
            Object.assign(swiper.originalParams, overwriteParamsResult);
        });
        on("setTranslate", ()=>{
            if (swiper.params.effect !== effect) return;
            setTranslate();
        });
        on("setTransition", (_s, duration)=>{
            if (swiper.params.effect !== effect) return;
            setTransition(duration);
        });
        on("transitionEnd", ()=>{
            if (swiper.params.effect !== effect) return;
            if (recreateShadows) {
                if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows
                swiper.slides.each((slideEl)=>{
                    const $slideEl = swiper.$(slideEl);
                    $slideEl.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                }); // create new one
                recreateShadows();
            }
        });
        let requireUpdateOnVirtual;
        on("virtualUpdate", ()=>{
            if (swiper.params.effect !== effect) return;
            if (!swiper.slides.length) requireUpdateOnVirtual = true;
            requestAnimationFrame(()=>{
                if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                    setTranslate();
                    requireUpdateOnVirtual = false;
                }
            });
        });
    }
    function effectTarget(effectParams, $slideEl) {
        if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        });
        return $slideEl;
    }
    function effectVirtualTransitionEnd(_ref) {
        let { swiper , duration , transformEl , allSlides  } = _ref;
        const { slides , activeIndex , $wrapperEl  } = swiper;
        if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let $transitionEndTarget;
            if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
            else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
            $transitionEndTarget.transitionEnd(()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const triggerEvents = [
                    "webkitTransitionEnd",
                    "transitionend"
                ];
                for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
            });
        }
    }
    function EffectFade(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            fadeEffect: {
                crossFade: false,
                transformEl: null
            }
        });
        const setTranslate = ()=>{
            const { slides  } = swiper;
            const params = swiper.params.fadeEffect;
            for(let i = 0; i < slides.length; i += 1){
                const $slideEl = swiper.slides.eq(i);
                const offset = $slideEl[0].swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.css({
                    opacity: slideOpacity
                }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
            }
        };
        const setTransition = (duration)=>{
            const { transformEl  } = swiper.params.fadeEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration);
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl,
                allSlides: true
            });
        };
        effectInit({
            effect: "fade",
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: ()=>({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
        });
    }
    function EffectCube(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        });
        const createSlideShadows = ($slideEl, progress, isHorizontal)=>{
            let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
            let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
            if (shadowBefore.length === 0) {
                shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
                $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
                shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
                $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = ()=>{
            // create new ones
            const isHorizontal = swiper.isHorizontal();
            swiper.slides.each((slideEl)=>{
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows($(slideEl), progress, isHorizontal);
            });
        };
        const setTranslate = ()=>{
            const { $el , $wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser  } = swiper;
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({
                        height: `${swiperWidth}px`
                    });
                } else {
                    $cubeShadowEl = $el.find(".swiper-cube-shadow");
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for(let i = 0; i < slides.length; i += 1){
                const $slideEl = slides.eq(i);
                let slideIndex = i;
                if (isVirtual) slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) tx = -tx;
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                $slideEl.transform(transform);
                if (params.slideShadows) createSlideShadows($slideEl, progress, isHorizontal);
            }
            $wrapperEl.css({
                "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
                "transform-origin": `50% 50% -${swiperSize / 2}px`
            });
            if (params.shadow) {
                if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                else {
                    const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    const scale1 = params.shadowScale;
                    const scale2 = params.shadowScale / multiplier;
                    const offset = params.shadowOffset;
                    $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                }
            }
            const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
            $wrapperEl[0].style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
        };
        const setTransition = (duration)=>{
            const { $el , slides  } = swiper;
            slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find(".swiper-cube-shadow").transition(duration);
        };
        effectInit({
            effect: "cube",
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: ()=>swiper.params.cubeEffect,
            perspective: ()=>true,
            overwriteParams: ()=>({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true
                })
        });
    }
    function createShadow(params, $slideEl, side) {
        const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
        const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
        let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
        if (!$shadowEl.length) {
            $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`);
            $shadowContainer.append($shadowEl);
        }
        return $shadowEl;
    }
    function EffectFlip(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
                transformEl: null
            }
        });
        const createSlideShadows = ($slideEl, progress, params)=>{
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
            if (shadowBefore.length === 0) shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? "left" : "top");
            if (shadowAfter.length === 0) shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? "right" : "bottom");
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = ()=>{
            // Set shadows
            const params = swiper.params.flipEffect;
            swiper.slides.each((slideEl)=>{
                const $slideEl = $(slideEl);
                let progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows($slideEl, progress, params);
            });
        };
        const setTranslate = ()=>{
            const { slides , rtlTranslate: rtl  } = swiper;
            const params = swiper.params.flipEffect;
            for(let i = 0; i < slides.length; i += 1){
                const $slideEl = slides.eq(i);
                let progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                const offset = $slideEl[0].swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) rotateY = -rotateY;
                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) createSlideShadows($slideEl, progress, params);
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform);
            }
        };
        const setTransition = (duration)=>{
            const { transformEl  } = swiper.params.flipEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl
            });
        };
        effectInit({
            effect: "flip",
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: ()=>swiper.params.flipEffect,
            perspective: ()=>true,
            overwriteParams: ()=>({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
        });
    }
    function EffectCoverflow(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true,
                transformEl: null
            }
        });
        const setTranslate = ()=>{
            const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth; // Each slide offset from center
            for(let i = 0, length = slides.length; i < length; i += 1){
                const $slideEl = slides.eq(i);
                const slideSize = slidesSizesGrid[i];
                const slideOffset = $slideEl[0].swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
                if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                    let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                    if ($shadowBeforeEl.length === 0) $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? "left" : "top");
                    if ($shadowAfterEl.length === 0) $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? "right" : "bottom");
                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        };
        const setTransition = (duration)=>{
            const { transformEl  } = swiper.params.coverflowEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
        };
        effectInit({
            effect: "coverflow",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: ()=>true,
            overwriteParams: ()=>({
                    watchSlidesProgress: true
                })
        });
    }
    function EffectCreative(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const getTranslateValue = (value)=>{
            if (typeof value === "string") return value;
            return `${value}px`;
        };
        const setTranslate = ()=>{
            const { slides , $wrapperEl , slidesSizesGrid  } = swiper;
            const params = swiper.params.creativeEffect;
            const { progressMultiplier: multiplier  } = params;
            const isCenteredSlides = swiper.params.centeredSlides;
            if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
            }
            for(let i = 0; i < slides.length; i += 1){
                const $slideEl = slides.eq(i);
                const slideProgress = $slideEl[0].progress;
                const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                const offset = $slideEl[0].swiperSlideOffset;
                const t = [
                    swiper.params.cssMode ? -offset - swiper.translate : -offset,
                    0,
                    0
                ];
                const r = [
                    0,
                    0,
                    0
                ];
                let custom = false;
                if (!swiper.isHorizontal()) {
                    t[1] = t[0];
                    t[0] = 0;
                }
                let data = {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    scale: 1,
                    opacity: 1
                };
                if (progress < 0) {
                    data = params.next;
                    custom = true;
                } else if (progress > 0) {
                    data = params.prev;
                    custom = true;
                } // set translate
                t.forEach((value, index)=>{
                    t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                }); // set rotates
                r.forEach((value, index)=>{
                    r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                });
                $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(", ");
                const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
                if (custom && data.shadow || !custom) {
                    let $shadowEl = $slideEl.children(".swiper-slide-shadow");
                    if ($shadowEl.length === 0 && data.shadow) $shadowEl = createShadow(params, $slideEl);
                    if ($shadowEl.length) {
                        const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                        $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                    }
                }
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform).css({
                    opacity: opacityString
                });
                if (data.origin) $targetEl.css("transform-origin", data.origin);
            }
        };
        const setTransition = (duration)=>{
            const { transformEl  } = swiper.params.creativeEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl,
                allSlides: true
            });
        };
        effectInit({
            effect: "creative",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: ()=>swiper.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode
                })
        });
    }
    function EffectCards(_ref) {
        let { swiper , extendParams , on  } = _ref;
        extendParams({
            cardsEffect: {
                slideShadows: true,
                transformEl: null,
                rotate: true,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        });
        const setTranslate = ()=>{
            const { slides , activeIndex  } = swiper;
            const params = swiper.params.cardsEffect;
            const { startTranslate , isTouched  } = swiper.touchEventsData;
            const currentTranslate = swiper.translate;
            for(let i = 0; i < slides.length; i += 1){
                const $slideEl = slides.eq(i);
                const slideProgress = $slideEl[0].progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = $slideEl[0].swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
                if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -params.perSlideRotate * progress;
                let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                    const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                    rotate += -28 * progress * subProgress;
                    scale += -0.5 * subProgress;
                    tXAdd += 96 * subProgress;
                    tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) // next
                tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
                else if (progress > 0) // prev
                tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
                else tX = `${tX}px`;
                if (!swiper.isHorizontal()) {
                    const prevY = tY;
                    tY = tX;
                    tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
                if (params.slideShadows) {
                    // Set shadows
                    let $shadowEl = $slideEl.find(".swiper-slide-shadow");
                    if ($shadowEl.length === 0) $shadowEl = createShadow(params, $slideEl);
                    if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                }
                $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform);
            }
        };
        const setTransition = (duration)=>{
            const { transformEl  } = swiper.params.cardsEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl
            });
        };
        effectInit({
            effect: "cards",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: ()=>true,
            overwriteParams: ()=>({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode
                })
        });
    }
    // Swiper Class
    const modules = [
        Virtual,
        Keyboard,
        Mousewheel,
        Navigation,
        Pagination,
        Scrollbar,
        Parallax,
        Zoom,
        Lazy,
        Controller,
        A11y,
        History,
        HashNavigation,
        Autoplay,
        Thumb,
        freeMode,
        Grid,
        Manipulation,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCoverflow,
        EffectCreative,
        EffectCards
    ];
    Swiper.use(modules);
    return Swiper;
});

},{}],"B6NKQ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jlfZ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class modal {
    constructor(modal, modalContainer){
        this.modal = document.querySelectorAll(modal);
        this.modalContainer = document.querySelector(modalContainer);
        this.modalContainerClass = modalContainer.replace(".", "");
        this.init();
    }
    init() {
        let dataSelector = document.querySelectorAll("[data-modal]");
        if (dataSelector.length) dataSelector.forEach((dataItem)=>{
            dataItem.addEventListener("click", (event)=>{
                let attrID = dataItem.getAttribute("data-modal");
                if (attrID) this.modalController(attrID);
            });
        });
        this.modalContainer.addEventListener("click", (event)=>{
            if (event.target.classList.contains(this.modalContainerClass)) {
                this.bodyScroll("close");
                this.closeModal(this.modal, this.modalContainer);
            }
        });
    }
    modalController(attrID) {
        let modalTarget = this.modalContainer.querySelector(attrID);
        if (attrID == "close") {
            this.closeModal(this.modal, this.modalContainer);
            this.bodyScroll("close");
        } else {
            this.closeModal(this.modal);
            this.openModal(this.modalContainer, modalTarget);
            this.bodyScroll();
        }
    }
    bodyScroll(target) {
        const body = document.body;
        const html = document.documentElement;
        if (target === "close") {
            body.classList.remove("is-overflow-hidden");
            html.classList.remove("is-overflow-hidden");
        } else {
            body.classList.add("is-overflow-hidden");
            html.classList.add("is-overflow-hidden");
        }
    }
    openModal(modalContainer, modalTarget) {
        if (!modalContainer.classList.contains("is-active")) modalContainer.classList.add("is-active");
        if (!modalTarget.classList.contains("is-active")) modalTarget.classList.add("is-active");
    }
    closeModal(modal, modalContainer = false) {
        modal.forEach((item)=>{
            if (item.classList.contains("is-active")) item.classList.remove("is-active");
        });
        if (modalContainer) modalContainer.classList.remove("is-active");
    }
}
exports.default = modal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"24HXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class tabs {
    constructor(selector){
        this.selector = document.querySelector(selector);
        if (this.selector) this.init();
    }
    closeTabs(tabs) {
        tabs.forEach((tab)=>{
            tab.classList.remove("is-active");
        });
    }
    init() {
        let tabNav = this.selector.querySelectorAll("[data-tab]");
        let tabContent = this.selector.querySelectorAll(".c-tab__content");
        tabNav.forEach((tab)=>{
            tab.addEventListener("click", (event)=>{
                let targetData = event.target.getAttribute("data-tab");
                this.closeTabs(tabNav);
                this.closeTabs(tabContent);
                event.target.classList.add("is-active");
                this.selector.querySelector(targetData).classList.add("is-active");
            });
        });
    }
} // export {tabs}; 
exports.default = tabs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"lONHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToggleJs = require("./slideToggle.js");
class accordion {
    constructor(block, container){
        this.mainContainer = document.querySelector(container);
        this.blocks = document.querySelectorAll(block);
        this.init();
    }
    init() {
        this.blocks.forEach((item)=>{
            const head = item.querySelector(".js-accordion__heading");
            const list = item.querySelector(".js-accordion__list");
            if (item.classList.contains("is-active")) (0, _slideToggleJs.slideDown)(list);
            else (0, _slideToggleJs.slideUp)(list);
            head.addEventListener("click", (event)=>{
                event.preventDefault();
                if (item.classList.contains("is-active")) {
                    item.classList.remove("is-active");
                    (0, _slideToggleJs.slideUp)(list);
                } else {
                    this.close();
                    this.open(item);
                }
            });
        });
    }
    close(blocks = this.blocks) {
        blocks.forEach((item)=>{
            if (item.classList.contains("is-active")) {
                item.classList.remove("is-active");
                (0, _slideToggleJs.slideUp)(item.querySelector(".js-accordion__list"));
            }
        });
    }
    open(block) {
        block.classList.add("is-active");
        (0, _slideToggleJs.slideDown)(block.querySelector(".js-accordion__list"));
    }
}
exports.default = accordion;

},{"./slideToggle.js":"aoIf1","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"aoIf1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slideUp", ()=>slideUp);
parcelHelpers.export(exports, "slideDown", ()=>slideDown);
function slideUp(target, duration = 200) {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(()=>{
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
}
function slideDown(target, duration = 200) {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(()=>{
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"8X66M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class select {
    niceSelectHTML = "";
    constructor(selector){
        this.select = document.querySelectorAll(selector);
        this.init();
    }
    init() {
        this.createNiceSelect();
        this.open();
        this.closeOutside();
        this.submit();
    }
    createNiceSelect() {
        this.select.forEach((item)=>{
            item.style.display = "none";
            let options = item.querySelectorAll("option");
            let selected = item.querySelector("option:checked");
            let selects = item.querySelectorAll("option:checked");
            let selectTitle = "";
            selects.forEach((item)=>{
                selectTitle += item.textContent;
            });
            let newNode = document.createElement("div");
            newNode.classList.add("nice-select");
            newNode.innerHTML = '<span class="current"></span><ul class="list"></ul>';
            item.after(newNode);
            newNode.querySelector(".current").innerHTML = selectTitle;
            let optionToList = options.forEach((item)=>{
                const li = document.createElement("li");
                li.classList.add("option");
                if (item.selected) li.classList.add("selected");
                li.dataset.value = item.value;
                li.innerText = item.textContent;
                newNode.querySelector("ul.list").append(li);
            });
        });
        this.niceSelectHTML = document.querySelectorAll(".nice-select");
    // console.log(this.niceSelectHTML);
    }
    close() {
        this.niceSelectHTML.forEach((item)=>{
            item.classList.remove("open");
        });
    }
    closeOutside() {
        document.addEventListener("click", (event)=>{
            if (event.target.closest(".nice-select") === null) this.close();
        });
    }
    open() {
        this.niceSelectHTML.forEach((item)=>{
            item.addEventListener("click", (event)=>{
                if (event.currentTarget.classList.contains("open")) event.currentTarget.classList.remove("open");
                else {
                    this.close();
                    event.currentTarget.classList.add("open");
                }
            });
        });
    }
    triggerChange(element) {
        let changeEvent = new Event("change");
        element.dispatchEvent(changeEvent);
    }
    submit() {
        this.niceSelectHTML.forEach((item, index)=>{
            item.addEventListener("click", (event)=>{
                if (event.target.classList.contains("option")) {
                    let optionVal = event.target.getAttribute("data-value");
                    // let thisSelect = this.select[index];
                    let thisSelect = event.currentTarget.closest("form").querySelector("select");
                    thisSelect.value = optionVal;
                    this.triggerChange(thisSelect);
                    thisSelect.querySelector("option:checked").removeAttribute("selected");
                    thisSelect.querySelector('option[value="' + optionVal + '"]').setAttribute("selected", "selected");
                    item.querySelector(".selected").classList.remove("selected");
                    item.querySelector('.option[data-value="' + optionVal + '"]').classList.add("selected");
                    let text = thisSelect.querySelector('option[value="' + optionVal + '"]').innerText;
                    item.querySelector(".current").innerText = text;
                    thisSelect.closest("form").submit();
                }
            });
        });
    }
}
exports.default = select;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"9ihtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
var _validator = require("validator");
var _validatorDefault = parcelHelpers.interopDefault(_validator);
class validation {
    disallow_nums = /[0-9\/]+/;
    /**
     *
     * @param type
     * @param selector
     */ validate(type, selector) {
        switch(type){
            case "firstName":
            case "lastName":
            case "billingCity":
                this.firstName(selector);
                break;
            case "post":
                this.post(selector);
                break;
            case "phone":
                this.phone(selector);
                break;
            case "email":
                this.email(selector);
                break;
            case "submit":
                this.submit(selector);
        }
    }
    /**
     * Validate the empty fields before submit
     */ submit(selector) {
        let checkout_form_submit = document.querySelector(selector);
        this.boundSubmitValidator = (e)=>this.submitValidator(e, checkout_form_submit);
        checkout_form_submit.addEventListener("click", this.boundSubmitValidator);
    }
    /**
     * Action submit handler
     * @param e
     * @param field
     */ submitValidator(e, field) {
        let from = field.closest("form");
        for(let i = 0; i < from.length; i++)if (from[i].hasAttribute("required") && from[i].value === "") this.isValid(false, from[i], "Поле не должно быть пустым");
        if (from.querySelectorAll(".invalid").length) e.preventDefault();
    }
    /**
     * Field interaction handler: keydown, keyup
     * @param selector
     */ firstName(selector) {
        let field = document.querySelector(selector);
        field.addEventListener("keydown", (event)=>{
            if (this.disallow_nums.test(event.key)) event.preventDefault();
        });
        if (field.name === "name") field.setAttribute("maxlength", "40");
        else field.setAttribute("maxlength", "20");
        this.boundFirstNameValidator = (e)=>this.firstNameStringValidator(e, field);
        field.addEventListener("keyup", this.boundFirstNameValidator);
    }
    firstNameStringValidator(e, field) {
        let ignore = {
            ignore: "-"
        };
        if (field.name === "name") ignore = {
            ignore: "[\\s-]+"
        };
        let _isValid = (0, _validatorDefault.default).isAlpha(e.target.value, "uk-UA", {
            ignore: "-"
        }) || (0, _validatorDefault.default).isAlpha(e.target.value, "ru-RU", ignore);
        let error_msg = e.target.value === "" ? "Поле не должно быть пустым" : "Неверный формат ввода";
        this.isValid(_isValid, field, error_msg);
    }
    /**
     * Phone number masking and validation
     * @param selector
     */ phone(selector) {
        let field = document.querySelector(selector);
        let maskOptions = {
            mask: "+{38}(000)000-00-00"
        };
        (0, _imaskDefault.default)(field, maskOptions);
        field.setAttribute("placeholder", "+38(000)000-00-00");
        this.boundPhoneStringValidator = (e)=>this.phoneStringValidator(e, field);
        field.addEventListener("keyup", this.boundPhoneStringValidator);
    }
    phoneStringValidator(e, field) {
        let _value = e.target.value.replace(/[()-]/g, "");
        let _isValid = (0, _validatorDefault.default).isMobilePhone(_value, [
            "uk-UA"
        ], {
            strict: true
        });
        let error_msg = e.target.value === "" ? "Поле не должно быть пустым" : "Неверный формат ввода";
        this.isValid(_isValid, field, error_msg);
    }
    /**
     * Email validation
     */ email(selector) {
        let field = document.querySelector(selector);
        this.boundEmailStringValidation = (e)=>this.emailStringValidation(e, field);
        field.addEventListener("keyup", this.boundEmailStringValidation);
    }
    emailStringValidation(e, field) {
        let _isValid = (0, _validatorDefault.default).isEmail(e.target.value);
        let error_msg = e.target.value === "" ? "Поле не должно быть пустым" : "Неверный формат ввода";
        this.isValid(_isValid, field, error_msg);
    }
    /**
     * The delivery filial ID
     * @param selector
     */ post(selector) {
        let field = document.querySelector(selector);
        field.setAttribute("maxlength", "4");
        field.setAttribute("required", "");
        field.oninput = function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/gi, "");
        };
        this.boundPostStringValidator = (e)=>this.postStringValidator(e, field);
        field.addEventListener("keyup", this.boundPostStringValidator);
    }
    postStringValidator(e, field) {
        let _isValid = (0, _validatorDefault.default).isNumeric(e.target.value);
        let error_msg = e.target.value === "" ? "Поле не должно быть пустым" : "Неверный формат ввода";
        this.isValid(_isValid, field, error_msg);
    }
    /**
     * manage status classes and form submit
     * @param isValid
     * @param field
     * @param error_type
     */ isValid(isValid, field, error_type) {
        if (isValid) {
            if (field.classList.contains("invalid")) field.classList.replace("invalid", "valid");
            else field.classList.add("valid");
            this.clearErrorMsg(field);
        } else {
            if (field.classList.contains("valid")) field.classList.replace("valid", "invalid");
            else field.classList.add("invalid");
            this.errorMsg(field, error_type);
        }
    }
    errorMsg(field, error_type) {
        if (field.nextElementSibling !== null && field.nextElementSibling.classList.contains("error-msg")) field.nextElementSibling.remove();
        let error_node = document.createElement("span");
        error_node.innerHTML = error_type;
        error_node.classList.add("error-msg");
        field.insertAdjacentElement("afterend", error_node);
    }
    clearErrorMsg(field) {
        if (field.nextElementSibling !== null && field.nextElementSibling.classList.contains("error-msg")) field.nextElementSibling.remove();
    }
}
exports.default = validation;

},{"imask":"6MAV9","validator":"ggTIE","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"6MAV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMask", ()=>(0, _inputJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _holderJsDefault.default));
parcelHelpers.export(exports, "Masked", ()=>(0, _baseJsDefault.default));
parcelHelpers.export(exports, "MaskedPattern", ()=>(0, _patternJsDefault.default));
parcelHelpers.export(exports, "MaskedEnum", ()=>(0, _enumJsDefault.default));
parcelHelpers.export(exports, "MaskedRange", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "MaskedNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "MaskedDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "MaskedRegExp", ()=>(0, _regexpJsDefault.default));
parcelHelpers.export(exports, "MaskedFunction", ()=>(0, _functionJsDefault.default));
parcelHelpers.export(exports, "MaskedDynamic", ()=>(0, _dynamicJsDefault.default));
parcelHelpers.export(exports, "createMask", ()=>(0, _factoryJsDefault.default));
parcelHelpers.export(exports, "MaskElement", ()=>(0, _maskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLMaskElement", ()=>(0, _htmlMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLContenteditableMaskElement", ()=>(0, _htmlContenteditableMaskElementJsDefault.default));
parcelHelpers.export(exports, "PIPE_TYPE", ()=>(0, _pipeJs.PIPE_TYPE));
parcelHelpers.export(exports, "createPipe", ()=>(0, _pipeJs.createPipe));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJs.pipe));
parcelHelpers.export(exports, "ChangeDetails", ()=>(0, _changeDetailsJsDefault.default));
var _inputJs = require("./controls/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _holderJs = require("./core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _baseJs = require("./masked/base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _patternJs = require("./masked/pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _enumJs = require("./masked/enum.js");
var _enumJsDefault = parcelHelpers.interopDefault(_enumJs);
var _rangeJs = require("./masked/range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _numberJs = require("./masked/number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _dateJs = require("./masked/date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _regexpJs = require("./masked/regexp.js");
var _regexpJsDefault = parcelHelpers.interopDefault(_regexpJs);
var _functionJs = require("./masked/function.js");
var _functionJsDefault = parcelHelpers.interopDefault(_functionJs);
var _dynamicJs = require("./masked/dynamic.js");
var _dynamicJsDefault = parcelHelpers.interopDefault(_dynamicJs);
var _factoryJs = require("./masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./controls/mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlMaskElementJs = require("./controls/html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./controls/html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _pipeJs = require("./masked/pipe.js");
var _changeDetailsJs = require("./core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _rollupPluginBabelHelpers6B3Bd404Js = require("./_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("./core/utils.js");
var _actionDetailsJs = require("./core/action-details.js");
var _continuousTailDetailsJs = require("./core/continuous-tail-details.js");
var _inputDefinitionJs = require("./masked/pattern/input-definition.js");
var _fixedDefinitionJs = require("./masked/pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./masked/pattern/chunk-tail-details.js");
var _cursorJs = require("./masked/pattern/cursor.js");
try {
    globalThis.IMask = (0, _holderJsDefault.default);
} catch (e) {}

},{"./controls/input.js":"23v17","./core/holder.js":"ag4RG","./masked/base.js":"fSZZ2","./masked/pattern.js":"klBdi","./masked/enum.js":"fWbsP","./masked/range.js":"i70s6","./masked/number.js":"iPy10","./masked/date.js":"hNA3y","./masked/regexp.js":"4Gjxi","./masked/function.js":"f0b4h","./masked/dynamic.js":"iKg5f","./masked/factory.js":"9iGM0","./controls/mask-element.js":"f8hDl","./controls/html-mask-element.js":"dBV5H","./controls/html-contenteditable-mask-element.js":"4gQMC","./masked/pipe.js":"4lYuO","./core/change-details.js":"4KEzB","./_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","./core/utils.js":"3cGlA","./core/action-details.js":"6xJjN","./core/continuous-tail-details.js":"ifDgI","./masked/pattern/input-definition.js":"luJiD","./masked/pattern/fixed-definition.js":"eJ4UV","./masked/pattern/chunk-tail-details.js":"jmr7O","./masked/pattern/cursor.js":"cvyBh","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"23v17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputMask);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("../core/utils.js");
var _actionDetailsJs = require("../core/action-details.js");
var _actionDetailsJsDefault = parcelHelpers.interopDefault(_actionDetailsJs);
var _dateJs = require("../masked/date.js");
var _factoryJs = require("../masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _patternJs = require("../masked/pattern.js");
var _baseJs = require("../masked/base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("../masked/pattern/input-definition.js");
var _fixedDefinitionJs = require("../masked/pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("../masked/pattern/chunk-tail-details.js");
var _cursorJs = require("../masked/pattern/cursor.js");
var _regexpJs = require("../masked/regexp.js");
var _rangeJs = require("../masked/range.js");
const _excluded = [
    "mask"
];
/** Listens to element events and controls changes between element and {@link Masked} */ class InputMask {
    /**
    View element
    @readonly
  */ /**
    Internal {@link Masked} model
    @readonly
  */ /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */ constructor(el, opts){
        this.el = el instanceof (0, _maskElementJsDefault.default) ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new (0, _htmlContenteditableMaskElementJsDefault.default)(el) : new (0, _htmlMaskElementJsDefault.default)(el);
        this.masked = (0, _factoryJsDefault.default)(opts);
        this._listeners = {};
        this._value = "";
        this._unmaskedValue = "";
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
        // refresh
        this.updateValue();
        this._onChange();
    }
    /** Read or update mask */ get mask() {
        return this.masked.mask;
    }
    maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
    set mask(mask) {
        if (this.maskEquals(mask)) return;
        // $FlowFixMe No ideas ... after update
        if (!(mask instanceof (0, _holderJsDefault.default).Masked) && this.masked.constructor === (0, _factoryJs.maskedClass)(mask)) {
            this.masked.updateOptions({
                mask
            });
            return;
        }
        const masked = (0, _factoryJsDefault.default)({
            mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
    }
    /** Raw value */ get value() {
        return this._value;
    }
    set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Unmasked value */ get unmaskedValue() {
        return this._unmaskedValue;
    }
    set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Typed unmasked value */ get typedValue() {
        return this.masked.typedValue;
    }
    set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
    }
    /** Display value */ get displayValue() {
        return this.masked.displayValue;
    }
    /**
    Starts listening to element events
    @protected
  */ _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange
        });
    }
    /**
    Stops listening to element events
    @protected
   */ _unbindEvents() {
        if (this.el) this.el.unbindEvents();
    }
    /**
    Fires custom event
    @protected
   */ _fireEvent(ev) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach((l)=>l(...args));
    }
    /**
    Current selection start
    @readonly
  */ get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */ get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
    }
    /**
    Stores current selection
    @protected
  */ _saveSelection() {
        if (this.displayValue !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."); // eslint-disable-line no-console
        this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        };
    }
    /** Syncronizes model value from view */ updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */ updateControl() {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */ updateOptions(opts) {
        const { mask  } = opts, restOpts = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(opts, _excluded);
        const updateMask = !this.maskEquals(mask);
        const updateOpts = !(0, _utilsJs.objectIncludes)(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */ updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
    }
    /**
    Delays cursor update to support mobile browsers
    @private
  */ _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(()=>{
            if (!this.el) return; // if was destroyed
            this.cursorPos = this._changingCursorPos;
            this._abortUpdateCursor();
        }, 10);
    }
    /**
    Fires custom events
    @protected
  */ _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent);
        if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
    }
    /**
    Aborts delayed cursor update
    @private
  */ _abortUpdateCursor() {
        if (this._cursorChanging) {
            clearTimeout(this._cursorChanging);
            delete this._cursorChanging;
        }
    }
    /** Aligns cursor to nearest available position */ alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, (0, _utilsJs.DIRECTION).LEFT));
    }
    /** Aligns cursor only if selection is empty */ alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
    }
    /** Adds listener on custom event */ on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
    }
    /** Removes custom event listener */ off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
            delete this._listeners[ev];
            return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
    }
    /** Handles view input event */ _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        // fix strange IE behavior
        if (!this._selection) return this.updateValue();
        const details = new (0, _actionDetailsJsDefault.default)(// new state
        this.el.value, this.cursorPos, // old state
        this.displayValue, this._selection);
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
            input: true,
            raw: true
        }).offset;
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : (0, _utilsJs.DIRECTION).NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) cursorPos = this.masked.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
    }
    /** Handles view change event and commits model value */ _onChange() {
        if (this.displayValue !== this.el.value) this.updateValue();
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
    }
    /** Handles view drop event, prevents by default */ _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    /** Restore last selection on focus */ _onFocus(ev) {
        this.alignCursorFriendly();
    }
    /** Restore last selection on focus */ _onClick(ev) {
        this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */ destroy() {
        this._unbindEvents();
        // $FlowFixMe why not do so?
        this._listeners.length = 0;
        // $FlowFixMe
        delete this.el;
    }
}
(0, _holderJsDefault.default).InputMask = InputMask;

},{"../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../core/utils.js":"3cGlA","../core/action-details.js":"6xJjN","../masked/date.js":"hNA3y","../masked/factory.js":"9iGM0","./mask-element.js":"f8hDl","./html-mask-element.js":"dBV5H","./html-contenteditable-mask-element.js":"4gQMC","../core/holder.js":"ag4RG","../core/change-details.js":"4KEzB","../masked/pattern.js":"klBdi","../masked/base.js":"fSZZ2","../core/continuous-tail-details.js":"ifDgI","../masked/pattern/input-definition.js":"luJiD","../masked/pattern/fixed-definition.js":"eJ4UV","../masked/pattern/chunk-tail-details.js":"jmr7O","../masked/pattern/cursor.js":"cvyBh","../masked/regexp.js":"4Gjxi","../masked/range.js":"i70s6","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"3Vk5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>_objectWithoutPropertiesLoose);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"3cGlA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Selection range */ parcelHelpers.export(exports, "DIRECTION", ()=>DIRECTION);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "forceDirection", ()=>forceDirection);
parcelHelpers.export(exports, "indexInDirection", ()=>indexInDirection);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "normalizePrepare", ()=>normalizePrepare);
parcelHelpers.export(exports, "objectIncludes", ()=>objectIncludes);
parcelHelpers.export(exports, "posInDirection", ()=>posInDirection);
var _changeDetailsJs = require("./change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("./holder.js");
/** Checks if value is string */ function isString(str) {
    return typeof str === "string" || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/ const DIRECTION = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};
/**
  Direction
  @enum {string}
*/ /** Returns next char index in direction */ function indexInDirection(pos, direction) {
    if (direction === DIRECTION.LEFT) --pos;
    return pos;
}
/** Returns next char position in direction */ function posInDirection(pos, direction) {
    switch(direction){
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
            return --pos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
            return ++pos;
        default:
            return pos;
    }
}
/** */ function forceDirection(direction) {
    switch(direction){
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT;
        default:
            return direction;
    }
}
/** Escapes regular expression control chars */ function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}
function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [
        prep,
        new (0, _changeDetailsJsDefault.default)()
    ];
}
// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a), arrB = Array.isArray(b), i;
    if (arrA && arrB) {
        if (a.length != b.length) return false;
        for(i = 0; i < a.length; i++)if (!objectIncludes(a[i], b[i])) return false;
        return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === "object" && typeof b === "object") {
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        var keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
        for(i = 0; i < keys.length; i++)// $FlowFixMe ... ???
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = 0; i < keys.length; i++)if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
    } else if (a && b && typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
    return false;
}

},{"./change-details.js":"4KEzB","./holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"4KEzB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChangeDetails);
var _holderJs = require("./holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/ class ChangeDetails {
    /** Inserted symbols */ /** Can skip chars */ /** Additional offset if any changes occurred before tail */ /** Raw inserted is used by dynamic mask */ constructor(details){
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            skip: false,
            tailShift: 0
        }, details);
    }
    /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */ aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
    }
    /** Total offset considering all changes */ get offset() {
        return this.tailShift + this.inserted.length;
    }
}
(0, _holderJsDefault.default).ChangeDetails = ChangeDetails;

},{"./holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"ag4RG":[function(require,module,exports) {
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IMask);
function IMask(el) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"6xJjN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ActionDetails);
var _utilsJs = require("./utils.js");
var _changeDetailsJs = require("./change-details.js");
var _holderJs = require("./holder.js");
/** Provides details of changing input */ class ActionDetails {
    /** Current input value */ /** Current cursor position */ /** Old input value */ /** Old selection */ constructor(value, cursorPos, oldValue, oldSelection){
        this.value = value;
        this.cursorPos = cursorPos;
        this.oldValue = oldValue;
        this.oldSelection = oldSelection;
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while(this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos))--this.oldSelection.start;
    }
    /**
    Start changing position
    @readonly
  */ get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
    Inserted symbols count
    @readonly
  */ get insertedCount() {
        return this.cursorPos - this.startChangePos;
    }
    /**
    Inserted symbols
    @readonly
  */ get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
    Removed symbols count
    @readonly
  */ get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
    }
    /**
    Removed symbols
    @readonly
  */ get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
    Unchanged head symbols
    @readonly
  */ get head() {
        return this.value.substring(0, this.startChangePos);
    }
    /**
    Unchanged tail symbols
    @readonly
  */ get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
    Remove direction
    @readonly
  */ get removeDirection() {
        if (!this.removedCount || this.insertedCount) return (0, _utilsJs.DIRECTION).NONE;
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? (0, _utilsJs.DIRECTION).RIGHT : (0, _utilsJs.DIRECTION).LEFT;
    }
}

},{"./utils.js":"3cGlA","./change-details.js":"4KEzB","./holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"hNA3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDate);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Date mask */ class MaskedDate extends (0, _patternJsDefault.default) {
    /** Pattern mask for date according to {@link MaskedDate#format} */ /** Start date */ /** End date */ /** */ /**
    @param {Object} opts
  */ constructor(opts){
        super(Object.assign({}, MaskedDate.DEFAULTS, opts));
    }
    /**
    @override
  */ _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) opts.mask = opts.pattern;
        const blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
            opts.blocks.m.from = opts.min.getMonth() + 1;
            opts.blocks.m.to = opts.max.getMonth() + 1;
            if (opts.blocks.m.from === opts.blocks.m.to) {
                opts.blocks.d.from = opts.min.getDate();
                opts.blocks.d.to = opts.max.getDate();
            }
        }
        Object.assign(opts.blocks, this.blocks, blocks);
        // add autofix
        Object.keys(opts.blocks).forEach((bk)=>{
            const b = opts.blocks[bk];
            if (!("autofix" in b) && "autofix" in opts) b.autofix = opts.autofix;
        });
        super._update(opts);
    }
    /**
    @override
  */ doValidate() {
        const date = this.date;
        return super.doValidate(...arguments) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */ isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */ get date() {
        return this.typedValue;
    }
    set date(date) {
        this.typedValue = date;
    }
    /**
    @override
  */ get typedValue() {
        return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
        super.typedValue = value;
    }
    /**
    @override
  */ maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
    }
}
MaskedDate.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: (date)=>{
        if (!date) return "";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return [
            day,
            month,
            year
        ].join(".");
    },
    parse: (str)=>{
        const [day, month, year] = str.split(".");
        return new Date(year, month - 1, day);
    }
};
MaskedDate.GET_DEFAULT_BLOCKS = ()=>({
        d: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: (0, _rangeJsDefault.default),
            from: 1900,
            to: 9999
        }
    });
(0, _holderJsDefault.default).MaskedDate = MaskedDate;

},{"./pattern.js":"klBdi","./range.js":"i70s6","../core/holder.js":"ag4RG","../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","./base.js":"fSZZ2","../core/continuous-tail-details.js":"ifDgI","./pattern/input-definition.js":"luJiD","./factory.js":"9iGM0","./pattern/fixed-definition.js":"eJ4UV","./pattern/chunk-tail-details.js":"jmr7O","./pattern/cursor.js":"cvyBh","./regexp.js":"4Gjxi","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"klBdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedPattern);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _cursorJs = require("./pattern/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _regexpJs = require("./regexp.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
const _excluded = [
    "_blocks"
];
/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {string} opts.displayChar
  @param {boolean} opts.lazy
*/ class MaskedPattern extends (0, _baseJsDefault.default) {
    /** */ /** */ /** Single char for empty input */ /** Single char for filled input */ /** Show placeholder only when needed */ constructor(){
        let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO type $Shape<MaskedPatternOptions>={} does not work
        opts.definitions = Object.assign({}, (0, _inputDefinitionJs.DEFAULT_INPUT_DEFINITIONS), opts.definitions);
        super(Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }
    /**
    @override
    @param {Object} opts
  */ _update() {
        let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
    }
    /** */ _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        let pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for(let i = 0; i < pattern.length; ++i){
            var _defs$char, _defs$char2;
            if (this.blocks) {
                const p = pattern.slice(i);
                const bNames = Object.keys(this.blocks).filter((bName)=>p.indexOf(bName) === 0);
                // order by key length
                bNames.sort((a, b)=>b.length - a.length);
                // use block name with max length
                const bName = bNames[0];
                if (bName) {
                    // $FlowFixMe no ideas
                    const maskedBlock = (0, _factoryJsDefault.default)(Object.assign({
                        parent: this,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite
                    }, this.blocks[bName]));
                    if (maskedBlock) {
                        this._blocks.push(maskedBlock);
                        // store block index
                        if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                        this._maskedBlocks[bName].push(this._blocks.length - 1);
                    }
                    i += bName.length - 1;
                    continue;
                }
            }
            let char = pattern[i];
            let isInput = char in defs;
            if (char === MaskedPattern.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue;
            }
            if (char === "{" || char === "}") {
                unmaskingBlock = !unmaskingBlock;
                continue;
            }
            if (char === "[" || char === "]") {
                optionalBlock = !optionalBlock;
                continue;
            }
            if (char === MaskedPattern.ESCAPE_CHAR) {
                ++i;
                char = pattern[i];
                if (!char) break;
                isInput = false;
            }
            const maskOpts = (_defs$char = defs[char]) !== null && _defs$char !== void 0 && _defs$char.mask && !(((_defs$char2 = defs[char]) === null || _defs$char2 === void 0 ? void 0 : _defs$char2.mask.prototype) instanceof (0, _holderJsDefault.default).Masked) ? defs[char] : {
                mask: defs[char]
            };
            const def = isInput ? new (0, _inputDefinitionJsDefault.default)(Object.assign({
                parent: this,
                isOptional: optionalBlock,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar
            }, maskOpts)) : new (0, _fixedDefinitionJsDefault.default)({
                char,
                eager: this.eager,
                isUnmasking: unmaskingBlock
            });
            this._blocks.push(def);
        }
    }
    /**
    @override
  */ get state() {
        return Object.assign({}, super.state, {
            _blocks: this._blocks.map((b)=>b.state)
        });
    }
    set state(state) {
        const { _blocks  } = state, maskedState = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(state, _excluded);
        this._blocks.forEach((b, bi)=>b.state = _blocks[bi]);
        super.state = maskedState;
    }
    /**
    @override
  */ reset() {
        super.reset();
        this._blocks.forEach((b)=>b.reset());
    }
    /**
    @override
  */ get isComplete() {
        return this._blocks.every((b)=>b.isComplete);
    }
    /**
    @override
  */ get isFilled() {
        return this._blocks.every((b)=>b.isFilled);
    }
    get isFixed() {
        return this._blocks.every((b)=>b.isFixed);
    }
    get isOptional() {
        return this._blocks.every((b)=>b.isOptional);
    }
    /**
    @override
  */ doCommit() {
        this._blocks.forEach((b)=>b.doCommit());
        super.doCommit();
    }
    /**
    @override
  */ get unmaskedValue() {
        return this._blocks.reduce((str, b)=>str += b.unmaskedValue, "");
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    /**
    @override
  */ get value() {
        // TODO return _value when not in change?
        return this._blocks.reduce((str, b)=>str += b.value, "");
    }
    set value(value) {
        super.value = value;
    }
    get displayValue() {
        return this._blocks.reduce((str, b)=>str += b.displayValue, "");
    }
    /**
    @override
  */ appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    /**
    @override
  */ _appendEager() {
        var _this$_mapPosToBlock;
        const details = new (0, _changeDetailsJsDefault.default)();
        let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details;
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for(let bi = startBlockIndex; bi < this._blocks.length; ++bi){
            const d = this._blocks[bi]._appendEager();
            if (!d.inserted) break;
            details.aggregate(d);
        }
        return details;
    }
    /**
    @override
  */ _appendCharRaw(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const blockIter = this._mapPosToBlock(this.value.length);
        const details = new (0, _changeDetailsJsDefault.default)();
        if (!blockIter) return details;
        for(let bi = blockIter.index;; ++bi){
            var _flags$_beforeTailSta, _flags$_beforeTailSta2;
            const block = this._blocks[bi];
            if (!block) break;
            const blockDetails = block._appendChar(ch, Object.assign({}, flags, {
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
            }));
            const skip = blockDetails.skip;
            details.aggregate(blockDetails);
            if (skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
    }
    /**
    @override
  */ extractTail() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        const chunkTail = new (0, _chunkTailDetailsJsDefault.default)();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos)=>{
            const blockChunk = b.extractTail(bFromPos, bToPos);
            blockChunk.stop = this._findStopBefore(bi);
            blockChunk.from = this._blockStartPos(bi);
            if (blockChunk instanceof (0, _chunkTailDetailsJsDefault.default)) blockChunk.blockIndex = bi;
            chunkTail.extend(blockChunk);
        });
        return chunkTail;
    }
    /**
    @override
  */ extractInput() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        let flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return "";
        let input = "";
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos)=>{
            input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
    }
    _findStopBefore(blockIndex) {
        let stopBefore;
        for(let si = 0; si < this._stops.length; ++si){
            const stop = this._stops[si];
            if (stop <= blockIndex) stopBefore = stop;
            else break;
        }
        return stopBefore;
    }
    /** Appends placeholder depending on laziness */ _appendPlaceholder(toBlockIndex) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.value.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach((b)=>{
            if (!b.lazy || toBlockIndex != null) {
                // $FlowFixMe `_blocks` may not be present
                const args = b._blocks != null ? [
                    b._blocks.length
                ] : [];
                const bDetails = b._appendPlaceholder(...args);
                this._value += bDetails.inserted;
                details.aggregate(bDetails);
            }
        });
        return details;
    }
    /** Finds block in pos */ _mapPosToBlock(pos) {
        let accVal = "";
        for(let bi = 0; bi < this._blocks.length; ++bi){
            const block = this._blocks[bi];
            const blockStartPos = accVal.length;
            accVal += block.value;
            if (pos <= accVal.length) return {
                index: bi,
                offset: pos - blockStartPos
            };
        }
    }
    /** */ _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b)=>pos += b.value.length, 0);
    }
    /** */ _forEachBlocksInRange(fromPos) {
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        let fn = arguments.length > 2 ? arguments[2] : undefined;
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
            const toBlockIter = this._mapPosToBlock(toPos);
            // process first block
            const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
            const fromBlockStartPos = fromBlockIter.offset;
            const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
            fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
            if (toBlockIter && !isSameBlock) {
                // process intermediate blocks
                for(let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi)fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                // process last block
                fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
            }
        }
    }
    /**
    @override
  */ remove() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
    }
    /**
    @override
  */ nearestInputPos(cursorPos) {
        let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utilsJs.DIRECTION).NONE;
        if (!this._blocks.length) return 0;
        const cursor = new (0, _cursorJsDefault.default)(this, cursorPos);
        if (direction === (0, _utilsJs.DIRECTION).NONE) {
            // -------------------------------------------------
            // NONE should only go out from fixed to the right!
            // -------------------------------------------------
            if (cursor.pushRightBeforeInput()) return cursor.pos;
            cursor.popState();
            if (cursor.pushLeftBeforeInput()) return cursor.pos;
            return this.value.length;
        }
        // FORCE is only about a|* otherwise is 0
        if (direction === (0, _utilsJs.DIRECTION).LEFT || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
            // try to break fast when *|a
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeFilled();
                if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                cursor.popState();
            }
            // forward flow
            cursor.pushLeftBeforeInput();
            cursor.pushLeftBeforeRequired();
            cursor.pushLeftBeforeFilled();
            // backward flow
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeInput();
                cursor.pushRightBeforeRequired();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
            }
            if (cursor.ok) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return 0;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            // cursor.popState();
            // if (
            //   cursor.pushRightBeforeInput() &&
            //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
            //   (!this.lazy || this.extractInput())
            // ) return cursor.pos;
            return 0;
        }
        if (direction === (0, _utilsJs.DIRECTION).RIGHT || direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) {
            // forward flow
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.pushRightBeforeFilled()) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) return this.value.length;
            // backward flow
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return this.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).LEFT);
        }
        return cursorPos;
    }
    /**
    @override
  */ totalInputPositions() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
    }
    /** Get block by name */ maskedBlock(name) {
        return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */ maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map((gi)=>this._blocks[gi]);
    }
}
MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = (0, _inputDefinitionJsDefault.default);
MaskedPattern.FixedDefinition = (0, _fixedDefinitionJsDefault.default);
(0, _holderJsDefault.default).MaskedPattern = MaskedPattern;

},{"../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","./base.js":"fSZZ2","./pattern/input-definition.js":"luJiD","./pattern/fixed-definition.js":"eJ4UV","./pattern/chunk-tail-details.js":"jmr7O","./pattern/cursor.js":"cvyBh","./factory.js":"9iGM0","../core/holder.js":"ag4RG","./regexp.js":"4Gjxi","../core/continuous-tail-details.js":"ifDgI","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"fSZZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Masked);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Supported mask type */ /** Append flags */ /** Extract flags */ /** Provides common masking stuff */ class Masked {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773
    /** @type {Mask} */ /** */ // $FlowFixMe no ideas
    /** Transforms value before mask processing */ /** Validates if value is acceptable */ /** Does additional processing in the end of editing */ /** Format typed value to string */ /** Parse strgin to get typed value */ /** Enable characters overwriting */ /** */ /** */ /** */ constructor(opts){
        this._value = "";
        this._update(Object.assign({}, Masked.DEFAULTS, opts));
        this.isInitialized = true;
    }
    /** Sets and applies new options */ updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        // $FlowFixMe
        this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
    Sets new options
    @protected
  */ _update(opts) {
        Object.assign(this, opts);
    }
    /** Mask state */ get state() {
        return {
            _value: this.value
        };
    }
    set state(state) {
        this._value = state._value;
    }
    /** Resets value */ reset() {
        this._value = "";
    }
    /** */ get value() {
        return this._value;
    }
    set value(value) {
        this.resolve(value);
    }
    /** Resolve new value */ resolve(value) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            input: true
        };
        this.reset();
        this.append(value, flags, "");
        this.doCommit();
        return this.value;
    }
    /** */ get unmaskedValue() {
        return this.value;
    }
    set unmaskedValue(value) {
        this.reset();
        this.append(value, {}, "");
        this.doCommit();
    }
    /** */ get typedValue() {
        return this.doParse(this.value);
    }
    set typedValue(value) {
        this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */ get rawInputValue() {
        return this.extractInput(0, this.value.length, {
            raw: true
        });
    }
    set rawInputValue(value) {
        this.reset();
        this.append(value, {
            raw: true
        }, "");
        this.doCommit();
    }
    get displayValue() {
        return this.value;
    }
    /** */ get isComplete() {
        return true;
    }
    /** */ get isFilled() {
        return this.isComplete;
    }
    /** Finds nearest input position in direction */ nearestInputPos(cursorPos, direction) {
        return cursorPos;
    }
    totalInputPositions() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return Math.min(this.value.length, toPos - fromPos);
    }
    /** Extracts value in range considering flags */ extractInput() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */ extractTail() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new (0, _continuousTailDetailsJsDefault.default)(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */ // $FlowFixMe no ideas
    appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    /** Appends char */ _appendCharRaw(ch) {
        if (!ch) return new (0, _changeDetailsJsDefault.default)();
        this._value += ch;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: ch,
            rawInserted: ch
        });
    }
    /** Appends char */ _appendChar(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let checkTail = arguments.length > 2 ? arguments[2] : undefined;
        const consistentState = this.state;
        let details;
        [ch, details] = (0, _utilsJs.normalizePrepare)(this.doPrepare(ch, flags));
        details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
            let consistentTail;
            let appended = this.doValidate(flags) !== false;
            if (appended && checkTail != null) {
                // validation ok, check tail
                const beforeTailState = this.state;
                if (this.overwrite === true) {
                    consistentTail = checkTail.state;
                    checkTail.unshift(this.value.length - details.tailShift);
                }
                let tailDetails = this.appendTail(checkTail);
                appended = tailDetails.rawInserted === checkTail.toString();
                // not ok, try shift
                if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
                    this.state = beforeTailState;
                    consistentTail = checkTail.state;
                    checkTail.shift();
                    tailDetails = this.appendTail(checkTail);
                    appended = tailDetails.rawInserted === checkTail.toString();
                }
                // if ok, rollback state after tail
                if (appended && tailDetails.inserted) this.state = beforeTailState;
            }
            // revert all if something went wrong
            if (!appended) {
                details = new (0, _changeDetailsJsDefault.default)();
                this.state = consistentState;
                if (checkTail && consistentTail) checkTail.state = consistentTail;
            }
        }
        return details;
    }
    /** Appends optional placeholder at end */ _appendPlaceholder() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends optional eager placeholder at end */ _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends symbols considering flags */ // $FlowFixMe no ideas
    append(str, flags, tail) {
        if (!(0, _utilsJs.isString)(str)) throw new Error("value should be string");
        const details = new (0, _changeDetailsJsDefault.default)();
        const checkTail = (0, _utilsJs.isString)(tail) ? new (0, _continuousTailDetailsJsDefault.default)(String(tail)) : tail;
        if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
        for(let ci = 0; ci < str.length; ++ci){
            const d = this._appendChar(str[ci], flags, checkTail);
            if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
            details.aggregate(d);
        }
        // append tail but aggregate only tailShift
        if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift;
        if ((this.eager === true || this.eager === "append") && flags !== null && flags !== void 0 && flags.input && str) details.aggregate(this._appendEager());
        return details;
    }
    /** */ remove() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Calls function and reapplies current value */ withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) this.append(value.slice(this.value.length), {}, "");
        delete this._refreshing;
        return ret;
    }
    /** */ runIsolated(fn) {
        if (this._isolated || !this.isInitialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
    }
    /** */ doSkipInvalid(ch) {
        return this.skipInvalid;
    }
    /**
    Prepares string before mask processing
    @protected
  */ doPrepare(str) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
    Validates if value is acceptable
    @protected
  */ doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
    Does additional processing in the end of editing
    @protected
  */ doCommit() {
        if (this.commit) this.commit(this.value, this);
    }
    /** */ doFormat(value) {
        return this.format ? this.format(value, this) : value;
    }
    /** */ doParse(str) {
        return this.parse ? this.parse(str, this) : str;
    }
    /** */ splice(start, deleteCount, inserted, removeDirection) {
        let flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            input: true
        };
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === "remove";
        let oldRawValue;
        if (eagerRemove) {
            removeDirection = (0, _utilsJs.forceDirection)(removeDirection);
            oldRawValue = this.extractInput(0, tailPos, {
                raw: true
            });
        }
        let startChangePos = start;
        const details = new (0, _changeDetailsJsDefault.default)();
        // if it is just deletion without insertion
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) {
            startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? (0, _utilsJs.DIRECTION).NONE : removeDirection);
            // adjust tailShift if start was aligned
            details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== (0, _utilsJs.DIRECTION).NONE && oldRawValue === this.rawInputValue) {
            if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
                let valLength;
                while(oldRawValue === this.rawInputValue && (valLength = this.value.length))details.aggregate(new (0, _changeDetailsJsDefault.default)({
                    tailShift: -1
                })).aggregate(this.remove(valLength - 1));
            } else if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_RIGHT) tail.unshift();
        }
        return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
        return this.mask === mask;
    }
    typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
    }
}
Masked.DEFAULTS = {
    format: String,
    parse: (v)=>v,
    skipInvalid: true
};
Masked.EMPTY_VALUES = [
    undefined,
    null,
    ""
];
(0, _holderJsDefault.default).Masked = Masked;

},{"../core/change-details.js":"4KEzB","../core/continuous-tail-details.js":"ifDgI","../core/utils.js":"3cGlA","../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"ifDgI":[function(require,module,exports) {
/** Provides details of continuous extracted tail */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ContinuousTailDetails);
class ContinuousTailDetails {
    /** Tail value as string */ /** Tail start position */ /** Start position */ constructor(){
        let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let stop = arguments.length > 2 ? arguments[2] : undefined;
        this.value = value;
        this.from = from;
        this.stop = stop;
    }
    toString() {
        return this.value;
    }
    extend(tail) {
        this.value += String(tail);
    }
    appendTo(masked) {
        return masked.append(this.toString(), {
            tail: true
        }).aggregate(masked._appendPlaceholder());
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        };
    }
    set state(state) {
        Object.assign(this, state);
    }
    unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return "";
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
    }
    shift() {
        if (!this.value.length) return "";
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"luJiD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_INPUT_DEFINITIONS", ()=>DEFAULT_INPUT_DEFINITIONS);
parcelHelpers.export(exports, "default", ()=>PatternInputDefinition);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../../_rollupPluginBabelHelpers-6b3bd404.js");
var _factoryJs = require("../factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _holderJs = require("../../core/holder.js");
const _excluded = [
    "parent",
    "isOptional",
    "placeholderChar",
    "displayChar",
    "lazy",
    "eager"
];
/** */ const DEFAULT_INPUT_DEFINITIONS = {
    "0": /\d/,
    "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    "*": /./
};
/** */ class PatternInputDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        const { parent , isOptional , placeholderChar , displayChar , lazy , eager  } = opts, maskOpts = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(opts, _excluded);
        this.masked = (0, _factoryJsDefault.default)(maskOpts);
        Object.assign(this, {
            parent,
            isOptional,
            placeholderChar,
            displayChar,
            lazy,
            eager
        });
    }
    reset() {
        this.isFilled = false;
        this.masked.reset();
    }
    remove() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        if (fromPos === 0 && toPos >= 1) {
            this.isFilled = false;
            return this.masked.remove(fromPos, toPos);
        }
        return new (0, _changeDetailsJsDefault.default)();
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue;
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const state = this.masked.state;
        // simulate input
        const details = this.masked._appendChar(ch, flags);
        if (details.inserted && this.doValidate(flags) === false) {
            details.inserted = details.rawInserted = "";
            this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
    }
    append() {
        // TODO probably should be done via _appendChar
        return this.masked.append(...arguments);
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
    }
    _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    extractTail() {
        return this.masked.extractTail(...arguments);
    }
    appendTail() {
        return this.masked.appendTail(...arguments);
    }
    extractInput() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        let flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos) {
        let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return this.isComplete ? boundPos : minPos;
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                return this.isComplete ? boundPos : maxPos;
            case (0, _utilsJs.DIRECTION).NONE:
            default:
                return boundPos;
        }
    }
    totalInputPositions() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos).length;
    }
    doValidate() {
        return this.masked.doValidate(...arguments) && (!this.parent || this.parent.doValidate(...arguments));
    }
    doCommit() {
        this.masked.doCommit();
    }
    get state() {
        return {
            masked: this.masked.state,
            isFilled: this.isFilled
        };
    }
    set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
    }
}

},{"../../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../factory.js":"9iGM0","../../core/change-details.js":"4KEzB","../../core/utils.js":"3cGlA","../../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"9iGM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMask);
parcelHelpers.export(exports, "maskedClass", ()=>maskedClass);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
/** Get Masked class by mask type */ function maskedClass(mask) {
    if (mask == null) throw new Error("mask property should be defined");
    // $FlowFixMe
    if (mask instanceof RegExp) return (0, _holderJsDefault.default).MaskedRegExp;
    // $FlowFixMe
    if ((0, _utilsJs.isString)(mask)) return (0, _holderJsDefault.default).MaskedPattern;
    // $FlowFixMe
    if (mask instanceof Date || mask === Date) return (0, _holderJsDefault.default).MaskedDate;
    // $FlowFixMe
    if (mask instanceof Number || typeof mask === "number" || mask === Number) return (0, _holderJsDefault.default).MaskedNumber;
    // $FlowFixMe
    if (Array.isArray(mask) || mask === Array) return (0, _holderJsDefault.default).MaskedDynamic;
    // $FlowFixMe
    if ((0, _holderJsDefault.default).Masked && mask.prototype instanceof (0, _holderJsDefault.default).Masked) return mask;
    // $FlowFixMe
    if (mask instanceof (0, _holderJsDefault.default).Masked) return mask.constructor;
    // $FlowFixMe
    if (mask instanceof Function) return (0, _holderJsDefault.default).MaskedFunction;
    console.warn("Mask not found for mask", mask); // eslint-disable-line no-console
    // $FlowFixMe
    return (0, _holderJsDefault.default).Masked;
}
/** Creates new {@link Masked} depending on mask type */ function createMask(opts) {
    // $FlowFixMe
    if ((0, _holderJsDefault.default).Masked && opts instanceof (0, _holderJsDefault.default).Masked) return opts;
    opts = Object.assign({}, opts);
    const mask = opts.mask;
    // $FlowFixMe
    if ((0, _holderJsDefault.default).Masked && mask instanceof (0, _holderJsDefault.default).Masked) return mask;
    const MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new MaskedClass(opts);
}
(0, _holderJsDefault.default).createMask = createMask;

},{"../core/utils.js":"3cGlA","../core/holder.js":"ag4RG","../core/change-details.js":"4KEzB","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"eJ4UV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternFixedDefinition);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
/** */ class PatternFixedDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        Object.assign(this, opts);
        this._value = "";
        this.isFixed = true;
    }
    get value() {
        return this._value;
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
    }
    get displayValue() {
        return this.value;
    }
    reset() {
        this._isRawInput = false;
        this._value = "";
    }
    remove() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new (0, _changeDetailsJsDefault.default)();
    }
    nearestInputPos(cursorPos) {
        let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this._value.length;
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return minPos;
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
            default:
                return maxPos;
        }
    }
    totalInputPositions() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        let flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return Boolean(this._value);
    }
    _appendChar(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        const appendEager = this.eager === true || this.eager === "append";
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: true
        });
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
    }
    extractTail() {
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new (0, _continuousTailDetailsJsDefault.default)("");
    }
    // $FlowFixMe no ideas
    appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
        return details;
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _isRawInput: this._isRawInput
        };
    }
    set state(state) {
        Object.assign(this, state);
    }
}

},{"../../core/change-details.js":"4KEzB","../../core/utils.js":"3cGlA","../../core/continuous-tail-details.js":"ifDgI","../../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"jmr7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChunksTailDetails);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../../_rollupPluginBabelHelpers-6b3bd404.js");
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
const _excluded = [
    "chunks"
];
class ChunksTailDetails {
    /** */ constructor(){
        let chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.chunks = chunks;
        this.from = from;
    }
    toString() {
        return this.chunks.map(String).join("");
    }
    // $FlowFixMe no ideas
    extend(tailChunk) {
        if (!String(tailChunk)) return;
        if ((0, _utilsJs.isString)(tailChunk)) tailChunk = new (0, _continuousTailDetailsJsDefault.default)(String(tailChunk));
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && // if stops are same or tail has no stop
        (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof (0, _continuousTailDetailsJsDefault.default)) {
            // check the ability to extend previous chunk
            if (extendLast) // extend previous chunk
            lastChunk.extend(tailChunk.toString());
            else // append new chunk
            this.chunks.push(tailChunk);
        } else if (tailChunk instanceof ChunksTailDetails) {
            if (tailChunk.stop == null) {
                // unwrap floating chunks to parent, keeping `from` pos
                let firstTailChunk;
                while(tailChunk.chunks.length && tailChunk.chunks[0].stop == null){
                    firstTailChunk = tailChunk.chunks.shift();
                    firstTailChunk.from += tailChunk.from;
                    this.extend(firstTailChunk);
                }
            }
            // if tail chunk still has value
            if (tailChunk.toString()) {
                // if chunks contains stops, then popup stop to container
                tailChunk.stop = tailChunk.blockIndex;
                this.chunks.push(tailChunk);
            }
        }
    }
    appendTo(masked) {
        // $FlowFixMe
        if (!(masked instanceof (0, _holderJsDefault.default).MaskedPattern)) {
            const tail = new (0, _continuousTailDetailsJsDefault.default)(this.toString());
            return tail.appendTo(masked);
        }
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let ci = 0; ci < this.chunks.length && !details.skip; ++ci){
            const chunk = this.chunks[ci];
            const lastBlockIter = masked._mapPosToBlock(masked.value.length);
            const stop = chunk.stop;
            let chunkBlock;
            if (stop != null && // if block not found or stop is behind lastBlock
            (!lastBlockIter || lastBlockIter.index <= stop)) {
                if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                masked._stops.indexOf(stop) >= 0) {
                    const phDetails = masked._appendPlaceholder(stop);
                    details.aggregate(phDetails);
                }
                chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
            }
            if (chunkBlock) {
                const tailDetails = chunkBlock.appendTail(chunk);
                tailDetails.skip = false; // always ignore skip, it will be set on last
                details.aggregate(tailDetails);
                masked._value += tailDetails.inserted;
                // get not inserted chars
                const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                if (remainChars) details.aggregate(masked.append(remainChars, {
                    tail: true
                }));
            } else details.aggregate(masked.append(chunk.toString(), {
                tail: true
            }));
        }
        return details;
    }
    get state() {
        return {
            chunks: this.chunks.map((c)=>c.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        };
    }
    set state(state) {
        const { chunks  } = state, props = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(state, _excluded);
        Object.assign(this, props);
        this.chunks = chunks.map((cstate)=>{
            const chunk = "chunks" in cstate ? new ChunksTailDetails() : new (0, _continuousTailDetailsJsDefault.default)();
            // $FlowFixMe already checked above
            chunk.state = cstate;
            return chunk;
        });
    }
    unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return "";
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while(ci < this.chunks.length){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.unshift(chunkShiftPos);
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                ++ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
    shift() {
        if (!this.chunks.length) return "";
        let ci = this.chunks.length - 1;
        while(0 <= ci){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.shift();
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                --ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
}

},{"../../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../../core/change-details.js":"4KEzB","../../core/utils.js":"3cGlA","../../core/continuous-tail-details.js":"ifDgI","../../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"cvyBh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternCursor);
var _utilsJs = require("../../core/utils.js");
var _changeDetailsJs = require("../../core/change-details.js");
var _holderJs = require("../../core/holder.js");
class PatternCursor {
    constructor(masked, pos){
        this.masked = masked;
        this._log = [];
        const { offset , index  } = masked._mapPosToBlock(pos) || (pos < 0 ? // first
        {
            index: 0,
            offset: 0
        } : // last
        {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
    }
    get block() {
        return this.masked._blocks[this.index];
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        };
    }
    set state(s) {
        Object.assign(this, s);
    }
    pushState() {
        this._log.push(this.state);
    }
    popState() {
        const s = this._log.pop();
        this.state = s;
        return s;
    }
    bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
            this.index = 0;
            this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
            this.index = this.masked._blocks.length - 1;
            this.offset = this.block.value.length;
        }
    }
    _pushLeft(fn) {
        this.pushState();
        for(this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0){
            var _this$block;
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    _pushRight(fn) {
        this.pushState();
        for(this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0){
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (this.offset !== 0) return true;
        });
    }
    pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(()=>{
            if (this.block.isFixed) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushRightBeforeFilled() {
        return this._pushRight(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_RIGHT);
            if (this.offset !== this.block.value.length) return true;
        });
    }
    pushRightBeforeInput() {
        return this._pushRight(()=>{
            if (this.block.isFixed) return;
            // const o = this.offset;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            // HACK cases like (STILL DOES NOT WORK FOR NESTED)
            // aa|X
            // aa<X|[]>X_    - this will not work
            // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
            return true;
        });
    }
    pushRightBeforeRequired() {
        return this._pushRight(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            // TODO check |[*]XX_
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            return true;
        });
    }
}

},{"../../core/utils.js":"3cGlA","../../core/change-details.js":"4KEzB","../../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"4Gjxi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRegExp);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by RegExp */ class MaskedRegExp extends (0, _baseJsDefault.default) {
    /**
    @override
    @param {Object} opts
  */ _update(opts) {
        if (opts.mask) opts.validate = (value)=>value.search(opts.mask) >= 0;
        super._update(opts);
    }
}
(0, _holderJsDefault.default).MaskedRegExp = MaskedRegExp;

},{"./base.js":"fSZZ2","../core/holder.js":"ag4RG","../core/change-details.js":"4KEzB","../core/continuous-tail-details.js":"ifDgI","../core/utils.js":"3cGlA","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"i70s6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRange);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _changeDetailsJs = require("../core/change-details.js");
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Pattern which accepts ranges */ class MaskedRange extends (0, _patternJsDefault.default) {
    /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */ /** Min bound */ /** Max bound */ /** */ get _matchFrom() {
        return this.maxLength - String(this.from).length;
    }
    /**
    @override
  */ _update(opts) {
        // TODO type
        opts = Object.assign({
            to: this.to || 0,
            from: this.from || 0,
            maxLength: this.maxLength || 0
        }, opts);
        let maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        const fromStr = String(opts.from).padStart(maxLength, "0");
        const toStr = String(opts.to).padStart(maxLength, "0");
        let sameCharsCount = 0;
        while(sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount])++sameCharsCount;
        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
        super._update(opts);
    }
    /**
    @override
  */ get isComplete() {
        return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
        let minstr = "";
        let maxstr = "";
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
            minstr = "0".repeat(placeholder.length) + num;
            maxstr = "9".repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, "0");
        maxstr = maxstr.padEnd(this.maxLength, "9");
        return [
            minstr,
            maxstr
        ];
    }
    // TODO str is a single char everytime
    /**
    @override
  */ doPrepare(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let details;
        [ch, details] = (0, _utilsJs.normalizePrepare)(super.doPrepare(ch.replace(/\D/g, ""), flags));
        if (!this.autofix || !ch) return ch;
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        let nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return "";
        const [minstr, maxstr] = this.boundaries(nextVal);
        if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
        if (Number(minstr) > this.to) {
            if (this.autofix === "pad" && nextVal.length < this.maxLength) return [
                "",
                details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))
            ];
            return toStr[nextVal.length - 1];
        }
        return ch;
    }
    /**
    @override
  */ doValidate() {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(...arguments);
    }
}
(0, _holderJsDefault.default).MaskedRange = MaskedRange;

},{"./pattern.js":"klBdi","../core/change-details.js":"4KEzB","../core/utils.js":"3cGlA","../core/holder.js":"ag4RG","../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","./base.js":"fSZZ2","../core/continuous-tail-details.js":"ifDgI","./pattern/input-definition.js":"luJiD","./factory.js":"9iGM0","./pattern/fixed-definition.js":"eJ4UV","./pattern/chunk-tail-details.js":"jmr7O","./pattern/cursor.js":"cvyBh","./regexp.js":"4Gjxi","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"f8hDl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskElement);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**
  Generic element API to use with mask
  @interface
*/ class MaskElement {
    /** */ /** */ /** */ /** Safely returns selection start */ get selectionStart() {
        let start;
        try {
            start = this._unsafeSelectionStart;
        } catch (e) {}
        return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */ get selectionEnd() {
        let end;
        try {
            end = this._unsafeSelectionEnd;
        } catch (e) {}
        return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */ select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
            this._unsafeSelect(start, end);
        } catch (e) {}
    }
    /** Should be overriden in subclasses */ _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */ get isActive() {
        return false;
    }
    /** Should be overriden in subclasses */ bindEvents(handlers) {}
    /** Should be overriden in subclasses */ unbindEvents() {}
}
(0, _holderJsDefault.default).MaskElement = MaskElement;

},{"../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"dBV5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLMaskElement);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Bridge between HTMLElement and {@link Masked} */ class HTMLMaskElement extends (0, _maskElementJsDefault.default) {
    /** Mapping between HTMLElement events and mask internal events */ /** HTMLElement to use mask on */ /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */ constructor(input){
        super();
        this.input = input;
        this._handlers = {};
    }
    /** */ // $FlowFixMe https://github.com/facebook/flow/issues/2839
    get rootElement() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
    Is element in focus
    @readonly
  */ get isActive() {
        //$FlowFixMe
        return this.input === this.rootElement.activeElement;
    }
    /**
    Returns HTMLElement selection start
    @override
  */ get _unsafeSelectionStart() {
        return this.input.selectionStart;
    }
    /**
    Returns HTMLElement selection end
    @override
  */ get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
    }
    /**
    Sets HTMLElement selection
    @override
  */ _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
    }
    /**
    HTMLElement value
    @override
  */ get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    /**
    Binds HTMLElement events to mask internal events
    @override
  */ bindEvents(handlers) {
        Object.keys(handlers).forEach((event)=>this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
    }
    /**
    Unbinds HTMLElement events to mask internal events
    @override
  */ unbindEvents() {
        Object.keys(this._handlers).forEach((event)=>this._toggleEventHandler(event));
    }
    /** */ _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
            this.input.removeEventListener(event, this._handlers[event]);
            delete this._handlers[event];
        }
        if (handler) {
            this.input.addEventListener(event, handler);
            this._handlers[event] = handler;
        }
    }
}
HTMLMaskElement.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
};
(0, _holderJsDefault.default).HTMLMaskElement = HTMLMaskElement;

},{"./mask-element.js":"f8hDl","../core/holder.js":"ag4RG","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"4gQMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLContenteditableMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
class HTMLContenteditableMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /**
    Returns HTMLElement selection start
    @override
  */ get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
        return focusOffset;
    }
    /**
    Returns HTMLElement selection end
    @override
  */ get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
        return focusOffset;
    }
    /**
    Sets HTMLElement selection
    @override
  */ _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    /**
    HTMLElement value
    @override
  */ get value() {
        // $FlowFixMe
        return this.input.textContent;
    }
    set value(value) {
        this.input.textContent = value;
    }
}
(0, _holderJsDefault.default).HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

},{"./html-mask-element.js":"dBV5H","../core/holder.js":"ag4RG","./mask-element.js":"f8hDl","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"fWbsP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedEnum);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _factoryJs = require("./factory.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _regexpJs = require("./regexp.js");
/** Pattern which validates enum values */ class MaskedEnum extends (0, _patternJsDefault.default) {
    /**
    @override
    @param {Object} opts
  */ _update(opts) {
        // TODO type
        if (opts.enum) opts.mask = "*".repeat(opts.enum[0].length);
        super._update(opts);
    }
    /**
    @override
  */ doValidate() {
        return this.enum.some((e)=>e.indexOf(this.unmaskedValue) >= 0) && super.doValidate(...arguments);
    }
}
(0, _holderJsDefault.default).MaskedEnum = MaskedEnum;

},{"./pattern.js":"klBdi","../core/holder.js":"ag4RG","../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","./base.js":"fSZZ2","../core/continuous-tail-details.js":"ifDgI","./pattern/input-definition.js":"luJiD","./factory.js":"9iGM0","./pattern/fixed-definition.js":"eJ4UV","./pattern/chunk-tail-details.js":"jmr7O","./pattern/cursor.js":"cvyBh","./regexp.js":"4Gjxi","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"iPy10":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedNumber);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/ class MaskedNumber extends (0, _baseJsDefault.default) {
    /** Single char */ /** Single char */ /** Array of single chars */ /** */ /** */ /** Digits after point */ /** */ /** Flag to remove leading and trailing zeros in the end of editing */ /** Flag to pad trailing zeros after point in the end of editing */ constructor(opts){
        super(Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }
    /**
    @override
  */ _update(opts) {
        super._update(opts);
        this._updateRegExps();
    }
    /** */ _updateRegExps() {
        let start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
        let mid = "\\d*";
        let end = (this.scale ? "(".concat((0, _utilsJs.escapeRegExp)(this.radix), "\\d{0,").concat(this.scale, "})?") : "") + "$";
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map((0, _utilsJs.escapeRegExp)).join(""), "]"), "g");
        this._thousandsSeparatorRegExp = new RegExp((0, _utilsJs.escapeRegExp)(this.thousandsSeparator), "g");
    }
    /** */ _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, "");
    }
    /** */ _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
    }
    /**
    @override
  */ doPrepare(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        ch = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */ (flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch);
        const [prepCh, details] = (0, _utilsJs.normalizePrepare)(super.doPrepare(ch, flags));
        if (ch && !prepCh) details.skip = true;
        return [
            prepCh,
            details
        ];
    }
    /** */ _separatorsCount(to) {
        let extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let count = 0;
        for(let pos = 0; pos < to; ++pos)if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
        return count;
    }
    /** */ _separatorsCountFromSlice() {
        let slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
    @override
  */ extractInput() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        let flags = arguments.length > 2 ? arguments[2] : undefined;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    /**
    @override
  */ _appendCharRaw(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const appendDetails = super._appendCharRaw(ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
    }
    /** */ _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
            const searchFrom = pos - this.thousandsSeparator.length + 1;
            const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
            if (separatorPos <= pos) return separatorPos;
        }
        return -1;
    }
    _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [
            from,
            to
        ];
    }
    /**
    @override
  */ remove() {
        let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new (0, _changeDetailsJsDefault.default)({
            tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
    }
    /**
    @override
  */ nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch(direction){
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                {
                    const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                    if (separatorAtLeftPos >= 0) {
                        const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                        if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return separatorAtLeftPos;
                    }
                    break;
                }
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                {
                    const separatorAtRightPos = this._findSeparatorAround(cursorPos);
                    if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                }
        }
        return cursorPos;
    }
    /**
    @override
  */ doValidate(flags) {
        // validate as string
        let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (valid) {
            // validate as number
            const number = this.number;
            valid = valid && !isNaN(number) && // check min bound for negative values
            (this.min == null || this.min >= 0 || this.min <= this.number) && // check max bound for positive values
            (this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && super.doValidate(flags);
    }
    /**
    @override
  */ doCommit() {
        if (this.value) {
            const number = this.number;
            let validnum = number;
            // check bounds
            if (this.min != null) validnum = Math.max(validnum, this.min);
            if (this.max != null) validnum = Math.min(validnum, this.max);
            if (validnum !== number) this.unmaskedValue = this.doFormat(validnum);
            let formatted = this.value;
            if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
            if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
            this._value = formatted;
        }
        super.doCommit();
    }
    /** */ _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num)=>sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
        if (parts.length > 1) {
            parts[1] = parts[1].replace(/0*$/, ""); // remove trailing zeros
            if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */ _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push("");
        parts[1] = parts[1].padEnd(this.scale, "0");
        return parts.join(this.radix);
    }
    /** */ doSkipInvalid(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let checkTail = arguments.length > 2 ? arguments[2] : undefined;
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    /**
    @override
  */ get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    /**
    @override
  */ get typedValue() {
        return this.doParse(this.unmaskedValue);
    }
    set typedValue(n) {
        this.rawInputValue = this.doFormat(n).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }
    /** Parsed Number */ get number() {
        return this.typedValue;
    }
    set number(number) {
        this.typedValue = number;
    }
    /**
    Is negative allowed
    @readonly
  */ get allowNegative() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    /**
    @override
  */ typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
    }
}
MaskedNumber.UNMASKED_RADIX = ".";
MaskedNumber.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [
        MaskedNumber.UNMASKED_RADIX
    ],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: (n)=>n.toLocaleString("en-US", {
            useGrouping: false,
            maximumFractionDigits: 20
        })
};
MaskedNumber.EMPTY_VALUES = [
    ...(0, _baseJsDefault.default).EMPTY_VALUES,
    0
];
(0, _holderJsDefault.default).MaskedNumber = MaskedNumber;

},{"../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","./base.js":"fSZZ2","../core/holder.js":"ag4RG","../core/continuous-tail-details.js":"ifDgI","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"f0b4h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedFunction);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by custom Function */ class MaskedFunction extends (0, _baseJsDefault.default) {
    /**
    @override
    @param {Object} opts
  */ _update(opts) {
        if (opts.mask) opts.validate = opts.mask;
        super._update(opts);
    }
}
(0, _holderJsDefault.default).MaskedFunction = MaskedFunction;

},{"./base.js":"fSZZ2","../core/holder.js":"ag4RG","../core/change-details.js":"4KEzB","../core/continuous-tail-details.js":"ifDgI","../core/utils.js":"3cGlA","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"iKg5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDynamic);
var _rollupPluginBabelHelpers6B3Bd404Js = require("../_rollupPluginBabelHelpers-6b3bd404.js");
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
const _excluded = [
    "compiledMasks",
    "currentMaskRef",
    "currentMask"
], _excluded2 = [
    "mask"
];
/** Dynamic mask for choosing apropriate mask in run-time */ class MaskedDynamic extends (0, _baseJsDefault.default) {
    /** Currently chosen mask */ /** Compliled {@link Masked} options */ /** Chooses {@link Masked} depending on input value */ /**
    @param {Object} opts
  */ constructor(opts){
        super(Object.assign({}, MaskedDynamic.DEFAULTS, opts));
        this.currentMask = null;
    }
    /**
    @override
  */ _update(opts) {
        super._update(opts);
        if ("mask" in opts) // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((m)=>(0, _factoryJsDefault.default)(m)) : [];
    }
    /**
    @override
  */ _appendCharRaw(ch) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        return details;
    }
    _applyDispatch() {
        let appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
        flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new (0, _changeDetailsJsDefault.default)();
        const prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, Object.assign({}, flags), tail);
        // restore state after dispatch
        if (this.currentMask) {
            if (this.currentMask !== prevMask) {
                // if mask changed reapply input
                this.currentMask.reset();
                if (insertValue) {
                    // $FlowFixMe - it's ok, we don't change current mask above
                    const d = this.currentMask.append(insertValue, {
                        raw: true
                    });
                    details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                }
                if (tailValue) // $FlowFixMe - it's ok, we don't change current mask above
                details.tailShift += this.currentMask.append(tailValue, {
                    raw: true,
                    tail: true
                }).tailShift;
            } else // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
        }
        return details;
    }
    _appendPlaceholder() {
        const details = this._applyDispatch(...arguments);
        if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
        return details;
    }
    /**
   @override
  */ _appendEager() {
        const details = this._applyDispatch(...arguments);
        if (this.currentMask) details.aggregate(this.currentMask._appendEager());
        return details;
    }
    appendTail(tail) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (tail) details.aggregate(this._applyDispatch("", {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return Object.assign({}, flags, {
            _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        });
    }
    /**
    @override
  */ doDispatch(appended) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return this.dispatch(appended, this, flags, tail);
    }
    /**
    @override
  */ doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    /**
    @override
  */ doPrepare(str) {
        let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let [s, details] = (0, _utilsJs.normalizePrepare)(super.doPrepare(str, flags));
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = (0, _utilsJs.normalizePrepare)(super.doPrepare(s, this.currentMaskFlags(flags)));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    /**
    @override
  */ reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 || _this$currentMask.reset();
        this.compiledMasks.forEach((m)=>m.reset());
    }
    /**
    @override
  */ get value() {
        return this.currentMask ? this.currentMask.value : "";
    }
    set value(value) {
        super.value = value;
    }
    /**
    @override
  */ get unmaskedValue() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    /**
    @override
  */ get typedValue() {
        return this.currentMask ? this.currentMask.typedValue : "";
    }
    // probably typedValue should not be used with dynamic
    set typedValue(value) {
        let unmaskedValue = String(value);
        // double check it
        if (this.currentMask) {
            this.currentMask.typedValue = value;
            unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
    }
    /**
    @override
  */ get isComplete() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
    }
    /**
    @override
  */ get isFilled() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
    }
    /**
    @override
  */ remove() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.currentMask) details.aggregate(this.currentMask.remove(...arguments))// update with dispatch
        .aggregate(this._applyDispatch());
        return details;
    }
    /**
    @override
  */ get state() {
        var _this$currentMask4;
        return Object.assign({}, super.state, {
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map((m)=>m.state),
            currentMaskRef: this.currentMask,
            currentMask: (_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.state
        });
    }
    set state(state) {
        const { compiledMasks , currentMaskRef , currentMask  } = state, maskedState = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(state, _excluded);
        this.compiledMasks.forEach((m, mi)=>m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
            this.currentMask = currentMaskRef;
            this.currentMask.state = currentMask;
        }
        super.state = maskedState;
    }
    /**
    @override
  */ extractInput() {
        return this.currentMask ? this.currentMask.extractInput(...arguments) : "";
    }
    /**
    @override
  */ extractTail() {
        return this.currentMask ? this.currentMask.extractTail(...arguments) : super.extractTail(...arguments);
    }
    /**
    @override
  */ doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
    }
    /**
    @override
  */ nearestInputPos() {
        return this.currentMask ? this.currentMask.nearestInputPos(...arguments) : super.nearestInputPos(...arguments);
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : super.overwrite;
    }
    set overwrite(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : super.eager;
    }
    set eager(eager) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : super.skipInvalid;
    }
    set skipInvalid(skipInvalid) {
        if (this.isInitialized || skipInvalid !== (0, _baseJsDefault.default).DEFAULTS.skipInvalid) console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
    }
    /**
    @override
  */ maskEquals(mask) {
        return Array.isArray(mask) && this.compiledMasks.every((m, mi)=>{
            if (!mask[mi]) return;
            const _mask$mi = mask[mi], { mask: oldMask  } = _mask$mi, restOpts = (0, _rollupPluginBabelHelpers6B3Bd404Js._)(_mask$mi, _excluded2);
            return (0, _utilsJs.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
        });
    }
    /**
    @override
  */ typedValueEquals(value) {
        var _this$currentMask5;
        return Boolean((_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
}
MaskedDynamic.DEFAULTS = {
    dispatch: (appended, masked, flags, tail)=>{
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
        // simulate input
        const inputs = masked.compiledMasks.map((m, index)=>{
            const isCurrent = masked.currentMask === m;
            const startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (m.rawInputValue !== inputValue) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
            } else if (!isCurrent) m.remove(startInputPos);
            m.append(appended, masked.currentMaskFlags(flags));
            m.appendTail(tail);
            return {
                index,
                weight: m.rawInputValue.length,
                totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, (0, _utilsJs.DIRECTION).FORCE_LEFT)))
            };
        });
        // pop masks with longer values first
        inputs.sort((i1, i2)=>i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
    }
};
(0, _holderJsDefault.default).MaskedDynamic = MaskedDynamic;

},{"../_rollupPluginBabelHelpers-6b3bd404.js":"3Vk5u","../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","./factory.js":"9iGM0","./base.js":"fSZZ2","../core/holder.js":"ag4RG","../core/continuous-tail-details.js":"ifDgI","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"4lYuO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>PIPE_TYPE);
parcelHelpers.export(exports, "createPipe", ()=>createPipe);
parcelHelpers.export(exports, "pipe", ()=>pipe);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
/** Mask pipe source and destination types */ const PIPE_TYPE = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};
/** Creates new pipe function depending on mask type, source and destination options */ function createPipe(mask) {
    let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    let to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    const masked = (0, _factoryJsDefault.default)(mask);
    return (value)=>masked.runIsolated((m)=>{
            m[from] = value;
            return m[to];
        });
}
/** Pipes value through mask depending on mask type, source and destination options */ function pipe(value) {
    for(var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)pipeArgs[_key - 1] = arguments[_key];
    return createPipe(...pipeArgs)(value);
}
(0, _holderJsDefault.default).PIPE_TYPE = PIPE_TYPE;
(0, _holderJsDefault.default).createPipe = createPipe;
(0, _holderJsDefault.default).pipe = pipe;

},{"./factory.js":"9iGM0","../core/holder.js":"ag4RG","../core/utils.js":"3cGlA","../core/change-details.js":"4KEzB","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"ggTIE":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toDate = _interopRequireDefault(require("b10fe806c1d95257"));
var _toFloat = _interopRequireDefault(require("904819e5ea643bef"));
var _toInt = _interopRequireDefault(require("22c9d1505c2d1fc3"));
var _toBoolean = _interopRequireDefault(require("e0a5af27c12b2c5e"));
var _equals = _interopRequireDefault(require("df6a0b6bd84e19b4"));
var _contains = _interopRequireDefault(require("e2f527afb12190b0"));
var _matches = _interopRequireDefault(require("d7cf83c49d7fa32f"));
var _isEmail = _interopRequireDefault(require("73acc2ba6f501a7f"));
var _isURL = _interopRequireDefault(require("7cc96999cdc491f6"));
var _isMACAddress = _interopRequireDefault(require("91309703df115c6"));
var _isIP = _interopRequireDefault(require("8d2f5af297d16217"));
var _isIPRange = _interopRequireDefault(require("6e4eace52f632262"));
var _isFQDN = _interopRequireDefault(require("1219b49fc6cacab9"));
var _isDate = _interopRequireDefault(require("befc3dab9b151a88"));
var _isTime = _interopRequireDefault(require("ec526ea97a56e412"));
var _isBoolean = _interopRequireDefault(require("a3a022398582f68"));
var _isLocale = _interopRequireDefault(require("8e765fdc6039f514"));
var _isAlpha = _interopRequireWildcard(require("752765732ee21c04"));
var _isAlphanumeric = _interopRequireWildcard(require("939913da4be78270"));
var _isNumeric = _interopRequireDefault(require("b32016933f0604cd"));
var _isPassportNumber = _interopRequireDefault(require("f24514c574ef5174"));
var _isPort = _interopRequireDefault(require("a3b9b492f47016b1"));
var _isLowercase = _interopRequireDefault(require("8ca5f357d13579ae"));
var _isUppercase = _interopRequireDefault(require("57290c395d90e9e1"));
var _isIMEI = _interopRequireDefault(require("2b3e24162ae2fcc4"));
var _isAscii = _interopRequireDefault(require("6af1ce2eb4cb2855"));
var _isFullWidth = _interopRequireDefault(require("a47be535f6075d89"));
var _isHalfWidth = _interopRequireDefault(require("eef79b677b4d3a47"));
var _isVariableWidth = _interopRequireDefault(require("34b89671f36a7e6c"));
var _isMultibyte = _interopRequireDefault(require("8c10c7728b073c57"));
var _isSemVer = _interopRequireDefault(require("f81e871eee57051f"));
var _isSurrogatePair = _interopRequireDefault(require("1b903d3ad0f8db90"));
var _isInt = _interopRequireDefault(require("20afde36edb727c0"));
var _isFloat = _interopRequireWildcard(require("26779d512565dc66"));
var _isDecimal = _interopRequireDefault(require("df62e7a0ab08fe5c"));
var _isHexadecimal = _interopRequireDefault(require("e09b4815b82a6fa5"));
var _isOctal = _interopRequireDefault(require("db9c20ed62cf8b83"));
var _isDivisibleBy = _interopRequireDefault(require("ea2557066cb998fd"));
var _isHexColor = _interopRequireDefault(require("f2e98624db0f1d3a"));
var _isRgbColor = _interopRequireDefault(require("1ac5e66aef101809"));
var _isHSL = _interopRequireDefault(require("d63b18a1ffb2f873"));
var _isISRC = _interopRequireDefault(require("b761b41c2a22a4c"));
var _isIBAN = _interopRequireWildcard(require("1474925e6c78b080"));
var _isBIC = _interopRequireDefault(require("5f702bfdeaac1ce7"));
var _isMD = _interopRequireDefault(require("94155f1dd48161aa"));
var _isHash = _interopRequireDefault(require("136460343d65b33b"));
var _isJWT = _interopRequireDefault(require("c84165da89e1d7dc"));
var _isJSON = _interopRequireDefault(require("4b2533eb7fa4f841"));
var _isEmpty = _interopRequireDefault(require("61b139f71e9bf24a"));
var _isLength = _interopRequireDefault(require("f14362267ed484f3"));
var _isByteLength = _interopRequireDefault(require("d2e7ce5d1a66c2af"));
var _isUUID = _interopRequireDefault(require("e04856beee56d70"));
var _isMongoId = _interopRequireDefault(require("8582f245235fd570"));
var _isAfter = _interopRequireDefault(require("38440f282a879a28"));
var _isBefore = _interopRequireDefault(require("b530a3c08a2c51b8"));
var _isIn = _interopRequireDefault(require("72a50fd794aa3073"));
var _isLuhnNumber = _interopRequireDefault(require("47ff8310016d83ea"));
var _isCreditCard = _interopRequireDefault(require("ba1ceeca74a3e817"));
var _isIdentityCard = _interopRequireDefault(require("858463bab92c710f"));
var _isEAN = _interopRequireDefault(require("f68159fe837e362b"));
var _isISIN = _interopRequireDefault(require("7dbda028ea6b742d"));
var _isISBN = _interopRequireDefault(require("7c94026d50601268"));
var _isISSN = _interopRequireDefault(require("71e63739b51dba75"));
var _isTaxID = _interopRequireDefault(require("ab77331adcaaf0d6"));
var _isMobilePhone = _interopRequireWildcard(require("2313c49333962ef0"));
var _isEthereumAddress = _interopRequireDefault(require("1ea0c275d18ce3e5"));
var _isCurrency = _interopRequireDefault(require("de6a83eab060bec5"));
var _isBtcAddress = _interopRequireDefault(require("ab08ca66d9afd375"));
var _isISO = _interopRequireDefault(require("57ddbfb43a466c6c"));
var _isISO2 = _interopRequireDefault(require("b9e0ef98f72ec644"));
var _isRFC = _interopRequireDefault(require("704555bc8cf425e5"));
var _isISO31661Alpha = _interopRequireDefault(require("a4ed258f67afd89a"));
var _isISO31661Alpha2 = _interopRequireDefault(require("2ca72dbaf0f6b784"));
var _isISO3 = _interopRequireDefault(require("c4b0f529774f4dee"));
var _isBase = _interopRequireDefault(require("3e794622f61caa75"));
var _isBase2 = _interopRequireDefault(require("43c060b0c5b6666c"));
var _isBase3 = _interopRequireDefault(require("7e6b000c25e65107"));
var _isDataURI = _interopRequireDefault(require("e9ea15b8d1ad7666"));
var _isMagnetURI = _interopRequireDefault(require("63f9ca5884eaf1a9"));
var _isMimeType = _interopRequireDefault(require("ead2e0dae8858eb6"));
var _isLatLong = _interopRequireDefault(require("943c68afc1f5e3fb"));
var _isPostalCode = _interopRequireWildcard(require("337fc01d18b5d9a1"));
var _ltrim = _interopRequireDefault(require("8e8b3ff8c8b3be15"));
var _rtrim = _interopRequireDefault(require("2262c3ab640e83e1"));
var _trim = _interopRequireDefault(require("4ed20b257cccd153"));
var _escape = _interopRequireDefault(require("ac5bde86531aa937"));
var _unescape = _interopRequireDefault(require("2cfb4a825383e754"));
var _stripLow = _interopRequireDefault(require("2e66e0b0ad386340"));
var _whitelist = _interopRequireDefault(require("8984f13126c4be3d"));
var _blacklist = _interopRequireDefault(require("a5ed790bd0c52ebc"));
var _isWhitelisted = _interopRequireDefault(require("27fe339771c0d202"));
var _normalizeEmail = _interopRequireDefault(require("f0de5432f43d6408"));
var _isSlug = _interopRequireDefault(require("cc7c18b6c6bfc763"));
var _isLicensePlate = _interopRequireDefault(require("cf2ac5417f4a7f77"));
var _isStrongPassword = _interopRequireDefault(require("1f8b1a814d1f08cd"));
var _isVAT = _interopRequireDefault(require("b2c0124f6355fe4f"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var version = "13.9.0";
var validator = {
    version: version,
    toDate: _toDate.default,
    toFloat: _toFloat.default,
    toInt: _toInt.default,
    toBoolean: _toBoolean.default,
    equals: _equals.default,
    contains: _contains.default,
    matches: _matches.default,
    isEmail: _isEmail.default,
    isURL: _isURL.default,
    isMACAddress: _isMACAddress.default,
    isIP: _isIP.default,
    isIPRange: _isIPRange.default,
    isFQDN: _isFQDN.default,
    isBoolean: _isBoolean.default,
    isIBAN: _isIBAN.default,
    isBIC: _isBIC.default,
    isAlpha: _isAlpha.default,
    isAlphaLocales: _isAlpha.locales,
    isAlphanumeric: _isAlphanumeric.default,
    isAlphanumericLocales: _isAlphanumeric.locales,
    isNumeric: _isNumeric.default,
    isPassportNumber: _isPassportNumber.default,
    isPort: _isPort.default,
    isLowercase: _isLowercase.default,
    isUppercase: _isUppercase.default,
    isAscii: _isAscii.default,
    isFullWidth: _isFullWidth.default,
    isHalfWidth: _isHalfWidth.default,
    isVariableWidth: _isVariableWidth.default,
    isMultibyte: _isMultibyte.default,
    isSemVer: _isSemVer.default,
    isSurrogatePair: _isSurrogatePair.default,
    isInt: _isInt.default,
    isIMEI: _isIMEI.default,
    isFloat: _isFloat.default,
    isFloatLocales: _isFloat.locales,
    isDecimal: _isDecimal.default,
    isHexadecimal: _isHexadecimal.default,
    isOctal: _isOctal.default,
    isDivisibleBy: _isDivisibleBy.default,
    isHexColor: _isHexColor.default,
    isRgbColor: _isRgbColor.default,
    isHSL: _isHSL.default,
    isISRC: _isISRC.default,
    isMD5: _isMD.default,
    isHash: _isHash.default,
    isJWT: _isJWT.default,
    isJSON: _isJSON.default,
    isEmpty: _isEmpty.default,
    isLength: _isLength.default,
    isLocale: _isLocale.default,
    isByteLength: _isByteLength.default,
    isUUID: _isUUID.default,
    isMongoId: _isMongoId.default,
    isAfter: _isAfter.default,
    isBefore: _isBefore.default,
    isIn: _isIn.default,
    isLuhnNumber: _isLuhnNumber.default,
    isCreditCard: _isCreditCard.default,
    isIdentityCard: _isIdentityCard.default,
    isEAN: _isEAN.default,
    isISIN: _isISIN.default,
    isISBN: _isISBN.default,
    isISSN: _isISSN.default,
    isMobilePhone: _isMobilePhone.default,
    isMobilePhoneLocales: _isMobilePhone.locales,
    isPostalCode: _isPostalCode.default,
    isPostalCodeLocales: _isPostalCode.locales,
    isEthereumAddress: _isEthereumAddress.default,
    isCurrency: _isCurrency.default,
    isBtcAddress: _isBtcAddress.default,
    isISO6391: _isISO.default,
    isISO8601: _isISO2.default,
    isRFC3339: _isRFC.default,
    isISO31661Alpha2: _isISO31661Alpha.default,
    isISO31661Alpha3: _isISO31661Alpha2.default,
    isISO4217: _isISO3.default,
    isBase32: _isBase.default,
    isBase58: _isBase2.default,
    isBase64: _isBase3.default,
    isDataURI: _isDataURI.default,
    isMagnetURI: _isMagnetURI.default,
    isMimeType: _isMimeType.default,
    isLatLong: _isLatLong.default,
    ltrim: _ltrim.default,
    rtrim: _rtrim.default,
    trim: _trim.default,
    escape: _escape.default,
    unescape: _unescape.default,
    stripLow: _stripLow.default,
    whitelist: _whitelist.default,
    blacklist: _blacklist.default,
    isWhitelisted: _isWhitelisted.default,
    normalizeEmail: _normalizeEmail.default,
    toString: toString,
    isSlug: _isSlug.default,
    isStrongPassword: _isStrongPassword.default,
    isTaxID: _isTaxID.default,
    isDate: _isDate.default,
    isTime: _isTime.default,
    isLicensePlate: _isLicensePlate.default,
    isVAT: _isVAT.default,
    ibanLocales: _isIBAN.locales
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

},{"b10fe806c1d95257":"5GhHq","904819e5ea643bef":"20W34","22c9d1505c2d1fc3":"2eJdU","e0a5af27c12b2c5e":"kIxj3","df6a0b6bd84e19b4":"hSy2O","e2f527afb12190b0":"5GbeQ","d7cf83c49d7fa32f":"9gtnF","73acc2ba6f501a7f":"hWJqu","7cc96999cdc491f6":"dbtl2","91309703df115c6":"4QJI8","8d2f5af297d16217":"21nE2","6e4eace52f632262":"15vOk","1219b49fc6cacab9":"io5JE","befc3dab9b151a88":"fyFIp","ec526ea97a56e412":"f4P8u","a3a022398582f68":"hsIBP","8e765fdc6039f514":"1Moq2","752765732ee21c04":"9vQmE","939913da4be78270":"eBiqG","b32016933f0604cd":"7MUVZ","f24514c574ef5174":"4T7Ke","a3b9b492f47016b1":"jZmgE","8ca5f357d13579ae":"5aoSa","57290c395d90e9e1":"94iNU","2b3e24162ae2fcc4":"d15wM","6af1ce2eb4cb2855":"1q8Do","a47be535f6075d89":"dNVuS","eef79b677b4d3a47":"eWx0B","34b89671f36a7e6c":"8yIcF","8c10c7728b073c57":"lO6Bd","f81e871eee57051f":"4s4r2","1b903d3ad0f8db90":"7oGIZ","20afde36edb727c0":"9uawt","26779d512565dc66":"aldM7","df62e7a0ab08fe5c":"lAaqW","e09b4815b82a6fa5":"1kg26","db9c20ed62cf8b83":"hbKeI","ea2557066cb998fd":"1xLGD","f2e98624db0f1d3a":"ffMol","1ac5e66aef101809":"7JdMu","d63b18a1ffb2f873":"kYRPC","b761b41c2a22a4c":"bAFxi","1474925e6c78b080":"oY7PG","5f702bfdeaac1ce7":"i7vxR","94155f1dd48161aa":"g9kpJ","136460343d65b33b":"hAiyu","c84165da89e1d7dc":"8PlVE","4b2533eb7fa4f841":"9ID8S","61b139f71e9bf24a":"cKn4B","f14362267ed484f3":"eDhBW","d2e7ce5d1a66c2af":"53OiY","e04856beee56d70":"iXttg","8582f245235fd570":"49XFY","38440f282a879a28":"c2Ea1","b530a3c08a2c51b8":"1FZVW","72a50fd794aa3073":"flsZs","47ff8310016d83ea":"eZK5f","ba1ceeca74a3e817":"iPApi","858463bab92c710f":"b6SVi","f68159fe837e362b":"1sZ7y","7dbda028ea6b742d":"i0AMi","7c94026d50601268":"7D0bq","71e63739b51dba75":"6FXgm","ab77331adcaaf0d6":"9mMh1","2313c49333962ef0":"3lVvY","1ea0c275d18ce3e5":"4If3X","de6a83eab060bec5":"9IzQf","ab08ca66d9afd375":"365fV","57ddbfb43a466c6c":"aJqb2","b9e0ef98f72ec644":"6K5gj","704555bc8cf425e5":"en57N","a4ed258f67afd89a":"ej9is","2ca72dbaf0f6b784":"cLhNs","c4b0f529774f4dee":"aU9Gb","3e794622f61caa75":"ajuBX","43c060b0c5b6666c":"dJRgx","7e6b000c25e65107":"f54KM","e9ea15b8d1ad7666":"1SHuo","63f9ca5884eaf1a9":"5iT2O","ead2e0dae8858eb6":"9toCu","943c68afc1f5e3fb":"ldav1","337fc01d18b5d9a1":"dGBfQ","8e8b3ff8c8b3be15":"4yuag","2262c3ab640e83e1":"avwpv","4ed20b257cccd153":"izdgc","ac5bde86531aa937":"g0sSl","2cfb4a825383e754":"lhAKW","2e66e0b0ad386340":"bKCGJ","8984f13126c4be3d":"ZPxad","a5ed790bd0c52ebc":"4UBX7","27fe339771c0d202":"5mGOj","f0de5432f43d6408":"bnmQz","cc7c18b6c6bfc763":"89sqV","cf2ac5417f4a7f77":"dwGws","1f8b1a814d1f08cd":"fFZ7V","b2c0124f6355fe4f":"kxPFr"}],"5GhHq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toDate;
var _assertString = _interopRequireDefault(require("9003e7317103d051"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toDate(date) {
    (0, _assertString.default)(date);
    date = Date.parse(date);
    return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9003e7317103d051":"knXEv"}],"knXEv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = assertString;
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function assertString(input) {
    var isString = typeof input === "string" || input instanceof String;
    if (!isString) {
        var invalidType = _typeof(input);
        if (input === null) invalidType = "null";
        else if (invalidType === "object") invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"20W34":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toFloat;
var _isFloat = _interopRequireDefault(require("9b0d8b1a332f4ae0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toFloat(str) {
    if (!(0, _isFloat.default)(str)) return NaN;
    return parseFloat(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9b0d8b1a332f4ae0":"aldM7"}],"aldM7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFloat;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("e15bcf079e8ac12a"));
var _alpha = require("24fcd40e646e749a");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isFloat(str, options) {
    (0, _assertString.default)(str);
    options = options || {};
    var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (str === "" || str === "." || str === "," || str === "-" || str === "+") return false;
    var value = parseFloat(str.replace(",", "."));
    return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
}
var locales = Object.keys(_alpha.decimal);
exports.locales = locales;

},{"e15bcf079e8ac12a":"knXEv","24fcd40e646e749a":"6aHYL"}],"6aHYL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commaDecimal = exports.dotDecimal = exports.bengaliLocales = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
    "en-US": /^[A-Z]+$/i,
    "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[А-Я]+$/i,
    "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[A-ZÆØÅ]+$/i,
    "de-DE": /^[A-ZÄÖÜß]+$/i,
    "el-GR": /^[Α-ώ]+$/i,
    "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
    "fi-FI": /^[A-ZÅÄÖ]+$/i,
    "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "nb-NO": /^[A-ZÆØÅ]+$/i,
    "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[A-ZÆØÅ]+$/i,
    "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[А-ЯЁ]+$/i,
    "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๐\s]+$/i,
    "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[א-ת]+$/,
    fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
    "si-LK": /^[\u0D80-\u0DFF]+$/
};
exports.alpha = alpha;
var alphanumeric = {
    "en-US": /^[0-9A-Z]+$/i,
    "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[0-9А-Я]+$/i,
    "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[0-9A-ZÆØÅ]+$/i,
    "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
    "el-GR": /^[0-9Α-ω]+$/i,
    "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
    "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
    "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
    "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[0-9А-ЯЁ]+$/i,
    "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๙\s]+$/i,
    "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[0-9א-ת]+$/,
    fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
    "si-LK": /^[0-9\u0D80-\u0DFF]+$/
};
exports.alphanumeric = alphanumeric;
var decimal = {
    "en-US": ".",
    ar: "٫"
};
exports.decimal = decimal;
var englishLocales = [
    "AU",
    "GB",
    "HK",
    "IN",
    "NZ",
    "ZA",
    "ZM"
];
exports.englishLocales = englishLocales;
for(var locale, i = 0; i < englishLocales.length; i++){
    locale = "en-".concat(englishLocales[i]);
    alpha[locale] = alpha["en-US"];
    alphanumeric[locale] = alphanumeric["en-US"];
    decimal[locale] = decimal["en-US"];
} // Source: http://www.localeplanet.com/java/
var arabicLocales = [
    "AE",
    "BH",
    "DZ",
    "EG",
    "IQ",
    "JO",
    "KW",
    "LB",
    "LY",
    "MA",
    "QM",
    "QA",
    "SA",
    "SD",
    "SY",
    "TN",
    "YE"
];
exports.arabicLocales = arabicLocales;
for(var _locale, _i = 0; _i < arabicLocales.length; _i++){
    _locale = "ar-".concat(arabicLocales[_i]);
    alpha[_locale] = alpha.ar;
    alphanumeric[_locale] = alphanumeric.ar;
    decimal[_locale] = decimal.ar;
}
var farsiLocales = [
    "IR",
    "AF"
];
exports.farsiLocales = farsiLocales;
for(var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++){
    _locale2 = "fa-".concat(farsiLocales[_i2]);
    alphanumeric[_locale2] = alphanumeric.fa;
    decimal[_locale2] = decimal.ar;
}
var bengaliLocales = [
    "BD",
    "IN"
];
exports.bengaliLocales = bengaliLocales;
for(var _locale3, _i3 = 0; _i3 < bengaliLocales.length; _i3++){
    _locale3 = "bn-".concat(bengaliLocales[_i3]);
    alpha[_locale3] = alpha.bn;
    alphanumeric[_locale3] = alphanumeric.bn;
    decimal[_locale3] = decimal["en-US"];
} // Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = [
    "ar-EG",
    "ar-LB",
    "ar-LY"
];
exports.dotDecimal = dotDecimal;
var commaDecimal = [
    "bg-BG",
    "cs-CZ",
    "da-DK",
    "de-DE",
    "el-GR",
    "en-ZM",
    "es-ES",
    "fr-CA",
    "fr-FR",
    "id-ID",
    "it-IT",
    "ku-IQ",
    "hi-IN",
    "hu-HU",
    "nb-NO",
    "nn-NO",
    "nl-NL",
    "pl-PL",
    "pt-PT",
    "ru-RU",
    "si-LK",
    "sl-SI",
    "sr-RS@latin",
    "sr-RS",
    "sv-SE",
    "tr-TR",
    "uk-UA",
    "vi-VN"
];
exports.commaDecimal = commaDecimal;
for(var _i4 = 0; _i4 < dotDecimal.length; _i4++)decimal[dotDecimal[_i4]] = decimal["en-US"];
for(var _i5 = 0; _i5 < commaDecimal.length; _i5++)decimal[commaDecimal[_i5]] = ",";
alpha["fr-CA"] = alpha["fr-FR"];
alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
alpha["pt-BR"] = alpha["pt-PT"];
alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
decimal["pt-BR"] = decimal["pt-PT"]; // see #862
alpha["pl-Pl"] = alpha["pl-PL"];
alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
decimal["pl-Pl"] = decimal["pl-PL"]; // see #1455
alpha["fa-AF"] = alpha.fa;

},{}],"2eJdU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toInt;
var _assertString = _interopRequireDefault(require("844cad00cd361a98"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toInt(str, radix) {
    (0, _assertString.default)(str);
    return parseInt(str, radix || 10);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"844cad00cd361a98":"knXEv"}],"kIxj3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toBoolean;
var _assertString = _interopRequireDefault(require("a1a6c79778bf962b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toBoolean(str, strict) {
    (0, _assertString.default)(str);
    if (strict) return str === "1" || /^true$/i.test(str);
    return str !== "0" && !/^false$/i.test(str) && str !== "";
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a1a6c79778bf962b":"knXEv"}],"hSy2O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = equals;
var _assertString = _interopRequireDefault(require("d1a5c332af02b5b8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function equals(str, comparison) {
    (0, _assertString.default)(str);
    return str === comparison;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d1a5c332af02b5b8":"knXEv"}],"5GbeQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = contains;
var _assertString = _interopRequireDefault(require("3e51aa762dc8c667"));
var _toString = _interopRequireDefault(require("3cd4f952bd2883fe"));
var _merge = _interopRequireDefault(require("cc59373485c7be91"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaulContainsOptions = {
    ignoreCase: false,
    minOccurrences: 1
};
function contains(str, elem, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaulContainsOptions);
    if (options.ignoreCase) return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
    return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3e51aa762dc8c667":"knXEv","3cd4f952bd2883fe":"38yrS","cc59373485c7be91":"9Vv2s"}],"38yrS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toString;
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toString(input) {
    if (_typeof(input) === "object" && input !== null) {
        if (typeof input.toString === "function") input = input.toString();
        else input = "[object Object]";
    } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) input = "";
    return String(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"9Vv2s":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = merge;
function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : undefined;
    for(var key in defaults)if (typeof obj[key] === "undefined") obj[key] = defaults[key];
    return obj;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"9gtnF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = matches;
var _assertString = _interopRequireDefault(require("d910f8373decde92"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function matches(str, pattern, modifiers) {
    (0, _assertString.default)(str);
    if (Object.prototype.toString.call(pattern) !== "[object RegExp]") pattern = new RegExp(pattern, modifiers);
    return !!str.match(pattern);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d910f8373decde92":"knXEv"}],"hWJqu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmail;
var _assertString = _interopRequireDefault(require("70466717dea49b4a"));
var _merge = _interopRequireDefault(require("8c581d289b6709d2"));
var _isByteLength = _interopRequireDefault(require("652948654aa86386"));
var _isFQDN = _interopRequireDefault(require("6e220cda7afcfeb4"));
var _isIP = _interopRequireDefault(require("270d6e12f02c594c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
};
/* eslint-disable max-len */ /* eslint-disable no-control-regex */ var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */ /* eslint-enable no-control-regex */ /**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */ function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1"); // display name with only spaces is not valid
    if (!display_name_without_quotes.trim()) return false;
     // check whether display name contains illegal character
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
        // if contains illegal characters,
        // must to be enclosed in double-quotes, otherwise it's not a valid display name
        if (display_name_without_quotes === display_name) return false;
         // the quotes in display name must start with character symbol \
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) return false;
    }
    return true;
}
function isEmail(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
            var display_name = display_email[1]; // Remove display name and angle brackets to get email address
            // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
            str = str.replace(display_name, "").replace(/(^<|>$)/g, ""); // sometimes need to trim the last space to get the display name
            // because there may be a space between display name and email address
            // eg. myname <address@gmail.com>
            // the display name is `myname` instead of `myname `, so need to trim the last space
            if (display_name.endsWith(" ")) display_name = display_name.slice(0, -1);
            if (!validateDisplayName(display_name)) return false;
        } else if (options.require_display_name) return false;
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) return false;
    var parts = str.split("@");
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) return false;
    if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) return false;
    var user = parts.join("@");
    if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
        /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */ user = user.toLowerCase(); // Removing sub-address from username before gmail validation
        var username = user.split("+")[0]; // Dots are not included in gmail length restriction
        if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
            min: 6,
            max: 30
        })) return false;
        var _user_parts = username.split(".");
        for(var i = 0; i < _user_parts.length; i++){
            if (!gmailUserPart.test(_user_parts[i])) return false;
        }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
    }) || !(0, _isByteLength.default)(domain, {
        max: 254
    }))) return false;
    if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld,
        ignore_max_length: options.ignore_max_length
    })) {
        if (!options.allow_ip_domain) return false;
        if (!(0, _isIP.default)(domain)) {
            if (!domain.startsWith("[") || !domain.endsWith("]")) return false;
            var noBracketdomain = domain.slice(1, -1);
            if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) return false;
        }
    }
    if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for(var _i = 0; _i < user_parts.length; _i++){
        if (!pattern.test(user_parts[_i])) return false;
    }
    if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"70466717dea49b4a":"knXEv","8c581d289b6709d2":"9Vv2s","652948654aa86386":"53OiY","6e220cda7afcfeb4":"io5JE","270d6e12f02c594c":"21nE2"}],"53OiY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isByteLength;
var _assertString = _interopRequireDefault(require("8709d4cd1991bf25"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-disable prefer-rest-params */ function isByteLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === "undefined" || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8709d4cd1991bf25":"knXEv"}],"io5JE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFQDN;
var _assertString = _interopRequireDefault(require("9ef49c576c3eb32d"));
var _merge = _interopRequireDefault(require("f628cd123e86515c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
};
function isFQDN(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_fqdn_options);
    /* Remove the optional trailing dot before checking validity */ if (options.allow_trailing_dot && str[str.length - 1] === ".") str = str.substring(0, str.length - 1);
    /* Remove the optional wildcard before checking validity */ if (options.allow_wildcard === true && str.indexOf("*.") === 0) str = str.substring(2);
    var parts = str.split(".");
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) return false;
        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) return false;
         // disallow spaces
        if (/\s/.test(tld)) return false;
    } // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) return false;
    return parts.every(function(part) {
        if (part.length > 63 && !options.ignore_max_length) return false;
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) return false;
         // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) return false;
         // disallow parts starting or ending with hyphen
        if (/^-|-$/.test(part)) return false;
        if (!options.allow_underscores && /_/.test(part)) return false;
        return true;
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9ef49c576c3eb32d":"knXEv","f628cd123e86515c":"9Vv2s"}],"21nE2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIP;
var _assertString = _interopRequireDefault(require("35aed34e3042a858"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */ var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function isIP(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    (0, _assertString.default)(str);
    version = String(version);
    if (!version) return isIP(str, 4) || isIP(str, 6);
    if (version === "4") return IPv4AddressRegExp.test(str);
    if (version === "6") return IPv6AddressRegExp.test(str);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"35aed34e3042a858":"knXEv"}],"dbtl2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isURL;
var _assertString = _interopRequireDefault(require("8a7ec28029711837"));
var _isFQDN = _interopRequireDefault(require("5dcdad4f58bfb9c9"));
var _isIP = _interopRequireDefault(require("138e1db08b22dcdd"));
var _merge = _interopRequireDefault(require("342189f79ec30088"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/ var default_url_options = {
    protocols: [
        "http",
        "https",
        "ftp"
    ],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
}
function checkHost(host, matches) {
    for(var i = 0; i < matches.length; i++){
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) return true;
    }
    return false;
}
function isURL(url, options) {
    (0, _assertString.default)(url);
    if (!url || /[\s<>]/.test(url)) return false;
    if (url.indexOf("mailto:") === 0) return false;
    options = (0, _merge.default)(options, default_url_options);
    if (options.validate_length && url.length >= 2083) return false;
    if (!options.allow_fragments && url.includes("#")) return false;
    if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) return false;
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split("#");
    url = split.shift();
    split = url.split("?");
    url = split.shift();
    split = url.split("://");
    if (split.length > 1) {
        protocol = split.shift().toLowerCase();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) return false;
    } else if (options.require_protocol) return false;
    else if (url.slice(0, 2) === "//") {
        if (!options.allow_protocol_relative_urls) return false;
        split[0] = url.slice(2);
    }
    url = split.join("://");
    if (url === "") return false;
    split = url.split("/");
    url = split.shift();
    if (url === "" && !options.require_host) return true;
    split = url.split("@");
    if (split.length > 1) {
        if (options.disallow_auth) return false;
        if (split[0] === "") return false;
        auth = split.shift();
        if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) return false;
        var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === "" && password === "") return false;
    }
    hostname = split.join("@");
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
        host = "";
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
    } else {
        split = hostname.split(":");
        host = split.shift();
        if (split.length) port_str = split.join(":");
    }
    if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) return false;
    } else if (options.require_port) return false;
    if (options.host_whitelist) return checkHost(host, options.host_whitelist);
    if (host === "" && !options.require_host) return true;
    if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) return false;
    host = host || ipv6;
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8a7ec28029711837":"knXEv","5dcdad4f58bfb9c9":"io5JE","138e1db08b22dcdd":"21nE2","342189f79ec30088":"9Vv2s"}],"4QJI8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMACAddress;
var _assertString = _interopRequireDefault(require("79312c853868713f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
function isMACAddress(str, options) {
    (0, _assertString.default)(str);
    if (options !== null && options !== void 0 && options.eui) options.eui = String(options.eui);
    /**
   * @deprecated `no_colons` TODO: remove it in the next major
  */ if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
        if (options.eui === "48") return macAddress48NoSeparators.test(str);
        if (options.eui === "64") return macAddress64NoSeparators.test(str);
        return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
    }
    if ((options === null || options === void 0 ? void 0 : options.eui) === "48") return macAddress48.test(str) || macAddress48WithDots.test(str);
    if ((options === null || options === void 0 ? void 0 : options.eui) === "64") return macAddress64.test(str) || macAddress64WithDots.test(str);
    return isMACAddress(str, {
        eui: "48"
    }) || isMACAddress(str, {
        eui: "64"
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79312c853868713f":"knXEv"}],"15vOk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIPRange;
var _assertString = _interopRequireDefault(require("49e430a37cae71ba"));
var _isIP = _interopRequireDefault(require("92f9021554c592ab"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subnetMaybe = /^\d{1,3}$/;
var v4Subnet = 32;
var v6Subnet = 128;
function isIPRange(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    (0, _assertString.default)(str);
    var parts = str.split("/"); // parts[0] -> ip, parts[1] -> subnet
    if (parts.length !== 2) return false;
    if (!subnetMaybe.test(parts[1])) return false;
     // Disallow preceding 0 i.e. 01, 02, ...
    if (parts[1].length > 1 && parts[1].startsWith("0")) return false;
    var isValidIP = (0, _isIP.default)(parts[0], version);
    if (!isValidIP) return false;
     // Define valid subnet according to IP's version
    var expectedSubnet = null;
    switch(String(version)){
        case "4":
            expectedSubnet = v4Subnet;
            break;
        case "6":
            expectedSubnet = v6Subnet;
            break;
        default:
            expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
    }
    return parts[1] <= expectedSubnet && parts[1] >= 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"49e430a37cae71ba":"knXEv","92f9021554c592ab":"21nE2"}],"fyFIp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDate;
var _merge = _interopRequireDefault(require("21ec486863c5ab2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var default_date_options = {
    format: "YYYY/MM/DD",
    delimiters: [
        "/",
        "-"
    ],
    strictMode: false
};
function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
}
function zip(date, format) {
    var zippedArr = [], len = Math.min(date.length, format.length);
    for(var i = 0; i < len; i++)zippedArr.push([
        date[i],
        format[i]
    ]);
    return zippedArr;
}
function isDate(input, options) {
    if (typeof options === "string") // Allow backward compatbility for old format isDate(input [, format])
    options = (0, _merge.default)({
        format: options
    }, default_date_options);
    else options = (0, _merge.default)(options, default_date_options);
    if (typeof input === "string" && isValidFormat(options.format)) {
        var formatDelimiter = options.delimiters.find(function(delimiter) {
            return options.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
            return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
                if (dateWord.length !== formatWord.length) return false;
                dateObj[formatWord.charAt(0)] = dateWord;
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
    }
    if (!options.strictMode) return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"21ec486863c5ab2":"9Vv2s"}],"f4P8u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTime;
var _merge = _interopRequireDefault(require("26fc1ee165383c3f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_time_options = {
    hourFormat: "hour24",
    mode: "default"
};
var formats = {
    hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
};
function isTime(input, options) {
    options = (0, _merge.default)(options, default_time_options);
    if (typeof input !== "string") return false;
    return formats[options.hourFormat][options.mode].test(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"26fc1ee165383c3f":"9Vv2s"}],"hsIBP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBoolean;
var _assertString = _interopRequireDefault(require("e4a745c2125b138a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaultOptions = {
    loose: false
};
var strictBooleans = [
    "true",
    "false",
    "1",
    "0"
];
var looseBooleans = [].concat(strictBooleans, [
    "yes",
    "no"
]);
function isBoolean(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
    (0, _assertString.default)(str);
    if (options.loose) return looseBooleans.includes(str.toLowerCase());
    return strictBooleans.includes(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e4a745c2125b138a":"knXEv"}],"1Moq2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLocale;
var _assertString = _interopRequireDefault(require("cbb9231b4b7081aa"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var localeReg = /^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;
function isLocale(str) {
    (0, _assertString.default)(str);
    if (str === "en_US_POSIX" || str === "ca_ES_VALENCIA") return true;
    return localeReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cbb9231b4b7081aa":"knXEv"}],"9vQmE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlpha;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("3de6ada39536fbf2"));
var _alpha = require("d4074828d7de2cf");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlpha(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, "");
        else if (typeof ignore === "string") str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), ""); // escape regex for ignore
        else throw new Error("ignore should be instance of a String or RegExp");
    }
    if (locale in _alpha.alpha) return _alpha.alpha[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(_alpha.alpha);
exports.locales = locales;

},{"3de6ada39536fbf2":"knXEv","d4074828d7de2cf":"6aHYL"}],"eBiqG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("520f6a53265a5a16"));
var _alpha = require("ed60b4f95488eea0");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlphanumeric(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, "");
        else if (typeof ignore === "string") str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), ""); // escape regex for ignore
        else throw new Error("ignore should be instance of a String or RegExp");
    }
    if (locale in _alpha.alphanumeric) return _alpha.alphanumeric[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(_alpha.alphanumeric);
exports.locales = locales;

},{"520f6a53265a5a16":"knXEv","ed60b4f95488eea0":"6aHYL"}],"7MUVZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumeric;
var _assertString = _interopRequireDefault(require("e19f95f48f597618"));
var _alpha = require("730cce541a5e2944");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var numericNoSymbols = /^[0-9]+$/;
function isNumeric(str, options) {
    (0, _assertString.default)(str);
    if (options && options.no_symbols) return numericNoSymbols.test(str);
    return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e19f95f48f597618":"knXEv","730cce541a5e2944":"6aHYL"}],"4T7Ke":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPassportNumber;
var _assertString = _interopRequireDefault(require("714539f615d17435"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */ var passportRegexByCountryCode = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{2,3}\d{7,8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
    // CANADA
    CH: /^[A-Z]\d{7}$/,
    // SWITZERLAND
    CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
    // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
    CY: /^[A-Z](\d{6}|\d{8})$/,
    // CYPRUS
    CZ: /^\d{8}$/,
    // CZECH REPUBLIC
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    // GERMANY
    DK: /^\d{9}$/,
    // DENMARK
    DZ: /^\d{9}$/,
    // ALGERIA
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    // SPAIN
    FI: /^[A-Z]{2}\d{7}$/,
    // FINLAND
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    // FRANCE
    GB: /^\d{9}$/,
    // UNITED KINGDOM
    GR: /^[A-Z]{2}\d{7}$/,
    // GREECE
    HR: /^\d{9}$/,
    // CROATIA
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    // HUNGARY
    IE: /^[A-Z0-9]{2}\d{7}$/,
    // IRELAND
    IN: /^[A-Z]{1}-?\d{7}$/,
    // INDIA
    ID: /^[A-C]\d{7}$/,
    // INDONESIA
    IR: /^[A-Z]\d{8}$/,
    // IRAN
    IS: /^(A)\d{7}$/,
    // ICELAND
    IT: /^[A-Z0-9]{2}\d{7}$/,
    // ITALY
    JM: /^[Aa]\d{7}$/,
    // JAMAICA
    JP: /^[A-Z]{2}\d{7}$/,
    // JAPAN
    KR: /^[MS]\d{8}$/,
    // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
    KZ: /^[a-zA-Z]\d{7}$/,
    // KAZAKHSTAN
    LI: /^[a-zA-Z]\d{5}$/,
    // LIECHTENSTEIN
    LT: /^[A-Z0-9]{8}$/,
    // LITHUANIA
    LU: /^[A-Z0-9]{8}$/,
    // LUXEMBURG
    LV: /^[A-Z0-9]{2}\d{7}$/,
    // LATVIA
    LY: /^[A-Z0-9]{8}$/,
    // LIBYA
    MT: /^\d{7}$/,
    // MALTA
    MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
    // MOZAMBIQUE
    MY: /^[AHK]\d{8}$/,
    // MALAYSIA
    MX: /^\d{10,11}$/,
    // MEXICO
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    // NETHERLANDS
    NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
    // NEW ZEALAND
    PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
    // PHILIPPINES
    PK: /^[A-Z]{2}\d{7}$/,
    // PAKISTAN
    PL: /^[A-Z]{2}\d{7}$/,
    // POLAND
    PT: /^[A-Z]\d{6}$/,
    // PORTUGAL
    RO: /^\d{8,9}$/,
    // ROMANIA
    RU: /^\d{9}$/,
    // RUSSIAN FEDERATION
    SE: /^\d{8}$/,
    // SWEDEN
    SL: /^(P)[A-Z]\d{7}$/,
    // SLOVENIA
    SK: /^[0-9A-Z]\d{7}$/,
    // SLOVAKIA
    TH: /^[A-Z]{1,2}\d{6,7}$/,
    // THAILAND
    TR: /^[A-Z]\d{8}$/,
    // TURKEY
    UA: /^[A-Z]{2}\d{6}$/,
    // UKRAINE
    US: /^\d{9}$/ // UNITED STATES
};
/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */ function isPassportNumber(str, countryCode) {
    (0, _assertString.default)(str);
    /** Remove All Whitespaces, Convert to UPPERCASE */ var normalizedStr = str.replace(/\s/g, "").toUpperCase();
    return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"714539f615d17435":"knXEv"}],"jZmgE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPort;
var _isInt = _interopRequireDefault(require("ceb270b40401a418"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isPort(str) {
    return (0, _isInt.default)(str, {
        min: 0,
        max: 65535
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ceb270b40401a418":"9uawt"}],"9uawt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isInt;
var _assertString = _interopRequireDefault(require("8ebbd5ce24100927"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;
function isInt(str, options) {
    (0, _assertString.default)(str);
    options = options || {}; // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.
    var regex = options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt
    var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8ebbd5ce24100927":"knXEv"}],"5aoSa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLowercase;
var _assertString = _interopRequireDefault(require("1ee2c8d2c7e88eed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLowercase(str) {
    (0, _assertString.default)(str);
    return str === str.toLowerCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1ee2c8d2c7e88eed":"knXEv"}],"94iNU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUppercase;
var _assertString = _interopRequireDefault(require("f417d115d27f6ed3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isUppercase(str) {
    (0, _assertString.default)(str);
    return str === str.toUpperCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f417d115d27f6ed3":"knXEv"}],"d15wM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIMEI;
var _assertString = _interopRequireDefault(require("8bbb7aca98af1f13"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var imeiRegexWithoutHypens = /^[0-9]{15}$/;
var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
function isIMEI(str, options) {
    (0, _assertString.default)(str);
    options = options || {}; // default regex for checking imei is the one without hyphens
    var imeiRegex = imeiRegexWithoutHypens;
    if (options.allow_hyphens) imeiRegex = imeiRegexWithHypens;
    if (!imeiRegex.test(str)) return false;
    str = str.replace(/-/g, "");
    var sum = 0, mul = 2, l = 14;
    for(var i = 0; i < l; i++){
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) sum += tp % 10 + 1;
        else sum += tp;
        if (mul === 1) mul += 1;
        else mul -= 1;
    }
    var chk = (10 - sum % 10) % 10;
    if (chk !== parseInt(str.substring(14, 15), 10)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8bbb7aca98af1f13":"knXEv"}],"1q8Do":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAscii;
var _assertString = _interopRequireDefault(require("f8e3ff0e3e37b31b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */ function isAscii(str) {
    (0, _assertString.default)(str);
    return ascii.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f8e3ff0e3e37b31b":"knXEv"}],"dNVuS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;
var _assertString = _interopRequireDefault(require("4b21a4c150410eb7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;
function isFullWidth(str) {
    (0, _assertString.default)(str);
    return fullWidth.test(str);
}

},{"4b21a4c150410eb7":"knXEv"}],"eWx0B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;
var _assertString = _interopRequireDefault(require("37381c2b4f6926f4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;
function isHalfWidth(str) {
    (0, _assertString.default)(str);
    return halfWidth.test(str);
}

},{"37381c2b4f6926f4":"knXEv"}],"8yIcF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVariableWidth;
var _assertString = _interopRequireDefault(require("e68b882a4d50d00f"));
var _isFullWidth = require("486edb07b731fb47");
var _isHalfWidth = require("5e30555678e0f073");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isVariableWidth(str) {
    (0, _assertString.default)(str);
    return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e68b882a4d50d00f":"knXEv","486edb07b731fb47":"dNVuS","5e30555678e0f073":"eWx0B"}],"lO6Bd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMultibyte;
var _assertString = _interopRequireDefault(require("33484d2fae22c942"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */ function isMultibyte(str) {
    (0, _assertString.default)(str);
    return multibyte.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33484d2fae22c942":"knXEv"}],"4s4r2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSemVer;
var _assertString = _interopRequireDefault(require("33759b3f8439f352"));
var _multilineRegex = _interopRequireDefault(require("98d1c477d4f11dd9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */ var semanticVersioningRegex = (0, _multilineRegex.default)([
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)",
    "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))",
    "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"
], "i");
function isSemVer(str) {
    (0, _assertString.default)(str);
    return semanticVersioningRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33759b3f8439f352":"knXEv","98d1c477d4f11dd9":"9gSdk"}],"9gSdk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = multilineRegexp;
/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */ function multilineRegexp(parts, flags) {
    var regexpAsStringLiteral = parts.join("");
    return new RegExp(regexpAsStringLiteral, flags);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"7oGIZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSurrogatePair;
var _assertString = _interopRequireDefault(require("b613f192d52b05f1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function isSurrogatePair(str) {
    (0, _assertString.default)(str);
    return surrogatePair.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b613f192d52b05f1":"knXEv"}],"lAaqW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDecimal;
var _merge = _interopRequireDefault(require("ba000004315aa430"));
var _assertString = _interopRequireDefault(require("836c7d5280428cba"));
var _includes = _interopRequireDefault(require("438924f034eb775a"));
var _alpha = require("798092a5626c7220");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function decimalRegExp(options) {
    var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
    return regExp;
}
var default_decimal_options = {
    force_decimal: false,
    decimal_digits: "1,",
    locale: "en-US"
};
var blacklist = [
    "",
    "-",
    "+"
];
function isDecimal(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_decimal_options);
    if (options.locale in _alpha.decimal) return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
    throw new Error("Invalid locale '".concat(options.locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ba000004315aa430":"9Vv2s","836c7d5280428cba":"knXEv","438924f034eb775a":"6D4Mz","798092a5626c7220":"6aHYL"}],"6D4Mz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var includes = function includes(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
};
var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"1kg26":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexadecimal;
var _assertString = _interopRequireDefault(require("85ad369b649033ec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(str) {
    (0, _assertString.default)(str);
    return hexadecimal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"85ad369b649033ec":"knXEv"}],"hbKeI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isOctal;
var _assertString = _interopRequireDefault(require("f6469bb3e63d39a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var octal = /^(0o)?[0-7]+$/i;
function isOctal(str) {
    (0, _assertString.default)(str);
    return octal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f6469bb3e63d39a":"knXEv"}],"1xLGD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDivisibleBy;
var _assertString = _interopRequireDefault(require("9a6c24154d57117f"));
var _toFloat = _interopRequireDefault(require("d19aeb34bda3b837"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isDivisibleBy(str, num) {
    (0, _assertString.default)(str);
    return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9a6c24154d57117f":"knXEv","d19aeb34bda3b837":"20W34"}],"ffMol":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexColor;
var _assertString = _interopRequireDefault(require("f649663ed99a258c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
function isHexColor(str) {
    (0, _assertString.default)(str);
    return hexcolor.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f649663ed99a258c":"knXEv"}],"7JdMu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRgbColor;
var _assertString = _interopRequireDefault(require("15ec9a5279ab3c75"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
function isRgbColor(str) {
    var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    (0, _assertString.default)(str);
    if (!includePercentValues) return rgbColor.test(str) || rgbaColor.test(str);
    return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"15ec9a5279ab3c75":"knXEv"}],"kYRPC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHSL;
var _assertString = _interopRequireDefault(require("59f30491d05ba1cf"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
function isHSL(str) {
    (0, _assertString.default)(str); // Strip duplicate spaces before calling the validation regex (See  #1598 for more info)
    var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    if (strippedStr.indexOf(",") !== -1) return hslComma.test(strippedStr);
    return hslSpace.test(strippedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"59f30491d05ba1cf":"knXEv"}],"bAFxi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISRC;
var _assertString = _interopRequireDefault(require("b9b27d76af9c95dc"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
function isISRC(str) {
    (0, _assertString.default)(str);
    return isrc.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b9b27d76af9c95dc":"knXEv"}],"oY7PG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIBAN;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("dc8c49b753cc6388"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * List of country codes with
 * corresponding IBAN regular expression
 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */ var ibanRegexThroughCountryCode = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
};
/**
 * Check whether string has correct universal IBAN format
 * The IBAN consists of up to 34 alphanumeric characters, as follows:
 * Country Code using ISO 3166-1 alpha-2, two letters
 * check digits, two digits and
 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
 *
 * @param {string} str - string under validation
 * @return {boolean}
 */ function hasValidIbanFormat(str) {
    // Strip white spaces and hyphens
    var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
    var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
    return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
}
/**
   * Check whether string has valid IBAN Checksum
   * by performing basic mod-97 operation and
   * the remainder should equal 1
   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
   * -- Interpret the string as a decimal integer and
   * -- compute the remainder on division by 97 (mod 97)
   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
   *
   * @param {string} str
   * @return {boolean}
   */ function hasValidIbanChecksum(str) {
    var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase(); // Keep only digits and A-Z latin alphabetic
    var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
    var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
    });
    var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
    }, "");
    return remainder === 1;
}
function isIBAN(str) {
    (0, _assertString.default)(str);
    return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
}
var locales = Object.keys(ibanRegexThroughCountryCode);
exports.locales = locales;

},{"dc8c49b753cc6388":"knXEv"}],"i7vxR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBIC;
var _assertString = _interopRequireDefault(require("d2180d3c377d0b4a"));
var _isISO31661Alpha = require("6c0405a7c16e731c");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// https://en.wikipedia.org/wiki/ISO_9362
var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
function isBIC(str) {
    (0, _assertString.default)(str); // toUpperCase() should be removed when a new major version goes out that changes
    // the regex to [A-Z] (per the spec).
    var countryCode = str.slice(4, 6).toUpperCase();
    if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") return false;
    return isBICReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d2180d3c377d0b4a":"knXEv","6c0405a7c16e731c":"ej9is"}],"ej9is":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO31661Alpha2;
exports.CountryCodes = void 0;
var _assertString = _interopRequireDefault(require("e41d8cb7b90fd66a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = new Set([
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AO",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AW",
    "AX",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BL",
    "BM",
    "BN",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BT",
    "BV",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CC",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CK",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CW",
    "CX",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "EH",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FO",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GF",
    "GG",
    "GH",
    "GI",
    "GL",
    "GM",
    "GN",
    "GP",
    "GQ",
    "GR",
    "GS",
    "GT",
    "GU",
    "GW",
    "GY",
    "HK",
    "HM",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MF",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MQ",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NC",
    "NE",
    "NF",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NU",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PM",
    "PN",
    "PR",
    "PS",
    "PT",
    "PW",
    "PY",
    "QA",
    "RE",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SX",
    "SY",
    "SZ",
    "TC",
    "TD",
    "TF",
    "TG",
    "TH",
    "TJ",
    "TK",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "UM",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VG",
    "VI",
    "VN",
    "VU",
    "WF",
    "WS",
    "YE",
    "YT",
    "ZA",
    "ZM",
    "ZW"
]);
function isISO31661Alpha2(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
}
var CountryCodes = validISO31661Alpha2CountriesCodes;
exports.CountryCodes = CountryCodes;

},{"e41d8cb7b90fd66a":"knXEv"}],"g9kpJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMD5;
var _assertString = _interopRequireDefault(require("c755e3f2ef1c985a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var md5 = /^[a-f0-9]{32}$/;
function isMD5(str) {
    (0, _assertString.default)(str);
    return md5.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c755e3f2ef1c985a":"knXEv"}],"hAiyu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHash;
var _assertString = _interopRequireDefault(require("318b64cc266b5945"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lengths = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
};
function isHash(str, algorithm) {
    (0, _assertString.default)(str);
    var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
    return hash.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"318b64cc266b5945":"knXEv"}],"8PlVE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJWT;
var _assertString = _interopRequireDefault(require("d0b86a9a84ca2198"));
var _isBase = _interopRequireDefault(require("2746967ea24563e0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isJWT(str) {
    (0, _assertString.default)(str);
    var dotSplit = str.split(".");
    var len = dotSplit.length;
    if (len > 3 || len < 2) return false;
    return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
            urlSafe: true
        });
    }, true);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d0b86a9a84ca2198":"knXEv","2746967ea24563e0":"f54KM"}],"f54KM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase64;
var _assertString = _interopRequireDefault(require("8e44c374ff4c971d"));
var _merge = _interopRequireDefault(require("cfc93884c3e723dd"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var notBase64 = /[^A-Z0-9+\/=]/i;
var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
var defaultBase64Options = {
    urlSafe: false
};
function isBase64(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase64Options);
    var len = str.length;
    if (options.urlSafe) return urlSafeBase64.test(str);
    if (len % 4 !== 0 || notBase64.test(str)) return false;
    var firstPaddingChar = str.indexOf("=");
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8e44c374ff4c971d":"knXEv","cfc93884c3e723dd":"9Vv2s"}],"9ID8S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJSON;
var _assertString = _interopRequireDefault(require("9c0272646c6c578b"));
var _merge = _interopRequireDefault(require("ef7c216ff7a82269"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
var default_json_options = {
    allow_primitives: false
};
function isJSON(str, options) {
    (0, _assertString.default)(str);
    try {
        options = (0, _merge.default)(options, default_json_options);
        var primitives = [];
        if (options.allow_primitives) primitives = [
            null,
            false,
            true
        ];
        var obj = JSON.parse(str);
        return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
    } catch (e) {
    /* ignore */ }
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9c0272646c6c578b":"knXEv","ef7c216ff7a82269":"9Vv2s"}],"cKn4B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmpty;
var _assertString = _interopRequireDefault(require("f94a6139bb13a8ea"));
var _merge = _interopRequireDefault(require("184be28420881903"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_is_empty_options = {
    ignore_whitespace: false
};
function isEmpty(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f94a6139bb13a8ea":"knXEv","184be28420881903":"9Vv2s"}],"eDhBW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLength;
var _assertString = _interopRequireDefault(require("6b47bc2ed334a900"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-disable prefer-rest-params */ function isLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isLength(str, min [, max])
        min = arguments[1] || 0;
        max = arguments[2];
    }
    var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - presentationSequences.length - surrogatePairs.length;
    return len >= min && (typeof max === "undefined" || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"6b47bc2ed334a900":"knXEv"}],"iXttg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUUID;
var _assertString = _interopRequireDefault(require("973e2ef767c2afa9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
function isUUID(str, version) {
    (0, _assertString.default)(str);
    var pattern = uuid[![
        undefined,
        null
    ].includes(version) ? version : "all"];
    return !!pattern && pattern.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"973e2ef767c2afa9":"knXEv"}],"49XFY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMongoId;
var _assertString = _interopRequireDefault(require("d869e7f0c5cb701e"));
var _isHexadecimal = _interopRequireDefault(require("16f83f29c7928fec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isMongoId(str) {
    (0, _assertString.default)(str);
    return (0, _isHexadecimal.default)(str) && str.length === 24;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d869e7f0c5cb701e":"knXEv","16f83f29c7928fec":"1kg26"}],"c2Ea1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAfter;
var _toDate = _interopRequireDefault(require("e164ca231e30adf6"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAfter(date, options) {
    // For backwards compatibility:
    // isAfter(str [, date]), i.e. `options` could be used as argument for the legacy `date`
    var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
    var comparison = (0, _toDate.default)(comparisonDate);
    var original = (0, _toDate.default)(date);
    return !!(original && comparison && original > comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e164ca231e30adf6":"5GhHq"}],"1FZVW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBefore;
var _assertString = _interopRequireDefault(require("ee7468ef905317d2"));
var _toDate = _interopRequireDefault(require("a53ce262ac376887"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBefore(str) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
    (0, _assertString.default)(str);
    var comparison = (0, _toDate.default)(date);
    var original = (0, _toDate.default)(str);
    return !!(original && comparison && original < comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ee7468ef905317d2":"knXEv","a53ce262ac376887":"5GhHq"}],"flsZs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIn;
var _assertString = _interopRequireDefault(require("1e5f07e2cd279106"));
var _toString = _interopRequireDefault(require("26a576c3ed31db1f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function isIn(str, options) {
    (0, _assertString.default)(str);
    var i;
    if (Object.prototype.toString.call(options) === "[object Array]") {
        var array = [];
        for(i in options)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (({}).hasOwnProperty.call(options, i)) array[i] = (0, _toString.default)(options[i]);
        return array.indexOf(str) >= 0;
    } else if (_typeof(options) === "object") return options.hasOwnProperty(str);
    else if (options && typeof options.indexOf === "function") return options.indexOf(str) >= 0;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1e5f07e2cd279106":"knXEv","26a576c3ed31db1f":"38yrS"}],"eZK5f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLuhnNumber;
var _assertString = _interopRequireDefault(require("939e6ef1ca2e993c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLuhnNumber(str) {
    (0, _assertString.default)(str);
    var sanitized = str.replace(/[- ]+/g, "");
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for(var i = sanitized.length - 1; i >= 0; i--){
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) sum += tmpNum % 10 + 1;
            else sum += tmpNum;
        } else sum += tmpNum;
        shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"939e6ef1ca2e993c":"knXEv"}],"iPApi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCreditCard;
var _assertString = _interopRequireDefault(require("104f85f43b1730c2"));
var _isLuhnNumber = _interopRequireDefault(require("6743c1d01cccf7b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cards = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
};
/* eslint-disable max-len */ var allCards = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
/* eslint-enable max-len */ function isCreditCard(card) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(card);
    var provider = options.provider;
    var sanitized = card.replace(/[- ]+/g, "");
    if (provider && provider.toLowerCase() in cards) {
        // specific provider in the list
        if (!cards[provider.toLowerCase()].test(sanitized)) return false;
    } else if (provider && !(provider.toLowerCase() in cards)) /* specific provider not in the list */ throw new Error("".concat(provider, " is not a valid credit card provider."));
    else if (!allCards.test(sanitized)) // no specific provider
    return false;
    return (0, _isLuhnNumber.default)(card);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"104f85f43b1730c2":"knXEv","6743c1d01cccf7b5":"eZK5f"}],"b6SVi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIdentityCard;
var _assertString = _interopRequireDefault(require("82ebad56c1e929ba"));
var _isInt = _interopRequireDefault(require("a1cec04ff91509b3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    PL: function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
            allow_leading_zeroes: true
        })) {
            var digits = str.split("").slice(0, -1);
            var sum = digits.reduce(function(acc, digit, index) {
                return acc + Number(digit) * weightOfDigits[index + 1];
            }, 0);
            var modulo = sum % 10;
            var lastDigit = Number(str.charAt(str.length - 1));
            if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) return true;
        }
        return false;
    },
    ES: function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
        };
        var controlDigits = [
            "T",
            "R",
            "W",
            "A",
            "G",
            "M",
            "Y",
            "F",
            "P",
            "D",
            "X",
            "B",
            "N",
            "J",
            "Z",
            "S",
            "Q",
            "V",
            "H",
            "L",
            "C",
            "K",
            "E"
        ]; // sanitize user input
        var sanitized = str.trim().toUpperCase(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
         // validate the control digit
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
            return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
    },
    FI: function FI(str) {
        // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
        (0, _assertString.default)(str);
        if (str.length !== 11) return false;
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) return false;
        var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
    },
    IN: function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table
        var d = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                2,
                3,
                4,
                0,
                6,
                7,
                8,
                9,
                5
            ],
            [
                2,
                3,
                4,
                0,
                1,
                7,
                8,
                9,
                5,
                6
            ],
            [
                3,
                4,
                0,
                1,
                2,
                8,
                9,
                5,
                6,
                7
            ],
            [
                4,
                0,
                1,
                2,
                3,
                9,
                5,
                6,
                7,
                8
            ],
            [
                5,
                9,
                8,
                7,
                6,
                0,
                4,
                3,
                2,
                1
            ],
            [
                6,
                5,
                9,
                8,
                7,
                1,
                0,
                4,
                3,
                2
            ],
            [
                7,
                6,
                5,
                9,
                8,
                2,
                1,
                0,
                4,
                3
            ],
            [
                8,
                7,
                6,
                5,
                9,
                3,
                2,
                1,
                0,
                4
            ],
            [
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0
            ]
        ]; // permutation table
        var p = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                5,
                7,
                6,
                2,
                8,
                3,
                0,
                9,
                4
            ],
            [
                5,
                8,
                0,
                3,
                7,
                9,
                6,
                1,
                4,
                2
            ],
            [
                8,
                9,
                1,
                6,
                0,
                4,
                3,
                5,
                2,
                7
            ],
            [
                9,
                4,
                5,
                3,
                1,
                2,
                6,
                8,
                7,
                0
            ],
            [
                4,
                2,
                8,
                6,
                5,
                7,
                3,
                9,
                0,
                1
            ],
            [
                2,
                7,
                9,
                3,
                8,
                0,
                6,
                4,
                1,
                5
            ],
            [
                7,
                0,
                4,
                6,
                9,
                1,
                3,
                2,
                5,
                8
            ]
        ]; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var c = 0;
        var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
        invertedArray.forEach(function(val, i) {
            c = d[c][p[i % 8][val]];
        });
        return c === 0;
    },
    IR: function IR(str) {
        if (!str.match(/^\d{10}$/)) return false;
        str = "0000".concat(str).slice(str.length - 6);
        if (parseInt(str.slice(3, 9), 10) === 0) return false;
        var lastNumber = parseInt(str.slice(9, 10), 10);
        var sum = 0;
        for(var i = 0; i < 9; i++)sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
    },
    IT: function IT(str) {
        if (str.length !== 9) return false;
        if (str === "CA00000AA") return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana
        return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
    },
    NO: function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized))) return false;
        if (sanitized.length !== 11) return false;
        if (sanitized === "00000000000") return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
        var f = sanitized.split("").map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10]) return false;
        return true;
    },
    TH: function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/)) return false; // validate check digit
        var sum = 0;
        for(var i = 0; i < 12; i++)sum += parseInt(str[i], 10) * (13 - i);
        return str[12] === ((11 - sum % 11) % 10).toString();
    },
    LK: function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str)) return true;
        else if (str.length === 12 && new_nic.test(str)) return true;
        return false;
    },
    "he-IL": function heIL(str) {
        var DNI = /^\d{9}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var id = sanitized;
        var sum = 0, incNum;
        for(var i = 0; i < id.length; i++){
            incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2
            sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
        }
        return sum % 10 === 0;
    },
    "ar-LY": function arLY(str) {
        // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
        var NIN = /^(1|2)\d{11}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!NIN.test(sanitized)) return false;
        return true;
    },
    "ar-TN": function arTN(str) {
        var DNI = /^\d{8}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        return true;
    },
    "zh-CN": function zhCN(str) {
        var provincesAndCities = [
            "11",
            "12",
            "13",
            "14",
            "15",
            "21",
            "22",
            "23",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "50",
            "51",
            "52",
            "53",
            "54",
            "61",
            "62",
            "63",
            "64",
            "65",
            "71",
            "81",
            "82",
            "91" // 国外
        ];
        var powers = [
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2",
            "1",
            "6",
            "3",
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2"
        ];
        var parityBit = [
            "1",
            "0",
            "X",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2"
        ];
        var checkAddressCode = function checkAddressCode(addressCode) {
            return provincesAndCities.includes(addressCode);
        };
        var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > new Date()) return false; // eslint-disable-next-line max-len
            else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) return true;
            return false;
        };
        var getParityBit = function getParityBit(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;
            for(var i = 0; i < 17; i++)power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
            var mod = power % 11;
            return parityBit[mod];
        };
        var checkParityBit = function checkParityBit(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        };
        var check15IdCardNo = function check15IdCardNo(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return true;
        };
        var check18IdCardNo = function check18IdCardNo(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return checkParityBit(idCardNo);
        };
        var checkIdCardNo = function checkIdCardNo(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;
            if (idCardNo.length === 15) return check15IdCardNo(idCardNo);
            return check18IdCardNo(idCardNo);
        };
        return checkIdCardNo(str);
    },
    "zh-HK": function zhHK(str) {
        // sanitize user input
        str = str.trim(); // HKID number starts with 1 or 2 letters, followed by 6 digits,
        // then a checksum contained in square / round brackets or nothing
        var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
        var regexIsDigit = /^[0-9]$/; // convert the user input to all uppercase and apply regex
        str = str.toUpperCase();
        if (!regexHKID.test(str)) return false;
        str = str.replace(/\[|\]|\(|\)/g, "");
        if (str.length === 8) str = "3".concat(str);
        var checkSumVal = 0;
        for(var i = 0; i <= 7; i++){
            var convertedChar = void 0;
            if (!regexIsDigit.test(str[i])) convertedChar = (str[i].charCodeAt(0) - 55) % 11;
            else convertedChar = str[i];
            checkSumVal += convertedChar * (9 - i);
        }
        checkSumVal %= 11;
        var checkSumConverted;
        if (checkSumVal === 0) checkSumConverted = "0";
        else if (checkSumVal === 1) checkSumConverted = "A";
        else checkSumConverted = String(11 - checkSumVal);
        if (checkSumConverted === str[str.length - 1]) return true;
        return false;
    },
    "zh-TW": function zhTW(str) {
        var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
        return Array.from(sanitized).reduce(function(sum, number, index) {
            if (index === 0) {
                var code = ALPHABET_CODES[number];
                return code % 10 * 9 + Math.floor(code / 10);
            }
            if (index === 9) return (10 - sum % 10 - Number(number)) % 10 === 0;
            return sum + Number(number) * (9 - index);
        }, 0);
    }
};
function isIdentityCard(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === "any") {
        for(var key in validators)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (validators.hasOwnProperty(key)) {
            var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"82ebad56c1e929ba":"knXEv","a1cec04ff91509b3":"9uawt"}],"1sZ7y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEAN;
var _assertString = _interopRequireDefault(require("5e5bfe9eefacdfc1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * Also EAN/UCC-14 is used for Grouping of individual
 * trade items above unit level(Intermediate, Carton or Pallet).
 * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 * Reference: https://www.gtin.info/
 */ /**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
 * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
 * with exact numberic matching of 8 or 13 or 14 digits [0-9]
 */ var LENGTH_EAN_8 = 8;
var LENGTH_EAN_14 = 14;
var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
/**
 * Get position weight given:
 * EAN length and digit index/position
 *
 * @param {number} length
 * @param {number} index
 * @return {number}
 */ function getPositionWeightThroughLengthAndIndex(length, index) {
    if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) return index % 2 === 0 ? 3 : 1;
    return index % 2 === 0 ? 1 : 3;
}
/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param {string} ean
 * @return {number}
 */ function calculateCheckDigit(ean) {
    var checksum = ean.slice(0, -1).split("").map(function(char, index) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
    }).reduce(function(acc, partialSum) {
        return acc + partialSum;
    }, 0);
    var remainder = 10 - checksum % 10;
    return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN:
 * Matches EAN-8/EAN-13/EAN-14 regex
 * Has valid check digit.
 *
 * @param {string} str
 * @return {boolean}
 */ function isEAN(str) {
    (0, _assertString.default)(str);
    var actualCheckDigit = Number(str.slice(-1));
    return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e5bfe9eefacdfc1":"knXEv"}],"i0AMi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISIN;
var _assertString = _interopRequireDefault(require("f7031d3698358d1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/; // this link details how the check digit is calculated:
// https://www.isin.org/isin-format/. it is a little bit
// odd in that it works with digits, not numbers. in order
// to make only one pass through the ISIN characters, the
// each alpha character is handled as 2 characters within
// the loop.
function isISIN(str) {
    (0, _assertString.default)(str);
    if (!isin.test(str)) return false;
    var double = true;
    var sum = 0; // convert values
    for(var i = str.length - 2; i >= 0; i--)if (str[i] >= "A" && str[i] <= "Z") {
        var value = str[i].charCodeAt(0) - 55;
        var lo = value % 10;
        var hi = Math.trunc(value / 10); // letters have two digits, so handle the low order
        // and high order digits separately.
        for(var _i = 0, _arr = [
            lo,
            hi
        ]; _i < _arr.length; _i++){
            var digit = _arr[_i];
            if (double) {
                if (digit >= 5) sum += 1 + (digit - 5) * 2;
                else sum += digit * 2;
            } else sum += digit;
            double = !double;
        }
    } else {
        var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
        if (double) {
            if (_digit >= 5) sum += 1 + (_digit - 5) * 2;
            else sum += _digit * 2;
        } else sum += _digit;
        double = !double;
    }
    var check = Math.trunc((sum + 9) / 10) * 10 - sum;
    return +str[str.length - 1] === check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f7031d3698358d1":"knXEv"}],"7D0bq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISBN;
var _assertString = _interopRequireDefault(require("1bb174860ea3a502"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
var possibleIsbn13 = /^(?:[0-9]{13})$/;
var factor = [
    1,
    3
];
function isISBN(isbn, options) {
    (0, _assertString.default)(isbn); // For backwards compatibility:
    // isISBN(str [, version]), i.e. `options` could be used as argument for the legacy `version`
    var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
    if (!(options !== null && options !== void 0 && options.version || options)) return isISBN(isbn, {
        version: 10
    }) || isISBN(isbn, {
        version: 13
    });
    var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
    var checksum = 0;
    if (version === "10") {
        if (!possibleIsbn10.test(sanitizedIsbn)) return false;
        for(var i = 0; i < version - 1; i++)checksum += (i + 1) * sanitizedIsbn.charAt(i);
        if (sanitizedIsbn.charAt(9) === "X") checksum += 100;
        else checksum += 10 * sanitizedIsbn.charAt(9);
        if (checksum % 11 === 0) return true;
    } else if (version === "13") {
        if (!possibleIsbn13.test(sanitizedIsbn)) return false;
        for(var _i = 0; _i < 12; _i++)checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
        if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) return true;
    }
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1bb174860ea3a502":"knXEv"}],"6FXgm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISSN;
var _assertString = _interopRequireDefault(require("fef463073848d898"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var issn = "^\\d{4}-?\\d{3}[\\dX]$";
function isISSN(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
    if (!testIssn.test(str)) return false;
    var digits = str.replace("-", "").toUpperCase();
    var checksum = 0;
    for(var i = 0; i < digits.length; i++){
        var digit = digits[i];
        checksum += (digit === "X" ? 10 : +digit) * (8 - i);
    }
    return checksum % 11 === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fef463073848d898":"knXEv"}],"9mMh1":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTaxID;
var _assertString = _interopRequireDefault(require("79f64cb44c2530a"));
var algorithms = _interopRequireWildcard(require("c14e0a9edffe0e65"));
var _isDate = _interopRequireDefault(require("5ed6659e234b0708"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * TIN Validation
 * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
 *
 * EU-UK:
 * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
 *
 * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
 *
 * US:
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
 *  is used to identify a business entity.
 *
 * NOTES:
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 *
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
 * for more information.
 */ // Locale functions
/*
 * bg-BG validation function
 * (Edinen graždanski nomer (EGN/ЕГН), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last) digit
 */ function bgBgCheck(tin) {
    // Extract full year, normalize month and check birth date validity
    var century_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
    } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
    } else century_year = "19".concat(century_year);
    if (month < 10) month = "0".concat(month);
    var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    }); // Calculate checksum by multiplying digits with fixed values
    var multip_lookup = [
        2,
        4,
        8,
        5,
        10,
        9,
        7,
        3,
        6
    ];
    var checksum = 0;
    for(var i = 0; i < multip_lookup.length; i++)checksum += digits[i] * multip_lookup[i];
    checksum = checksum % 11 === 10 ? 0 : checksum % 11;
    return checksum === digits[9];
}
/**
 * Check if an input is a valid Canadian SIN (Social Insurance Number)
 *
 * The Social Insurance Number (SIN) is a 9 digit number that
 * you need to work in Canada or to have access to government programs and benefits.
 *
 * https://en.wikipedia.org/wiki/Social_Insurance_Number
 * https://www.canada.ca/en/employment-social-development/services/sin.html
 * https://www.codercrunch.com/challenge/819302488/sin-validator
 *
 * @param {string} input
 * @return {boolean}
 */ function isCanadianSIN(input) {
    var digitsArray = input.split("");
    var even = digitsArray.filter(function(_, idx) {
        return idx % 2;
    }).map(function(i) {
        return Number(i) * 2;
    }).join("").split("");
    var total = digitsArray.filter(function(_, idx) {
        return !(idx % 2);
    }).concat(even).map(function(i) {
        return Number(i);
    }).reduce(function(acc, cur) {
        return acc + cur;
    });
    return total % 10 === 0;
}
/*
 * cs-CZ validation function
 * (Rodné číslo (RČ), persons only)
 * Checks if birth date (first six digits) is valid and divisibility by 11
 * Material not in DG TAXUD document sourced from:
 * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
 * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
 */ function csCzCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract full year from TIN length
    var full_year = parseInt(tin.slice(0, 2), 10);
    if (tin.length === 10) {
        if (full_year < 54) full_year = "20".concat(full_year);
        else full_year = "19".concat(full_year);
    } else {
        if (tin.slice(6) === "000") return false;
         // Three-zero serial not assigned before 1954
        if (full_year < 54) full_year = "19".concat(full_year);
        else return false; // No 18XX years seen in any of the resources
    } // Add missing zero if needed
    if (full_year.length === 3) full_year = [
        full_year.slice(0, 2),
        "0",
        full_year.slice(2)
    ].join("");
     // Extract month from TIN and normalize
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 50) month -= 50;
    if (month > 20) {
        // Month-plus-twenty was only introduced in 2004
        if (parseInt(full_year, 10) < 2004) return false;
        month -= 20;
    }
    if (month < 10) month = "0".concat(month);
     // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Verify divisibility by 11
    if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
            // Some numbers up to and including 1985 are still valid if
            // check (last) digit equals 0 and modulo of first 9 digits equals 10
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
                if (parseInt(tin.slice(9), 10) !== 0) return false;
            } else return false;
        }
    }
    return true;
}
/*
 * de-AT validation function
 * (Abgabenkontonummer, persons/entities)
 * Verify TIN validity by calling luhnCheck()
 */ function deAtCheck(tin) {
    return algorithms.luhnCheck(tin);
}
/*
 * de-DE validation function
 * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
 * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
 * Partial implementation of spec (same result with both algorithms always)
 */ function deDeCheck(tin) {
    // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    }); // Fill array with strings of number positions
    var occurences = [];
    for(var i = 0; i < digits.length - 1; i++){
        occurences.push("");
        for(var j = 0; j < digits.length - 1; j++)if (digits[i] === digits[j]) occurences[i] += j;
    } // Remove digits with one occurence and test for only one duplicate/triplicate
    occurences = occurences.filter(function(a) {
        return a.length > 1;
    });
    if (occurences.length !== 2 && occurences.length !== 3) return false;
     // In case of triplicate value only two digits are allowed next to each other
    if (occurences[0].length === 3) {
        var trip_locations = occurences[0].split("").map(function(a) {
            return parseInt(a, 10);
        });
        var recurrent = 0; // Amount of neighbour occurences
        for(var _i = 0; _i < trip_locations.length - 1; _i++)if (trip_locations[_i] + 1 === trip_locations[_i + 1]) recurrent += 1;
        if (recurrent === 2) return false;
    }
    return algorithms.iso7064Check(tin);
}
/*
 * dk-DK validation function
 * (CPR-nummer (personnummer), persons only)
 * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
 * and calculates check (last) digit
 */ function dkDkCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract year, check if valid for given century digit and add century
    var year = parseInt(tin.slice(4, 6), 10);
    var century_digit = tin.slice(6, 7);
    switch(century_digit){
        case "0":
        case "1":
        case "2":
        case "3":
            year = "19".concat(year);
            break;
        case "4":
        case "9":
            if (year < 37) year = "20".concat(year);
            else year = "19".concat(year);
            break;
        default:
            if (year < 37) year = "20".concat(year);
            else if (year > 58) year = "18".concat(year);
            else return false;
            break;
    } // Add missing zero if needed
    if (year.length === 3) year = [
        year.slice(0, 2),
        "0",
        year.slice(2)
    ].join("");
     // Check date validity
    var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 4; // Multiply by weight and add to checksum
    for(var i = 0; i < 9; i++){
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) weight = 7;
    }
    checksum %= 11;
    if (checksum === 1) return false;
    return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
}
/*
 * el-CY validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
 * Verify TIN validity by calculating ASCII value of check (last) character
 */ function elCyCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.slice(0, 8).split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0; // add digits in even places
    for(var i = 1; i < digits.length; i += 2)checksum += digits[i];
     // add digits in odd places
    for(var _i2 = 0; _i2 < digits.length; _i2 += 2)if (digits[_i2] < 2) checksum += 1 - digits[_i2];
    else {
        checksum += 2 * (digits[_i2] - 2) + 5;
        if (digits[_i2] > 4) checksum += 2;
    }
    return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
}
/*
 * el-GR validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
 * Verify TIN validity by calculating check (last) digit
 * Algorithm not in DG TAXUD document- sourced from:
 * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
 */ function elGrCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    for(var i = 0; i < 8; i++)checksum += digits[i] * Math.pow(2, 8 - i);
    return checksum % 11 % 10 === digits[8];
}
/*
 * en-GB validation function (should go here if needed)
 * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
 * persons/entities respectively)
 */ /*
 * en-IE validation function
 * (Personal Public Service Number (PPS No), persons only)
 * Verify TIN validity by calculating check (second to last) character
 */ function enIeCheck(tin) {
    var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8);
    if (tin.length === 9 && tin[8] !== "W") checksum += (tin[8].charCodeAt(0) - 64) * 9;
    checksum %= 23;
    if (checksum === 0) return tin[7].toUpperCase() === "W";
    return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
} // Valid US IRS campus prefixes
var enUsCampusPrefix = {
    andover: [
        "10",
        "12"
    ],
    atlanta: [
        "60",
        "67"
    ],
    austin: [
        "50",
        "53"
    ],
    brookhaven: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "11",
        "13",
        "14",
        "16",
        "21",
        "22",
        "23",
        "25",
        "34",
        "51",
        "52",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "65"
    ],
    cincinnati: [
        "30",
        "32",
        "35",
        "36",
        "37",
        "38",
        "61"
    ],
    fresno: [
        "15",
        "24"
    ],
    internet: [
        "20",
        "26",
        "27",
        "45",
        "46",
        "47"
    ],
    kansas: [
        "40",
        "44"
    ],
    memphis: [
        "94",
        "95"
    ],
    ogden: [
        "80",
        "90"
    ],
    philadelphia: [
        "33",
        "39",
        "41",
        "42",
        "43",
        "46",
        "48",
        "62",
        "63",
        "64",
        "66",
        "68",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "91",
        "92",
        "93",
        "98",
        "99"
    ],
    sba: [
        "31"
    ]
}; // Return an array of all US IRS campus prefixes
function enUsGetPrefixes() {
    var prefixes = [];
    for(var location in enUsCampusPrefix)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
    // istanbul ignore else
    if (enUsCampusPrefix.hasOwnProperty(location)) prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
    return prefixes;
}
/*
 * en-US validation function
 * Verify that the TIN starts with a valid IRS campus prefix
 */ function enUsCheck(tin) {
    return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
}
/*
 * es-ES validation function
 * (Documento Nacional de Identidad (DNI)
 * or Número de Identificación de Extranjero (NIE), persons only)
 * Verify TIN validity by calculating check (last) character
 */ function esEsCheck(tin) {
    // Split characters into an array for further processing
    var chars = tin.toUpperCase().split(""); // Replace initial letter if needed
    if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
        var lead_replace = 0;
        switch(chars[0]){
            case "Y":
                lead_replace = 1;
                break;
            case "Z":
                lead_replace = 2;
                break;
            default:
        }
        chars.splice(0, 1, lead_replace); // Fill with zeros if smaller than proper
    } else while(chars.length < 9)chars.unshift(0);
     // Calculate checksum and check according to lookup
    var lookup = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E"
    ];
    chars = chars.join("");
    var checksum = parseInt(chars.slice(0, 8), 10) % 23;
    return chars[8] === lookup[checksum];
}
/*
 * et-EE validation function
 * (Isikukood (IK), persons only)
 * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
 * Material not in DG TAXUD document sourced from:
 * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
 */ function etEeCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(1, 3);
    var century_digit = tin.slice(0, 1);
    switch(century_digit){
        case "1":
        case "2":
            full_year = "18".concat(full_year);
            break;
        case "3":
        case "4":
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    } // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 1; // Multiply by weight and add to checksum
    for(var i = 0; i < 10; i++){
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) weight = 1;
    } // Do again if modulo 11 of checksum is 10
    if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for(var _i3 = 0; _i3 < 10; _i3++){
            checksum += digits[_i3] * weight;
            weight += 1;
            if (weight === 10) weight = 1;
        }
        if (checksum % 11 === 10) return digits[10] === 0;
    }
    return checksum % 11 === digits[10];
}
/*
 * fi-FI validation function
 * (Henkilötunnus (HETU), persons only)
 * Checks if birth date (first six digits plus century symbol) is valid
 * and calculates check (last) digit
 */ function fiFiCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(4, 6);
    var century_symbol = tin.slice(6, 7);
    switch(century_symbol){
        case "+":
            full_year = "18".concat(full_year);
            break;
        case "-":
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    } // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Calculate check character
    var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
    if (checksum < 10) return checksum === parseInt(tin.slice(10), 10);
    checksum -= 10;
    var letters_lookup = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y"
    ];
    return letters_lookup[checksum] === tin.slice(10);
}
/*
 * fr/nl-BE validation function
 * (Numéro national (N.N.), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last two) digits
 */ function frBeCheck(tin) {
    // Zero month/day value is acceptable
    if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
        // Extract date from first six digits of TIN
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
    }
    var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
    var checkdigits = parseInt(tin.slice(9, 11), 10);
    if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) return false;
    }
    return true;
}
/*
 * fr-FR validation function
 * (Numéro fiscal de référence (numéro SPI), persons only)
 * Verify TIN validity by calculating check (last three) digits
 */ function frFrCheck(tin) {
    tin = tin.replace(/\s/g, "");
    var checksum = parseInt(tin.slice(0, 10), 10) % 511;
    var checkdigits = parseInt(tin.slice(10, 13), 10);
    return checksum === checkdigits;
}
/*
 * fr/lb-LU validation function
 * (numéro d’identification personnelle, persons only)
 * Verify birth date validity and run Luhn and Verhoeff checks
 */ function frLuCheck(tin) {
    // Extract date and check validity
    var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Run Luhn check
    if (!algorithms.luhnCheck(tin.slice(0, 12))) return false;
     // Remove Luhn check digit and run Verhoeff check
    return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
}
/*
 * hr-HR validation function
 * (Osobni identifikacijski broj (OIB), persons/entities)
 * Verify TIN validity by calling iso7064Check(digits)
 */ function hrHrCheck(tin) {
    return algorithms.iso7064Check(tin);
}
/*
 * hu-HU validation function
 * (Adóazonosító jel, persons only)
 * Verify TIN validity by calculating check (last) digit
 */ function huHuCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 8;
    for(var i = 1; i < 9; i++)checksum += digits[i] * (i + 1);
    return checksum % 11 === digits[9];
}
/*
 * lt-LT validation function (should go here if needed)
 * (Asmens kodas, persons/entities respectively)
 * Current validation check is alias of etEeCheck- same format applies
 */ /*
 * it-IT first/last name validity check
 * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
 * Due to lack of clarity between resources ("Are only Italian consonants used?
 * What happens if a person has X in their name?" etc.) only two test conditions
 * have been implemented:
 * Vowels may only be followed by other vowels or an X character
 * and X characters after vowels may only be followed by other X characters.
 */ function itItNameCheck(name) {
    // true at the first occurence of a vowel
    var vowelflag = false; // true at the first occurence of an X AFTER vowel
    // (to properly handle last names with X as consonant)
    var xflag = false;
    for(var i = 0; i < 3; i++){
        if (!vowelflag && /[AEIOU]/.test(name[i])) vowelflag = true;
        else if (!xflag && vowelflag && name[i] === "X") xflag = true;
        else if (i > 0) {
            if (vowelflag && !xflag) {
                if (!/[AEIOU]/.test(name[i])) return false;
            }
            if (xflag) {
                if (!/X/.test(name[i])) return false;
            }
        }
    }
    return true;
}
/*
 * it-IT validation function
 * (Codice fiscale (TIN-IT), persons only)
 * Verify name, birth date and codice catastale validity
 * and calculate check character.
 * Material not in DG-TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
 */ function itItCheck(tin) {
    // Capitalize and split characters into an array for further processing
    var chars = tin.toUpperCase().split(""); // Check first and last name validity calling itItNameCheck()
    if (!itItNameCheck(chars.slice(0, 3))) return false;
    if (!itItNameCheck(chars.slice(3, 6))) return false;
     // Convert letters in number spaces back to numbers if any
    var number_locations = [
        6,
        7,
        9,
        10,
        12,
        13,
        14
    ];
    var number_replace = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
    };
    for(var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++){
        var i = _number_locations[_i4];
        if (chars[i] in number_replace) chars.splice(i, 1, number_replace[chars[i]]);
    } // Extract month and day, and check date validity
    var month_replace = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
    };
    var month = month_replace[chars[8]];
    var day = parseInt(chars[9] + chars[10], 10);
    if (day > 40) day -= 40;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
    if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
     // Calculate check character by adding up even and odd characters as numbers
    var checksum = 0;
    for(var _i5 = 1; _i5 < chars.length - 1; _i5 += 2){
        var char_to_int = parseInt(chars[_i5], 10);
        if (isNaN(char_to_int)) char_to_int = chars[_i5].charCodeAt(0) - 65;
        checksum += char_to_int;
    }
    var odd_convert = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
    };
    for(var _i6 = 0; _i6 < chars.length - 1; _i6 += 2){
        var _char_to_int = 0;
        if (chars[_i6] in odd_convert) _char_to_int = odd_convert[chars[_i6]];
        else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;
            if (multiplier > 4) _char_to_int += 2;
        }
        checksum += _char_to_int;
    }
    if (String.fromCharCode(65 + checksum % 26) !== chars[15]) return false;
    return true;
}
/*
 * lv-LV validation function
 * (Personas kods (PK), persons only)
 * Check validity of birth date and calculate check (last) digit
 * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
 * Material not in DG TAXUD document sourced from:
 * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
 */ function lvLvCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract date from TIN
    var day = tin.slice(0, 2);
    if (day !== "32") {
        // No date/checksum check if new format
        var month = tin.slice(2, 4);
        if (month !== "00") {
            // No date check if unknown month
            var full_year = tin.slice(4, 6);
            switch(tin[6]){
                case "0":
                    full_year = "18".concat(full_year);
                    break;
                case "1":
                    full_year = "19".concat(full_year);
                    break;
                default:
                    full_year = "20".concat(full_year);
                    break;
            } // Check date validity
            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
            if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
        } // Calculate check digit
        var checksum = 1101;
        var multip_lookup = [
            1,
            6,
            3,
            7,
            9,
            10,
            5,
            8,
            4,
            2
        ];
        for(var i = 0; i < tin.length - 1; i++)checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        return parseInt(tin[10], 10) === checksum % 11;
    }
    return true;
}
/*
 * mt-MT validation function
 * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
 * Verify Identity Card Number structure (no other tests found)
 */ function mtMtCheck(tin) {
    if (tin.length !== 9) {
        // No tests for UTR
        var chars = tin.toUpperCase().split(""); // Fill with zeros if smaller than proper
        while(chars.length < 8)chars.unshift(0);
         // Validate format according to last character
        switch(tin[7]){
            case "A":
            case "P":
                if (parseInt(chars[6], 10) === 0) return false;
                break;
            default:
                var first_part = parseInt(chars.join("").slice(0, 5), 10);
                if (first_part > 32000) return false;
                var second_part = parseInt(chars.join("").slice(5, 7), 10);
                if (first_part === second_part) return false;
        }
    }
    return true;
}
/*
 * nl-NL validation function
 * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
 * persons/entities respectively)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function nlNlCheck(tin) {
    return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11 === parseInt(tin[8], 10);
}
/*
 * pl-PL validation function
 * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
 * or Numer identyfikacji podatkowej (NIP), persons/entities)
 * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
 */ function plPlCheck(tin) {
    // NIP
    if (tin.length === 10) {
        // Calculate last digit by multiplying with lookup
        var lookup = [
            6,
            5,
            7,
            2,
            3,
            4,
            5,
            6,
            7
        ];
        var _checksum = 0;
        for(var i = 0; i < lookup.length; i++)_checksum += parseInt(tin[i], 10) * lookup[i];
        _checksum %= 11;
        if (_checksum === 10) return false;
        return _checksum === parseInt(tin[9], 10);
    } // PESEL
    // Extract full year using month
    var full_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
    } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
    } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
    } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
    } else full_year = "19".concat(full_year);
     // Add leading zero to month if needed
    if (month < 10) month = "0".concat(month);
     // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Calculate last digit by mulitplying with odd one-digit numbers except 5
    var checksum = 0;
    var multiplier = 1;
    for(var _i7 = 0; _i7 < tin.length - 1; _i7++){
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) multiplier = 1;
        else if (multiplier === 5) multiplier += 2;
    }
    checksum = 10 - checksum % 10;
    return checksum === parseInt(tin[10], 10);
}
/*
* pt-BR validation function
* (Cadastro de Pessoas Físicas (CPF, persons)
* Cadastro Nacional de Pessoas Jurídicas (CNPJ, entities)
* Both inputs will be validated
*/ function ptBrCheck(tin) {
    if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000") return false;
        for(var i = 1; i <= 9; i++)_sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
        _sum = 0;
        for(var _i8 = 1; _i8 <= 10; _i8++)_sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
        return true;
    }
    if (tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999") return false;
    var length = tin.length - 2;
    var identifiers = tin.substring(0, length);
    var verificators = tin.substring(length);
    var sum = 0;
    var pos = length - 7;
    for(var _i9 = length; _i9 >= 1; _i9--){
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(0), 10)) return false;
    length += 1;
    identifiers = tin.substring(0, length);
    sum = 0;
    pos = length - 7;
    for(var _i10 = length; _i10 >= 1; _i10--){
        sum += identifiers.charAt(length - _i10) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(1), 10)) return false;
    return true;
}
/*
 * pt-PT validation function
 * (Número de identificação fiscal (NIF), persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function ptPtCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
}
/*
 * ro-RO validation function
 * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
 * persons only)
 * Verify CNP validity by calculating check (last) digit (test not found for CIF)
 * Material not in DG TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
 */ function roRoCheck(tin) {
    if (tin.slice(0, 4) !== "9000") {
        // No test found for this format
        // Extract full year using century digit if possible
        var full_year = tin.slice(1, 3);
        switch(tin[0]){
            case "1":
            case "2":
                full_year = "19".concat(full_year);
                break;
            case "3":
            case "4":
                full_year = "18".concat(full_year);
                break;
            case "5":
            case "6":
                full_year = "20".concat(full_year);
                break;
            default:
        } // Check date validity
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
            if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
         // Calculate check digit
        var digits = tin.split("").map(function(a) {
            return parseInt(a, 10);
        });
        var multipliers = [
            2,
            7,
            9,
            1,
            4,
            6,
            3,
            5,
            8,
            2,
            7,
            9
        ];
        var checksum = 0;
        for(var i = 0; i < multipliers.length; i++)checksum += digits[i] * multipliers[i];
        if (checksum % 11 === 10) return digits[12] === 1;
        return digits[12] === checksum % 11;
    }
    return true;
}
/*
 * sk-SK validation function
 * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
 * Checks validity of pre-1954 birth numbers (rodné číslo) only
 * Due to the introduction of the pseudo-random BIČ it is not possible to test
 * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
 */ function skSkCheck(tin) {
    if (tin.length === 9) {
        tin = tin.replace(/\W/, "");
        if (tin.slice(6) === "000") return false;
         // Three-zero serial not assigned before 1954
        // Extract full year from TIN length
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) return false;
        if (full_year < 10) full_year = "190".concat(full_year);
        else full_year = "19".concat(full_year);
         // Extract month from TIN and normalize
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) month -= 50;
        if (month < 10) month = "0".concat(month);
         // Check date validity
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
    }
    return true;
}
/*
 * sl-SI validation function
 * (Davčna številka, persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function slSiCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8) % 11;
    if (checksum === 10) return parseInt(tin[7], 10) === 0;
    return checksum === parseInt(tin[7], 10);
}
/*
 * sv-SE validation function
 * (Personnummer or samordningsnummer, persons only)
 * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
 */ function svSeCheck(tin) {
    // Make copy of TIN and normalize to two-digit year form
    var tin_copy = tin.slice(0);
    if (tin.length > 11) tin_copy = tin_copy.slice(2);
     // Extract date of birth
    var full_year = "";
    var month = tin_copy.slice(2, 4);
    var day = parseInt(tin_copy.slice(4, 6), 10);
    if (tin.length > 11) full_year = tin.slice(0, 4);
    else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
            // Extract full year from centenarian symbol
            // Should work just fine until year 10000 or so
            var current_year = new Date().getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);
            if (tin[6] === "-") {
                if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) full_year = "".concat(current_century - 1).concat(full_year);
                else full_year = "".concat(current_century).concat(full_year);
            } else {
                full_year = "".concat(current_century - 1).concat(full_year);
                if (current_year - parseInt(full_year, 10) < 100) return false;
            }
        }
    } // Normalize day and check date validity
    if (day > 60) day -= 60;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(full_year, "/").concat(month, "/").concat(day);
    if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
    } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
    return algorithms.luhnCheck(tin.replace(/\W/, ""));
} // Locale lookup objects
/*
 * Tax id regex formats for various locales
 *
 * Where not explicitly specified in DG-TAXUD document both
 * uppercase and lowercase letters are acceptable.
 */ var taxIdFormat = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
}; // taxIdFormat locale aliases
taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
taxIdFormat["fr-CA"] = taxIdFormat["en-CA"]; // Algorithmic tax id check functions for various locales
var taxIdCheck = {
    "bg-BG": bgBgCheck,
    "cs-CZ": csCzCheck,
    "de-AT": deAtCheck,
    "de-DE": deDeCheck,
    "dk-DK": dkDkCheck,
    "el-CY": elCyCheck,
    "el-GR": elGrCheck,
    "en-CA": isCanadianSIN,
    "en-IE": enIeCheck,
    "en-US": enUsCheck,
    "es-ES": esEsCheck,
    "et-EE": etEeCheck,
    "fi-FI": fiFiCheck,
    "fr-BE": frBeCheck,
    "fr-FR": frFrCheck,
    "fr-LU": frLuCheck,
    "hr-HR": hrHrCheck,
    "hu-HU": huHuCheck,
    "it-IT": itItCheck,
    "lv-LV": lvLvCheck,
    "mt-MT": mtMtCheck,
    "nl-NL": nlNlCheck,
    "pl-PL": plPlCheck,
    "pt-BR": ptBrCheck,
    "pt-PT": ptPtCheck,
    "ro-RO": roRoCheck,
    "sk-SK": skSkCheck,
    "sl-SI": slSiCheck,
    "sv-SE": svSeCheck
}; // taxIdCheck locale aliases
taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
taxIdCheck["fr-CA"] = taxIdCheck["en-CA"]; // Regexes for locales where characters should be omitted before checking format
var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
var sanitizeRegexes = {
    "de-AT": allsymbols,
    "de-DE": /[\/\\]/g,
    "fr-BE": allsymbols
}; // sanitizeRegexes locale aliases
sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
/*
 * Validator function
 * Return true if the passed string is a valid tax identification number
 * for the specified locale.
 * Throw an error exception if the locale is not supported.
 */ function isTaxID(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    (0, _assertString.default)(str); // Copy TIN to avoid replacement if sanitized
    var strcopy = str.slice(0);
    if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) strcopy = strcopy.replace(sanitizeRegexes[locale], "");
        if (!taxIdFormat[locale].test(strcopy)) return false;
        if (locale in taxIdCheck) return taxIdCheck[locale](strcopy);
         // Fallthrough; not all locales have algorithmic checks
        return true;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79f64cb44c2530a":"knXEv","c14e0a9edffe0e65":"fDeOV","5ed6659e234b0708":"fyFIp"}],"fDeOV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iso7064Check = iso7064Check;
exports.luhnCheck = luhnCheck;
exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
exports.verhoeffCheck = verhoeffCheck;
/**
 * Algorithmic validation functions
 * May be used as is or implemented in the workflow of other validators.
 */ /*
 * ISO 7064 validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to ISO 7064 (MOD 11, 10).
 */ function iso7064Check(str) {
    var checkvalue = 10;
    for(var i = 0; i < str.length - 1; i++)checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 9 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
    checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
    return checkvalue === parseInt(str[10], 10);
}
/*
 * Luhn (mod 10) validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to the Luhn algorithm.
 */ function luhnCheck(str) {
    var checksum = 0;
    var second = false;
    for(var i = str.length - 1; i >= 0; i--){
        if (second) {
            var product = parseInt(str[i], 10) * 2;
            if (product > 9) // sum digits of product and add to checksum
            checksum += product.toString().split("").map(function(a) {
                return parseInt(a, 10);
            }).reduce(function(a, b) {
                return a + b;
            }, 0);
            else checksum += product;
        } else checksum += parseInt(str[i], 10);
        second = !second;
    }
    return checksum % 10 === 0;
}
/*
 * Reverse TIN multiplication and summation helper function
 * Called with an array of single-digit integers and a base multiplier
 * to calculate the sum of the digits multiplied in reverse.
 * Normally used in variations of MOD 11 algorithmic checks.
 */ function reverseMultiplyAndSum(digits, base) {
    var total = 0;
    for(var i = 0; i < digits.length; i++)total += digits[i] * (base - i);
    return total;
}
/*
 * Verhoeff validation helper function
 * Called with a string of numbers
 * to validate according to the Verhoeff algorithm.
 */ function verhoeffCheck(str) {
    var d_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            2,
            3,
            4,
            0,
            6,
            7,
            8,
            9,
            5
        ],
        [
            2,
            3,
            4,
            0,
            1,
            7,
            8,
            9,
            5,
            6
        ],
        [
            3,
            4,
            0,
            1,
            2,
            8,
            9,
            5,
            6,
            7
        ],
        [
            4,
            0,
            1,
            2,
            3,
            9,
            5,
            6,
            7,
            8
        ],
        [
            5,
            9,
            8,
            7,
            6,
            0,
            4,
            3,
            2,
            1
        ],
        [
            6,
            5,
            9,
            8,
            7,
            1,
            0,
            4,
            3,
            2
        ],
        [
            7,
            6,
            5,
            9,
            8,
            2,
            1,
            0,
            4,
            3
        ],
        [
            8,
            7,
            6,
            5,
            9,
            3,
            2,
            1,
            0,
            4
        ],
        [
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ]
    ];
    var p_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            5,
            7,
            6,
            2,
            8,
            3,
            0,
            9,
            4
        ],
        [
            5,
            8,
            0,
            3,
            7,
            9,
            6,
            1,
            4,
            2
        ],
        [
            8,
            9,
            1,
            6,
            0,
            4,
            3,
            5,
            2,
            7
        ],
        [
            9,
            4,
            5,
            3,
            1,
            2,
            6,
            8,
            7,
            0
        ],
        [
            4,
            2,
            8,
            6,
            5,
            7,
            3,
            9,
            0,
            1
        ],
        [
            2,
            7,
            9,
            3,
            8,
            0,
            6,
            4,
            1,
            5
        ],
        [
            7,
            0,
            4,
            6,
            9,
            1,
            3,
            2,
            5,
            8
        ]
    ]; // Copy (to prevent replacement) and reverse
    var str_copy = str.split("").reverse().join("");
    var checksum = 0;
    for(var i = 0; i < str_copy.length; i++)checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
    return checksum === 0;
}

},{}],"3lVvY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("597548b071f799d0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ var phones = {
    "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
    "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
    "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
    "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
    "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
    "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
    "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
    "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-TN": /^(\+?216)?[2459]\d{7}$/,
    "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
    "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
    "ca-AD": /^(\+376)?[346]\d{5}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
    "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
    "de-LU": /^(\+352)?((6\d1)\d{6})$/,
    "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
    "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-GG": /^(\+?44|0)1481\d{6}$/,
    "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    "en-GY": /^(\+592|0)6\d{6}$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
    "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
    "en-JM": /^(\+?876)?\d{7}$/,
    "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
    "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
    "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    "en-MU": /^(\+?230|0)?\d{8}$/,
    "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
    "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
    "en-PH": /^(09|\+639)\d{9}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-SG": /^(\+65)?[3689]\d{7}$/,
    "en-SL": /^(\+?232|0)\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "en-ZW": /^(\+263)[0-9]{9}$/,
    "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
    "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
    "es-BO": /^(\+?591)?(6|7)\d{7}$/,
    "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    "es-CR": /^(\+506)?[2-8]\d{7}$/,
    "es-CU": /^(\+53|0053)?5\d{7}/,
    "es-DO": /^(\+?1)?8[024]9\d{7}$/,
    "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
    "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    "es-ES": /^(\+?34)?[6|7]\d{8}$/,
    "es-PE": /^(\+?51)?9\d{8}$/,
    "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
    "es-NI": /^(\+?505)\d{7,8}$/,
    "es-PA": /^(\+?507)\d{7,8}$/,
    "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
    "es-SV": /^(\+?503)?[67]\d{7}$/,
    "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
    "es-VE": /^(\+?58)?(2|4)\d{9}$/,
    "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "fr-BF": /^(\+226|0)[67]\d{7}$/,
    "fr-BJ": /^(\+229)\d{8}$/,
    "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
    "fr-CM": /^(\+?237)6[0-9]{8}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
    "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
    "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
    "fr-PF": /^(\+?689)?8[789]\d{6}$/,
    "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
    "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    "ir-IR": /^(\+98|0)?9\d{9}$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
    "kk-KZ": /^(\+?7|8)?7\d{9}$/,
    "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "lv-LV": /^(\+?371)2\d{7}$/,
    "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
    "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "ne-NP": /^(\+?977)?9[78]\d{8}$/,
    "nl-BE": /^(\+?32|0)4\d{8}$/,
    "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "pt-AO": /^(\+244)\d{9}$/,
    "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "sq-AL": /^(\+355|0)6[789]\d{6}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
    "th-TH": /^(\+66|66|0)\d{9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "tk-TM": /^(\+993|993|8)\d{8}$/,
    "uk-UA": /^(\+?38|8)?0\d{9}$/,
    "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
    "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
/* eslint-enable max-len */ // aliases
phones["en-CA"] = phones["en-US"];
phones["fr-CA"] = phones["en-CA"];
phones["fr-BE"] = phones["nl-BE"];
phones["zh-HK"] = phones["en-HK"];
phones["zh-MO"] = phones["en-MO"];
phones["ga-IE"] = phones["en-IE"];
phones["fr-CH"] = phones["de-CH"];
phones["it-CH"] = phones["fr-CH"];
function isMobilePhone(str, locale, options) {
    (0, _assertString.default)(str);
    if (options && options.strictMode && !str.startsWith("+")) return false;
    if (Array.isArray(locale)) return locale.some(function(key) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    });
    else if (locale in phones) return phones[locale].test(str); // alias falsey locale as 'any'
    else if (!locale || locale === "any") {
        for(var key in phones)// istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(phones);
exports.locales = locales;

},{"597548b071f799d0":"knXEv"}],"4If3X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEthereumAddress;
var _assertString = _interopRequireDefault(require("de3278395f450524"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var eth = /^(0x)[0-9a-f]{40}$/i;
function isEthereumAddress(str) {
    (0, _assertString.default)(str);
    return eth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"de3278395f450524":"knXEv"}],"9IzQf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCurrency;
var _merge = _interopRequireDefault(require("467cb2454d92d9c5"));
var _assertString = _interopRequireDefault(require("77391667839297f8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function currencyRegex(options) {
    var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
    options.digits_after_decimal.forEach(function(digit, index) {
        if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
    });
    var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
    }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = [
        "0",
        whole_dollar_amount_without_sep,
        whole_dollar_amount_with_sep
    ], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
    var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ""); // default is negative sign before symbol, but there are two other options (besides parens)
    if (options.allow_negatives && !options.parens_for_negatives) {
        if (options.negative_sign_after_digits) pattern += negative;
        else if (options.negative_sign_before_digits) pattern = negative + pattern;
    } // South African Rand, for example, uses R 123 (space) and R-123 (no space)
    if (options.allow_negative_sign_placeholder) pattern = "( (?!\\-))?".concat(pattern);
    else if (options.allow_space_after_symbol) pattern = " ?".concat(pattern);
    else if (options.allow_space_after_digits) pattern += "( (?!$))?";
    if (options.symbol_after_digits) pattern += symbol;
    else pattern = symbol + pattern;
    if (options.allow_negatives) {
        if (options.parens_for_negatives) pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
        else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) pattern = negative + pattern;
    } // ensure there's a dollar and/or decimal amount, and that
    // it doesn't start with a space or a negative sign followed by a space
    return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}
var default_currency_options = {
    symbol: "$",
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [
        2
    ],
    allow_space_after_digits: false
};
function isCurrency(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_currency_options);
    return currencyRegex(options).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"467cb2454d92d9c5":"9Vv2s","77391667839297f8":"knXEv"}],"365fV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBtcAddress;
var _assertString = _interopRequireDefault(require("9e0eb8d87a25b3b2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
function isBtcAddress(str) {
    (0, _assertString.default)(str);
    return bech32.test(str) || base58.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9e0eb8d87a25b3b2":"knXEv"}],"aJqb2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO6391;
var _assertString = _interopRequireDefault(require("a302ab81c2caac4d"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isISO6391Set = new Set([
    "aa",
    "ab",
    "ae",
    "af",
    "ak",
    "am",
    "an",
    "ar",
    "as",
    "av",
    "ay",
    "az",
    "az",
    "ba",
    "be",
    "bg",
    "bh",
    "bi",
    "bm",
    "bn",
    "bo",
    "br",
    "bs",
    "ca",
    "ce",
    "ch",
    "co",
    "cr",
    "cs",
    "cu",
    "cv",
    "cy",
    "da",
    "de",
    "dv",
    "dz",
    "ee",
    "el",
    "en",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "ff",
    "fi",
    "fj",
    "fo",
    "fr",
    "fy",
    "ga",
    "gd",
    "gl",
    "gn",
    "gu",
    "gv",
    "ha",
    "he",
    "hi",
    "ho",
    "hr",
    "ht",
    "hu",
    "hy",
    "hz",
    "ia",
    "id",
    "ie",
    "ig",
    "ii",
    "ik",
    "io",
    "is",
    "it",
    "iu",
    "ja",
    "jv",
    "ka",
    "kg",
    "ki",
    "kj",
    "kk",
    "kl",
    "km",
    "kn",
    "ko",
    "kr",
    "ks",
    "ku",
    "kv",
    "kw",
    "ky",
    "la",
    "lb",
    "lg",
    "li",
    "ln",
    "lo",
    "lt",
    "lu",
    "lv",
    "mg",
    "mh",
    "mi",
    "mk",
    "ml",
    "mn",
    "mr",
    "ms",
    "mt",
    "my",
    "na",
    "nb",
    "nd",
    "ne",
    "ng",
    "nl",
    "nn",
    "no",
    "nr",
    "nv",
    "ny",
    "oc",
    "oj",
    "om",
    "or",
    "os",
    "pa",
    "pi",
    "pl",
    "ps",
    "pt",
    "qu",
    "rm",
    "rn",
    "ro",
    "ru",
    "rw",
    "sa",
    "sc",
    "sd",
    "se",
    "sg",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "ss",
    "st",
    "su",
    "sv",
    "sw",
    "ta",
    "te",
    "tg",
    "th",
    "ti",
    "tk",
    "tl",
    "tn",
    "to",
    "tr",
    "ts",
    "tt",
    "tw",
    "ty",
    "ug",
    "uk",
    "ur",
    "uz",
    "ve",
    "vi",
    "vo",
    "wa",
    "wo",
    "xh",
    "yi",
    "yo",
    "za",
    "zh",
    "zu"
]);
function isISO6391(str) {
    (0, _assertString.default)(str);
    return isISO6391Set.has(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a302ab81c2caac4d":"knXEv"}],"6K5gj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO8601;
var _assertString = _interopRequireDefault(require("c2dd34a89f8d77d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ // from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time
var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */ var isValidDate = function isValidDate(str) {
    // str must have passed the ISO8601 check
    // this check is meant to catch invalid dates
    // like 2009-02-31
    // first check for ordinal dates
    var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]); // if is leap year
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
        return oDay <= 365;
    }
    var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var monthString = month ? "0".concat(month).slice(-2) : month;
    var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare
    var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
    if (month && day) return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    return true;
};
function isISO8601(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
    if (check && options.strict) return isValidDate(str);
    return check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c2dd34a89f8d77d3":"knXEv"}],"en57N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRFC3339;
var _assertString = _interopRequireDefault(require("86cfcd153590f9be"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */ var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
function isRFC3339(str) {
    (0, _assertString.default)(str);
    return rfc3339.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"86cfcd153590f9be":"knXEv"}],"cLhNs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO31661Alpha3;
var _assertString = _interopRequireDefault(require("b66458f65eaeb7a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = new Set([
    "AFG",
    "ALA",
    "ALB",
    "DZA",
    "ASM",
    "AND",
    "AGO",
    "AIA",
    "ATA",
    "ATG",
    "ARG",
    "ARM",
    "ABW",
    "AUS",
    "AUT",
    "AZE",
    "BHS",
    "BHR",
    "BGD",
    "BRB",
    "BLR",
    "BEL",
    "BLZ",
    "BEN",
    "BMU",
    "BTN",
    "BOL",
    "BES",
    "BIH",
    "BWA",
    "BVT",
    "BRA",
    "IOT",
    "BRN",
    "BGR",
    "BFA",
    "BDI",
    "KHM",
    "CMR",
    "CAN",
    "CPV",
    "CYM",
    "CAF",
    "TCD",
    "CHL",
    "CHN",
    "CXR",
    "CCK",
    "COL",
    "COM",
    "COG",
    "COD",
    "COK",
    "CRI",
    "CIV",
    "HRV",
    "CUB",
    "CUW",
    "CYP",
    "CZE",
    "DNK",
    "DJI",
    "DMA",
    "DOM",
    "ECU",
    "EGY",
    "SLV",
    "GNQ",
    "ERI",
    "EST",
    "ETH",
    "FLK",
    "FRO",
    "FJI",
    "FIN",
    "FRA",
    "GUF",
    "PYF",
    "ATF",
    "GAB",
    "GMB",
    "GEO",
    "DEU",
    "GHA",
    "GIB",
    "GRC",
    "GRL",
    "GRD",
    "GLP",
    "GUM",
    "GTM",
    "GGY",
    "GIN",
    "GNB",
    "GUY",
    "HTI",
    "HMD",
    "VAT",
    "HND",
    "HKG",
    "HUN",
    "ISL",
    "IND",
    "IDN",
    "IRN",
    "IRQ",
    "IRL",
    "IMN",
    "ISR",
    "ITA",
    "JAM",
    "JPN",
    "JEY",
    "JOR",
    "KAZ",
    "KEN",
    "KIR",
    "PRK",
    "KOR",
    "KWT",
    "KGZ",
    "LAO",
    "LVA",
    "LBN",
    "LSO",
    "LBR",
    "LBY",
    "LIE",
    "LTU",
    "LUX",
    "MAC",
    "MKD",
    "MDG",
    "MWI",
    "MYS",
    "MDV",
    "MLI",
    "MLT",
    "MHL",
    "MTQ",
    "MRT",
    "MUS",
    "MYT",
    "MEX",
    "FSM",
    "MDA",
    "MCO",
    "MNG",
    "MNE",
    "MSR",
    "MAR",
    "MOZ",
    "MMR",
    "NAM",
    "NRU",
    "NPL",
    "NLD",
    "NCL",
    "NZL",
    "NIC",
    "NER",
    "NGA",
    "NIU",
    "NFK",
    "MNP",
    "NOR",
    "OMN",
    "PAK",
    "PLW",
    "PSE",
    "PAN",
    "PNG",
    "PRY",
    "PER",
    "PHL",
    "PCN",
    "POL",
    "PRT",
    "PRI",
    "QAT",
    "REU",
    "ROU",
    "RUS",
    "RWA",
    "BLM",
    "SHN",
    "KNA",
    "LCA",
    "MAF",
    "SPM",
    "VCT",
    "WSM",
    "SMR",
    "STP",
    "SAU",
    "SEN",
    "SRB",
    "SYC",
    "SLE",
    "SGP",
    "SXM",
    "SVK",
    "SVN",
    "SLB",
    "SOM",
    "ZAF",
    "SGS",
    "SSD",
    "ESP",
    "LKA",
    "SDN",
    "SUR",
    "SJM",
    "SWZ",
    "SWE",
    "CHE",
    "SYR",
    "TWN",
    "TJK",
    "TZA",
    "THA",
    "TLS",
    "TGO",
    "TKL",
    "TON",
    "TTO",
    "TUN",
    "TUR",
    "TKM",
    "TCA",
    "TUV",
    "UGA",
    "UKR",
    "ARE",
    "GBR",
    "USA",
    "UMI",
    "URY",
    "UZB",
    "VUT",
    "VEN",
    "VNM",
    "VGB",
    "VIR",
    "WLF",
    "ESH",
    "YEM",
    "ZMB",
    "ZWE"
]);
function isISO31661Alpha3(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b66458f65eaeb7a8":"knXEv"}],"aU9Gb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO4217;
exports.CurrencyCodes = void 0;
var _assertString = _interopRequireDefault(require("d9fda19acb9c39e8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_4217
var validISO4217CurrencyCodes = new Set([
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BOV",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHE",
    "CHF",
    "CHW",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "COU",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MXV",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "USN",
    "UYI",
    "UYU",
    "UYW",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XBA",
    "XBB",
    "XBC",
    "XBD",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "XSU",
    "XTS",
    "XUA",
    "XXX",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
]);
function isISO4217(str) {
    (0, _assertString.default)(str);
    return validISO4217CurrencyCodes.has(str.toUpperCase());
}
var CurrencyCodes = validISO4217CurrencyCodes;
exports.CurrencyCodes = CurrencyCodes;

},{"d9fda19acb9c39e8":"knXEv"}],"ajuBX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase32;
var _assertString = _interopRequireDefault(require("e04b5f9108e14f5"));
var _merge = _interopRequireDefault(require("fb36489dbb8d1a3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var base32 = /^[A-Z2-7]+=*$/;
var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
var defaultBase32Options = {
    crockford: false
};
function isBase32(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase32Options);
    if (options.crockford) return crockfordBase32.test(str);
    var len = str.length;
    if (len % 8 === 0 && base32.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e04b5f9108e14f5":"knXEv","fb36489dbb8d1a3":"9Vv2s"}],"dJRgx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase58;
var _assertString = _interopRequireDefault(require("891939a40323820e"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
function isBase58(str) {
    (0, _assertString.default)(str);
    if (base58Reg.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"891939a40323820e":"knXEv"}],"1SHuo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDataURI;
var _assertString = _interopRequireDefault(require("5760d2b424323bd7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
function isDataURI(str) {
    (0, _assertString.default)(str);
    var data = str.split(",");
    if (data.length < 2) return false;
    var attributes = data.shift().trim().split(";");
    var schemeAndMediaType = attributes.shift();
    if (schemeAndMediaType.slice(0, 5) !== "data:") return false;
    var mediaType = schemeAndMediaType.slice(5);
    if (mediaType !== "" && !validMediaType.test(mediaType)) return false;
    for(var i = 0; i < attributes.length; i++){
        if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === "base64") && !validAttribute.test(attributes[i])) return false;
    }
    for(var _i = 0; _i < data.length; _i++){
        if (!validData.test(data[_i])) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5760d2b424323bd7":"knXEv"}],"5iT2O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMagnetURI;
var _assertString = _interopRequireDefault(require("cabcc420a1ff2c36"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
function isMagnetURI(url) {
    (0, _assertString.default)(url);
    if (url.indexOf("magnet:?") !== 0) return false;
    return magnetURIComponent.test(url);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cabcc420a1ff2c36":"knXEv"}],"9toCu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMimeType;
var _assertString = _interopRequireDefault(require("b1a5323c59cce3b7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/ // Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len
function isMimeType(str) {
    (0, _assertString.default)(str);
    return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b1a5323c59cce3b7":"knXEv"}],"ldav1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLatLong;
var _assertString = _interopRequireDefault(require("42ca4ce670edd2c0"));
var _merge = _interopRequireDefault(require("f246bd175997c1b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var defaultLatLongOptions = {
    checkDMS: false
};
function isLatLong(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultLatLongOptions);
    if (!str.includes(",")) return false;
    var pair = str.split(",");
    if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("(")) return false;
    if (options.checkDMS) return latDMS.test(pair[0]) && longDMS.test(pair[1]);
    return lat.test(pair[0]) && long.test(pair[1]);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"42ca4ce670edd2c0":"knXEv","f246bd175997c1b5":"9Vv2s"}],"dGBfQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPostalCode;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("af33e209d16f8276"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: fourDigit,
    BG: fourDigit,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DO: fiveDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: fourDigit,
    ID: fiveDigit,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    LK: fiveDigit,
    MG: threeDigit,
    MX: fiveDigit,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: fiveDigit,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: fourDigit,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: sixDigit,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TH: fiveDigit,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;
function isPostalCode(str, locale) {
    (0, _assertString.default)(str);
    if (locale in patterns) return patterns[locale].test(str);
    else if (locale === "any") {
        for(var key in patterns)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (patterns.hasOwnProperty(key)) {
            var pattern = patterns[key];
            if (pattern.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}

},{"af33e209d16f8276":"knXEv"}],"4yuag":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ltrim;
var _assertString = _interopRequireDefault(require("2f24039d4dd740d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ltrim(str, chars) {
    (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return str.replace(pattern, "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"2f24039d4dd740d3":"knXEv"}],"avwpv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rtrim;
var _assertString = _interopRequireDefault(require("3f937b9787a0d737"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rtrim(str, chars) {
    (0, _assertString.default)(str);
    if (chars) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
        var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return str.replace(pattern, "");
    } // Use a faster and more safe than regex trim method https://blog.stevenlevithan.com/archives/faster-trim-javascript
    var strIndex = str.length - 1;
    while(/\s/.test(str.charAt(strIndex)))strIndex -= 1;
    return str.slice(0, strIndex + 1);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3f937b9787a0d737":"knXEv"}],"izdgc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trim;
var _rtrim = _interopRequireDefault(require("b763567f82768552"));
var _ltrim = _interopRequireDefault(require("f1918674a32c3c86"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function trim(str, chars) {
    return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b763567f82768552":"avwpv","f1918674a32c3c86":"4yuag"}],"g0sSl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escape;
var _assertString = _interopRequireDefault(require("4f2ad27482ad15a0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function escape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"4f2ad27482ad15a0":"knXEv"}],"lhAKW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unescape;
var _assertString = _interopRequireDefault(require("9bb1978633a49334"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unescape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&"); // &amp; replacement has to be the last one to prevent
// bugs with intermediate strings containing escape sequences
// See: https://github.com/validatorjs/validator.js/issues/1827
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9bb1978633a49334":"knXEv"}],"bKCGJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stripLow;
var _assertString = _interopRequireDefault(require("e657450d3bf6e2e5"));
var _blacklist = _interopRequireDefault(require("adf963296d8f7393"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stripLow(str, keep_new_lines) {
    (0, _assertString.default)(str);
    var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, _blacklist.default)(str, chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e657450d3bf6e2e5":"knXEv","adf963296d8f7393":"4UBX7"}],"4UBX7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = blacklist;
var _assertString = _interopRequireDefault(require("da17f86bfd8f9f06"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function blacklist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"da17f86bfd8f9f06":"knXEv"}],"ZPxad":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = whitelist;
var _assertString = _interopRequireDefault(require("fd66d8d8bf0ad43"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function whitelist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fd66d8d8bf0ad43":"knXEv"}],"5mGOj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isWhitelisted;
var _assertString = _interopRequireDefault(require("5e47d1f865a8d574"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isWhitelisted(str, chars) {
    (0, _assertString.default)(str);
    for(var i = str.length - 1; i >= 0; i--){
        if (chars.indexOf(str[i]) === -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e47d1f865a8d574":"knXEv"}],"bnmQz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeEmail;
var _merge = _interopRequireDefault(require("3d767513579b6391"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_normalize_email_options = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: true,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: true,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: true,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: true,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: true,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: true,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: true,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: true,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: true
}; // List of domains used by iCloud
var icloud_domains = [
    "icloud.com",
    "me.com"
]; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = [
    "hotmail.at",
    "hotmail.be",
    "hotmail.ca",
    "hotmail.cl",
    "hotmail.co.il",
    "hotmail.co.nz",
    "hotmail.co.th",
    "hotmail.co.uk",
    "hotmail.com",
    "hotmail.com.ar",
    "hotmail.com.au",
    "hotmail.com.br",
    "hotmail.com.gr",
    "hotmail.com.mx",
    "hotmail.com.pe",
    "hotmail.com.tr",
    "hotmail.com.vn",
    "hotmail.cz",
    "hotmail.de",
    "hotmail.dk",
    "hotmail.es",
    "hotmail.fr",
    "hotmail.hu",
    "hotmail.id",
    "hotmail.ie",
    "hotmail.in",
    "hotmail.it",
    "hotmail.jp",
    "hotmail.kr",
    "hotmail.lv",
    "hotmail.my",
    "hotmail.ph",
    "hotmail.pt",
    "hotmail.sa",
    "hotmail.sg",
    "hotmail.sk",
    "live.be",
    "live.co.uk",
    "live.com",
    "live.com.ar",
    "live.com.mx",
    "live.de",
    "live.es",
    "live.eu",
    "live.fr",
    "live.it",
    "live.nl",
    "msn.com",
    "outlook.at",
    "outlook.be",
    "outlook.cl",
    "outlook.co.il",
    "outlook.co.nz",
    "outlook.co.th",
    "outlook.com",
    "outlook.com.ar",
    "outlook.com.au",
    "outlook.com.br",
    "outlook.com.gr",
    "outlook.com.pe",
    "outlook.com.tr",
    "outlook.com.vn",
    "outlook.cz",
    "outlook.de",
    "outlook.dk",
    "outlook.es",
    "outlook.fr",
    "outlook.hu",
    "outlook.id",
    "outlook.ie",
    "outlook.in",
    "outlook.it",
    "outlook.jp",
    "outlook.kr",
    "outlook.lv",
    "outlook.my",
    "outlook.ph",
    "outlook.pt",
    "outlook.sa",
    "outlook.sg",
    "outlook.sk",
    "passport.com"
]; // List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = [
    "rocketmail.com",
    "yahoo.ca",
    "yahoo.co.uk",
    "yahoo.com",
    "yahoo.de",
    "yahoo.fr",
    "yahoo.in",
    "yahoo.it",
    "ymail.com"
]; // List of domains used by yandex.ru
var yandex_domains = [
    "yandex.ru",
    "yandex.ua",
    "yandex.kz",
    "yandex.com",
    "yandex.by",
    "ya.ru"
]; // replace single dots, but not multiple consecutive dots
function dotsReplacer(match) {
    if (match.length > 1) return match;
    return "";
}
function normalizeEmail(email, options) {
    options = (0, _merge.default)(options, default_normalize_email_options);
    var raw_parts = email.split("@");
    var domain = raw_parts.pop();
    var user = raw_parts.join("@");
    var parts = [
        user,
        domain
    ]; // The domain is always lowercased, as it's case-insensitive per RFC 1035
    parts[1] = parts[1].toLowerCase();
    if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
        // Address is GMail
        if (options.gmail_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (options.gmail_remove_dots) // this does not replace consecutive dots like example..email@gmail.com
        parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.gmail_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
    } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        // Address is iCloud
        if (options.icloud_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.icloud_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        // Address is Outlook.com
        if (options.outlookdotcom_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.outlookdotcom_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        // Address is Yahoo
        if (options.yahoo_remove_subaddress) {
            var components = parts[0].split("-");
            parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
        }
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.yahoo_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options.all_lowercase || options.yandex_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = "yandex.ru"; // all yandex domains are equal, 1st preferred
    } else if (options.all_lowercase) // Any other address
    parts[0] = parts[0].toLowerCase();
    return parts.join("@");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3d767513579b6391":"9Vv2s"}],"89sqV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSlug;
var _assertString = _interopRequireDefault(require("ab92b84ab8fd18a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(str) {
    (0, _assertString.default)(str);
    return charsetRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ab92b84ab8fd18a8":"knXEv"}],"dwGws":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLicensePlate;
var _assertString = _interopRequireDefault(require("b2df968a48112117"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    "cs-CZ": function csCZ(str) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
    },
    "de-DE": function deDE(str) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
    },
    "de-LI": function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
    },
    "en-IN": function enIN(str) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
    },
    "es-AR": function esAR(str) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
    },
    "fi-FI": function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
    },
    "hu-HU": function huHU(str) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
    },
    "pt-BR": function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
    },
    "pt-PT": function ptPT(str) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
    },
    "sq-AL": function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
    },
    "sv-SE": function svSE(str) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
    }
};
function isLicensePlate(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === "any") {
        for(var key in validators){
            /* eslint guard-for-in: 0 */ var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b2df968a48112117":"knXEv"}],"fFZ7V":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isStrongPassword;
var _merge = _interopRequireDefault(require("29e06d90a75827ea"));
var _assertString = _interopRequireDefault(require("d596cf5949cba1e2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var upperCaseRegex = /^[A-Z]$/;
var lowerCaseRegex = /^[a-z]$/;
var numberRegex = /^[0-9]$/;
var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
var defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/ function countChars(str) {
    var result = {};
    Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) result[char] += 1;
        else result[char] = 1;
    });
    return result;
}
/* Return information about a password */ function analyzePassword(password) {
    var charMap = countChars(password);
    var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
    };
    Object.keys(charMap).forEach(function(char) {
        /* istanbul ignore else */ if (upperCaseRegex.test(char)) analysis.uppercaseCount += charMap[char];
        else if (lowerCaseRegex.test(char)) analysis.lowercaseCount += charMap[char];
        else if (numberRegex.test(char)) analysis.numberCount += charMap[char];
        else if (symbolRegex.test(char)) analysis.symbolCount += charMap[char];
    });
    return analysis;
}
function scorePassword(analysis, scoringOptions) {
    var points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
    if (analysis.lowercaseCount > 0) points += scoringOptions.pointsForContainingLower;
    if (analysis.uppercaseCount > 0) points += scoringOptions.pointsForContainingUpper;
    if (analysis.numberCount > 0) points += scoringOptions.pointsForContainingNumber;
    if (analysis.symbolCount > 0) points += scoringOptions.pointsForContainingSymbol;
    return points;
}
function isStrongPassword(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _assertString.default)(str);
    var analysis = analyzePassword(str);
    options = (0, _merge.default)(options || {}, defaultOptions);
    if (options.returnScore) return scorePassword(analysis, options);
    return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"29e06d90a75827ea":"9Vv2s","d596cf5949cba1e2":"knXEv"}],"kxPFr":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVAT;
exports.vatMatchers = void 0;
var _assertString = _interopRequireDefault(require("bef829e803e114f9"));
var algorithms = _interopRequireWildcard(require("83803936e2b74d1f"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var PT = function PT(str) {
    var match = str.match(/^(PT)?(\d{9})$/);
    if (!match) return false;
    var tin = match[2];
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
};
var vatMatchers = {
    /**
   * European Union VAT identification numbers
   */ AT: function AT(str) {
        return /^(AT)?U\d{8}$/.test(str);
    },
    BE: function BE(str) {
        return /^(BE)?\d{10}$/.test(str);
    },
    BG: function BG(str) {
        return /^(BG)?\d{9,10}$/.test(str);
    },
    HR: function HR(str) {
        return /^(HR)?\d{11}$/.test(str);
    },
    CY: function CY(str) {
        return /^(CY)?\w{9}$/.test(str);
    },
    CZ: function CZ(str) {
        return /^(CZ)?\d{8,10}$/.test(str);
    },
    DK: function DK(str) {
        return /^(DK)?\d{8}$/.test(str);
    },
    EE: function EE(str) {
        return /^(EE)?\d{9}$/.test(str);
    },
    FI: function FI(str) {
        return /^(FI)?\d{8}$/.test(str);
    },
    FR: function FR(str) {
        return /^(FR)?\w{2}\d{9}$/.test(str);
    },
    DE: function DE(str) {
        return /^(DE)?\d{9}$/.test(str);
    },
    EL: function EL(str) {
        return /^(EL)?\d{9}$/.test(str);
    },
    HU: function HU(str) {
        return /^(HU)?\d{8}$/.test(str);
    },
    IE: function IE(str) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
    },
    IT: function IT(str) {
        return /^(IT)?\d{11}$/.test(str);
    },
    LV: function LV(str) {
        return /^(LV)?\d{11}$/.test(str);
    },
    LT: function LT(str) {
        return /^(LT)?\d{9,12}$/.test(str);
    },
    LU: function LU(str) {
        return /^(LU)?\d{8}$/.test(str);
    },
    MT: function MT(str) {
        return /^(MT)?\d{8}$/.test(str);
    },
    NL: function NL(str) {
        return /^(NL)?\d{9}B\d{2}$/.test(str);
    },
    PL: function PL(str) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
    },
    PT: PT,
    RO: function RO(str) {
        return /^(RO)?\d{2,10}$/.test(str);
    },
    SK: function SK(str) {
        return /^(SK)?\d{10}$/.test(str);
    },
    SI: function SI(str) {
        return /^(SI)?\d{8}$/.test(str);
    },
    ES: function ES(str) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(str);
    },
    SE: function SE(str) {
        return /^(SE)?\d{12}$/.test(str);
    },
    /**
   * VAT numbers of non-EU countries
   */ AL: function AL(str) {
        return /^(AL)?\w{9}[A-Z]$/.test(str);
    },
    MK: function MK(str) {
        return /^(MK)?\d{13}$/.test(str);
    },
    AU: function AU(str) {
        return /^(AU)?\d{11}$/.test(str);
    },
    BY: function BY(str) {
        return /^(УНП )?\d{9}$/.test(str);
    },
    CA: function CA(str) {
        return /^(CA)?\d{9}$/.test(str);
    },
    IS: function IS(str) {
        return /^(IS)?\d{5,6}$/.test(str);
    },
    IN: function IN(str) {
        return /^(IN)?\d{15}$/.test(str);
    },
    ID: function ID(str) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
    },
    IL: function IL(str) {
        return /^(IL)?\d{9}$/.test(str);
    },
    KZ: function KZ(str) {
        return /^(KZ)?\d{9}$/.test(str);
    },
    NZ: function NZ(str) {
        return /^(NZ)?\d{9}$/.test(str);
    },
    NG: function NG(str) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
    },
    NO: function NO(str) {
        return /^(NO)?\d{9}MVA$/.test(str);
    },
    PH: function PH(str) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
    },
    RU: function RU(str) {
        return /^(RU)?(\d{10}|\d{12})$/.test(str);
    },
    SM: function SM(str) {
        return /^(SM)?\d{5}$/.test(str);
    },
    SA: function SA(str) {
        return /^(SA)?\d{15}$/.test(str);
    },
    RS: function RS(str) {
        return /^(RS)?\d{9}$/.test(str);
    },
    CH: function CH(str) {
        return /^(CH)?(\d{6}|\d{9}|(\d{3}.\d{3})|(\d{3}.\d{3}.\d{3}))(TVA|MWST|IVA)$/.test(str);
    },
    TR: function TR(str) {
        return /^(TR)?\d{10}$/.test(str);
    },
    UA: function UA(str) {
        return /^(UA)?\d{12}$/.test(str);
    },
    GB: function GB(str) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
    },
    UZ: function UZ(str) {
        return /^(UZ)?\d{9}$/.test(str);
    },
    /**
   * VAT numbers of Latin American countries
   */ AR: function AR(str) {
        return /^(AR)?\d{11}$/.test(str);
    },
    BO: function BO(str) {
        return /^(BO)?\d{7}$/.test(str);
    },
    BR: function BR(str) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
    },
    CL: function CL(str) {
        return /^(CL)?\d{8}-\d{1}$/.test(str);
    },
    CO: function CO(str) {
        return /^(CO)?\d{10}$/.test(str);
    },
    CR: function CR(str) {
        return /^(CR)?\d{9,12}$/.test(str);
    },
    EC: function EC(str) {
        return /^(EC)?\d{13}$/.test(str);
    },
    SV: function SV(str) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
    },
    GT: function GT(str) {
        return /^(GT)?\d{7}-\d{1}$/.test(str);
    },
    HN: function HN(str) {
        return /^(HN)?$/.test(str);
    },
    MX: function MX(str) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
    },
    NI: function NI(str) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
    },
    PA: function PA(str) {
        return /^(PA)?$/.test(str);
    },
    PY: function PY(str) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(str);
    },
    PE: function PE(str) {
        return /^(PE)?\d{11}$/.test(str);
    },
    DO: function DO(str) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
    },
    UY: function UY(str) {
        return /^(UY)?\d{12}$/.test(str);
    },
    VE: function VE(str) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
    }
};
exports.vatMatchers = vatMatchers;
function isVAT(str, countryCode) {
    (0, _assertString.default)(str);
    (0, _assertString.default)(countryCode);
    if (countryCode in vatMatchers) return vatMatchers[countryCode](str);
    throw new Error("Invalid country code: '".concat(countryCode, "'"));
}

},{"bef829e803e114f9":"knXEv","83803936e2b74d1f":"fDeOV"}],"jxeny":[function(require,module,exports) {
!function(n, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function n() {
        return n = Object.assign || function(n) {
            for(var t = 1; t < arguments.length; t++){
                var e = arguments[t];
                for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            }
            return n;
        }, n.apply(this, arguments);
    }
    var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
        elements_selector: ".lazy",
        container: e || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_bg_set: "bg-set",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
        restore_on_error: !1
    }, c = function(t) {
        return n({}, r, t);
    }, l = function(n, t) {
        var e, i = "LazyLoad::Initialized", o = new n(t);
        try {
            e = new CustomEvent(i, {
                detail: {
                    instance: o
                }
            });
        } catch (n) {
            (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                instance: o
            });
        }
        window.dispatchEvent(e);
    }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
        return n.getAttribute(E + t);
    }, k = function(n) {
        return y(n, I);
    }, w = function(n, t) {
        return function(n, t, e) {
            var i = "data-ll-status";
            null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
        }(n, 0, t);
    }, A = function(n) {
        return w(n, null);
    }, L = function(n) {
        return null === k(n);
    }, O = function(n) {
        return k(n) === h;
    }, x = [
        v,
        b,
        m,
        p
    ], C = function(n, t, e, i) {
        n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
    }, N = function(n, t) {
        o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
    }, M = function(n, t) {
        o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    }, z = function(n) {
        return n.llTempImage;
    }, T = function(n, t) {
        if (t) {
            var e = t._observer;
            e && e.unobserve(n);
        }
    }, R = function(n, t) {
        n && (n.loadingCount += t);
    }, G = function(n, t) {
        n && (n.toLoadCount = t);
    }, j = function(n) {
        for(var t, e = [], i = 0; t = n.children[i]; i += 1)"SOURCE" === t.tagName && e.push(t);
        return e;
    }, D = function(n, t) {
        var e = n.parentNode;
        e && "PICTURE" === e.tagName && j(e).forEach(t);
    }, H = function(n, t) {
        j(n).forEach(t);
    }, V = [
        u
    ], F = [
        u,
        f
    ], B = [
        u,
        s,
        d
    ], J = [
        g
    ], P = function(n) {
        return !!n[_];
    }, S = function(n) {
        return n[_];
    }, U = function(n) {
        return delete n[_];
    }, $ = function(n, t) {
        if (!P(n)) {
            var e = {};
            t.forEach(function(t) {
                e[t] = n.getAttribute(t);
            }), n[_] = e;
        }
    }, q = function(n, t) {
        if (P(n)) {
            var e = S(n);
            t.forEach(function(t) {
                !function(n, t, e) {
                    e ? n.setAttribute(t, e) : n.removeAttribute(t);
                }(n, t, e[t]);
            });
        }
    }, K = function(n, t, e) {
        N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
    }, Q = function(n, t, e) {
        N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
    }, W = function(n, t, e) {
        e && n.setAttribute(t, e);
    }, X = function(n, t) {
        W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
    }, Y = {
        IMG: function(n, t) {
            D(n, function(n) {
                $(n, B), X(n, t);
            }), $(n, B), X(n, t);
        },
        IFRAME: function(n, t) {
            $(n, V), W(n, u, y(n, t.data_src));
        },
        VIDEO: function(n, t) {
            H(n, function(n) {
                $(n, V), W(n, u, y(n, t.data_src));
            }), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
        },
        OBJECT: function(n, t) {
            $(n, J), W(n, g, y(n, t.data_src));
        }
    }, Z = [
        "IMG",
        "IFRAME",
        "VIDEO",
        "OBJECT"
    ], nn = function(n, t) {
        !t || function(n) {
            return n.loadingCount > 0;
        }(t) || function(n) {
            return n.toLoadCount > 0;
        }(t) || C(n.callback_finish, t);
    }, tn = function(n, t, e) {
        n.addEventListener(t, e), n.llEvLisnrs[t] = e;
    }, en = function(n, t, e) {
        n.removeEventListener(t, e);
    }, on = function(n) {
        return !!n.llEvLisnrs;
    }, an = function(n) {
        if (on(n)) {
            var t = n.llEvLisnrs;
            for(var e in t){
                var i = t[e];
                en(n, e, i);
            }
            delete n.llEvLisnrs;
        }
    }, rn = function(n, t, e) {
        !function(n) {
            delete n.llTempImage;
        }(n), R(e, -1), function(n) {
            n && (n.toLoadCount -= 1);
        }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
    }, cn = function(n, t, e) {
        var i = z(n) || n;
        on(i) || function(n, t, e) {
            on(n) || (n.llEvLisnrs = {});
            var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
            tn(n, i, t), tn(n, "error", e);
        }(i, function(o) {
            !function(n, t, e, i) {
                var o = O(t);
                rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
            }(0, n, t, e), an(i);
        }, function(o) {
            !function(n, t, e, i) {
                var o = O(t);
                rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i);
            }(0, n, t, e), an(i);
        });
    }, ln = function(n, t, e) {
        !function(n) {
            return Z.indexOf(n.tagName) > -1;
        }(n) ? function(n, t, e) {
            !function(n) {
                n.llTempImage = document.createElement("IMG");
            }(n), cn(n, t, e), function(n) {
                P(n) || (n[_] = {
                    backgroundImage: n.style.backgroundImage
                });
            }(n), function(n, t, e) {
                var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), Q(n, t, e));
            }(n, t, e), function(n, t, e) {
                var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                r && (n.style.backgroundImage = r, K(n, t, e));
            }(n, t, e), function(n, t, e) {
                var i = y(n, t.data_bg_set);
                if (i) {
                    var o = i.split("|"), a = o.map(function(n) {
                        return "image-set(".concat(n, ")");
                    });
                    n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map(function(n) {
                        return "-webkit-image-set(".concat(n, ")");
                    }), n.style.backgroundImage = a.join()), K(n, t, e);
                }
            }(n, t, e);
        }(n, t, e) : function(n, t, e) {
            cn(n, t, e), function(n, t, e) {
                var i = Y[n.tagName];
                i && (i(n, t), Q(n, t, e));
            }(n, t, e);
        }(n, t, e);
    }, un = function(n) {
        n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
    }, sn = function(n) {
        D(n, function(n) {
            q(n, B);
        }), q(n, B);
    }, dn = {
        IMG: sn,
        IFRAME: function(n) {
            q(n, V);
        },
        VIDEO: function(n) {
            H(n, function(n) {
                q(n, V);
            }), q(n, F), n.load();
        },
        OBJECT: function(n) {
            q(n, J);
        }
    }, fn = function(n, t) {
        (function(n) {
            var t = dn[n.tagName];
            t ? t(n) : function(n) {
                if (P(n)) {
                    var t = S(n);
                    n.style.backgroundImage = t.backgroundImage;
                }
            }(n);
        })(n), function(n, t) {
            L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
        }(n, t), A(n), U(n);
    }, _n = [
        "IMG",
        "IFRAME",
        "VIDEO"
    ], gn = function(n) {
        return n.use_native && "loading" in HTMLImageElement.prototype;
    }, vn = function(n, t, e) {
        n.forEach(function(n) {
            return function(n) {
                return n.isIntersecting || n.intersectionRatio > 0;
            }(n) ? function(n, t, e, i) {
                var o = function(n) {
                    return x.indexOf(k(n)) >= 0;
                }(n);
                w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                    t.unobserve_entered && T(n, e);
                }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
            }(n.target, n, t, e) : function(n, t, e, i) {
                L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                    e.cancel_on_exit && function(n) {
                        return k(n) === v;
                    }(n) && "IMG" === n.tagName && (an(n), function(n) {
                        D(n, function(n) {
                            un(n);
                        }), un(n);
                    }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                }(n, t, e, i), C(e.callback_exit, n, t, i));
            }(n.target, n, t, e);
        });
    }, bn = function(n) {
        return Array.prototype.slice.call(n);
    }, mn = function(n) {
        return n.container.querySelectorAll(n.elements_selector);
    }, pn = function(n) {
        return function(n) {
            return k(n) === p;
        }(n);
    }, hn = function(n, t) {
        return function(n) {
            return bn(n).filter(L);
        }(n || mn(t));
    }, En = function(n, e) {
        var o = c(n);
        this._settings = o, this.loadingCount = 0, function(n, t) {
            i && !gn(n) && (t._observer = new IntersectionObserver(function(e) {
                vn(e, n, t);
            }, function(n) {
                return {
                    root: n.container === document ? null : n.container,
                    rootMargin: n.thresholds || n.threshold + "px"
                };
            }(n)));
        }(o, this), function(n, e) {
            t && (e._onlineHandler = function() {
                !function(n, t) {
                    var e;
                    (e = mn(n), bn(e).filter(pn)).forEach(function(t) {
                        M(t, n.class_error), A(t);
                    }), t.update();
                }(n, e);
            }, window.addEventListener("online", e._onlineHandler));
        }(o, this), this.update(e);
    };
    return En.prototype = {
        update: function(n) {
            var t, o, a = this._settings, r = hn(n, a);
            G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                n.forEach(function(n) {
                    -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                        n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                            var e = Y[n.tagName];
                            e && e(n, t);
                        }(n, t), w(n, h);
                    }(n, t, e);
                }), G(e, 0);
            }(r, a, this) : (o = r, function(n) {
                n.disconnect();
            }(t = this._observer), function(n, t) {
                t.forEach(function(t) {
                    n.observe(t);
                });
            }(t, o)) : this.loadAll(r);
        },
        destroy: function() {
            this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), mn(this._settings).forEach(function(n) {
                U(n);
            }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
        },
        loadAll: function(n) {
            var t = this, e = this._settings;
            hn(n, e).forEach(function(n) {
                T(n, t), ln(n, e, t);
            });
        },
        restoreAll: function() {
            var n = this._settings;
            mn(n).forEach(function(t) {
                fn(t, n);
            });
        }
    }, En.load = function(n, t) {
        var e = c(t);
        ln(n, e);
    }, En.resetStatus = function(n) {
        A(n);
    }, t && function(n, t) {
        if (t) {
            if (t.length) for(var e, i = 0; e = t[i]; i += 1)l(n, e);
            else l(n, t);
        }
    }(En, window.lazyLoadOptions), En;
});

},{}],"8J1IW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class storage {
    constructor(dataLang){
        this.dataLang = document.querySelectorAll(dataLang);
        this.init();
    }
    init() {
        // если язык сохранен в LocalStorage делаем редирект на страницу языка, если новый гость то открываем модалку
        if (typeof Storage !== "undefined") {
            this.storageController();
            if (this.getLocalStorage("lang") == null && document.querySelector(".p-main")) this.modalSwitchLang();
            else if (!document.querySelector(".p-error")) {
                let projectUrl = document.querySelector(".js-lang a[data-lang='" + this.getLocalStorage("lang") + "']");
            // this.redirectLang(projectUrl, this.getLocalStorage('lang'));
            }
        }
    }
    setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    getLocalStorage(key) {
        let getStorage = localStorage.getItem(key);
        return getStorage;
    }
    storageController() {
        // при клике на data-lang созраняем значение в LocalStorage и переключаем язык если он существует
        this.dataLang.forEach((lang)=>{
            lang.addEventListener("click", (event)=>{
                // event.preventDefault();
                let langCode = event.target.getAttribute("data-lang");
                this.setLocalStorage("lang", langCode);
                let projectUrl = document.querySelector(".js-lang a[data-lang='" + this.getLocalStorage("lang") + "']");
                this.redirectLang(projectUrl, langCode);
            });
        });
    }
    projectLangExist(langCode) {
        if (document.querySelector(".js-lang a[data-lang='" + langCode + "']")) return true;
        else return false;
    }
    redirectLang(projectUrl, langCode) {
        // зыкрываем модальные окна и переключаем на язык если он существует, если нет то на главную страницу указанного языка
        document.querySelector('.js-modal-lang [data-modal="close"]').click();
        document.querySelector(".l-modal-container").classList.remove("is-half-opacity");
        if (projectUrl == location.href) return false;
        else if (location.href.includes("?") || location.href.includes("page")) return false;
        else if (this.projectLangExist(langCode)) projectUrl;
        else projectUrl = window.location.origin + "/" + langCode;
        location.assign(projectUrl);
    }
    modalSwitchLang() {
        // модальное окно
        document.querySelector('[data-modal="#modal-lang"]').click();
        document.querySelector(".l-modal-container").classList.add("is-half-opacity");
        if (document.querySelector(".js-modal-change-lang")) {
            const modalLangChange = document.querySelector(".js-modal-change-lang");
            const modalLangBox = document.querySelector(".c-modal__lang-box.is-first");
            modalLangChange.addEventListener("click", (event)=>{
                modalLangBox.classList.add("d-none");
                document.querySelector(".c-modal__lang-box.is-second").classList.add("d-flex");
            });
        }
    }
}
exports.default = storage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"7zsXE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function readMore() {
    if (document.querySelector(".js-read-more")) {
        const readMore = document.querySelector(".js-read-more");
        const readMoreBtn = document.querySelector(".js-read-more-btn");
        const readMoreTxt = document.querySelector(".js-read-more-text");
        const readMoreHeight = readMoreTxt.offsetHeight;
        readMoreTxt.classList.add("is-close");
        readMoreBtn.addEventListener("click", ()=>{
            if (readMoreBtn.classList.contains("is-open")) {
                readMoreBtn.classList.remove("is-open");
                readMoreTxt.classList.remove("is-open");
                readMoreTxt.classList.add("is-close");
            } else {
                readMoreBtn.classList.add("is-open");
                readMoreTxt.classList.add("is-open");
                readMoreTxt.classList.remove("is-close");
                readMoreTxt.style.maxHeight = readMoreHeight + "px";
            }
        });
    }
}
exports.default = readMore;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"dos1y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiperBundle = require("../../../node_modules/swiper/swiper-bundle");
var _swiperBundleDefault = parcelHelpers.interopDefault(_swiperBundle);
// import Swiper, { Navigation, Pagination } from 'swiper';
function swiperFn() {
    const bannerSlider = document.querySelectorAll(".js-banner-slider");
    const productSlider = document.querySelectorAll(".js-product-row");
    const productImageSlider = document.querySelectorAll(".js-product-image");
    if (bannerSlider.length) bannerSlider.forEach((slider)=>{
        new (0, _swiperBundleDefault.default)(slider);
    });
    if (productImageSlider.length && window.innerWidth <= 991) productImageSlider.forEach((slider)=>{
        new (0, _swiperBundleDefault.default)(slider, {
            watchOverflow: true,
            spaceBetween: 7,
            autoHeight: false,
            zoom: {
                maxRatio: 1.6
            },
            autoplay: {
                delay: 2500,
                stopOnLastSlide: false,
                disableOnInteraction: true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: "auto",
                    freeMode: {
                        enabled: true,
                        sticky: true
                    }
                }
            }
        });
    });
    if (productSlider.length) productSlider.forEach((slider)=>{
        let sliderContainer = slider.closest(".js-slider-container");
        let sliderArrows = sliderContainer.querySelector(".c-arrow");
        let navArrows = false;
        let countArrows = false;
        if (sliderArrows) {
            let next = sliderArrows.querySelector(".js-next");
            let prev = sliderArrows.querySelector(".js-prev");
            let countEl = sliderArrows.querySelector(".c-arrow__count");
            navArrows = {
                nextEl: next,
                prevEl: prev
            };
            countArrows = {
                el: countEl,
                type: "fraction"
            };
        }
        new (0, _swiperBundleDefault.default)(slider, {
            slidesPerView: "auto",
            watchOverflow: true,
            autoplay: {
                delay: 2500,
                stopOnLastSlide: false,
                disableOnInteraction: true
            },
            navigation: navArrows,
            pagination: countArrows
        });
    });
}
exports.default = swiperFn;

},{"../../../node_modules/swiper/swiper-bundle":"jcfb3","@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"k7Nli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function dropdown() {
    const dropdown = document.querySelector(".js-dropdown");
    function dropdownList(element) {
        let dropdownBox = element.querySelector(".c-dropdown__list");
        if (dropdownBox !== null) {
            if (element.classList.contains("is-active")) element.classList.remove("is-active");
            else element.classList.add("is-active");
        }
    }
    dropdown.addEventListener("click", function(event) {
        dropdownList(this);
    });
    document.addEventListener("click", function(event) {
        let target = event.target.className;
        var isClickInsideElement = dropdown.contains(event.target);
        if (!isClickInsideElement) dropdown.classList.remove("is-active");
    });
}
exports.default = dropdown;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"eKfmm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function menu() {
    if (window.innerWidth <= 576) {
        const menuItem = document.querySelector(".c-mobile-menu__item");
        const menuParent = document.querySelector(".c-mobile-menu__item-parent");
        const menuBack1 = document.querySelector(".js-mobile-menu-back");
        if (menuParent) menuParent.addEventListener("click", function(event) {
            showList(event.currentTarget);
        });
        if (menuBack1) menuBack1.addEventListener("click", function(event) {
            menuBack1(event.currentTarget);
        });
        function showList(el) {
            const submenu = el.nextElementSibling;
            submenu.classlist.add("is-active");
            submenu.closest(".c-mobile-menu__item").classlist.add("is-show");
            if (submenu) menuBack1.classlist.add("is-active");
        }
        function menuBack(el) {
            if (menuItem.classlist.contains("is-show")) {
                document.querySelector(".c-mobile-menu__item-sub").classlist.remove("is-active");
                menuItem.classlist.remove("is-show");
                el.classlist.remove("is-active");
            }
        }
    }
}
exports.default = menu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"cJQa1":[function(require,module,exports) {
// import imagesLoaded from 'imagesloaded';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const postTemplate = (post)=>{
    const { id , link , title , price , video , thumb_md , thumb_xl , is_stock , percent , is_sale  } = post;
    let imageHtml = "";
    let saleHtml = "";
    let stockHtml = "";
    if (is_sale) saleHtml = `
      <span class="c-product__sale">-${percent}%</span>
    `;
    if (is_stock === "outofstock") stockHtml = `
      <span class="c-product__sale">Нет в наличии</span>
    `;
    if (video) imageHtml = `
      <a href="${link}" class="c-product__video">
        <video src="${video}" muted playsinline autoplay loop poster="${thumb_md}"></video>
        ${saleHtml}
        ${stockHtml}
      </a>
    `;
    else imageHtml = ` 
      <a href="${link}" class="c-product__img">
        <picture>
          <source
            data-srcset="${thumb_xl}"
            media="(min-width: 426px)"
          >
          <source
            data-srcset="${thumb_md}"
            media="(max-width: 425px)"
          >
          <img
            src="data:image/png;base64,TEVITGhbV0IyeWs4cHlvSmFkUiouN2tDTWRuag=="
            data-src="${thumb_md}"
            alt="${title}"
            width="342"
            height="435"
            class="lazy"
          >
        </picture>
        ${saleHtml}
        ${stockHtml}
      </a>
    `;
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 col-6 u-col js-gallery-item">
      <div class="c-product" data-id="${id}">
        ${imageHtml}

        <div class="c-product__text">
          <p class="c-product__text-title">${title}</p>
          <p class="c-price">${price}</p>
        </div>
      </div>
    </div>
  `;
};
const createElementFromHTML = (htmlString)=>{
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
};
function loadMore() {
    const loadMoreBtn = document.querySelector(".js-show-more-product");
    if (loadMoreBtn) {
        const pagination = document.querySelector(".c-pagination ul");
        const paginationLi = pagination.querySelectorAll("li");
        const grid = document.querySelector(".js-load-more");
        loadMoreBtn.addEventListener("click", ()=>{
            document.querySelector(".l-shop__product .js-load-more-icon").classList.add("is-show");
            const postCount = parseInt(loadMoreBtn.getAttribute("data-count"), 10);
            const allPostCount = parseInt(loadMoreBtn.getAttribute("data-all-posts"), 10);
            const allPageCount = parseInt(loadMoreBtn.getAttribute("data-all-pages"), 10);
            const currentPage = parseInt(loadMoreBtn.getAttribute("data-current-page"), 10);
            const postType = loadMoreBtn.getAttribute("data-post-type");
            const postSlug = loadMoreBtn.getAttribute("data-slug");
            const category = loadMoreBtn.getAttribute("data-category");
            if (postCount >= allPostCount) {
                loadMoreBtn.style.display = "none";
                document.querySelector(".l-shop__product .js-load-more-icon").classList.remove("is-show");
                return;
            }
            showMore({
                postType,
                postCount,
                postSlug,
                category,
                currentPage
            });
        });
        const showMore = async ({ postType , postCount , postSlug , category , currentPage  })=>{
            const params = new URLSearchParams();
            params.set("postType", postType);
            params.set("offset", postCount * currentPage);
            params.set("slug", postSlug);
            params.set("taxonomy", category);
            params.set("page", currentPage + 1);
            const response = await fetch(`${window.ajax.url}?action=showMoreProducts`, {
                method: "POST",
                body: params
            });
            const result = await response.json();
            // console.log(result);
            if (result.products === "nomore") {
                document.querySelector(".l-shop__product .js-load-more-icon").classList.remove("is-show");
                loadMoreBtn.style.display = "none";
                return;
            }
            const fragment = document.createDocumentFragment();
            result.products.forEach((post)=>{
                const elem = createElementFromHTML(postTemplate(post));
                fragment.appendChild(elem);
            });
            grid.appendChild(fragment);
            lazyLoadInstance.update();
            document.querySelector(".l-shop__product .js-load-more-icon").classList.remove("is-show");
            loadMoreBtn.setAttribute("data-current-page", currentPage + 1);
            const resultFilter = Array.from(paginationLi).find((element)=>element.innerText == currentPage + 1);
            if (resultFilter) resultFilter.classList.add("is-active");
        };
    }
}
exports.default = loadMore;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"ZVlin":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function quickBuy() {
    const quickBuyForm = document.querySelector(".js-quick-buy-form");
    const targetNode = document.querySelector(".woocommerce-variation-add-to-cart .variation_id");
    const quickBuyBtn = document.querySelector(".js-quick-add-to-card");
    const notification = document.querySelector(".js-product-form-notification");
    const string = document.body.getAttribute("data-language") == "ru" ? "Выберите размер" : "Виберіть розмір";
    const buttonFn = ()=>{
        if (quickBuyBtn.classList.contains("is-disabled")) {
            quickBuyBtn.setAttribute("data-modal", "");
            quickBuyBtn.addEventListener("click", (event)=>{
                if (quickBuyBtn.classList.contains("is-disabled")) notification.textContent = string;
            });
        } else {
            quickBuyBtn.setAttribute("data-modal", "#quick-buy");
            notification.textContent = "";
        }
    };
    buttonFn();
    if (targetNode) {
        const config = {
            attributes: true
        };
        const callback = (mutationList, observer)=>{
            for (const mutation of mutationList)if (mutation.attributeName === "value" && document.querySelector(".single_variation_wrap .woocommerce-variation-availability .out-of-stock") === null) {
                document.querySelector(".js-quick-buy-variation").value = targetNode.value;
                quickBuyBtn.classList.remove("is-disabled");
                buttonFn();
            } else {
                quickBuyBtn.classList.add("is-disabled");
                buttonFn();
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    quickBuyForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const email = quickBuyForm.querySelector('[name="email"]').value;
        const name = quickBuyForm.querySelector('[name="name"]').value;
        const surname = quickBuyForm.querySelector('[name="surname"]').value;
        const phone = quickBuyForm.querySelector('[name="phone"]').value;
        const city = quickBuyForm.querySelector('[name="city"]').value;
        const address = quickBuyForm.querySelector('[name="address"]').value;
        const variation_id = quickBuyForm.querySelector('[name="variation_id"]').value;
        const product_id = quickBuyForm.querySelector('[name="product_id"]').value;
        ajax({
            email,
            name,
            surname,
            phone,
            city,
            address,
            variation_id,
            product_id
        });
    });
    const ajax = async (data)=>{
        quickBuyForm.querySelector(".js-load-more-icon").classList.add("is-show");
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(data))params.set(key, value);
        const response = await fetch(`${window.ajax.url}?action=quickBuy`, {
            method: "POST",
            body: params
        });
        const result = await response.json();
        // console.log(result);
        quickBuyForm.querySelector(".js-load-more-icon").classList.remove("is-show");
        if (result) {
            quickBuyForm.reset();
            quickBuyForm.querySelector(".js-form-answer").classList.remove("is-error");
            quickBuyForm.querySelector(".js-form-answer").classList.add("is-success");
            quickBuyForm.querySelector(".js-form-answer").textContent = "Заказ успешно оформлен";
            window.location.href = result;
        } else {
            quickBuyForm.querySelector(".js-form-answer").classList.remove("is-success");
            quickBuyForm.querySelector(".js-form-answer").classList.add("is-error");
            quickBuyForm.querySelector(".js-form-answer").textContent = "Что-то пошло не так. Позвоните нашему менеджеру +38 (066) 315 65 36";
        }
    };
}
exports.default = quickBuy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}],"kK52e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GA_add_to_cart", ()=>GA_add_to_cart);
parcelHelpers.export(exports, "GA_remove_from_cart", ()=>GA_remove_from_cart);
parcelHelpers.export(exports, "GA_view_item", ()=>GA_view_item);
parcelHelpers.export(exports, "GA_view_item_list", ()=>GA_view_item_list);
parcelHelpers.export(exports, "GA_select_item", ()=>GA_select_item);
parcelHelpers.export(exports, "GA_purchase", ()=>GA_purchase);
function GA_add_to_cart() {
    const productId = document.querySelector("[data-id]").getAttribute("data-id");
    const productPrice = document.querySelector("[data-price]").getAttribute("data-price");
    const catTag = document.querySelector("[data-categories]").getAttribute("data-categories");
    const button = document.querySelector(".js-product-form .single_add_to_cart_button");
    if (button) {
        let productsGA4 = [];
        button.addEventListener("click", (event)=>{
            if (!button.classList.contains("disabled")) {
                let categories = {};
                let cattArray = catTag.trim().split(", ");
                cattArray.forEach((item, index)=>{
                    if (index == 0) categories["item_category"] = item.trim();
                    else categories["item_category" + (index + 1)] = item.trim();
                });
                productsGA4[0] = {
                    "item_name": document.querySelector(".l-product__name").textContent,
                    "item_id": document.querySelector(".js-product-form").getAttribute("data-product_id"),
                    "price": productPrice,
                    "item_brand": document.querySelector(".l-product__category").textContent,
                    "quantity": 1
                };
                Object.assign(productsGA4[0], categories);
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    "ecommerce": null
                }); // Clear the previous ecommerce object.
                dataLayer.push({
                    "event": "add_to_cart",
                    "ecommerce": {
                        "items": productsGA4
                    }
                });
            // console.log(dataLayer);
            }
        });
    }
}
function GA_remove_from_cart() {
// dataLayer.push({
//   'event': 'remove_from_cart', 
//   'ecommerce': {
//     'items': [{
//     'item_name': '{Название товара}',
//     'item_id': '{ID товара}',
//     'price': '{Цена товара}',
//     'item_brand': '{Производитель}',
//     'item_category': '{Категория товара верхнего уровня}', 
//     'item_list_name': '{Название списка}',
//     'item_list_id': '{ID списка}',
//     'index': '{Позиция товара в списке}', 
//     'quantity': '{Количество}'
//     }]
//   }
// }); 
}
function GA_view_item() {
    const productId = document.querySelector("[data-id]").getAttribute("data-id");
    const productPrice = document.querySelector("[data-price]").getAttribute("data-price");
    const catTag = document.querySelector("[data-categories]").getAttribute("data-categories");
    let productsGA4 = [];
    let categories = {};
    let cattArray = catTag.trim().split(", ");
    cattArray.forEach((item, index)=>{
        if (index == 0) categories["item_category"] = item.trim();
        else categories["item_category" + (index + 1)] = item.trim();
    });
    productsGA4[0] = {
        "item_name": document.querySelector(".l-product__name").textContent,
        "item_id": document.querySelector(".js-product-form").getAttribute("data-product_id"),
        "price": productPrice,
        "item_brand": document.querySelector(".l-product__category").textContent,
        "quantity": 1
    };
    Object.assign(productsGA4[0], categories);
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        "ecommerce": null
    }); // Clear the previous ecommerce object.
    dataLayer.push({
        "event": "view_item",
        "ecommerce": {
            "items": productsGA4
        }
    });
// console.log(dataLayer);
}
function GA_view_item_list() {
    const products = document.querySelectorAll(".js-product-item");
    const catTag = document.querySelector("[data-categories]");
    const catId = document.querySelector("[data-cat-id]").getAttribute("data-cat-id");
    if (products.length) {
        let productsGA4 = [];
        let categories = {};
        let cattArray = catTag.getAttribute("data-categories").trim().split(", ");
        cattArray.forEach((item, index)=>{
            if (index == 0) categories["item_category"] = item.trim();
            else categories["item_category" + (index + 1)] = item.trim();
        });
        products.forEach((item, index)=>{
            const id = item.getAttribute("data-id");
            const name = item.querySelector(".c-product__text-title").textContent;
            const brand = item.getAttribute("data-brand");
            let price = item.querySelector(".c-price bdi").textContent;
            price = price.split(".")[0];
            productsGA4[index] = {
                "item_name": name,
                "item_id": id,
                "price": price,
                "item_brand": brand,
                "item_list_name": "Product category",
                "item_list_id": catId,
                "index": index + 1,
                "quantity": 1
            };
            Object.assign(productsGA4[index], categories);
        });
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            "ecommerce": null
        }); // Clear the previous ecommerce object.
        dataLayer.push({
            "event": "view_item_list",
            "ecommerce": {
                "items": productsGA4
            }
        });
    // console.log(dataLayer);
    }
}
function GA_select_item() {
    const products = document.querySelectorAll(".js-product-item");
    const catTag = document.querySelector("[data-categories]");
    const catId = document.querySelector("[data-cat-id]").getAttribute("data-cat-id");
    if (products.length) {
        let categories = {};
        let cattArray = catTag.getAttribute("data-categories").trim().split(", ");
        cattArray.forEach((item, index)=>{
            if (index == 0) categories["item_category"] = item.trim();
            else categories["item_category" + (index + 1)] = item.trim();
        });
        let productsGA4 = [];
        products.forEach((item, index)=>{
            item.addEventListener("click", (event)=>{
                productsGA4[0] = {
                    "item_name": event.currentTarget.querySelector(".c-product__text-title").textContent,
                    "item_id": event.currentTarget.getAttribute("data-id"),
                    "price": event.currentTarget.querySelector(".c-price bdi").textContent.split(".")[0],
                    "item_brand": event.currentTarget.getAttribute("data-brand"),
                    "item_list_name": "Product category",
                    "item_list_id": catId,
                    "index": index + 1,
                    "quantity": 1
                };
                Object.assign(productsGA4[0], categories);
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    "ecommerce": null
                }); // Clear the previous ecommerce object.
                dataLayer.push({
                    "event": "select_item",
                    "ecommerce": {
                        "items": productsGA4
                    }
                });
            // console.log(dataLayer);
            });
        });
    }
}
function GA_purchase() {
    const products = document.querySelectorAll(".js-order-item");
    const totalPrice = document.querySelector("[data-total]").getAttribute("data-total");
    const transactionId = document.querySelector("[transaction-id]").getAttribute("transaction-id");
    if (products.length) {
        let productsGA4 = [];
        products.forEach((item, index)=>{
            const id = item.getAttribute("data-id");
            const name = item.getAttribute("data-name");
            const brand = item.getAttribute("data-brand");
            const qty = item.getAttribute("data-quantity");
            const price = item.getAttribute("data-price");
            let categories = {};
            let cattArray = item.getAttribute("data-categories").trim().split(", ");
            cattArray.forEach((item, index)=>{
                if (index == 0) categories["item_category"] = item.trim();
                else categories["item_category" + (index + 1)] = item.trim();
            });
            productsGA4[index] = {
                "item_name": name,
                "item_id": id,
                "price": price,
                "item_brand": brand,
                "item_list_name": "Purchase order list",
                "item_list_id": transactionId,
                "index": index + 1,
                "quantity": qty
            };
            Object.assign(productsGA4[index], categories);
        });
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            "ecommerce": null
        }); // Clear the previous ecommerce object.
        dataLayer.push({
            "event": "purchase",
            "ecommerce": {
                "transaction_id": transactionId,
                "value": totalPrice,
                "currency": "UAH",
                "items": productsGA4
            }
        });
    // console.log(dataLayer);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"B6NKQ"}]},["6Ayda","1pyDU"], "1pyDU", "parcelRequire37f4")

//# sourceMappingURL=index2.js.map
