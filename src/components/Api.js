export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getServerUserInfo() {
    return fetch(`${this._baseUrl + '/users/me'}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  setNewUserInfo(info) {
    return fetch(`${this._baseUrl + '/users/me'}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl + '/cards'}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  postNewCard(card) {
    return fetch(`${this._baseUrl + '/cards'}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/' + cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/likes/' + cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/likes/' + cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  patchUserAvatar(avatarLink) {
    return fetch(`${this._baseUrl + '/users/me/avatar'}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }
}
