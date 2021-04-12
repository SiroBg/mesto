(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeKey="Escape",this._bindEscClose=this._handleEscClose.bind(this)}var n,r;return n=t,(r=[{key:"_handleCloseSettings",value:function(e){(e.target.classList.contains("btn_type_close")||e.target===e.currentTarget)&&this.close()}},{key:"_handleEscClose",value:function(e){e.key===this._closeKey&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._bindEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._bindEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleCloseSettings.bind(this))}}])&&e(n.prototype,r),t}();function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e);var t,n,u,c,l=(u=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(u);if(c){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=l.call(this,e))._image=t._popup.querySelector(".full-place__image"),t._title=t._popup.querySelector(".full-place__name"),t}return t=f,(n=[{key:"open",value:function(e,t){this._image.src=t,this._title.textContent=e,o(s(f.prototype),"open",this).call(this)}}])&&r(t.prototype,n),f}(t);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._formInputs=n._formElement.querySelectorAll(".popup__form-field"),n._submitBtn=n._formElement.querySelector(".btn_type_submit"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._formInputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_setFocusOnFirstInput",value:function(){var e=this;setTimeout((function(){e._formInputs[0].focus()}),300)}},{key:"setEventListeners",value:function(){var e=this;f(_(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){f(_(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"open",value:function(){f(_(a.prototype),"open",this).call(this),this._setFocusOnFirstInput()}}])&&l(t.prototype,n),a}(t);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleCardDelete=t,n._confirmButton=n._popup.querySelector(".popup__btn_type_delete"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;v(g(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){return e._handleCardDelete(e._cardId,e._element)}))}},{key:"handleConfirm",value:function(e,t){this._element=t,this._cardId=e,v(g(a.prototype),"open",this).call(this)}},{key:"removeCard",value:function(e){e.remove(),e=null,this.close()}}])&&m(t.prototype,n),a}(t);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=t,this._cardInfo=n,this._handleConfirmPopup=o,this._handleOpenPopup=r,this._handleCardLikes=i,this._userId=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_checkOwner",value:function(){return this._userId===this._cardInfo.owner._id}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLike()})),this._imageElement.addEventListener("click",(function(){e._handleOpenPopup(e._cardInfo.name,e._cardInfo.link)})),this._checkOwner()&&this._deleteButton.addEventListener("click",(function(){e._handleConfirmPopup(e._cardInfo._id,e._element)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._titleElement=this._element.querySelector(".place__name"),this._imageElement=this._element.querySelector(".place__image"),this._likeButton=this._element.querySelector(".place__like"),this._likeState=this._isLiked(),this._likeState&&this.likeCard(),this._likeCountContainer=this._element.querySelector(".place__like-counter"),this._deleteButton=this._element.querySelector(".place__delete"),this._checkOwner()||(this._deleteButton.remove(),this._deleteButton=null),this._setEventListeners(),this._imageElement.src=this._cardInfo.link,this._titleElement.textContent=this._cardInfo.name,this._renderLikes(),this._element}},{key:"_isLiked",value:function(){var e=this;return this._cardInfo.likes.some((function(t){return t._id===e._userId}))}},{key:"_renderLikes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._cardInfo.likes.length;this._likeCountContainer.textContent=e}},{key:"_handleLike",value:function(){this._handleCardLikes(this._cardInfo,this._likeState,this._renderLikes.bind(this),this.likeCard.bind(this),this.dislikeCard.bind(this)),this._likeState=!this._likeState}},{key:"likeCard",value:function(){this._likeButton.classList.add("place__like_type_active")}},{key:"dislikeCard",value:function(){this._likeButton.classList.remove("place__like_type_active")}}])&&w(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=t}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}}])&&C(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorSelector=t.errorSelector,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleSubmitButtonState",value:function(){this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._hasInvalidInput()?(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)):(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleSubmitButtonState()}))}))}},{key:"_resetAllErrorFields",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._toggleSubmitButtonState(),this._setEventListeners()}},{key:"clearErrors",value:function(){this._resetAllErrorFields(),this._toggleSubmitButtonState()}}])&&L(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._info={name:this._nameElement.textContent,about:this._jobElement.textContent},this._info}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.about}},{key:"setNewAvatar",value:function(e){this._avatarElement.src=e}}])&&j(t.prototype,n),e}(),P={formSelector:".popup__form",inputSelector:".popup__form-field",submitButtonSelector:".btn_type_submit",inactiveButtonClass:"btn_disabled",inputErrorClass:"popup__form-field_type_error",errorSelector:".popup__form-error",errorClass:"popup__form-error_active"},R=document.querySelector(".profile__edit-btn"),T=document.querySelector(".profile__add-btn"),q=document.querySelector(".profile__image-container");function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){e?t.classList.add("popup__btn_loading"):t.classList.remove("popup__btn_loading")}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}},{key:"getServerUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl+"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setNewUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl+"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/cards/"+e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/cards/likes/"+e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/cards/likes/"+e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"patchUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl+"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}])&&U(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"fa79dde9-302f-46b3-8e3b-8f30cf0c7f43","Content-Type":"application/json"}}),N=new u("#zoom-popup");N.setEventListeners();var V=new B(".profile__name",".profile__job",".profile__image"),F=new O((function(e,t){H(e,t)}),".places");Promise.all([x.getServerUserInfo(),x.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V.setUserInfo(o),V.setNewAvatar(o.avatar),F.renderItems(i,o._id)})).catch((function(e){return console.log(e)}));var J=new d("#avatar-popup",(function(e){A(!0,J._submitBtn),x.patchUserAvatar(e.avatar).then((function(e){V.setNewAvatar(e.avatar),J.close()})).catch((function(e){return console.log(e)})).finally((function(){return A(!1,J._submitBtn)}))}));J.setEventListeners();var z=new d("#profile-popup",(function(e){A(!0,z._submitBtn),x.setNewUserInfo(e).then((function(e){V.setUserInfo(e),z.close()})).catch((function(e){return console.log(e)})).finally((function(){return A(!1,z._submitBtn)}))}));function G(e,t,n,r,o){t?x.dislikeCard(e._id).then((function(e){n(e.likes.length),o()})).catch((function(e){return console.log(e)})):x.likeCard(e._id).then((function(e){n(e.likes.length),r()})).catch((function(e){return console.log(e)}))}function H(e,t){var n=new S("#place-template",e,N.open.bind(N),K.handleConfirm.bind(K),G,t).generateCard();F.setItem(n)}z.setEventListeners();var K=new E("#delete-popup",(function(e,t){x.deleteCard(e).then((function(){K.removeCard(t)})).catch((function(e){return console.log(e)}))}));K.setEventListeners();var M=new d("#place-popup",(function(e){A(!0,M._submitBtn),x.postNewCard({name:e.title,link:e.image}).then((function(e){H(e,e.owner._id),M.close()})).catch((function(e){return console.log(e)})).finally((function(){return A(!1,M._submitBtn)}))}));M.setEventListeners();var $=new I(P,M._formElement),Q=new I(P,z._formElement),W=new I(P,J._formElement);$.enableValidation(),Q.enableValidation(),W.enableValidation(),R.addEventListener("click",(function(){Q.clearErrors(),z._formInputs.forEach((function(e){e.value=V.getUserInfo()[e.name]})),z.open()})),T.addEventListener("click",(function(){$.clearErrors(),M.open()})),q.addEventListener("click",(function(){W.clearErrors(),J.open()}))})();