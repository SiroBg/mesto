export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  setItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._items
      .then(res => {
        res.forEach(item => {
          this._renderer(item);
        })
      });
  }
}
