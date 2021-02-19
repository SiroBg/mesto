function showError(formElement, input, formSettings, errorMessage) {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.add(formSettings.inputErrorClass);
  errorElement.classList.add(formSettings.errorClass);
  errorElement.textContent = errorMessage;
}

function hideError(formElement, input, formSettings) {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.remove(formSettings.inputErrorClass);
  errorElement.classList.remove(formSettings.errorClass);
  errorElement.textContent = '';
}

function checkValidity(formElement, input, formSettings) {
  if(!input.validity.valid) {
    showError(formElement, input, formSettings, input.validationMessage);
  } else {
    hideError(formElement, input, formSettings);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

function toggleSubmitButtonState(inputList, submitButton, formSettings) {
  if(hasInvalidInput(inputList)) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(formSettings.inactiveButtonClass);
  } else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(formSettings.inactiveButtonClass);
  }
}

function setEventListeners(formElement, formSettings) {
  const inputList = Array.from(formElement.querySelectorAll(formSettings.inputSelector));
  const submitButton = formElement.querySelector(formSettings.submitButtonSelector);
  toggleSubmitButtonState(inputList, submitButton, formSettings);
  inputList.forEach(input => {
    input.addEventListener('input', function(){
      checkValidity(formElement, input, formSettings);
      toggleSubmitButtonState(inputList, submitButton, formSettings);
    });
  });
}

function enableValidation(formSettings) {
  const formList = Array.from(document.querySelectorAll(formSettings.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    setEventListeners(formElement, formSettings);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.btn_type_submit',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorClass: 'popup__form-error_active'
});
