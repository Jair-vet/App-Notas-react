import React from 'react'

const Nota = ({notas, eliminarNota}) => (

    <div className="cita">
        <p>Nota: <span>{notas.info}</span></p>
        <p>Asunto: <span>{notas.asunto}</span></p>
        <p>Fecha: <span>{notas.fecha}</span></p>
        <p>Hora: <span>{notas.hora}</span></p>
        <p>Actividad: <span>{notas.actividad}</span></p>


        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarNota(notas.id) }
        >Eliminar &times;</button>
    </div>

);
 
export default Nota;