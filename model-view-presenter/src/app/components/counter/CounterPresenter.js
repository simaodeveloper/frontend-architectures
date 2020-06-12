export default class CounterPresenter {
  constructor({ model }) {
    this.model = model;
  }

  setView(view) {
    this.view = view;
  }

  increment = () => {
    this.model.increment();
  };

  decrement = () => {
    this.model.decrement();
  };

  initialize() {
    this.view.initialize();
  }
}
