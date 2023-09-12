import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import UserDetailsProvider from './contexts/details.context.jsx'
import EnableButtonProvider from './contexts/enable-submission.context.jsx'
import { DataProvider } from './contexts/data.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <EnableButtonProvider>
        <UserDetailsProvider>
          <App />
        </UserDetailsProvider>
      </EnableButtonProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
