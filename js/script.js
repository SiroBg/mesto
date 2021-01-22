let profileBtn = document.querySelector('.profile__edit-btn');
let profilePopup = document.querySelector('.popup');
let profileCloseBtn = profilePopup.querySelector('.popup__close-btn');
let formElement = profilePopup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__profile-field_type_name');
let jobInput = formElement.querySelector('.popup__profile-field_type_job');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');

function openPopup() {
  profilePopup.classList.add('popup_opened');
}

function closePopup() {
  profilePopup.classList.remove('popup_opened');
}

function formPlaceHolder() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  openPopup();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName = document.querySelector('.profile__name');
  userJob = document.querySelector('.profile__job');
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

profileBtn.addEventListener('click', formPlaceHolder);

profileCloseBtn.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
