import Popup from './Popup.js';

export default class PopupDeleteConfirm extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
  }
}
