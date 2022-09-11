// IMPORT COMPONENTS
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai"
import {FaRegCommentAlt} from "react-icons/fa"
import {BsBriefcase, BsFilePerson} from "react-icons/bs"
import Boton from './Boton'

// IMPORT STYLES
import '../../styles/header/HeaderMobile.css'

const variants = {
    open:{
        clipPath: 'circle(2000px at 30px 30px)' ,
    },
    closed:{
        clipPath: 'circle(25px at 30px 30px)' ,
    }
}

export default function HeaderMobile({funcion}){

    const [toggle, setToggle] = useState(false);

    const changeState = ()=>{
        setToggle(!toggle);
        console.log("Se cambio el estado")
    }

    return(
        <>
            <motion.header className="header" variants={variants} transition={{duration:0.5}} animate={toggle ? 'open' : 'closed'}>
                <Boton 
                    toggle={changeState}
                />
                
                <h2 className="tituloHeader"> MI TIENDA </h2>
                <div className='headerDiv'>
                    <ul className='headerUl'>
                        <li className='headerLi'><a className='headerA' href='#'><span><AiOutlineHome className='iconLi'/></span><span>Inicio</span></a></li>
                        <li className='headerLi'><a className='headerA' href='#'><span><BsFilePerson className='iconLi'/></span><span>Sobre mi</span></a></li>
                        <li className='headerLi'><a className='headerA' href='#'><span><BsBriefcase className='iconLi'/></span><span>Trabajo reciente</span></a></li>
                        <li className='headerLi'><a className='headerA' href='#'><span><FaRegCommentAlt className='iconLi'/></span><span>Contacto</span></a></li>
                    </ul>
                </div>
            </motion.header>
        </>
    );
}
