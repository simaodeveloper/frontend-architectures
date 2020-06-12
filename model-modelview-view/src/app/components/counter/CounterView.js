export default class CounterView {
  constructor({ root, emitter }) {
    this.root = root;
    this.listeners = {};
    this.emitter = emitter;

    this.initialize();
  }

  addEvent(el, name, fn) {
    if (!this.listeners[name]) this.listeners[name] = [];
    this.listeners[name].push({ el, fn });
    el.addEventListener(name, fn);
  }

  render() {
    this.root.innerHTML = `
      <h1>Counter2 ${this.model.total}</h1>
      <div class="group">
        <button data-action="decrement">Decrement</button>
        <button data-action="increment">Increment</button>
      </div>
    `;
  }

  onClickHancler = (event) => {
    const { action } = event.target.dataset;
    if (action) {
      this.emitter.dispatch(action);
    }
  };

  onUpdated = (model) => {
    this.model = model;
    this.render();
  };

  loadEvents() {
    this.addEvent(this.root, "click", this.onClickHancler);
    this.emitter.on("updated", this.onUpdated);
  }

  initialize() {
    this.loadEvents();
  }
}
