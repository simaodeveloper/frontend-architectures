import CounterModel from "./CounterModel.js";
import CounterView from "./CounterView.js";
import CounterController from "./CounterController.js";

import store from "../../store/index.js";

const makeCounter = ({ root }) => {
  const model = new CounterModel();
  const view = new CounterView({ root });
  return new CounterController({ model, view });
};

export default makeCounter;
