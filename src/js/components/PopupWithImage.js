import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.full-place__image');
    this._title = this._popup.querySelector('.full-place__name');
  }

  open(name, link) {
    this._image.src = link;
    this._title.textContent = name;
    super.open();
  }
}
