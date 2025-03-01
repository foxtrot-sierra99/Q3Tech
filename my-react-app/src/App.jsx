


import LoginPage from './components/LoginPage/loginPage'
import './App.css'
import Dashboard from './components/Dashboard/dashboard'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <>
    {!isLoggedIn && <LoginPage  setIsLoggedIn={setIsLoggedIn}/>}
    {isLoggedIn && <Dashboard setIsLoggedIn={setIsLoggedIn}/>}
     
    </>
  )
}

export default App
