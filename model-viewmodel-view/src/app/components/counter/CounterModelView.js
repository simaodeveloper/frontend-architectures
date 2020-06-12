export default class CounterPresenter {
  constructor({ model, emitter }) {
    this.model = model;
    this.emitter = emitter;
  }

  onIncrement = () => {
    this.model.increment();
    this.emitter.dispatch("updated", this.model);
  };

  onDecrement = () => {
    this.model.decrement();
    this.emitter.dispatch("updated", this.model);
  };

  initialize() {
    this.emitter.on("increment", this.onIncrement);
    this.emitter.on("decrement", this.onDecrement);

    this.emitter.dispatch("updated", this.model);
  }
}
