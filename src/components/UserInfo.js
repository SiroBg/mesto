export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._info = {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
    }
    return this._info;
  }

  setUserInfo(newInfo) {
    this._nameElement.textContent = newInfo.name;
    this._jobElement.textContent = newInfo.about;
  }

  setNewAvatar(avatarLink) {
    this._avatarElement.src = avatarLink;
  }
}
