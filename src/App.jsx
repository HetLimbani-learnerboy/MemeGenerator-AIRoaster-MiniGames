import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import Getstart from './Components/Getstart.jsx'
import TicTacToe from './Components/TicTacToe.jsx'
import RPSgame from './Components/RPSGame.jsx'

function App(){
  return(
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/getstart' element={<Getstart/>}/>
      <Route path='/TicTacToe' element={<TicTacToe/>}/>
      <Route path='/RPSgame' element={<RPSgame/>}/>
      
    </Routes>
  )
}

export default App
