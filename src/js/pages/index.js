import '../../pages/index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/initial-card.js';
import { formSettings } from '../utils/form-settings.js';
import { profileBtn, placeAddBtn } from '../utils/constatnts.js'

const fullPlacePopup = new PopupWithImage('#zoom-popup');

fullPlacePopup.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__job');

const profilePopup = new PopupWithForm('#profile-popup', (inputValues) => {
  userInfo.setUserInfo(inputValues);
});

profilePopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', (inputValues) => {
  const card = new Card('#place-template', { name: inputValues.title, link: inputValues.image }, fullPlacePopup.open.bind(fullPlacePopup));
  const newCard = card.generateCard();

  placesContainer.setItem(newCard);
});

placePopup.setEventListeners();

const placesContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const place = new Card('#place-template', item, fullPlacePopup.open.bind(fullPlacePopup));
    const newPlace = place.generateCard();

    placesContainer.setItem(newPlace);
  }
}, '.places');

placesContainer.renderItems();

const validatedPlaceForm = new FormValidator(formSettings, placePopup._formElement);
const validatedProfileForm = new FormValidator(formSettings, profilePopup._formElement)

validatedPlaceForm.enableValidation();
validatedProfileForm.enableValidation();

profileBtn.addEventListener('click', () => {
  validatedProfileForm.clearErrors();
  profilePopup._formInputs.forEach(input => {
    input.value = userInfo.getUserInfo()[input.name];
  });
  validatedProfileForm._toggleSubmitButtonState();
  profilePopup.open();
});

placeAddBtn.addEventListener('click', () => {
  validatedPlaceForm.clearErrors();
  placePopup.open();
});
