export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getServerUserInfo() {
    return fetch(`${this._baseUrl + '/users/me'}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  setNewUserInfo(info) {
    return fetch(`${this._baseUrl + '/users/me'}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.job
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl + '/cards'}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
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
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/' + cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/likes/' + cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl + '/cards/likes/' + cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
}
