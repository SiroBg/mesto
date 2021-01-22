let profileBtn = document.querySelector('.profile__edit-btn');
let profilePopup = document.querySelector('.popup');
let profileCloseBtn = profilePopup.querySelector('.popup__close-btn');
let formElement = profilePopup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__profile-field_type_name');
let jobInput = formElement.querySelector('.popup__profile-field_type_job');

profileBtn.addEventListener('click', function(){
  profilePopup.classList.add('popup_opened');
});

profileCloseBtn.addEventListener('click', function(){
  profilePopup.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  let userName = document.querySelector('.profile__name');
  let userJob = document.querySelector('.profile__job');
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  profilePopup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
