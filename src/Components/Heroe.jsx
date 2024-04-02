import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Heroe() {
  const { id } = useParams();
  const [heroe, setHeroe] = useState(null);
  const [nombre, setNombre] = useState('');
  const [fuerzaPrevia, setFuerzaPrevia] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerHeroe = async () => {
      try {
        const response = await fetch(`https://localhost:7117/api/Heroe/${id}`);
        const data = await response.json();
        setHeroe(data.data);
      } catch (error) {
        console.error("Error al obtener el héroe:", error);
      }
    };
    obtenerHeroe();
  }, [id]);

  useEffect(() => {
    if (heroe && heroe.nombreCompleto) {
      const nombreCompleto = heroe.nombreCompleto.split(',')[1].trim();
      setNombre(nombreCompleto);
    }
  }, [heroe]);

  useEffect(() => {
    if (heroe && heroe.fuerza) {
      if (heroe.fuerza === 'ejercito') {
        const el = 'el ';
        setFuerzaPrevia(el);
      } else {
        setFuerzaPrevia('la ');
      }
    }
  }, [heroe]);

  if (!heroe || !heroe.nombreCompleto) {
    return (
      <>
      <nav>
        <a href="/HeroesDeMalvinasWeb/">Inicio</a>
        <a href="/HeroesDeMalvinasWeb/heroes">Heroes</a>
      </nav>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <h2>No encontramos a nadie con el documento {id}</h2>
          <div style={{display:'flex' , gap:'8px'}}>

          <button style={{cursor:'pointer'}} onClick={() => navigate('/heroes')}>Buscar en la lista completa</button>
          <button style={{cursor:'pointer'}} onClick={() => navigate('/')}>Volver</button>
          </div>
      </div>
      </>
    );
  }

  return (
    <>
      <nav>
        <a href="/HeroesDeMalvinasWeb/">Inicio</a>
        <a href="/HeroesDeMalvinasWeb/heroes">Heroes</a>
      </nav>
      <div className="container">
        <h1 style={{ color: 'white' }}>Honor y Gloria al Héroe {heroe.nombreCompleto} </h1>
        <p style={{ padding: '6px', backgroundColor: '#87CEEB95', color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.95)' }}>
          Hola <b>{nombre}</b> que felicidad de tenerte acá. Sé que luchaste por nosotros en nuestras queridas Islas Malvinas. Gracias por ser parte de nuestras fuerzas en {fuerzaPrevia + heroe.fuerza} como {heroe.grado}. 
          <hr></hr>
          Hoy quería inmortalizar tu nombre, porque todas las generaciones tienen que conocer a nuestros Héroes de la Patria. 
          <hr></hr>
          <br></br>
          <i><b>"¿Quién nos habla aquí de olvido, de renuncia, de perdón? ..."</b></i>
          <br></br>
          <br></br>
          <hr></hr>
          Simplemente GRACIAS. Atentamente: <b>El pueblo Argentino.</b>
        </p>
        <p style={{ fontSize: '12px', padding: '6px', backgroundColor: '#FBBF0F', color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.95)'  }}>Si sos {heroe.nombreCompleto} o sos un familiar, y querés dejar unas palabras, entonces contactate conmigo a: tomasgeistdev@gmail.com</p>
      </div>
    </>
  );
}
