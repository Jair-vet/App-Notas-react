import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Nota from './components/Notas';


function App() {

  // Notas en local storage
  let notasIniciales = JSON.parse(localStorage.getItem('notas'));
  if(!notasIniciales) {
    notasIniciales = [];
  }

  // Arreglo de notas
  const [notas, guardarNotas] = useState(notasIniciales);

  // UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let notasIniciales = JSON.parse(localStorage.getItem('notas'));

    if (notasIniciales) {
      localStorage.setItem('notas', JSON.stringify(notas));
    }else{
      localStorage.setItem('notas', JSON.stringify([]));
    }
  },[notas]);


  // Función toma las notas actuales y agrega la nueva
  const crearNota = nota => {
    guardarNotas([
      ...notas,  // Treae la copia de lo que tenemos
      nota // Agregamos la nueva nota
    ]);
  }

  // Funcion que elimina una nota por su id
  const eliminarNota = id => {
    const nuevasNotas = notas.filter(nota => nota.id !== id);
    guardarNotas(nuevasNotas);
  }


  // Mensaje condicional
  const titulo = notas.length === 0 ? 'No hay notas' : 'Administra tus Notas';

  return (
    <>
      <h1>Administrador de Notas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearNota={crearNota}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {notas.map(nota => (
              <Nota
                key={nota.id}
                notas={nota}
                eliminarNota={eliminarNota}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



export default App;
