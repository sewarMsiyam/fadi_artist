/*! elementor - v3.29.0 - 19-05-2025 */
"use strict";(self.webpackChunkelementorFrontend=self.webpackChunkelementorFrontend||[]).push([[313],{4047:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(2890));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:o.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,r=t.elementorType,o=this.documentClasses[r]||this.documentClasses.base;this.documents[n]=new o({$element:e,id:n})}}t.default=_default},7248:(e,t,n)=>{var r=n(6784);n(4846),n(9655);var o=r(n(4970)),s=r(n(3678)),i=r(n(2126)),a=r(n(8891));e.exports=function(e){var t=this;const r={};this.elementsHandlers={"accordion.default":()=>n.e(131).then(n.bind(n,9675)),"alert.default":()=>n.e(707).then(n.bind(n,7243)),"counter.default":()=>n.e(457).then(n.bind(n,3905)),"progress.default":()=>n.e(234).then(n.bind(n,9754)),"tabs.default":()=>n.e(575).then(n.bind(n,3485)),"toggle.default":()=>n.e(775).then(n.bind(n,3049)),"video.default":()=>n.e(180).then(n.bind(n,3774)),"image-carousel.default":()=>n.e(177).then(n.bind(n,4315)),"text-editor.default":()=>n.e(212).then(n.bind(n,5362)),"wp-widget-media_audio.default":()=>n.e(211).then(n.bind(n,2793)),container:s.default,section:i.default,column:a.default},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>n.e(215).then(n.bind(n,4328))),elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-accordion.default"]=()=>n.e(915).then(n.bind(n,8216))),elementorFrontendConfig.experimentalFeatures.container&&(this.elementsHandlers["contact-buttons.default"]=()=>n.e(1).then(n.bind(n,6285)),this.elementsHandlers["floating-bars-var-1.default"]=()=>n.e(336).then(n.bind(n,5199)));const addElementsHandlers=()=>{e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const r=n[1]||null;this.attachHandler(e,t,r)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(t,n){const o=n.$element.data("model-cid");let s;if(o){s=t.prototype.getConstructorID(),r[o]||(r[o]={});const e=r[o][s];e&&e.onDestroy()}const i=new t(n);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`,n.$element,e),o&&(r[o][s]=i)},this.attachHandler=(e,n,r)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";r=r?"."+r:"";const o=e+r;elementorFrontend.hooks.addAction(`frontend/element_ready/${o}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e,elementName:o},!0);else{const r=n();if(!r)return;r instanceof Promise?r.then((n=>{let{default:r}=n;t.addHandler(r,{$element:e,elementName:o},!0)})):t.addHandler(r,{$element:e,elementName:o},!0)}}))}(e,n,r)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){const n=!!t.closest('[data-delay-child-handlers="true"]')&&0!==t.closest('[data-delay-child-handlers="true"]').length;if(elementorFrontend.config.is_static||n)return;const r=jQuery(t),o=r.attr("data-element_type");if(o&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",r,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`,r,e),"widget"===o)){const t=r.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,r,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",o.default),addElementsHandlers()}}},7603:(e,t,n)=>{var r=n(6784);n(4846),n(6211),n(9655),n(8309);var o=r(n(4047)),s=r(n(8767)),i=r(n(5115)),a=r(n(5073)),l=r(n(3126)),d=r(n(8427)),c=r(n(3582)),u=r(n(4901)),h=r(n(4252)),m=r(n(8422)),f=r(n(5896)),g=r(n(4799)),p=r(n(7842)),v=r(n(607)),y=r(n(9807)),b=n(7672);const w=n(5956),_=n(7248);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0"),!1}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()","3.0.0","getKitSettings() and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const r=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let o=r.indexOf(e);for(;o>0;){const e=t[n+"_"+r[o]];if(e||0===e)return e;o--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let r;return r=e[n]?e[n]:e[t],r}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:i.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:g.default,controls:new v.default,anchor_scroll_margin:new y.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(i.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,r){if(r||(r=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,r),r instanceof jQuery){const o=t+"."+e;r.on(o,n)}else r.on(t,n,e);else r.on(t,n)}removeListeners(e,t,n,r){if(r||(r=this.elements.$window),r instanceof jQuery){const o=t+"."+e;r.off(o,n)}else r.off(t,n,e)}debounce(e,t){let n;return function(){const r=this,o=arguments,s=!n;clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(r,o)}),t),s&&e.apply(r,o)}}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:p.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new w,this.breakpoints=new f.default(this.config.responsive),this.storage=new s.default,this.elementsHandler=new _(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),g.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new o.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},8891:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[()=>n.e(557).then(n.bind(n,628))]},3678:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3002);t.default=[()=>n.e(557).then(n.bind(n,628)),()=>n.e(557).then(n.bind(n,3031)),(0,r.createEditorHandler)((()=>n.e(396).then(n.bind(n,9956)))),(0,r.createEditorHandler)((()=>n.e(768).then(n.bind(n,8847)))),(0,r.createEditorHandler)((()=>n.e(768).then(n.bind(n,3323))))]},3002:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createEditorHandler=function createEditorHandler(e){return()=>new Promise((t=>{elementorFrontend.isEditMode()&&e().then(t)}))}},4970:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),r=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),r)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},2126:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3002);t.default=[()=>n.e(77).then(n.bind(n,2439)),()=>n.e(557).then(n.bind(n,628)),()=>n.e(557).then(n.bind(n,3031)),(0,r.createEditorHandler)((()=>n.e(396).then(n.bind(n,9956)))),(0,r.createEditorHandler)((()=>n.e(220).then(n.bind(n,3243))))]},9807:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5724),n(4846),n(7458),n(9655);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'.elementor-element a[href*="#"]',stickyElements:".elementor-element.elementor-sticky"}}}onInit(){this.observeStickyElements((()=>{this.initializeStickyAndAnchorTracking()}))}observeStickyElements(e){new MutationObserver((t=>{for(const n of t)("childList"===n.type||"attributes"===n.type&&n.target.classList.contains("elementor-sticky"))&&e()})).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})}initializeStickyAndAnchorTracking(){const e=this.getAllAnchorLinks(),t=this.getAllStickyElements(),n=[];!t.length>0&&!e.length>0||(this.trackStickyElements(t,n),this.trackAnchorLinks(e,n),this.organizeStickyAndAnchors(n))}trackAnchorLinks(e,t){e.forEach((e=>{const n=this.getAnchorTarget(e),r=this.getScrollPosition(n);t.push({element:n,type:"anchor",scrollPosition:r})}))}trackStickyElements(e,t){e.forEach((e=>{const n=this.getElementSettings(e);if(!n||!n.sticky_anchor_link_offset)return;const{sticky_anchor_link_offset:r}=n;if(0===r)return;const o=this.getScrollPosition(e);t.push({scrollMarginTop:r,type:"sticky",scrollPosition:o})}))}organizeStickyAndAnchors(e){const t=this.filterAndSortElementsByType(e,"sticky"),n=this.filterAndSortElementsByType(e,"anchor");t.forEach(((e,r)=>{this.defineCurrentStickyRange(e,r,t,n)}))}defineCurrentStickyRange(e,t,n,r){const o=t+1<n.length?n[t+1].scrollPosition:1/0;e.anchor=r.filter((t=>{const n=t.scrollPosition>e.scrollPosition&&t.scrollPosition<o;return n&&(t.element.style.scrollMarginTop=`${e.scrollMarginTop}px`),n}))}getScrollPosition(e){let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t}getAllStickyElements(){const e=document.querySelectorAll(this.getSettings("selectors.stickyElements"));return Array.from(e).filter(((e,t,n)=>t===n.findIndex((t=>t.getAttribute("data-id")===e.getAttribute("data-id")))))}getAllAnchorLinks(){const e=document.querySelectorAll(this.getSettings("selectors.links"));return Array.from(e).filter(((e,t,n)=>t===n.findIndex((t=>t.getAttribute("href")===e.getAttribute("href")))))}filterAndSortElementsByType(e,t){return e.filter((e=>t===e.type)).sort(((e,t)=>e.scrollPosition-t.scrollPosition))}isValidSelector(e){return/^#[A-Za-z_][\w-]*$/.test(e)}getAnchorTarget(e){const t=e?.hash;return this.isValidSelector(t)?document.querySelector(t):null}getElementSettings(e){return JSON.parse(e.getAttribute("data-settings"))}}t.default=_default},8422:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=this.isAssetLoaded(n,e)?Promise.resolve(!0):this.loadAsset(n,e)),n.loader}isAssetLoaded(e,t){const n="script"===t?`script[src="${e.src}"]`:`link[href="${e.src}"]`;return!!document.querySelectorAll(n)?.length}loadAsset(e,t){return new Promise((n=>{const r="style"===t?this.getStyleElement(e.src):this.getScriptElement(e.src);r.onload=()=>n(!0),this.appendAsset(e,r)}))}appendAsset(e,t){const n=document.querySelector(e.before);if(n)return void n.insertAdjacentElement("beforebegin",t);const r="head"===e.parent?e.parent:"body";document[r].appendChild(t)}}t.default=AssetsLoader;const n=elementorFrontendConfig.urls.assets,r=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",o=elementorFrontendConfig.version;AssetsLoader.assets={script:{dialog:{src:`${n}lib/dialog/dialog${r}.js?ver=4.9.3`},"share-link":{src:`${n}lib/share-link/share-link${r}.js?ver=${o}`},swiper:{src:`${n}lib/swiper/v8/swiper${r}.js?ver=8.4.5`}},style:{swiper:{src:`${n}lib/swiper/v8/css/swiper${r}.css?ver=8.4.5`,parent:"head"},"e-lightbox":{src:elementorFrontendConfig?.responsive?.hasCustomBreakpoints?`${elementorFrontendConfig.urls.uploadUrl}/elementor/css/custom-lightbox.min.css?ver=${o}`:`${n}css/conditionals/lightbox${r}.css?ver=${o}`},dialog:{src:`${n}css/conditionals/dialog${r}.css?ver=${o}`,parent:"head",before:"#elementor-frontend-css"}}}},607:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let r;return r="object"==typeof e[t]&&n?e[t][n]:e[t],r}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)||elementorFrontend.getCurrentDeviceMode(),o=this.getControlValue(e,t,n);if("widescreen"===r){const r=this.getControlValue(e,`${t}_widescreen`,n);return r||0===r?r:o}const s=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let i=r,a=s.indexOf(r),l="";for(;a<=s.length;){if("desktop"===i){l=o;break}const r=`${t}_${i}`,d=this.getControlValue(e,r,n);if(d||0===d){l=d;break}a++,i=s[a]}return l}}},4252:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(6211);class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(216).then(n.t.bind(n,3942,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),r=elementorFrontend.utils.assetsLoader.load("style","dialog"),o=elementorFrontend.utils.assetsLoader.load("script","share-link"),s=elementorFrontend.utils.assetsLoader.load("style","swiper"),i=elementorFrontend.utils.assetsLoader.load("style","e-lightbox");return Promise.all([e,t,r,o,s,i]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]",slideshow:"[data-elementor-lightbox-slideshow]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links")),$slideshow:jQuery(this.getSettings("selectors.slideshow"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}isLightboxSlideshow(){return 0!==this.elements.$slideshow.length}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),r=elementorFrontend.isEditMode(),o=r&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),s=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(r&&s&&e.preventDefault());if(e.preventDefault(),r&&!elementor.getPreferences("lightbox_in_editor"))return;if(o)return;(await LightboxManager.getLightbox()).createLightbox(t)}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),elementorFrontend.isEditMode()||this.maybeActivateLightboxOnLink()}maybeActivateLightboxOnLink(){this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},4901:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(9655);t.default=class SwiperHandler{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise((t=>{"undefined"!=typeof Swiper?("function"==typeof Swiper&&void 0===window.Swiper&&(window.Swiper=Swiper),t(this.createSwiperInstance(e,this.config))):elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((r=>{const o=parseInt(r);let s;if(o===t.mobile.value||o+1===t.mobile.value)s=0;else if(!t.widescreen||o!==t.widescreen.value&&o+1!==t.widescreen.value){const e=n.findIndex((e=>o===e||o+1===e));s=n[e-1]}else s=o;e.breakpoints[s]=e.breakpoints[r],e.breakpoints[r]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},3582:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(6409);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){e=decodeURI(e);const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let r={};const o=e.match(/settings=(.+)/);o&&(r=JSON.parse(atob(o[1]))),r.previousEvent=event;for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];n(r,...i)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},7672:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},8427:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},3126:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(8427));class VimeoLoader extends o.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=e.match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},5073:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(8427));class YoutubeLoader extends o.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user|shorts)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},8309:(e,t,n)=>{n.p=elementorFrontendConfig.urls.assets+"js/"},5896:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5724),n(4846),n(9655),n(4364);class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),r=n.length;return e="min"===t[n[r-1]].direction?n[r-2]:n[r-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let r;if(n[0]===e)r=320;else if("widescreen"===e)r=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const o=n.indexOf(e);r=t[n[o-1]].value+1}return r}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},4799:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,r&&e.dispatchEvent(new CustomEvent(r,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;t.default=Events},5956:(e,t,n)=>{n(5724);e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,r,o){var s,i,a;if(n[e][t])if(r)if(s=n[e][t],o)for(a=s.length;a--;)(i=s[a]).callback===r&&i.context===o&&s.splice(a,1);else for(a=s.length;a--;)s[a].callback===r&&s.splice(a,1);else n[e][t]=[]}function _addHook(e,t,r,o,s){var i={callback:r,priority:o,context:s},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===r)return l=!0,!1})),l)return;a.push(i),a=function _hookInsertSort(e){for(var t,n,r,o=1,s=e.length;o<s;o++){for(t=e[o],n=o;(r=e[n-1])&&r.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[i];n[e][t]=a}function _runHook(e,t,r){var o,s,i=n[e][t];if(!i)return"filters"===e&&r[0];if(s=i.length,"filters"===e)for(o=0;o<s;o++)r[0]=i[o].callback.apply(i[o].context,r);else for(o=0;o<s;o++)i[o].callback.apply(i[o].context,r);return"filters"!==e||r[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),r=n.shift();return"string"==typeof r?_runHook("filters",r,n):e},addFilter:function addFilter(t,n,r,o){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,r=parseInt(r||10,10),o),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),r=n.shift();return"string"==typeof r&&_runHook("actions",r,n),e},addAction:function addAction(t,n,r,o){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,r=parseInt(r||10,10),o),e}},e}},5115:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,r=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),o=matchUserAgent("Firefox"),s=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),i=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!i&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||r),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d,u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:o,ie:i,mac:matchUserAgent("Macintosh"),opera:r,safari:s,webkit:matchUserAgent("AppleWebKit")};t.default=u},8767:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(9655);class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let r=n.getItem("elementor");r=r?JSON.parse(r):{},r.__expiration||(r.__expiration={});const o=r.__expiration;let s=[];e?o[e]&&(s=[e]):s=Object.keys(o);let i=!1;return s.forEach((e=>{new Date(o[e])<new Date&&(delete r[e],delete o[e],i=!0)})),i&&this.save(r,t.session),e?r[e]:r}set(e,t,n){n=n||{};const r=this.get(null,n);if(r[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),r.__expiration[e]=t.getTime()}this.save(r,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},7842:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(30).then(n.bind(n,241))))}}t.default=_default},3852:(e,t,n)=>{var r=n(735),o=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+o(e)+" as a prototype")}},1780:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8223:(e,t,n)=>{var r=n(4762),o=Error,s=r("".replace),i=String(new o("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(i);e.exports=function(e,t){if(l&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},680:(e,t,n)=>{var r=n(4762),o=n(8120);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},2429:(e,t,n)=>{var r=n(1483),o=n(1704),s=n(1953);e.exports=function(e,t,n){var i,a;return s&&r(i=t.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&s(e,a),e}},735:(e,t,n)=>{var r=n(1704);e.exports=function(e){return r(e)||null===e}},3963:(e,t,n)=>{var r=n(1807),o=n(8120),s=n(2293),i=n(41),a=n(8660),l=n(8901),d=a((function(){var e=this.iterator,t=s(r(this.next,e));if(!(this.done=!!t.done))return l(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function map(e){return s(this),o(e),new d(i(this),{mapper:e})}},7969:(e,t,n)=>{var r=n(6261);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},1953:(e,t,n)=>{var r=n(680),o=n(1704),s=n(3312),i=n(3852);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=r(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,r){return s(n),i(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},6261:(e,t,n)=>{var r=n(6145),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},3991:(e,t,n)=>{var r=n(8612),o=n(3963);r({target:"Iterator",proto:!0,real:!0,forced:n(9557)},{map:o})},4364:(e,t,n)=>{n(3991)},6409:(e,t,n)=>{var r=n(8612),o=n(5578),s=n(1409),i=n(7738),a=n(5835).f,l=n(5755),d=n(6021),c=n(2429),u=n(7969),h=n(1780),m=n(8223),f=n(382),g=n(9557),p="DOMException",v=s("Error"),y=s(p),b=function DOMException(){d(this,w);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new v(t);return o.name=p,a(r,"stack",i(1,m(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,_="stack"in new v(p),E="stack"in new y(1,2),k=y&&f&&Object.getOwnPropertyDescriptor(o,p),A=!(!k||k.writable&&k.configurable),S=_&&!A&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?b:y});var M=s(p),C=M.prototype;if(C.constructor!==M)for(var L in g||a(C,"constructor",i(1,M)),h)if(l(h,L)){var D=h[L],R=D.s;l(M,R)||a(M,R,i(6,D.c))}}},e=>{e.O(0,[941],(()=>{return t=7603,e(e.s=t);var t}));e.O()}]);









/*********************************************/
! function( $ ) {
	"use strict";

	Codevz_Plus.image = function( wpb ) {

		wpb && Codevz_Plus.lightGallery( $( '#' + wpb ).closest( '.cz_wrap' ) );

		$( document.body ).on( 'mouseenter mousemove mouseleave', '.cz_image_caption_sticky', function( e ) {

			if ( e.type === 'mouseleave' ) {

				$( this ).find( '.cz_image_caption' ).fadeOut( 100 );

			} else {

				$( this ).find( '.cz_image_caption' ).fadeIn( 100 ).css(
					{
						top: e.offsetY + 30,
						left: e.offsetX
					}
				);

			}

		});

	};

	Codevz_Plus.image();

}( jQuery );




/****************************************************************** */
/* imagesLoaded PACKAGED v4.1.4 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(e,s),delete n[s]),s.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(t,i){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.imagesLoaded=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function s(e,t){for(var i in t)e[i]=t[i];return e}function r(e,t,i){if(!(this instanceof r))return new r(e,t,i);var n,o=e;return"string"==typeof e&&(o=document.querySelectorAll(e)),o?(this.elements=(n=o,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?d.call(n):[n]),this.options=s({},this.options),"function"==typeof t?i=t:s(this.options,t),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(o||e))}function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}var h=t.jQuery,a=t.console,d=Array.prototype.slice;(r.prototype=Object.create(e.prototype)).options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&m[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background)for(var s=e.querySelectorAll(this.options.background),n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}};var m={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},r.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},r.prototype.addBackground=function(e,t){var i=new n(e,t);this.images.push(i)},r.prototype.check=function(){function t(e,t,i){setTimeout(function(){n.progress(e,t,i)})}var n=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},r.prototype.complete=function(){var e,t=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(e=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[e](this))},(i.prototype=Object.create(e.prototype)).check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},(r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((h=e).fn.imagesLoaded=function(e,t){return new r(this,e,t).jqDeferred.promise(h(this))})})(),r});

/* Isotope PACKAGED v3.0.6 */
!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";function i(h,n,d){(d=d||e||t.jQuery)&&(n.prototype.option||(n.prototype.option=function(t){d.isPlainObject(t)&&(this.options=d.extend(!0,this.options,t))}),d.fn[h]=function(t){if("string"!=typeof t)return o=t,this.each(function(t,e){var i=d.data(e,h);i?(i.option(o),i._init()):(i=new n(e,o),d.data(e,h,i))}),this;var e,s,r,a,u,o,i=l.call(arguments,1);return r=i,u="$()."+h+'("'+(s=t)+'")',(e=this).each(function(t,e){var i,o,n=d.data(e,h);n?(i=n[s])&&"_"!=s.charAt(0)?(o=i.apply(n,r),a=void 0===a?o:a):c(u+" is not a valid method"):c(h+" not initialized. Cannot call methods, i.e. "+u)}),void 0!==a?a:e},o(d))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var l=Array.prototype.slice,n=t.console,c=void 0===n?function(){}:function(t){n.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n];o&&o[s]&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function z(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function I(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function x(t){if(L||(L=!0,(g=document.createElement("div")).style.width="200px",g.style.padding="1px 2px 3px 4px",g.style.borderStyle="solid",g.style.borderWidth="1px 2px 3px 4px",g.style.boxSizing="border-box",(v=document.body||document.documentElement).appendChild(g),_=I(g),S=200==Math.round(z(_.width)),x.isBoxSizeOuter=S,v.removeChild(g)),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=I(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<E;e++){t[b[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var o=i.isBorderBox="border-box"==e.boxSizing,n=0;n<E;n++){var s=b[n],r=e[s],a=parseFloat(r);i[s]=isNaN(a)?0:a}var u=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,d=i.marginLeft+i.marginRight,l=i.marginTop+i.marginBottom,c=i.borderLeftWidth+i.borderRightWidth,m=i.borderTopWidth+i.borderBottomWidth,f=o&&S,p=z(e.width);!1!==p&&(i.width=p+(f?0:u+c));var y=z(e.height);return!1!==y&&(i.height=y+(f?0:h+m)),i.innerWidth=i.width-(u+c),i.innerHeight=i.height-(h+m),i.outerWidth=i.width+d,i.outerHeight=i.height+l,i}var g,v,_}var S,i="undefined"==typeof console?function(){}:function(t){console.error(t)},b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],E=b.length,L=!1;return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i]+"MatchesSelector";if(t[o])return o}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,s){var d={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;d.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},d.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},d.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,s(t,e))return t},d.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.filterFindElements=function(t,o){t=d.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);s(t,o)&&n.push(t);for(var e=t.querySelectorAll(o),i=0;i<e.length;i++)n.push(e[i])}}),n},d.debounceMethod=function(t,e,o){o=o||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,i=this;this[s]=setTimeout(function(){n.apply(i,e),delete i[s]},o)}},d.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},d.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var l=h.console;return d.htmlInit=function(a,u){d.docReady(function(){var t=d.toDashed(u),n="data-"+t,e=document.querySelectorAll("["+n+"]"),i=document.querySelectorAll(".js-"+t),o=d.makeArray(e).concat(d.makeArray(i)),s=n+"-options",r=h.jQuery;o.forEach(function(e){var t,i=e.getAttribute(n)||e.getAttribute(s);try{t=i&&JSON.parse(i)}catch(t){return void(l&&l.error("Error parsing "+n+" on "+e.className+": "+t))}var o=new a(e,t);r&&r.data(e,u,o)})})},d}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,n="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],a={transform:s,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"},u=i.prototype=Object.create(t.prototype);u.constructor=i,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;-1!=o.indexOf("%")&&(s=s/100*a.width),-1!=n.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i,o,n,s=this.position.x,r=this.position.y,a=t==this.position.x&&e==this.position.y;this.setPosition(t,e),!a||this.isTransitioning?(i=t-s,o=e-r,(n={}).transform=this.getTranslate(i,o),this.transition({to:n,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})):this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&(this.css(t.from),this.element.offsetHeight,0),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var h="opacity,"+s.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});u.enableTransition=function(){var t;this.isTransitioning||(t="number"==typeof(t=this.layout.options.transitionDuration)?t+"ms":t,this.css({transitionProperty:h,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1))},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var d={"-webkit-transform":"transform"};u.ontransitionend=function(t){var e,i;t.target===this.element&&(e=this._transn,i=d[t.propertyName]||t.propertyName,delete e.ingProperties[i],function(t){for(var e in t)return;return 1}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this]))},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(l)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(n,s){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(t,e,i,o){return s(n,t,e,i,o)}):"object"==typeof module&&module.exports?module.exports=s(n,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):n.Outlayer=s(n,n.EvEmitter,n.getSize,n.fizzyUIUtils,n.Outlayer.Item)}(window,function(t,e,n,s,o){"use strict";function r(t,e){var i,o=s.getQueryElement(t);o?(this.element=o,h&&(this.$element=h(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(e),i=++d,this.element.outlayerGUID=i,(l[i]=this)._create(),this._getOption("initLayout")&&this.layout()):u&&u.error("Bad element for "+this.constructor.namespace+": "+(o||t))}function a(t){function e(){t.apply(this,arguments)}return(e.prototype=Object.create(t.prototype)).constructor=e}function i(){}var u=t.console,h=t.jQuery,d=0,l={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=r.prototype;s.extend(c,e.prototype),c.option=function(t){s.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=new i(e[n],this);o.push(s)}return o},c._filterFindItemElements=function(t){return s.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=n(this.element)},c._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[t]=i?n(i)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,i){var o;this._emitCompleteOnItems("layout",t),t&&t.length&&(o=[],t.forEach(function(t){var e=this._getItemLayoutPosition(t);e.item=t,e.isInstant=i||t.isLayoutInstant,o.push(e)},this),this._processLayoutQueue(o))},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];return i.length?(i=parseFloat(i))*(m[o]||1):0}(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t;!this._getOption("resizeContainer")||(t=this._getContainerSize())&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},c._getContainerSize=i,c._setContainerMeasure=function(t,e){var i;void 0!==t&&((i=this.size).isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px")},c._emitCompleteOnItems=function(e,t){function i(){s.dispatchEvent(e+"Complete",null,[t])}function o(){++n==r&&i()}var n,s=this,r=t.length;t&&r?(n=0,t.forEach(function(t){t.once(e,o)})):i()},c.dispatchEvent=function(t,e,i){var o,n=e?[e].concat(i):i;this.emitEvent(t,n),h&&(this.$element=this.$element||h(this.element),e?((o=h.Event(e)).type=t,this.$element.trigger(o,i)):this.$element.trigger(t,i))},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){s.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),s.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=i,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=n(t);return{left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom}},c.handleEvent=s.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},s.debounceMethod(r,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=n(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e,i=this._itemize(t);i.length&&(e=this.items.slice(0),this.items=i.concat(e),this._resetLayout(),this._manageStamps(),this.layoutItems(i,!0),this.reveal(i),this.layoutItems(e))},c.reveal=function(t){var i;this._emitCompleteOnItems("reveal",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.reveal()}))},c.hide=function(t){var i;this._emitCompleteOnItems("hide",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.hide()}))},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=s.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getItem(t);e&&i.push(e)},this),i},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),s.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},r.data=function(t){var e=(t=s.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},r.create=function(t,e){var i=a(r);return i.defaults=s.extend({},r.defaults),s.extend(i.defaults,e),i.compatOptions=s.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=a(o),s.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(e,i){"use strict";function o(t){(this.isotope=t)&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=o.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return i.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var t=e(this.isotope.element);return this.isotope.size&&t&&t.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i,o=t+e,n="outer"+e;this._getMeasurement(o,n),this[o]||(i=this.getFirstItemSize(),this[o]=i&&i[n]||this.isotope.size["inner"+e])},n.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},o.modes={},o.create=function(t,e){function i(){o.apply(this,arguments)}return(i.prototype=Object.create(n)).constructor=i,e&&(i.options=e),o.modes[i.prototype.namespace=t]=i},o}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,h){var e=t.create("masonry");e.compatOptions.fitWidth="isFitWidth";var i=e.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){var t,e;this.getContainerWidth(),this.columnWidth||(e=(t=this.items[0])&&t.element,this.columnWidth=e&&h(e).outerWidth||this.containerWidth);var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,n=o/i,s=i-o%i,n=Math[s&&s<1?"round":"floor"](n);this.cols=Math.max(n,1)},i.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,e=h(t);this.containerWidth=e&&e.innerWidth},i._getItemLayoutPosition=function(t){t.getSize();for(var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth),i=Math.min(i,this.cols),o=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),n={x:this.columnWidth*o.col,y:o.y},s=o.y+t.size.outerHeight,r=i+o.col,a=o.col;a<r;a++)this.colYs[a]=s;return n},i._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},i._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},i._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},i._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,i=1<t&&i+t>this.cols?0:i,o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},i._manageStamp=function(t){var e=h(t),i=this._getElementOffset(t),o=this._getOption("originLeft")?i.left:i.right,n=o+e.outerWidth,s=Math.floor(o/this.columnWidth),s=Math.max(0,s),r=Math.floor(n/this.columnWidth);r-=n%this.columnWidth?0:1,r=Math.min(this.cols-1,r);for(var a=(this._getOption("originTop")?i.top:i.bottom)+e.outerHeight,u=s;u<=r;u++)this.colYs[u]=Math.max(a,this.colYs[u])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(r,a){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(t,e,i,o,n,s){return a(r,t,0,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=a(r,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):r.Isotope=a(r,r.Outlayer,r.getSize,r.matchesSelector,r.fizzyUIUtils,r.Isotope.Item,r.Isotope.LayoutMode)}(window,function(t,i,e,o,s,n,r){var a=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=n,d.LayoutMode=r;var u=d.prototype;u._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},u.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this)},u._itemize=function(){for(var t=i.prototype._itemize.apply(this,arguments),e=0;e<t.length;e++){t[e].id=this.itemGUID++}return this._updateItemsSortData(t),t},u._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},u.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},u._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},u.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},u._init=u.arrange,u._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},u._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e},u._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},u._filter=function(t){for(var e=(e=this.options.filter)||"*",i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a,u=t[r];u.isIgnored||((a=s(u))&&i.push(u),a&&u.isHidden?o.push(u):a||u.isHidden||n.push(u))}return{matches:i,needReveal:o,needHide:n}},u._getFilterTest=function(e){return a&&this.options.isJQueryFiltering?function(t){return a(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return o(t.element,e)}},u.updateSortData=function(t){var e=t?(t=s.makeArray(t),this.getItems(t)):this.items;this._getSorters(),this._updateItemsSortData(e)},u._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},u._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var l=function(t){if("string"!=typeof t)return t;var e,i,o=h(t).split(" "),n=o[0],s=n.match(/^\[(.+)\]$/),r=s&&s[1],a=(i=n,(e=r)?function(t){return t.getAttribute(e)}:function(t){var e=t.querySelector(i);return e&&e.textContent}),u=d.sortDataParsers[o[1]];return u?function(t){return t&&u(a(t))}:function(t){return t&&a(t)}};d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},u._sort=function(){var t,e,r,a;this.options.sortBy&&(t=s.makeArray(this.options.sortBy),this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory)),r=this.sortHistory,a=this.options.sortAscending,e=function(t,e){for(var i=0;i<r.length;i++){var o=r[i],n=t.sortData[o],s=e.sortData[o];if(s<n||n<s)return(s<n?1:-1)*((void 0!==a[o]?a[o]:a)?1:-1)}return 0},this.filteredItems.sort(e))},u._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},u._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},u._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout()},u._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},u._manageStamp=function(t){this._mode()._manageStamp(t)},u._getContainerSize=function(){return this._mode()._getContainerSize()},u.needsResizeLayout=function(){return this._mode().needsResizeLayout()},u.appended=function(t){var e,i=this.addItems(t);i.length&&(e=this._filterRevealAdded(i),this.filteredItems=this.filteredItems.concat(e))},u.prepended=function(t){var e,i=this._itemize(t);i.length&&(this._resetLayout(),this._manageStamps(),e=this._filterRevealAdded(i),this.layoutItems(this.filteredItems),this.filteredItems=e.concat(this.filteredItems),this.items=i.concat(this.items))},u._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},u.insert=function(t){var e=this.addItems(t);if(e.length){for(var i,o=e.length,n=0;n<o;n++)i=e[n],this.element.appendChild(i.element);var s=this._filter(e).matches;for(n=0;n<o;n++)e[n].isLayoutInstant=!0;for(this.arrange(),n=0;n<o;n++)delete e[n].isLayoutInstant;this.reveal(s)}};var c=u.remove;return u.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var n=e[o];s.removeFrom(this.filteredItems,n)}},u.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},u._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},u.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/* jPictura v1.2.3, Core v0.1.4 */
var jpictura={core:{}};jpictura.core.debounce=function(a,n,o){var r;return function(){var t=this,e=arguments,i=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||a.apply(t,e)},n),i&&a.apply(t,e)}},jpictura.core.offWindowWidthResize=function(t){jQuery(window).off("."+t)},jpictura.core.onWindowWidthResize=function(t,e){var i=jQuery(window),a=i.width();i.on("resize."+t,function(){var t=i.width();a!==t&&(e(),a=t)})},jpictura.core.heightCalculator=function(t,e,i){function a(t){var e,i,a,n,o,r;n=t,o=h.layout.idealRowHeight,r=h.layout.maxWidthHeightRatio,l=n/(n/o+r),e=t,i=h.layout.idealRowHeight,a=h.layout.maxWidthHeightRatio,u=e<=a*i?(h.debug&&c("The max width/height ratio "+a+" is too big for row width "+e+"px."),e*a):e/((e+0)/i-a),s()}function s(){o=(l+u)/2}var l,u,o,c=e,r=t,h=i;this.getHeight=function(t,e){if(0===t.length)return 0;a(e);var i=function(t,e){for(var i,a,n=0;e<(i=r(t,o,!1,h))?u=o:l=o,s(),a=e<i?!0:!1,e-i>h.algorithm.epsilon&&(a=!0),++n>=h.algorithm.maxIterationCount&&(a=!1),a;);return n>=h.algorithm.maxIterationCount&&h.debug&&c("Max "+n+" iterations reached. Current precision: "+(e-i)+"."),o}(t,e);return function(t,e,i){for(t=Math.floor(t);r(e,t,!0,h)<i&&t++;);return t}(i,t,e)}},function(f){function i(t,e){t.addClass(e.classes.container),t.toggleClass("stretch-images",e.layout.stretchImages),t.toggleClass("center-images",e.layout.centerImages),t.toggleClass("disable-cropping-images",!e.layout.allowCropping),t.toggleClass("fade-in-items",e.effects.fadeInItems);var i,a,n,o,r=t.find(e.selectors.item);r.addClass(e.classes.item),r.find(e.selectors.image).addClass(e.classes.image),i=t,a=r,o=s,(n=e).waitForImages?function(o,r,s,l){function a(t,e){var i,a,n=e.width/e.height;i=n,a=c+"-ratio",t.data(a,i),++u===r.size()&&l(o,r,s)}var u=0;r.each(function(){var t=f(this),e=t.find(s.selectors.image),i=new Image;i.src=e.attr("src"),f(i).load(function(){a(t,i)})})}(i,a,n,o):o(i,a,n)}function s(t,e,i){var a=jpictura.core.debounce(function(){!function(t,e,i){m(t,0);var a,n=(new Date).getTime(),o=0,r=[];do{e.addClass(i.classes.invisible),e.addClass(i.classes.hidden);var s=y(t);r.push(s);var l,u,c=!1;3<=r.length&&(l=r[r.length-3],(u=r[r.length-2])<l&&l===s&&(s=u,c=!0)),function(t,e,o){var r=[],s=t-2*o.layout.rowPadding,l=new o.heightCalculator(W,R,o);e.each(function(){var t,e,i,a,n=f(this);0===r.length||((t=r.slice(0)).push(n),p(t,s,o)&&(e=w(r,s,l,o),i=w(t,s,l,o),a=f.fn.jpictura.evaluate(e,o),f.fn.jpictura.evaluate(i,o)<a||(v(r,s,e,!1,o),r=[]))),r.push(n)});var i=p(r,s,o)||o.layout.justifyLastRow?w(r,s,l,o):o.layout.idealRowHeight;v(r,s,i,!0,o)}(Math.floor(s),e,i);var h,d=y(t);r.push(d),a=!1,s!==d&&(h=r[r.length-2],a=!c||h!==d)}while(a&&++o<=10);var g=(new Date).getTime();10<o&&i.debug?R("Max redraw tries of 10reached. Gallery redraw failed."):i.debug&&R("Gallery redrawn in "+(g-n)+" milliseconds."),m(t,null)}(t,e,i)},i.responsive.debounce);(function(e,i,t){jpictura.core.offWindowWidthResize(c),t.responsive.enabled&&t.responsive.onWindowWidthResize&&jpictura.core.onWindowWidthResize(c,e);var a=c+"-resize-interval",n=i.data(a);{var o;clearInterval(n),i.data(a,null),t.responsive.enabled&&t.responsive.onContainerWidthResize&&(o=y(i),n=setInterval(function(){var t=y(i);t!==o&&(o=t,e())},t.responsive.containerResizeInterval),i.data(a,n))}})(a,t,i),a()}function m(t,e){t.data(c+"-redraw-progress",e)}function p(t,e,i){for(var a=(t.length-1)*i.layout.itemSpacing,n=0;n<t.length;n++)a+=b(t[n],i.layout.idealRowHeight,i);return e<a}function w(t,e,i,a){var n=I(t,e,a);return i.getHeight(t,n)}function v(t,e,i,a,n){for(var o,r,s,l,u,c,h,d,g,f,m,p,w=W(t,i,!0,n),v=I(t,e,n),y={row:t,width:e,height:i,isLastRow:a,itemsSpaceWidth:v,itemsWidthDelta:w-v,unassignedItemsWidthDelta:w-v},R=(m=n,(p=t.slice(0)).sort(function(t,e){return j(e,!0,m)-j(t,!0,m)}),p),C=0;C<R.length;C++)o=R[C],s=n,0,l=(r=y).row,u=r.isLastRow,c=o===l[0],h=o===l[l.length-1],d=function(t,e,i){var a=b(t,e.height,i),n=function(t,e){if(e.unassignedItemsWidthDelta<=0)return 0;var i=Math.ceil(t/e.itemsSpaceWidth*e.itemsWidthDelta);return e.unassignedItemsWidthDelta<i&&(i=e.unassignedItemsWidthDelta),e.unassignedItemsWidthDelta-=i,i}(a,e);return Math.floor(a)-n}(o,r,s),g=r.height,f=o.find(s.selectors.image),function(t,e,i){t.width(e),t.height(i)}(o,d,g),function(t,e){t.removeClass(e.classes.invisible),t.removeClass(e.classes.hidden)}(o,s),function(t,e,i,a,n){t.toggleClass(n.classes.lastRow,e),t.toggleClass(n.classes.firstInRow,i),t.toggleClass(n.classes.lastInRow,a)}(o,u,c,h,s),function(t,e,i,a){var n={left:"",right:""};a.layout.applyRowPadding&&(n.left=(e?a.layout.rowPadding:0)+"px",n.right=(i?a.layout.rowPadding:0)+"px"),t.css("margin-left",n.left),t.css("margin-right",n.right)}(o,c,h,s),function(t,e,i,a){var n={right:"",bottom:""};a.layout.applyItemSpacing&&(n.right=(e?0:a.layout.itemSpacing)+"px",n.bottom=(i?0:a.layout.itemSpacing)+"px"),t.css("margin-right",n.right),t.css("margin-bottom",n.bottom)}(o,h,u,s),function(t,e,i,a){var n=j(t,!1,a)*i;t.toggleClass("stretch-by-height",e<=n),t.toggleClass("stretch-by-width",n<e);var o=function(t,e,i){return Math.abs(t-e)>i.layout.croppingEpsilon}(n,e,a);t.toggleClass("cropped-if-stretched",o)}(o,d,g,s),function(t,e,i){t.toggleClass("horizontal-misfit",function(t,e){return 1<Math.abs(t.width()-e)}(t,e)),t.toggleClass("vertical-misfit",function(t,e){return 1<Math.abs(t.height()-e)}(t,i))}(f,d,g)}function W(t,e,i,a){for(var n=0,o=0;o<t.length;o++){var r=b(t[o],e,a);i&&(r=Math.floor(r)),n+=r}return n}function I(t,e,i){return e-(t.length-1)*i.layout.itemSpacing}function b(t,e,i){return j(t,!0,i)*e}function j(t,e,i){var a,n,o,r,s=c+"-ratio",l=t.data(s);if(void 0===l&&(o=function(t,e){var i=c+"-width",a=t.data(i);{var n;void 0===a&&(n=t.find(e.selectors.image),a=n.prop("naturalWidth"),t.data(i,a))}return a}(a=t,n=i),r=function(t,e){var i=c+"-height",a=t.data(i);{var n;void 0===a&&(n=t.find(e.selectors.image),a=n.prop("naturalHeight"),t.data(i,a))}return a}(a,n),l=o/r,t.data(s,l)),e){if(l<=i.layout.minWidthHeightRatio)return i.layout.minWidthHeightRatio;if(l>=i.layout.maxWidthHeightRatio)return i.layout.maxWidthHeightRatio}return l}function y(t){return parseFloat(window.getComputedStyle(t[0],null).getPropertyValue("width"))}function R(t){window.console&&console.log(e+": "+t)}f.fn.jpictura=function(t){var e=f.extend(!0,{},f.fn.jpictura.defaults,t);return this.each(function(){i(f(this),e)}),this};var e="jPictura",c=e.toLowerCase();f.fn.jpictura.defaults={selectors:{item:".item",image:"img"},classes:{container:c,item:c+"-item",image:c+"-image",lastRow:c+"-last-row",firstInRow:c+"-first-in-row",lastInRow:c+"-last-in-row",invisible:c+"-invisible",hidden:c+"-hidden",offContentFlow:c+"-off-content-flow"},layout:{rowPadding:0,applyRowPadding:!0,itemSpacing:5,applyItemSpacing:!0,idealRowHeight:180,minWidthHeightRatio:1/3,maxWidthHeightRatio:3,stretchImages:!0,allowCropping:!0,croppingEpsilon:3,centerImages:!0,justifyLastRow:!1},effects:{fadeInItems:!1},responsive:{enabled:!0,onWindowWidthResize:!0,onContainerWidthResize:!0,containerResizeInterval:50,debounce:200},waitForImages:!0,heightCalculator:jpictura.core.heightCalculator,algorithm:{epsilon:.01,maxIterationCount:50},debug:!1},f.fn.jpictura.evaluate=function(t,e){return Math.abs(t-e.layout.idealRowHeight)}}(jQuery);

/* Grid */
jQuery( function( $ ) {

	Codevz_Plus.grid = function( wpb ) {

		$( '.cz_grid' ).not( '.slick, .slick .cz_grid' ).codevzPlus( 'grid', function( x ) {

			var gridAnimation = function() {

				var animation = x.attr( 'data-animation' ), items;

				if ( animation ) {

					$( window ).on( 'scroll.grid_animation', function() {

						x.find( '.cz_grid_item:not(.' + animation + ')' ).each( function( i ) {

							var en = $( this ), i = i + 1;

							if ( ! en.hasClass( animation ) && Codevz_Plus.inview( en, 10 ) ) {

								setTimeout(function() {
									en.addClass( animation );
								}, 200 * i );

							}

						});

					}).trigger( 'scroll.grid_animation' );

				}

			};

			// Exclude pagination
			x.find( '.cz_no_grid' ).insertAfter( x );

			// Filters count
			x.prev( '.cz_grid_filters_count' ).find( 'li' ).each( function( i ) {
				var en = $( this ),
					cl = en.data( 'filter' ),
					lt = x.find( cl ).not( '.cz_grid_first, .cz_no_count' ).length;

				if ( ! en.find( 'span' ).length ) {
					en.append( '<span>' + lt + '</span>' );
				} else {
					en.find( 'span' ).html( lt );
				}
			});

			// Justified
			if ( x.hasClass( 'cz_justified' ) ) {

				// Fix items gap
				x.css( 'margin', 0 ).find( '.cz_grid_item > div' ).css( 'margin', 0 );

				var jpictura = {
					selectors: {
						item: '.cz_grid_item',
						image: 'img'
					},
					classes: {
						container: 'cz_justified_con',
						item: 'cz_justified_item',
						image: 'cz_justified_img',
						lastRow: 'cz_justified_last_row',
						firstInRow: 'cz_justified_first',
						lastInRow: 'cz_justified_last',
						invisible: 'cz_justified_invisible',
						hidden: 'cz_justified_hidden',
						offContentFlow: 'cz_justified_off_content_flow'
					},
					layout: {
						rowPadding: 0,
						applyRowPadding: true,
						itemSpacing: parseInt( x.data( 'gap' ) ) || 0,
						applyItemSpacing: true,
						idealRowHeight: parseInt( x.data( 'height' ) ) || 300,
						minWidthHeightRatio: 1 / 3,
						maxWidthHeightRatio: 3,
						stretchImages: true,
						allowCropping: true,
						croppingEpsilon: 3,
						centerImages: true,
						justifyLastRow: true
					},
					effects: {
						fadeInItems: false
					},
					responsive: {
						enabled: true,
						onWindowWidthResize: true,
						onContainerWidthResize: true,
						containerResizeInterval: 50,
						debounce: 200
					},
					waitForImages: true,
					//heightCalculator: jpictura.heightCalculator,
					algorithm: {
						epsilon: 0.01,
						maxIterationCount: 50
					},
					debug: false
				};

				x.jpictura( jpictura );

				// Scroll fix lazyload.
				setTimeout( function() {
					$( window ).trigger( 'scroll.lazyload' );
				}, 500 );

				// Justified Filters
				x.prev( 'ul' ).find( 'li' ).off().on( 'click', function() {
					$( this ).addClass( 'cz_active_filter' ).siblings().removeClass();
					var cFilter = $( this ).attr( 'data-filter' );
					$( cFilter, x ).animate({opacity: '1'});
					$( '.cz_grid_item', x ).not( cFilter ).animate({opacity: '0.1'});

					$( window ).trigger( 'resize' );
				});

			} else {

				// Fix custom masonry element.
				x.find( '> *' ).addClass( 'cz_grid_item' );

				// Fix gallery in offcanvas.
				if ( x.closest( '.offcanvas_area' ).length && ! x.closest( '.active_offcanvas' ).length ) {
					return;
				}

				// Isotope process
				var qsRegex, qsTime, timeout,
					$isotope = x.isotope({
						itemSelector: '.cz_grid_item',
						percentPosition: true,
						originLeft: ( $( 'body' ).hasClass( 'rtl' ) ? false : true )
					});

				// Search in gallery
				if ( x.data( 'search' ) ) {

					x.find( '.cz_grid_search' ).remove();

					x.prev( 'ul' ).append( '<input type="text" class="cz_grid_search" placeholder="' + x.data( 'search' ) + '" />' );

					var $quicksearch = $( '.cz_grid_search' ).on( 'keyup', function() {
						clearTimeout( qsTime );
						qsTime = setTimeout(function() {
							var val = $quicksearch.val();

							qsRegex = new RegExp( val, 'gi' );
							$isotope.isotope({
								filter: function() {
									return qsRegex ? $( this ).text().match( qsRegex ) : true;
								}
							});

							if ( ! val ) {
								x.prev( 'ul' ).find( 'li' ).removeClass( 'cz_active_filter' ).parent().find( 'li:first-child' ).addClass( 'cz_active_filter' );
							} else {
								x.prev( 'ul' ).find( 'li' ).removeClass( 'cz_active_filter' );
							}

							setTimeout(function() {
								$( window ).trigger( 'scroll.lazyload' );
								$( window ).trigger( 'scroll.grid_animation' );
							}, 500 );
						}, 200 );
					});

					x.data( 'search', false );

				}

				// Fix after load on scroll.
				$( window ).on( 'scroll.isotope', function() {

					clearTimeout( timeout );

					timeout = setTimeout( function() {
						$isotope.isotope( 'layout' );
					}, 500 );

				} );

				// temp fix.
				setTimeout( function() {
					$( window ).trigger( 'scroll.isotope' );
				}, 2000 );
				setTimeout( function() {
					$( window ).trigger( 'scroll.isotope' );
				}, 4000 );

				// When image loaded.
				$isotope.imagesLoaded( function() {
					setTimeout( function() {
						$( window ).trigger( 'scroll.isotope' );
					}, 2000 );
				});

				// Fix for WPB tabs.
				$( 'body' ).on( 'click', '.vc_tta-tabs-list, .vc_tta-panel-title', function() {

					setTimeout( function() {
						$isotope.isotope( 'layout' );
					}, 250 );

				});

				// Fix gallery in tab and accordion.
				if ( x.closest( '.cz_tab' ).length ) {
					setTimeout(function() {
						$( '.cz_tab_a, .cz_acc_child' ).on( 'click', function() {
							$isotope.isotope( 'layout' );
						});
					}, 1000 );
				}

				// Isotope Filters
				x.prev( 'ul' ).find( 'li' ).off().on( 'click', function() {

					$( this ).addClass( 'cz_active_filter' ).siblings().removeClass( 'cz_active_filter' );

					$isotope.find( '.cz_grid_item' ).removeClass(function( i, c ) {
						return (c.match(/(^|\s)cz_grid_anim_\S+/g) || []).join( ' ' );
					});

					x.removeAttr( 'data-animation' );

					var cFilter = $( this ).attr( 'data-filter' );
					$isotope.isotope({ filter: cFilter });

					setTimeout(function() {
						//gridAnimation( cFilter );
						$( window ).trigger( 'scroll.lazyload' );
					}, 1000 );

				});
			}

			// Loadmore
			if ( $( '.cz_ajax_loadmore a, .cz_ajax_infinite a' ).length ) {
				$( '.cz_ajax_pagination a' ).off().on( 'click', function(e) {

					var diz = $( this ),
						par = diz.parent(),
						prv = par.prev( '.cz_grid' ),
						dat = prv.data( 'atts' ),
						lod = 'cz_ajax_loading';
					
					if ( diz.hasClass( lod ) ) {
						return;
					}

					// Loading.
					diz.addClass( lod );

					// Loaded posts ids.
					dat['ids'] = '0';
					$( '.cz_grid_item', prv ).each(function() {
						if ( $( this ).data( 'id' ) ) {
							dat['ids'] += ',' + $( this ).data( 'id' );
						}
					});

					// Send.
					$.ajax({
						type: "GET",
						url: $( 'body' ).data( 'ajax' ) || ajaxurl,
						dataType: 'html',
						data: dat,
						success: function( data ) {
							if ( data == '' ) {
								diz.html( dat.loadmore_end ).addClass( 'cz_ajax_end' ).attr( 'disabled', 'disabled' );
							}

							var data = $( data );

							// Scroll fix lazyload.
							setTimeout( function() {
								$( window ).trigger( 'scroll.lazyload' );
							}, 500 );

							if ( x.hasClass( 'cz_justified' ) ) {

								$( '> div', data ).css( 'margin', 0 );
								x.append( data );
								x.jpictura( jpictura );

							} else {

								prv.isotope( 'insert', data );
								setTimeout(function() {
									prv.imagesLoaded( function() {
										prv.isotope( 'layout' );
									});
								}, 100 );
								if ( prv.data( 'animation' ) ) {
									prv.find( '.cz_grid_item' ).css( 'opacity', 0 );
								}
							}

							setTimeout(function() {
								
								gridAnimation();

								$( window ).trigger( 'scroll.lazyload' );
								$( window ).trigger( 'scroll.grid_animation' );

							}, 500 );

							diz.removeClass( lod );
						},
						error: function() {
							diz.removeClass( lod ).removeClass( 'cz_ajax_end' ).removeAttr( 'disabled' );
						}
					});

					e.preventDefault();
				});
			}

			// Loadmore infinite scroll
			$( '.cz_ajax_infinite a' ).codevzPlus( 'infinite', function() {
				var en = $( this ), ld = 'cz_ajax_loading';

				$( window ).on( 'scroll.cz_infinite_ajax', function() {
					if ( ! en.hasClass( ld ) && ! en.hasClass( 'cz_ajax_end' ) && Codevz_Plus.inview( en ) ) {
						$( '.cz_ajax_pagination a' ).trigger( 'click' );
					}
				});
			});

			gridAnimation();

			// Update lightbox for page builder.
			wpb && Codevz_Plus.lightGallery( x );

		});
	};

	Codevz_Plus.grid();

});









/******************************************************** */
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        // If any child element receives focus within the slider we need to pause the autoplay
        _.$slider
            .off('focus.slick blur.slick')
            .on(
                'focus.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    setTimeout(function() {
                        if( _.options.pauseOnFocus ) {
                            if ($sf.is(':focus')) {
                                _.focussed = true;
                                _.autoPlay();
                            }
                        }
                    }, 0);
                }
            ).on(
                'blur.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    // When a blur occurs on any elements within the slider we become unfocused
                    if( _.options.pauseOnFocus ) {
                        _.focussed = false;
                        _.autoPlay();
                    }
                }
            );
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {
        var _ = this,
            pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                pagerQty = 1;
            } else {
                pagerQty = Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) + 1;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) + 1;
        } else {
            pagerQty = Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) + 1;
        }
        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            max = _.slideCount,
            slidesToScroll = _.options.slidesToScroll;

        return Array.from({ length: Math.ceil(max / slidesToScroll) }, (v, i) => i * slidesToScroll);
    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;

        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;

        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function(index, slide) {

                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += (slideOuterWidth / 2);
                }

                slideRightBoundary = slideOffset + (slideOuterWidth);

                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToScroll),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq( _.options.slidesToShow + _.slideCount + 1 )
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true)
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true)
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

jQuery( function( $ ) {

	Codevz_Plus.slick = function( wpb, slick ) {

		$( '[data-slick]' ).not( '.cz_popup_modal:not(.cz_show_popup) [data-slick]' ).codevzPlus( 'slick', function( x ) {

			var opt = x.data( 'slick' ),
				selector = function( selector ) {
					if ( typeof opt.selector != 'undefined' && $( opt.selector, selector ).length ) {
						return $( opt.selector, selector );
					} else if ( $( '.cz_grid', selector ).length ) {
						$( '.cz_grid_first, .cz_no_grid', selector ).remove();
						return $( '.cz_grid', selector );
					} else if ( $( '.products', selector ).length ) {
						return $( '.products', selector );
					} else {
						return selector;
					}
				},
				dis = selector( x ),
				sls = '> .vc_element, .slick-track > .vc_element, .slick-track >.cz_grid_item, .slick-slide:not(.slick-cloned) > div > *';

			// FIX
			if ( dis.hasClass( 'slick-initialized' ) ) {
				return;
			}

			// Add arrows.
			opt.prevArrow = '<button type="button" class="slick-prev" aria-label="Previous"><i class="' + x.data( 'slick-prev' ) + '"></i></button>';
			opt.nextArrow = '<button type="button" class="slick-next" aria-label="Next"><i class="' + x.data( 'slick-next' ) + '"></i></button>';

			// Sync with another carousel
			if ( x.data( 'sync' ) ) {

				x.removeClass( x.data( 'class' ) );
				dis.addClass( x.data( 'class' ) );

				$( '.cz_disable_links a' ).on( 'click', function( e ) {
					e.preventDefault();
				});

			}

			// Front-end
			if ( dis.closest( '.vc_cz_carousel' ).length && $( sls, dis ).length ) {

				var slides = $( sls, dis );
				dis.removeClass( 'slick-initialized slick-slider slick-dotted' );

				// Fix front-end editor
				if ( $( '.compose-mode' ).length ) {
					dis.html( '' );
				}

				// Add Slides
				slides.addClass( 'slicked' ).removeClass( 'slick-slide slick-current slick-cloned slick-active slick-center' ).removeAttr( 'style data-slick-index aria-describedby' );
				slides.appendTo( dis );

			}

			// On init.
			if ( opt.counts ) {

				// Counter.
				dis.on( 'init reInit beforeChange', function( event, slick, currentSlide, nextSlide ) {

					setTimeout( function() {

						if ( ! dis.find( '.xtra-slick-counts' ).length ) {

							dis.append( '<div class="xtra-slick-counts"><span class="xtra-slick-current">1</span><span class="xtra-slick-separator"> / </span><span class="xtra-slick-all">' + dis.find( '.slick-slide' ).length + '</span></div>' );

						}

					}, 1000 );

					dis.find( '.xtra-slick-current' ).html( nextSlide + 1 );

				});

			}

			// By mouse wheel/scroll.
			if ( dis.hasClass( 'cz_mousewheel' ) || dis.closest( '.cz_mousewheel' ).length ) {

				slick = dis.slick( opt );

				slick.on( 'mousewheel DOMMouseScroll', function ( e ) {

					var delta = e.deltaY || e.originalEvent.wheelDelta;

					slick.slick( e.originalEvent.wheelDelta < 0 ? 'slickNext' : 'slickPrev' );

					e.preventDefault();

				});

			// Slick.
			} else {

				slick = dis.slick( opt );

			}

			setTimeout( function() {

				dis.slick( 'refresh' );

                // SVG cursor on carousel.
                if ( $( '.codevz-carousel-cursor' ).length ) {

                    if ( ! $( '.codevz-carousel-cursor-svg' ).length ) {

                      $( 'body' ).append(`
                        <svg class="codevz-carousel-cursor-svg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                          style="position: absolute; pointer-events: none;opacity:0;transform:scale(.7);filter: blur(1); transition: transform .1s linear, filter .1s linear, opacity .1s linear; z-index: 99999999999;">
                          <g filter="url(#filter0_b_1497_20543)">
                            <circle cx="40" cy="40" r="40" fill="#444"></circle>
                          </g>
                          <path d="M55 35L60 39.5L55 44" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                          <path d="M25 35L20 39.5L25 44" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                          <defs>
                            <filter id="filter0_b_1497_20543" x="-14" y="-14" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7"></feGaussianBlur>
                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1497_20543"></feComposite>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1497_20543" result="shape"></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      `);

                    }

                    var svg  = $( '.codevz-carousel-cursor-svg' ),
                        css1 = { transform: 'scale(1)', filter: 'blur(0)', opacity: '1' },
                        css2 = { transform: 'scale(.7)', filter: 'blur(.5px)', opacity: '0' };

                    // Handle mouse movement over .slick-list to update SVG position, scale, blur, and opacity
                    $( '.slick-list' ).each( function() {

                        $( this ).on( 'mousemove', function (e) {

                            const { pageX: mouseX, pageY: mouseY } = e;

                            svg.css({
                                left: mouseX - 40,
                                top: mouseY - 40
                            });

                            $( 'body' ).css( 'cursor', 'none' );

                        }).on( 'mouseenter', function() {
                            svg.css( css1 );
                        }).on( 'mouseleave', function() {
                            setTimeout( function() {
                                svg.css( css2 );
                                $( 'body' ).css( 'cursor', '' );
                            }, 50 );
                        }).on( 'mousedown', function() {
                            svg.css( { transform: 'scale(.7)', opacity: '.5' } );
                        }).on( 'mouseup mouseleave', function() {
                            svg.css( css1 );
                        }).find( 'a, button' ).on( 'mouseenter mouseleave', function(e) {
                            svg.css( e.type === 'mouseenter' ? css2 : css1 );
                        });

                    });

                } // SVG cursor on carousel.

			}, 500 );

			dis.addClass( 'xtra-slick-done' ).find( '.slick-dots button' ).addClass( 'slick-dots-btn' );

			// Fix jumping bug
			slick.on( 'beforeChange', function( e, s, c, n ) {

				if ( n == 0 ) {

					var cls = 'slick-current slick-active';

					setTimeout(function() {

						$( '[data-slick-index="' + s.$slides.length + '"]', dis ).addClass( cls + ( opt.centerMode ? ' slick-center' : '' ) ).next().removeClass( 'slick-center' ).siblings().removeClass( cls );

						for( var i = s.options.slidesToShow - 1; i >= 0; i-- ) {
							$( '[data-slick-index="' + i + '"]', dis ).addClass( cls );
						}

					}, 10 );

				}

			});

			// Refresh for VC content changes.
			if ( wpb && typeof Codevz != 'undefined' ) {

				Codevz.heightChanged( dis, function() {

					setTimeout( function() {

						dis.slick( 'refresh' );

					}, 1500 );

				});

			}

			$( 'body' ).on( 'click', '.vc_tta-tabs-list', function() {

				setTimeout( function() {
					dis.slick( 'refresh' );
				}, 500 );

			});

			// Update lightbox.
			setTimeout( function() {
				Codevz_Plus.lightGallery( dis );
			}, 2000 );

		});
	};

	Codevz_Plus.slick();

});



