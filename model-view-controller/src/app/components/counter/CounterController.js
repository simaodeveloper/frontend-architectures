export default class CounterPresenter {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
  }

  incrementAction = () => {
    this.model.increment();
    this.renderView();
  };

  decrementAction = () => {
    this.model.decrement();
    this.renderView();
  };

  actionHandler = (event) => {
    const { action } = event.target.dataset;
    if (action) this[`${action}Action`]();
  };

  renderView() {
    this.view.render(this.model);
  }

  loadEvents() {
    this.view.addEvent(this.view.root, "click", this.actionHandler);
  }

  initialize() {
    this.loadEvents();
    this.renderView();
  }
}
