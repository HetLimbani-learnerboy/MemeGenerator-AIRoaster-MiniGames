import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import Getstart from './Components/Getstart.jsx'

function App(){
  return(
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/getstart' element={<Getstart/>}/>
      
    </Routes>
  )
}

export default App
