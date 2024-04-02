import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import Heroe from './Components/Heroe';
import ListaHeroes from './Components/ListaHeroes';



function App() {
  return (

    <BrowserRouter basename={'/HeroesDeMalvinasWeb'}>
      <Routes>
        <Route path='/HeroesDeMalvinasWeb/heroe/:id' element={<Heroe />}/>

        <Route path='/HeroesDeMalvinasWeb/heroes' element={<ListaHeroes />}></Route>
        
        <Route path='/' element={<Home />}/>
         
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
