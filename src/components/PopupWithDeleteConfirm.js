import Popup from './Popup.js';

export default class PopupWithDeleteConfirm extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
    this._confirmButton = this._popup.querySelector('.popup__btn_type_delete');
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => this._handleCardDelete(this._cardId, this._element));
  }

  open(cardId, element) {
    this._element = element;
    this._cardId = cardId;
    super.open();
  }

  removeCard(card) {
    card.remove();
    card = null;
    this.close();
  }
}
