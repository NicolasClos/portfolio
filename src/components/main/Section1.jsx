// IMPORT COMPONENTS
import React from 'react';
import imgHeader from '../../assets/header.jpg'
import {BsChevronCompactDown} from 'react-icons/bs'

// IMPORT STYLES AND ASSETS
import '../../styles/main/Section1.css'


const Section1 = (props) => {
    return(
            <section className='sectionPrincipal'>
                <div className='divImgPrincipal'>
                    <div className='textoPrincipal'>
                        <h1 className='tituloPrincipal'>NicolásClos</h1>
                        <h2 className='subtituloPrincipal'>Full Stack Developer</h2>
                    </div>
                </div>
                <BsChevronCompactDown className='iconDown'/>
            </section>
    );
}

export default Section1;