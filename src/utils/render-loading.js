export default function renderLoading(isLoading, btnElement) {
  if(isLoading) {
    btnElement.classList.add('popup__btn_loading');
  } else {
    btnElement.classList.remove('popup__btn_loading');
  }
}
