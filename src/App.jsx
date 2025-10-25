import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage';
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import Assignment from './Assignment';
import "./styles.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/assignment' element={<Assignment/>}/>
      </Routes>
    </div>
  )
}

export default App