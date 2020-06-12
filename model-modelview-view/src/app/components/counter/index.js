import CounterModel from "./CounterModel.js";
import CounterView from "./CounterView.js";
import CounterModelView from "./CounterModelView.js";

import EventEmitter from "../../libraries/EventEmitter.js";

const makeCounter = ({ root }) => {
  const emitter = new EventEmitter();
  const model = new CounterModel();
  const view = new CounterView({ root, emitter });
  return new CounterModelView({ model, emitter });
};

export default makeCounter;
