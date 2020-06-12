import CounterModel from "./CounterModel.js";
import CounterView from "./CounterView.js";
import CounterPresenter from "./CounterPresenter.js";

import store from "../../store/index.js";

const makeCounter = ({ root }) => {
  const model = new CounterModel();
  const presenter = new CounterPresenter({ model });
  return new CounterView({ root, presenter });
};

export default makeCounter;
