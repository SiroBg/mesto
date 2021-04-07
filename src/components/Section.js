export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  setItem(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    })
  }
}
