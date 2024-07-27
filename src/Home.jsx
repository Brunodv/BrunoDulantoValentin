import './App.css'
import './home.css'

import github from './img/github.png';
import inst from './img/inst.png';
import whatsapp from './img/whatsapp.png';
import linkedin from './img/linkedin.png'

function Home() {

  return (
    <div id="home">
      <div className='homeContainer'>
        <h1 className='BDVh1'>BRUNO DULANTO VALENTIN</h1>
        <div className="buttons">
          <button className='b1'><a className='link' href="https://drive.google.com/file/d/1s-Ygb4vpTgB4o7LIAa_aKbA5YSbBTSLb/view?usp=sharing"> Descargar CV</a></button>
          <button className='b1'><a className='link' href="mailto:xcdrxcdr@gmail.com?subject=Queremos%20trabajar%20contigo!&body=Hola%2C%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios">Escríbeme</a></button>
        </div>

        <div className='socials'>
          <button className='b2'><a href="https://github.com/Brunodv"><img src={github} alt="github" /></a></button>
          <button className='b2'><a href="https://www.linkedin.com/in/bruno-dulanto-valentin-bbb1bb148/"><img src={linkedin} alt="instagram" /></a></button>
          <button className='b2'><a href="https://wa.me/51977631700"><img src={whatsapp} alt="whatsapp" /></a></button>
        </div>
      </div>
    </div>
  )
}
export default Home;