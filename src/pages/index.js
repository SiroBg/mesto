import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteConfirm from '../components/PopupWithDeleteConfirm.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import { formSettings } from '../utils/form-settings.js';
import { profileBtn, placeAddBtn, userId } from '../utils/constatnts.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: 'fa79dde9-302f-46b3-8e3b-8f30cf0c7f43',
    'Content-Type': 'application/json'
  }
});

const fullPlacePopup = new PopupWithImage('#zoom-popup');

fullPlacePopup.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__job');

api.getServerUserInfo()
  .then(data => {
    userInfo.setUserInfo({ name: data.name, job: data.about });
  })
  .catch(err => {
    console.log(err);
  });

const profilePopup = new PopupWithForm('#profile-popup', (inputValues) => {
  api.setNewUserInfo(inputValues)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, job: res.about });
    })
    .catch(err => {
      userInfo.setUserInfo(inputValues);
      console.log(err);
    })
});

profilePopup.setEventListeners();

function addNewCard(item) {
  const card = new Card('#place-template',
    item,
    fullPlacePopup.open.bind(fullPlacePopup),
    confirmationPopup.handleConfirm.bind(confirmationPopup),
    userId);
  const newCard = card.generateCard();

  placesContainer.setItem(newCard);
}

const placesContainer = new Section(item => {
    addNewCard(item);
  }, '.places');

api.getInitialCards()
  .then(res => {
    placesContainer.renderItems(res);
  })
  .catch(err => {
    console.log(err);
  });

const confirmationPopup = new PopupWithDeleteConfirm('#delete-popup', (cardId, card) => {
  api.deleteCard(cardId);
  confirmationPopup.removeCard(card);
});

confirmationPopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', (item) =>
  api.postNewCard({ name: item.title, link: item.image })
    .then(res => {
      addNewCard(res);
    })
    .catch(err => console.log(err))
);

placePopup.setEventListeners();

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
