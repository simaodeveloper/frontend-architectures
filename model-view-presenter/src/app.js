import makeCounter from './app/components/counter/index.js'

class App {
  static initialize () {
    const counter = makeCounter({
      root: document.querySelector('#app')
    })

    counter.initialize()
  }
}

App.initialize()
