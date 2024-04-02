import React, { useState } from 'react'
import argentinaEscudo from '../assets/argentinaEscudo.webp'
import enviar from '../assets/enviar.webp'
import { Link } from 'react-router-dom';

export default function Home() {
  const [dni, setDni] = useState('');
  const guardar = (e) => {
    setDni(e.target.value)
  }



  return (
    <>
    <nav>
  <a href="/HeroesDeMalvinasWeb/">Inicio</a>
  <a href="/HeroesDeMalvinasWeb/heroes">Heroes</a>
</nav>
  <div class="container">
  <h1 style={{color:'white'}}>Honor y Gloria a Nuestros Heroes</h1>
        <div style={{display:'flex', gap:'8px', justifyContent:'center', alignItems:'center'}}>
        <input required value={dni} onChange={guardar} type="number" placeholder="Ingresá tu documento" />
          <Link to={`/heroe/${(dni == '' ? 'Vacío' : dni)}`} ><button className='btnDocumento' style={{width: '24px', height:'24px'}}></button></Link>
          </div>
        <h2 style={{ padding: '6px', backgroundColor: '#87CEEB95', color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.95)' }}>Si sos <span style={{ color: "#FBBF0F" }}>veterano de Malvinas</span>, te invito a ingresar tu numero documento</h2>
        <img style={{ width: '20rem' }} src={argentinaEscudo}></img>
        <p style={{color:'white'}}><b><span style={{ color: "#FBBF0F" }}>Gracias, </span> los recordaremos para <span style={{textDecoration:'underline'}}>siempre</span>.</b></p>
</div>
    </>
  )
}
