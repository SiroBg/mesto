export default class Card {
  constructor(cardSelector, data, handleOpenPopup, handleConfirmPopup, handleCardLikes, userId) {
    this._cardSelector = cardSelector;
    this._cardInfo = data;
    this._handleConfirmPopup = handleConfirmPopup;
    this._handleOpenPopup = handleOpenPopup;
    this._handleCardLikes = handleCardLikes;
    this._userId = userId;
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
    return this._userId === this._cardInfo.owner._id;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    })

    this._imageElement.addEventListener('click', () => {
      this._handleOpenPopup(this._cardInfo.name, this._cardInfo.link);
    })

    if(this._checkOwner()) {
      this._deleteButton.addEventListener('click', () => {
        this._handleConfirmPopup(this._cardInfo._id, this._element);
      })
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.place__name');
    this._imageElement =this._element.querySelector('.place__image');
    this._likeButton = this._element.querySelector('.place__like');
    this._likeState = this._isLiked();
    if(this._likeState) {
      this._likeButton.classList.add('place__like_type_active');
    }
    this._likeCountContainer = this._element.querySelector('.place__like-counter');
    this._deleteButton = this._element.querySelector('.place__delete');
    if(!this._checkOwner()) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }
    this._setEventListeners();

    this._imageElement.src = this._cardInfo.link;
    this._titleElement.textContent = this._cardInfo.name;
    this._renderLikes();

    return this._element;
  }

  _isLiked() {
    return this._cardInfo.likes.some(likeObj => likeObj._id === this._userId);
  }

  _renderLikes(likesNumber = this._cardInfo.likes.length) {
    this._likeCountContainer.textContent = likesNumber;
  }

  _handleLike() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
    this._handleCardLikes(this._cardInfo, this._likeState, this._renderLikes.bind(this));
    this._likeState = !this._likeState;
  }
}
