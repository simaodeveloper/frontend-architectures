import DataFlow from "../../model-view-controller/src/app/services/DataFlow/index.js";

const store = new DataFlow({
  namespace: "counter",
  state: {
    total: 0,
  },
  getters: {
    getTotal(state) {
      return state.total;
    },
    getTotal2(state, getters) {
      return getters.getTotal * 2;
    },
    getTotal3(state, getters) {
      return getters.getTotal + getters.getTotal2;
    },
  },
  mutations: {
    increment(state) {
      state.total = state.total + 1;
    },
    decrement(state) {
      state.total = state.total - 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
  },
});

export default store;
