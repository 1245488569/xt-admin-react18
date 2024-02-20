import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  // </React.StrictMode>,
)
