import React, {useState} from 'react'


const Formulario = () => {

    // Crear el state de Notas
    const [nota, actualizarNota] = useState({
        info:      '',
        asunto:     '',
        fecha:      '',
        hora:       '',
        actividad:  '',
    });

    const [error, actualizarError] = useState(false)



    // Función ejecuta cada que se escribe en un input
    const actualizarState = e => {
        actualizarNota({
            ...nota,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores
    const {info, asunto, fecha, hora, actividad} = nota;

    // Cuando e usuario presiona Agregar Nota
    const submitCita = e => {
        e.preventDefault();

        // Validar 
        if( info.trim() === '' || asunto.trim() === '' || fecha.trim() === '' || hora.trim() === '' || actividad.trim() === ''){
            actualizarError(true);
            return;
        }

        // Asignar un ID


        // Crear la Nota


        // Reiniciar el form


    }

    return ( 
        <>
            <h2>Crear Nota</h2>

            {
                error 
                ? <p className="alerta-error">Todos los Campos son Obligatorios</p> 
                : null
             }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Nota</label>
                <input
                    type="text"
                    name="info"
                    className="u-full-width"
                    placeholder="Nombre de la Nota"
                    onChange={actualizarState}
                    value={info}
                />
                <label>Asunto</label>
                <input
                    type="text"
                    name="asunto"
                    className="u-full-width"
                    placeholder="Asunto"
                    onChange={actualizarState}
                    value={asunto}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Actividad</label>
                <textarea
                    className="u-full-width"
                    name="actividad"
                    onChange={actualizarState}
                    value={actividad}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                > Agregar Nota</button>
            </form>
        </>
     );
}
 
export default Formulario;


