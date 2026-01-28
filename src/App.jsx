import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Router } from './Components/Router'
import { Navbar } from './Components/Navbar'
import './App.css'
function App() {
  return (
    <>
      <div className="title">
          <h1>Raja Hotel</h1>
      </div>
      <div>
        <Navbar/>
        <Router/>

      </div>
    </>
  )
}

export default App
