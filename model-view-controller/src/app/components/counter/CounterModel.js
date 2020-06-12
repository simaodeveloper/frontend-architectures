export default class CounterModel {
  constructor ({ total = 0 } = {}) {
    this.total = total
  }

  increment (value = 1) {
    this.total += value
  }

  decrement (value = 1) {
    this.total -= value
  }
}
