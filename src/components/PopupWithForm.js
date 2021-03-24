import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._formInputs = this._formElement.querySelectorAll('.popup__form-field');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._formValues = {};
    this._formInputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _setFocusOnFirstInput() {
    this._formInputs[0].focus();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  open() {
    super.open();
    this._setFocusOnFirstInput();
  }
}
