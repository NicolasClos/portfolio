// IMPORT COMPONENTS
import React from 'react';
import { GiPencilRuler } from "react-icons/gi"
import {BsCodeSlash} from "react-icons/bs"
import {IoServer} from "react-icons/io5"

// IMPORT STYLES AND ASSETS
import '../../styles/main/Section2.css'
import ImgMain from '../../assets/main.jpg'

// STYLES

const pathStyle= {
    stroke: '#fff',
    border: 'none',
    fill: '#fff',
}

const Section2 = (props) => {
    return(
        <section className='section2'>
            <div className='presentacionContainer'>
                <h3 className='presentacionH3'>Hola, mi nombre es Nico. Un gusto conocerte.</h3>
                <p className='presentacionP'>Estoy buscando oportunidades de colaborar con compañias, agencias, individuos, y no solo trabajar para ellos, quiero llevar y plasmar en la mesa todas mis habilidades, mi experiencia en diseño y desarrollo formando un entorno de trabajo donde todos nosotros podamos colaborar juntos para resolver verdaderos problemas de una forma que optimice todos nuestros respectivos conocimientos y experiencias.</p>
            </div>
            <div className="waveContainer">
                    <svg className='waveSvg' viewBox="0 0 500 150">
                        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" className='wavePath' style={pathStyle}></path>
                    </svg>
                    <div className="waveImgContainer">
                    </div>
                    
            </div>
            <div className='flexContainer'>
                <div className='flexItem'>
                    <div className="flexItemDiv">
                        <GiPencilRuler className='flexItemIcon' />
                        <h4 className='flexItemTitle'>Diseñador</h4>
                        <p>Varloro las estructuras sencillas, con patrones de diseño simples e interacciones consideradas.</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Cosas que me gustan diseñar:</p>
                        <p>UX, UI, Web, Mobile, Apps, Logos</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Herramientas de diseño:</p>
                        <ul>
                            <li>Balsamiq Mockups</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Figma Studio</li>
                            <li>Sketch</li>
                        </ul>
                    </div>
                </div>
                <div className='flexItem'>
                    <div className="flexItemDiv">
                        <BsCodeSlash className='flexItemIcon' />
                        <h4 className='flexItemTitle'>FrontEnd Developer</h4>
                        <p>Me gusta codificar cosas desde cero, disfruto de traer ideas a la vida y plasmarlas al navegador.</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Lenguajes que sé:</p>
                        <p>XML, HTML, CSS, Sass, Less</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Herramientas de desarrollo:</p>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Framer-Motion</li>
                            <li>GitHub</li>
                            <li>GitLab</li>
                            <li>Terminal</li>
                        </ul>
                    </div>
                </div>
                <div className='flexItem'>
                    <div className="flexItemDiv">
                        <IoServer className='flexItemIcon' />
                        <h4 className='flexItemTitle'>BackEnd Developer</h4>
                        <p>Utilizo herramientas que me ayudan a plasmar estas ideas pudiendo lograr una mejor experiencia ante el usuario y el cliente.</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Lenguajes que sé:</p>
                        <p>NodeJS, MongoDB, MySQL, NoSQL</p>
                    </div>
                    <div className="flexItemDiv">
                        <p className='flexItemDivPTitle'>Herramientas de desarrollo:</p>
                        <ul>
                            <li>npm</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;