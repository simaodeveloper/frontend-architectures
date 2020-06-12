export default class CounterView {
  constructor({ root }) {
    this.root = root;
    this.listeners = {};
  }

  addEvent(el, name, fn) {
    if (!this.listeners[name]) this.listeners[name] = [];
    this.listeners[name].push({ el, fn });
    el.addEventListener(name, fn);
  }

  render(model) {
    this.root.innerHTML = `
      <h1>Counter2 ${model.total}</h1>
      <div class="group">
        <button data-action="decrement">Decrement</button>
        <button data-action="increment">Increment</button>
      </div>
    `;
  }
}
