import { Card } from './card.js';
import { FormValidator } from './formvalidator.js';
import { initialCards } from './initial-card.js';

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
const fullPlace = document.querySelector('#zoom-popup');
const fullImage = fullPlace.querySelector('.full-place__image');
const fullName = fullPlace.querySelector('.full-place__name');

const validatedPlaceForm = new FormValidator(formSettings, placeForm);
const validatedProfileForm = new FormValidator(formSettings, profileForm)

function addNewPlace(data) {
  const place = new Card('#place-template', data, openPicture);
  const newPlace = place.generateCard();

  placesContainer.prepend(newPlace);
}

function addInitialPlaces(placesArray) {
  placesArray.forEach(card => {
    addNewPlace(card);
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupHandle);
  window.addEventListener('keydown', closePopupOnEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupHandle);
  window.removeEventListener('keydown', closePopupOnEscape);
}

function openPicture(name, link) {
  fullImage.src = link;
  fullName.textContent = name;
  openPopup(fullPlace)
}

function closePopupOnEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupHandle(evt) {
  if(evt.target.classList.contains('btn_type_close') || evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
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
  addNewPlace({
    name: titleInput.value,
    link: imageInput.value
  });
  closePopup(placePopup);
});
