import './App.css'
import './home.css'

import bruno from './img/bruno.jpg';
import github from './img/github.png';
import inst from './img/inst.png';
import wtsapp from './img/wtsapp.png';
import Burguer from './Burguer';


function Home() {
  
  return (
      <div id="home">
      <Burguer />
      <div className='typewriter'>
        <h1 className='twH1'>BRUNO DULANTO VALENTIN</h1>
      </div>
      <div className="buttons">
        <button className='b1'><a className='link' href="https://drive.google.com/file/d/1DEy5QdhG059wOWUjSMbgvibngxxiL7VW/view?usp=share_link"> Descargar CV</a></button>
         <button className='b1'><a className='link' href="mailto:xcdrxcdr@gmail.com?subject=Queremos%20trabajar%20contigo!&body=Hola%2C%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios">Escríbeme</a></button>
      </div>
      
      <div className='socials'>
        <button className='b2'><a href="https://github.com/Brunodv"><img src={github} alt="github" /></a></button>
        <button className='b2'><a href="https://www.instagram.com/brunodulantovalentin/"><img src={inst} alt="instagram" /></a></button>
        <button className='b2'><a href="https://wa.me/51977631700"><img src={wtsapp} alt="whatsapp" /></a></button>
      </div>        
      </div>
  )}
  export default Home;