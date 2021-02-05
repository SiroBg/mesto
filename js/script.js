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
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');
const placeAddBtn = document.querySelector('.profile__add-btn');
const placePopup = document.querySelector('#place-popup');
const placeCloseBtn = placePopup.querySelector('.popup__close-btn');
const placeForm = placePopup.querySelector('.popup__form');
const titleInput = placePopup.querySelector('.popup__form-field_type_title');
const imageInput = placePopup.querySelector('.popup__form-field_type_image');
const placesContainer = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template').content;

function openPopup(popup) {
  if(popup.classList.contains('fade-out')){
    popup.classList.remove('fade-out');
  }
  popup.classList.add('popup_opened');
  popup.classList.toggle('fade-in');
}

function closePopup(popup) {
  popup.classList.toggle('fade-in');
  popup.classList.add('fade-out');
  setTimeout(function(){
    popup.classList.remove('popup_opened');
  }, 300);
}

function formPlaceHolder() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  openPopup(profilePopup);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName = document.querySelector('.profile__name');
  userJob = document.querySelector('.profile__job');
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

function createPlace(title, link) {
  const placeCard = placeTemplate.querySelector('.place').cloneNode(true);
  const placeLikeBtn = placeCard.querySelector('.place__like');
  const placeDeleteBtn = placeCard.querySelector('.place__delete');
  const placeName = placeCard.querySelector('.place__name');
  const placeImage = placeCard.querySelector('.place__image');
  const fullPlace = placeCard.querySelector('.place__popup');
  const fullImage = fullPlace.querySelector('.full-place__image');
  const fullName = fullPlace.querySelector('.full-place__name');
  const fullPlaceCloseBtn = fullPlace.querySelector('.full-place__close-btn');

  function changePlace(placeTitle, placeLink) {
    placeTitle.textContent = title;
    placeLink.alt = title;
    placeLink.src = link;
  }

  changePlace(placeName, placeImage);

  changePlace(fullName, fullImage);

  placeLikeBtn.addEventListener('click', function() {
    placeLikeBtn.classList.toggle('place__like_type_active');
  });

  placeDeleteBtn.addEventListener('click', function(){
    placeDeleteBtn.closest('.place').remove();
  });

  placeImage.addEventListener('click', function() {
    openPopup(fullPlace);
  });

  fullPlaceCloseBtn.addEventListener('click', () => closePopup(fullPlace));

  placesContainer.prepend(placeCard);
}

function formAddPlace(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  createPlace(titleInput.value, imageInput.value);
  closePopup(placePopup);
}

function addPlaces(placesArray) {
  placesArray.forEach(card => createPlace(card.name, card.link));
}

addPlaces(initialCards);

profileBtn.addEventListener('click', formPlaceHolder);

placeAddBtn.addEventListener('click', () => openPopup(placePopup));

placeCloseBtn.addEventListener('click', () => closePopup(placePopup));

profileCloseBtn.addEventListener('click', () => closePopup(profilePopup));

formElement.addEventListener('submit', formSubmitHandler);

placeForm.addEventListener('submit', formAddPlace);
