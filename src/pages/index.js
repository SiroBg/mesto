import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteConfirm from '../components/PopupWithDeleteConfirm.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import { formSettings } from '../utils/form-settings.js';
import { profileBtn, placeAddBtn, userId, avatarImage } from '../utils/constatnts.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: 'fa79dde9-302f-46b3-8e3b-8f30cf0c7f43',
    'Content-Type': 'application/json'
  }
});

function renderLoading(isLoading, btnElement) {
  if(isLoading) {
    btnElement.classList.add('popup__btn_loading');
  } else {
    btnElement.classList.remove('popup__btn_loading');
  }
}

const fullPlacePopup = new PopupWithImage('#zoom-popup');

fullPlacePopup.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__image');

api.getServerUserInfo()
  .then(data => {
    userInfo.setUserInfo(data);
    userInfo.setNewAvatar(data.avatar);
  })
  .catch(err => {
    console.log(err);
  });

const avatarPopup = new PopupWithForm('#avatar-popup', inputValues => {
  renderLoading(true, avatarPopup._submitBtn);
  api.patchUserAvatar(inputValues.avatar)
    .then(res => {
      userInfo.setNewAvatar(res.avatar);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, avatarPopup._submitBtn));
})

avatarPopup.setEventListeners();

const profilePopup = new PopupWithForm('#profile-popup', inputValues => {
  renderLoading(true, profilePopup._submitBtn);
  api.setNewUserInfo(inputValues)
    .then(res => {
      userInfo.setUserInfo(res);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, profilePopup._submitBtn))
});

profilePopup.setEventListeners();

function handleCardLikes(cardInfo, isLiked, renderLikes) {
  if(!isLiked) {
    api.likeCard(cardInfo._id)
      .then(res => {
        renderLikes(res.likes.length);
      })
      .catch(err => console.log(err));
  } else {
    api.dislikeCard(cardInfo._id)
      .then(res => {
        renderLikes(res.likes.length);
      })
      .catch(err => console.log(err));
  }
}

function addNewCard(item) {
  const card = new Card('#place-template',
    item,
    fullPlacePopup.open.bind(fullPlacePopup),
    confirmationPopup.handleConfirm.bind(confirmationPopup),
    handleCardLikes,
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
  api.deleteCard(cardId)
    .catch(err => console.log(err));
  confirmationPopup.removeCard(card);
});

confirmationPopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', item => {
  renderLoading(true, placePopup._submitBtn);
  api.postNewCard({ name: item.title, link: item.image })
    .then(res => {
      addNewCard(res);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, placePopup._submitBtn))
});

placePopup.setEventListeners();

const validatedPlaceForm = new FormValidator(formSettings, placePopup._formElement);
const validatedProfileForm = new FormValidator(formSettings, profilePopup._formElement);
const validatedAvatarForm = new FormValidator(formSettings, avatarPopup._formElement);

validatedPlaceForm.enableValidation();
validatedProfileForm.enableValidation();
validatedAvatarForm.enableValidation();

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

avatarImage.addEventListener('click', () => {
  validatedAvatarForm.clearErrors();
  avatarPopup.open();
})
