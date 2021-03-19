export class Card {
  constructor(cardSelector, data, handleOpenPopup) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    })

    this._imageElement.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    })

    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.place__name');
    this._imageElement =this._element.querySelector('.place__image');
    this._likeButton = this._element.querySelector('.place__like');
    this._deleteButton = this._element.querySelector('.place__delete');
    this._setEventListeners();

    this._imageElement.src = this._link;
    this._titleElement.textContent = this._name;

    return this._element;
  }

  _handleLike() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }
}
