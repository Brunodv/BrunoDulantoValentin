import './App.css'
import Proyecto from './Proyecto';
import './proyects.css'

import euler1 from './img/euler1.png'
import euler2 from './img/euler2.png'
import rickyMorty1 from './img/rickyMorty1.jpg'
import rickyMorty2 from './img/rickyMorty2.png'
import gpt1 from './img/gpt1.png'
import gpt2 from './img/gpt2.png'
import pelisPako from './img/pelisPako.jpg'
import ecommerce from './img/ecommerce.jpg'
import js from './img/js.png'
import node from './img/node.png'
import react from './img/react.png'
import html from './img/html.png'
import css from './img/css.png'
import mongodb from './img/mongodb.png'
import express from './img/express.png'
import three from './img/three.png'

function Proyects(){
    return( 
        <div className="proyects">
        <h1 id="proyectsTitle">Proyectos</h1>
        <div className="proyectsGrid">
        <Proyecto img={rickyMorty1} img2={rickyMorty2}
        description="Una práctica de fetch, Lista los personajes de la serie animada desde la API de Rick y Morty con el stack:"
        link="https://brunodv.github.io/Rick-Morty/"  technologysImg={js}  technologysImg2={node}  technologysImg3={react} /> 
        <Proyecto img={euler1} img2={euler2} technologysImg={html} technologysImg2={css} technologysImg3={js}
        description="Web para practicar Jquery, mostrando los ángulos de movimiento de una Aeronave"
        link="https://brunodv.github.io/AutomaticaYControlDeAeronaves/" />
        <Proyecto img={gpt1} img2={gpt2} technologysImg={js} technologysImg2={node} technologysImg3={react}
        description="Implementación de la API de OpenAI con chat-gpt 3.5, un servidor node y UI React "
        link="https://brunodv.github.io/RoyGPT/" />
        <Proyecto img={pelisPako} img2='' technologysImg={html} technologysImg2={css} technologysImg3={js}
        description="Clon de Netflix, practica de Front-end básico con html css y js"
        link="https://brunodv.github.io/Practicando-JS-sin-framework/" />
        <Proyecto img={ecommerce} img2=""  technologysImg={mongodb} technologysImg2={express} technologysImg3={react} technologysImg4={node}
        description="E-Commerce Full stack, Back End node.js con express, base de datos MongoDB y Front End React (MERN Stack)" 
        link="https://brunodv.github.io/NotFound/" />
        </div></div>
    )
    
}

export default Proyects;