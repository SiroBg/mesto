export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._info = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
    return this._info;
  }

  setUserInfo(newInfo) {
    this._nameElement.textContent = newInfo.name;
    this._jobElement.textContent = newInfo.job;
  }
}
