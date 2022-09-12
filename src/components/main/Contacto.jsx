// IMPORT COMPONENTS
import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

// IMPORT STYLES AND ASSETS
import '../../styles/main/Contacto.css'


const Contacto = (props) => {

const [state, handleSubmit] = useForm("xyyvkanb");
if (state.succeeded) {
    return (
        <div className="contactoContainer">
        <h3 className="contactoTitle">Contacto</h3>
        <form method='POST' className='form' onSubmit={handleSubmit}>
            <input
                className="formName"
                id="name"
                type="text" 
                name="name"
                placeholder='Escriba su nombre'
                required=' '
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <input
                className="formEmail"
                id="email"
                type="email" 
                name="email"
                placeholder='Escriba su email'
                required=' '
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                className="formMsg"
                id="message"
                name="message"
                placeholder="Escriba su mensaje"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className='formBtn' type="submit" disabled={state.submitting}>Enviar</button>
    </form>
    <p className="emailEnviado">Enviado!</p>
</div>
    );
}

return (
    <div className="contactoContainer">
        <h3 className="contactoTitle">Contacto</h3>
        <form method='POST' className='form' onSubmit={handleSubmit}>
            <input
                className="formName"
                id="name"
                type="text" 
                name="name"
                placeholder='Escriba su nombre'
                required=' '
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <input
                className="formEmail"
                id="email"
                type="email" 
                name="email"
                placeholder='Escriba su email'
                required=' '
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                className="formMsg"
                id="message"
                name="message"
                placeholder="Escriba su mensaje"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className='formBtn' type="submit" disabled={state.submitting}>Enviar</button>
    </form>
</div>
);
}

export default Contacto;