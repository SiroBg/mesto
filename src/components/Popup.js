export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeKey = 'Escape';
    this._bindEscClose = this._handleEscClose.bind(this);
  }

  _handleCloseSettings(evt) {
    if(evt.target.classList.contains('btn_type_close') || evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if(evt.key === this._closeKey) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._bindEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._bindEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleCloseSettings.bind(this));
  }
}
