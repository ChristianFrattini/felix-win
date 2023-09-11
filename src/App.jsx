//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './components/welcome-page/welcome-page.component'
import Navigation from './components/ROUTES/navigation/navigation.component'
import AdPage from './components/ad-page/ad-page.component'
import Info from './components/ROUTES/info/info.component'
import WinnerPage from './components/ROUTES/winner/winner.component'
import UserForm from './components/user-form/user-form.component'
import Confirmation from './components/confirmation/confirmation.component'
import Jackpot from './components/ROUTES/jackpot/jackpot.component'

const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='' element={<WelcomePage/>}/>
        <Route path='clickad' element={<AdPage/>}/>
        <Route path='info' element={<Info/>}/>
        <Route path='winner' element={<WinnerPage/>}/>
        <Route path='user-form-sub' element={<UserForm/>}/>
        <Route path='confirmation' element={<Confirmation/>}/>
        <Route path='jackpot' element={<Jackpot/>}/>
      </Route>
    </Routes>
  )
}

export default App
