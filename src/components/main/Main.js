// IMPORT COMPONENTS
import React from 'react';
import imgHeader from '../../assets/header.jpg'
import {BsChevronCompactDown} from 'react-icons/bs'

// IMPORT STYLES AND ASSETS
import '../../styles/main/Main.css'

const Main = (props) => {
    return(
        <main>
            <section className='sectionPrincipal'>
                <div className='divImgPrincipal'>
                    <img className='imgPrincipal' src={imgHeader}></img>
                    <div className='textoPrincipal'>
                        <h1 className='tituloPrincipal'>NicolasClos</h1>
                        <h2 className='subtituloPrincipal'>Full Stack Developer</h2>
                    </div>
                </div>
                <BsChevronCompactDown className='iconPrincipal'/>
            </section>
        </main>
    );

}

export default Main;