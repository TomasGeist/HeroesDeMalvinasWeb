import React, { useState, useEffect } from 'react';


export default function ListaHeroes() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerHeroes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://localhost:7117/api/Heroe/');
        const data = await response.json();
        setHeroes(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los héroes:", error);
        setLoading(false);
      }
    };
    obtenerHeroes();
  }, []);
  


  return (
    <>
      <nav>
        <a href="/">Inicio</a>
        <a href="/heroes">Heroes</a>
      </nav>
      <h1 style={{ color: 'white' }}>Lista de Combatientes y Veteranos</h1>
      {loading ? (
        <div className="loader">Cargando...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Documento</th>
              <th>Fuerza</th>
              <th>Grado</th>
              <th>Condición</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map(hero => (
              <tr key={hero.id}>
                <td>{hero.nombreCompleto}</td>
                <td>{hero.documento}</td>
                <td>{hero.fuerza}</td>
                <td>{hero.grado}</td>
                <td>{hero.condicion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
