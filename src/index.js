import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root'))
registerServiceWorker()

// webpack 的热更新
if (module.hot) {
  console.log('module -----  hot')
  module.hot.accept()
}
