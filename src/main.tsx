// import React from 'react'
// import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // HashRouter这个模式无法触发router的 loader
  // <HashRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  // </HashRouter>,
  // </React.StrictMode>,
)
