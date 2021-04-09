export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  setItem(item) {
    this._container.prepend(item);
  }

  renderItems(items, userId) {
    items.forEach(item => {
      this._renderer(item, userId);
    })
  }
}
