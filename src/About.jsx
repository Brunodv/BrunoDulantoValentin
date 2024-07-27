import './App.css'
import './about.css'

import Emoji from 'react-emoji-render';
import bruno from './img/bruno.png';
import Carousel from './Carousel';
import js from './img/js.png';
import react from './img/react.png';
import html from './img/html.png';
import css from './img/css.png';
import node from './img/node.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql.png';
import python from './img/python.png';

function About() {

  return (
    <div id="about">
      <div className="leftTitle">
        <h1>Sobre mi</h1>
      </div>
      <div className="columns">
        <div>
          <img className="foto" src={bruno} alt="Bruno Dulanto" />
          <p className='data'>Email:xcdrxcdr@gmail.com</p>
          <p className='data'>Edad: 31</p>
          <p className='data'>Estado:Buscando Trabajo</p>
          <p className='data'>Teléfono:+51977631700</p>
        </div>
        <div className="actitudes">
          <p>-Desarrollo de Software <Emoji text="😍" /> <br />
            -Ingeniería Aeronáutica <Emoji text="👨‍🎓" /><br />
            -Análisis de Datos<Emoji text="📊" /><br />
            -Física y Matemáticas <Emoji text="📚" /><Emoji text="👩‍💻" /><br />
            -Desarrollo personal <Emoji text="🧠💪" /><br />
          </p>
        </div>
      </div>
      <div className="skillsTitle">
        <div id="h1Skills"><h1>Skills</h1></div>
        <div className='skills'>
          <div className='skill'><h4>HTML</h4><img src={html} alt="" /></div>
          <div className='skill'><h4>CSS</h4><img src={css} alt="" /></div>
          <div className='skill'><h4>Javascript</h4><img src={js} alt="" /></div>
          <div className='skill'><h4>React</h4><img src={react} alt="" /></div>
          <div className='skill'><h4>Node.js</h4><img src={node} alt="" /></div>
          <div className='skill'><h4>MongoDB</h4><img src={mongodb} alt="" /></div>
          <div className='skill'><h4>MySQL</h4><img src={mysql} alt="" /></div>
          <div className='skill'><h4>Python</h4><img src={python} alt="" /></div>
        </div>
      </div>
    </div>


  )
}

export default About;
