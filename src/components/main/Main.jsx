// IMPORT COMPONENTS
import React from 'react';
import Section1  from './Section1'
import Section2  from './Section2'
import Section3 from './Section3'
import Contacto from './Contacto'

// IMPORT STYLES AND ASSETS
import '../../styles/main/Main.css'

const Main = (props) => {
    return(
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Contacto />
        </main>
    );

}

export default Main;