import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteConfirm from '../components/PopupWithDeleteConfirm.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import { formSettings } from '../utils/form-settings.js';
import { profileBtn, placeAddBtn, avatarImage } from '../utils/constatnts.js';
import Api from '../components/Api.js';
import renderLoading from '../utils/render-loading.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: 'fa79dde9-302f-46b3-8e3b-8f30cf0c7f43',
    'Content-Type': 'application/json'
  }
});

const fullPlacePopup = new PopupWithImage('#zoom-popup');

fullPlacePopup.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__image');

const placesContainer = new Section((item, userId) => {
  addNewCard(item, userId);
}, '.places');

Promise.all([
  api.getServerUserInfo(),
  api.getInitialCards()
])
  .then(res => {
    const [userData, initialCards] = res;
    userInfo.setUserInfo(userData);
    userInfo.setNewAvatar(userData.avatar);
    placesContainer.renderItems(initialCards, userData._id);
  })
  .catch(err => console.log(err));

const avatarPopup = new PopupWithForm('#avatar-popup', inputValues => {
  renderLoading(true, avatarPopup._submitBtn);
  api.patchUserAvatar(inputValues.avatar)
    .then(res => {
      userInfo.setNewAvatar(res.avatar);
      avatarPopup.close();
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
      profilePopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, profilePopup._submitBtn))
});

profilePopup.setEventListeners();

function handleCardLikes(cardInfo, isLiked, renderLikes, putLike, removeLike) {
  if(!isLiked) {
    api.likeCard(cardInfo._id)
      .then(res => {
        renderLikes(res.likes.length);
        putLike();
      })
      .catch(err => console.log(err));
  } else {
    api.dislikeCard(cardInfo._id)
      .then(res => {
        renderLikes(res.likes.length);
        removeLike();
      })
      .catch(err => console.log(err));
  }
}

function addNewCard(item, userId) {
  const card = new Card('#place-template',
    item,
    fullPlacePopup.open.bind(fullPlacePopup),
    confirmationPopup.handleConfirm.bind(confirmationPopup),
    handleCardLikes,
    userId);
  const newCard = card.generateCard();

  placesContainer.setItem(newCard);
}

const confirmationPopup = new PopupWithDeleteConfirm('#delete-popup', (cardId, card) => {
  api.deleteCard(cardId)
    .then(() => {
      confirmationPopup.removeCard(card);
    })
    .catch(err => console.log(err));
});

confirmationPopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', item => {
  renderLoading(true, placePopup._submitBtn);
  api.postNewCard({ name: item.title, link: item.image })
    .then(res => {
      addNewCard(res, res.owner._id);
      placePopup.close();
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
