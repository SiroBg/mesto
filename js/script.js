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
const profileCloseBtn = profilePopup.querySelector('.popup__close-btn');
const formElement = profilePopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__form-field_type_name');
const jobInput = formElement.querySelector('.popup__form-field_type_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const placeAddBtn = document.querySelector('.profile__add-btn');
const placePopup = document.querySelector('#place-popup');
const placeCloseBtn = placePopup.querySelector('.popup__close-btn');
const placeForm = placePopup.querySelector('.popup__form');
const titleInput = placePopup.querySelector('.popup__form-field_type_title');
const imageInput = placePopup.querySelector('.popup__form-field_type_image');
const placesContainer = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template').content;
const fullPlace = document.querySelector('#zoom-popup');
const fullImage = fullPlace.querySelector('.full-place__image');
const fullName = fullPlace.querySelector('.full-place__name');
const fullPlaceCloseBtn = fullPlace.querySelector('.full-place__close-btn');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function setDefaultPlaceholder() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  openPopup(profilePopup);
}

function changeUserInfo(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function changePlace(placeTitle, placeLink, newPlace, newLink) {
  placeTitle.textContent = newPlace;
  placeLink.alt = newPlace;
  placeLink.src = newLink;
}

function createPlace(title, link) {
  const placeCard = placeTemplate.querySelector('.place').cloneNode(true);
  const placeLikeBtn = placeCard.querySelector('.place__like');
  const placeDeleteBtn = placeCard.querySelector('.place__delete');
  const placeName = placeCard.querySelector('.place__name');
  const placeImage = placeCard.querySelector('.place__image');

  changePlace(placeName, placeImage, title, link);

  placeLikeBtn.addEventListener('click', function() {
    placeLikeBtn.classList.toggle('place__like_type_active');
  });

  placeDeleteBtn.addEventListener('click', function(){
    placeDeleteBtn.closest('.place').remove();
  });

  placeImage.addEventListener('click', function(){
    changePlace(fullName, fullImage, title, link);
    openPopup(fullPlace);
  });
  return placeCard;
}

function addCard(title, link) {
  placesContainer.prepend(createPlace(title, link));
}

function addNewPlace(evt) {
  evt.preventDefault();
  addCard(titleInput.value, imageInput.value);
  closePopup(placePopup);
}

function addInitialPlaces(placesArray) {
  placesArray.forEach(card => addCard(card.name, card.link));
}

addInitialPlaces(initialCards);

profileBtn.addEventListener('click', setDefaultPlaceholder);

placeAddBtn.addEventListener('click', () => openPopup(placePopup));

placeCloseBtn.addEventListener('click', () => closePopup(placePopup));

profileCloseBtn.addEventListener('click', () => closePopup(profilePopup));

fullPlaceCloseBtn.addEventListener('click', () => closePopup(fullPlace));

formElement.addEventListener('submit', changeUserInfo);

placeForm.addEventListener('submit', addNewPlace);
