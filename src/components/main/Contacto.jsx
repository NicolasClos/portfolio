// IMPORT COMPONENTS
import React, {useState} from 'react';

// IMPORT STYLES AND ASSETS
import '../../styles/main/Contacto.css'


const Contacto = (props) => {

    const [nombre, setNombre] = useState('');

    return(
            <section className='contactoContainer'>
                <h3>Contacto</h3>
                <form>
                    <label htmlFor='nombre' >Nombre:</label>
                    <input type='text' id='nombre' name='nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
                    <label htmlFor='apellido'>Apellido:</label>
                    <input type='text' id='apellido' name='apellido'/>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' />
                    <label htmlFor='mensaje'>Escriba su mensaje:</label>
                    <textarea id='mensaje' name='mensaje' type='text'></textarea>
                </form>
            </section>
    );
}

export default Contacto;