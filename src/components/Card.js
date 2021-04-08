export default class Card {
  constructor(cardSelector, data, handleOpenPopup, handleConfirmPopup, userId) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likeCount = data.likes;
    this._handleConfirmPopup = handleConfirmPopup;
    this._handleOpenPopup = handleOpenPopup;
    this._userId = userId;
    this._cardOwnerId = data.owner._id;
    this._cardId = data._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  _checkOwner() {
    if(this._userId === this._cardOwnerId) {
      return true;
    }
    return false;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    })

    this._imageElement.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    })

    if(this._checkOwner()) {
      this._deleteButton.addEventListener('click', () => {
        this._handleConfirmPopup(this._cardId, this._element);
      })
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.place__name');
    this._imageElement =this._element.querySelector('.place__image');
    this._likeButton = this._element.querySelector('.place__like');
    this._likeCountContainer = this._element.querySelector('.place__like-counter');
    this._deleteButton = this._element.querySelector('.place__delete');
    if(!this._checkOwner()) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }
    this._setEventListeners();

    this._imageElement.src = this._link;
    this._titleElement.textContent = this._name;
    this._likeCountContainer.textContent = this._likeCount.length;

    return this._element;
  }

  _handleLike() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }
}
