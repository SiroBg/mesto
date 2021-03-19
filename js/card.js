class Card {
  constructor(cardSelector, name, link) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
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
    this._element.querySelector('.place__like').addEventListener('click', () => {
      this._handleLike();
    })

    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._handleOpenPopup();
    })

    this._element.querySelector('.place__delete').addEventListener('click', () => {
      this._handleDelete();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__name').textContent = this._name;

    return this._element;
  }

  _handleLike() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleOpenPopup() {
    fullImage.src = this._link;
    fullName.textContent = this._name;
    fullPlace.classList.add('popup_opened');
  }
}
