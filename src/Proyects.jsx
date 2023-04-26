import './App.css'
import Proyecto from './Proyecto';
import './proyects.css'

import bruno from './img/bruno.jpg'
import mario2 from './img/mario2.png'
import euler1 from './img/euler1.png'
import euler2 from './img/euler2.png'
import rickyMorty1 from './img/rickyMorty1.jpg'
import rickyMorty2 from './img/rickyMorty2.png'
import gpt1 from './img/gpt1.png'
import gpt2 from './img/gpt2.png'
import pelisPako from './img/pelisPako.jpg'
import ecommerce from './img/ecommerce.jpg'
function Proyects(){
    return( 
        <div className="proyects">
        <h1 id="proyectsTitle">Proyectos</h1>
        <div className="proyectsGrid">
        <Proyecto img={rickyMorty1} img2={rickyMorty2}
        description="Lista los personajes de la serie animada Rick y Morty, practica de fetch"
        link="https://brunodv.github.io/Rick-Morty/" linkName="visitar"/> 
        <Proyecto img={euler1} img2={euler2}
        description="Web para practicar Jquery, mostrando los ángulos de movimiento de una Aeronave"
        link="https://brunodv.github.io/AutomaticaYControlDeAeronaves/" linkName="visitar"/>
        <Proyecto img={gpt1} img2={gpt2}
        description="Implementación de la Api de OpenAI con chat-gpt 3.5, un servidor node y UI React "
        link="https://brunodv.github.io/RoyGPT/" linkName="visitar"/>
        <Proyecto img={pelisPako} img2=''
        description="Clon de Netflix, practica de Front-end"
        link="https://brunodv.github.io/Practicando-JS-sin-framework/" linkName="visitar"/>
        <Proyecto img={ecommerce} img2=""
        description="E-Commerce Full (estamos en mantenimiento)"
        link="https://brunodv.github.io/NotFound/" linkName="visitar"/>
        </div></div>
    )
    
}

export default Proyects;