import './App.css'
import './about.css'

import Emoji from 'react-emoji-render';
import bruno from './img/bruno.jpg';
import Carousel from './Carousel';


function About(){
  
  return (
        <div id="about">
        <div className="leftTitle">
        <h1 >Sobre mi</h1>
        </div>
        <div className="columns">
        <div>        
        <img className="foto" src={bruno} alt="Bruno Dulanto" />
        <p className='data'>Email:xcdrxcdr@gmail.com</p>
        <p className='data'>Lvl: 30</p>
        <p className='data'>Status:Contratable</p>
        </div>
        <div className="actitudes">
        <p>-Desarrollo de Software <Emoji text="😍" /> <br />
        -Ingeniería Aeronáutica <Emoji text="👨‍🎓" /><br />
        -Data Analytics <Emoji text="📊" /><br />
        -Física y Matemáticas <Emoji text="📚" /><Emoji text="👩‍💻" /><br />
        -Desarrollo personal <Emoji text="🧠💪" /><br />
        -Ajedrez, Fútbol <Emoji text="♞" /><Emoji text="⚽️" /><br />
        -Respeto ante todo <Emoji text="🙏" /><br />
        </p>
        </div> 
        </div>
        <div className="skillsTitle">
          <h1>Skills</h1>
          <Carousel />
          </div>
        </div>


  )
}

export default About;
