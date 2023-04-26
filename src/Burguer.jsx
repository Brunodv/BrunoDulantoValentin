import { useState } from 'react';
import './Burger.css'
import home from './img/home.png';
import skills from './img/skills.png';
import me from './img/me.png';
import proyectos from './img/proyectos.png';
import ingenieria from './img/ingenieria.png';
import documentos from './img/documentos.png';
import contacto from './img/contacto.png';
import burguer from './img/burguer.png';
import close from './img/close.png'

function Burguer() {
  const [showNav, setShowNav] = useState(false); // Estado para mostrar/ocultar la barra de navegación

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });

    setShowNav(false); // Oculta la barra de navegación después de hacer clic en un elemento de la lista
  };
    
    return( 
      <> 
        <aside>
        <div className='Burguer' onClick={toggleNav}><img  src={showNav ? close : burguer} alt="" /></div>
        <ul className={`nav ${showNav ? 'show' : ''}`}>
        <li onClick={()=>handleClick('home')}><div className="imgDescription"><img className="rotateRight" src={home} alt="" /><h2 className='asideDescription'>Inicio</h2></div></li>
          <li onClick={()=>handleClick('about')}><div className="imgDescription"><img className="rotateLeft" src={skills} alt="" /><h2 className='asideDescription'>Skills</h2></div></li>
          <li onClick={()=>handleClick('proyectsTitle')}><div className="imgDescription"><img className="rotateRight" src={proyectos} alt="" /><h2 className='asideDescription'>Proyectos</h2></div></li>
          <li onClick={()=>handleClick('ingTitle')}><div className="imgDescription"><img className="rotateLeft" src={ingenieria} alt="" /><h2 className='asideDescription'> Aeronáutica</h2></div></li>
          <li onClick={()=>handleClick('documentosTitle')}><div className="imgDescription"><img className="rotateRight" src={documentos} alt="" /><h2 className='asideDescription'>Documentos</h2></div></li>
          <li onClick={()=>handleClick('contactoContainer')}><div className="imgDescription"><img className="rotateLeft" src={contacto} alt="" /><h2 className='asideDescription'>Contácto</h2></div></li>
          </ul>
        </aside>
      </>
     )
}
export default Burguer;