export default class FormValidator {
  constructor(formSettings, formElement) {
    this._formSelector = formSettings.formSelector;
    this._submitButtonSelector = formSettings.submitButtonSelector;
    this._inactiveButtonClass = formSettings.inactiveButtonClass;
    this._inputErrorClass = formSettings.inputErrorClass;
    this._errorSelector = formSettings.errorSelector;
    this._errorClass = formSettings.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(formSettings.inputSelector));
  }

  _showError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkValidity(input) {
    if(!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    });
  }

  _toggleSubmitButtonState() {
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    if(this._hasInvalidInput()) {
      this._submitButton.setAttribute('disabled', true);
      this._submitButton.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input);
        this._toggleSubmitButtonState();
      });
    });
  }

  _resetAllErrorFields() {
    this._inputList.forEach(input => {
      this._hideError(input);
    });
  }

  enableValidation() {
    this._toggleSubmitButtonState();
    this._setEventListeners();
  }

  clearErrors() {
    this._resetAllErrorFields();
    this._toggleSubmitButtonState();
  }
}
