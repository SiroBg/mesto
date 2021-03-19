const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('#profile-popup');
const formElement = profilePopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__form-field_type_name');
const jobInput = formElement.querySelector('.popup__form-field_type_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const placeAddBtn = document.querySelector('.profile__add-btn');
const placePopup = document.querySelector('#place-popup');
const placeForm = placePopup.querySelector('.popup__form');
const titleInput = placePopup.querySelector('.popup__form-field_type_title');
const imageInput = placePopup.querySelector('.popup__form-field_type_image');
const placesContainer = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template').content;
const fullPlace = document.querySelector('#zoom-popup');
const fullImage = fullPlace.querySelector('.full-place__image');
const fullName = fullPlace.querySelector('.full-place__name');
const formSettings = {
  inputSelector: '.popup__form-field',
  errorSelector: '.popup__form-error',
  inputErrorClass: 'popup__form-field_type_error',
  errorActiveClass: 'popup__form-error_active'
};

function addNewPlace(cardName, cardLink) {
  const place = new Card('#place-template', cardName, cardLink);
  const newPlace = place.generateCard();

  placesContainer.prepend(newPlace);
}

function addInitialPlaces(placesArray) {
  placesArray.forEach(card => {
    addNewPlace(card.name, card.link);
  });
}

placeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addNewPlace(titleInput.value, imageInput.value);
  closePopup(placePopup);
});

addInitialPlaces(initialCards);

function resetAllErrorFields(popup, settings) {
  const errorElements = Array.from(popup.querySelectorAll(settings.errorSelector));
  const inputElements = Array.from(popup.querySelectorAll(settings.inputSelector));
  inputElements.forEach(element => {
    element.classList.remove(settings.inputErrorClass);
  });
  errorElements.forEach(element => {
    element.classList.remove(settings.errorActiveClass);
  });
}

function handleProfileForm() {
  const profileSafeButton = profilePopup.querySelector('.btn_type_submit');
  if(profileSafeButton.classList.contains('btn_disabled')) {
    profileSafeButton.classList.remove('btn_disabled');
  }
  resetAllErrorFields(profilePopup, formSettings);
}

function resetAllPopupInputs(popup, inputClass) {
  const inputList = Array.from(popup.querySelectorAll(inputClass));
  inputList.forEach(input => {
    input.value = '';
  });
  resetAllErrorFields(popup, formSettings);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupOnEscape(evt, popup) {
  if(evt.key === 'Escape') {
    closePopup(popup);
  }
}

function closePopupHandle(evt) {
  if(evt.target.classList.contains('btn_type_close') || evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function addCloseEventListeners(popup) {
  popup.addEventListener('mousedown', closePopupHandle);
  window.addEventListener('keydown', (evt) => {
    closePopupOnEscape(evt, popup);
  });
}

document.querySelectorAll('.popup').forEach(popup => {
  addCloseEventListeners(popup);
});

function handlePopup(popup) {
  openPopup(popup);
  addCloseEventListeners(popup);
}

function setDefaultProfilePlaceholder() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  handleProfileForm();
}

function changeUserInfo(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function setFocusForVisibilityPopup(field) {
  setTimeout(function(){
    field.focus();
  }, 100);
}

profileBtn.addEventListener('click', () => {
  setDefaultProfilePlaceholder();
  handlePopup(profilePopup);
  setFocusForVisibilityPopup(nameInput);
});

placeAddBtn.addEventListener('click', () => {
  resetAllPopupInputs(placePopup, formSettings.inputSelector);
  handlePopup(placePopup);
  setFocusForVisibilityPopup(titleInput);
});

formElement.addEventListener('submit', changeUserInfo);
