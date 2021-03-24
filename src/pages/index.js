import './index.css';
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

function addNewCard(item) {
  const card = new Card('#place-template', item, fullPlacePopup.open.bind(fullPlacePopup));
  const newCard = card.generateCard();

  placesContainer.setItem(newCard);
}

const placePopup = new PopupWithForm('#place-popup', (item) => addNewCard({ name: item.title, link: item.image }));

placePopup.setEventListeners();

const placesContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    addNewCard(item);
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
