import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import UserDetailsProvider from './contexts/details.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDetailsProvider>
        <App />
      </UserDetailsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
