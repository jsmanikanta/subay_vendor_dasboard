import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage';
import { Routes, Route} from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
      </Routes>
    </div>
  )
}

export default App