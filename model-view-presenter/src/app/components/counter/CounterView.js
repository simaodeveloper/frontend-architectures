export default class CounterView {
  constructor({ root, presenter }) {
    this.root = root;
    this.listeners = {};
    this.presenter = presenter;
    this.presenter.setView(this);
  }

  addEvent(el, name, fn) {
    if (!this.listeners[name]) this.listeners[name] = [];
    this.listeners[name].push({ el, fn });
    el.addEventListener(name, fn);
  }

  loadEvents() {
    this.addEvent(this.root, "click", (event) => {
      const { action } = event.target.dataset;
      if (action) this.presenter[action]();
      this.render();
    });
  }

  render() {
    this.root.innerHTML = `
      <h1>Counter2 ${this.presenter.model.total}</h1>
      <div class="group">
        <button data-action="decrement">Decrement</button>
        <button data-action="increment">Increment</button>
      </div>
    `;
  }

  initialize() {
    this.loadEvents();
    this.render();
  }
}
