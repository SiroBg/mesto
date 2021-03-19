import { Card } from './card.js';
import { FormValidator } from './formvalidator.js';

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

const formSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.btn_type_submit',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorSelector: '.popup__form-error',
  errorClass: 'popup__form-error_active'
}

const profileBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('#profile-popup');
const profileForm = profilePopup.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__form-field_type_name');
const jobInput = profileForm.querySelector('.popup__form-field_type_job');
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

const validatedPlaceForm = new FormValidator(formSettings, placeForm);
const validatedProfileForm = new FormValidator(formSettings, profileForm)

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

function setDefaultProfilePlaceholder() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function changeUserInfo() {
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function setFocusForVisibilityPopup(field) {
  setTimeout(function(){
    field.focus();
  }, 100);
}

addInitialPlaces(initialCards);

validatedPlaceForm.enableValidation();
validatedProfileForm.enableValidation();

document.querySelectorAll('.popup').forEach(popup => {
  addCloseEventListeners(popup);
});

profileBtn.addEventListener('click', () => {
  setDefaultProfilePlaceholder();
  validatedProfileForm.clearErrors();
  openPopup(profilePopup);
  setFocusForVisibilityPopup(nameInput);
});

placeAddBtn.addEventListener('click', () => {
  validatedPlaceForm.clearInputs();
  validatedPlaceForm.clearErrors();
  openPopup(placePopup);
  setFocusForVisibilityPopup(titleInput);
});

profileForm.addEventListener('submit', changeUserInfo);

placeForm.addEventListener('submit', () => {
  addNewPlace(titleInput.value, imageInput.value);
  closePopup(placePopup);
});
