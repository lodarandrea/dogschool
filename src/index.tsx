import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './Store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN_URL}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENTID}`}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <ToastContainer />

        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
