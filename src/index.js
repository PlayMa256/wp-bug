import app from './app.js'

const render = (value) => {
  document.querySelector('#root').textContent = value
}

render(app)

if (module.hot) {
  module.hot.accept('./app.js', () => {
    render(require('./app.js').default)
  })
}
