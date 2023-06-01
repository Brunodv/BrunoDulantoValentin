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
  const [activeSection, setActiveSection] = useState('home'); // Estado para controlar la sección activa

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false); //Oculta la barra de navegación después de hacer clic en un elemento de la lista
    setActiveSection(section); 
  };

 
    
    return( 
      <> 
        <aside className='menu'>
        <div className='Burguer' onClick={toggleNav}><img  src={showNav ? close : burguer} alt="" /></div> 
        <ul className={`nav ${showNav ? 'show' : ''}`}>
        <li className={activeSection === 'home' ? 'isActive' : ''} onClick={()=>handleClick('home')}><img className="menuIcon" src={home} alt="" /><h2 className='asideDescription'>Inicio</h2></li>
          <li className={activeSection === 'about' ? 'isActive' : ''} onClick={()=>handleClick('about')}><img className="menuIcon" src={me} alt="" /><h2 className='asideDescription'>Sobre Mi</h2></li>
          <li className={activeSection === 'about' ? 'isActive' : ''} onClick={()=>handleClick('h1Skills')}><img className="menuIcon" src={skills} alt="" /><h2 className='asideDescription'>Skills</h2></li>
          <li className={activeSection === 'proyectsTitle' ? 'isActive' : ''} onClick={()=>handleClick('proyectsTitle')}><img className="menuIcon" src={proyectos } alt="" /><h2 className='asideDescription'>Proyectos</h2></li>
          <li className={activeSection === 'ingTitle' ? 'isActive' : ''} onClick={()=>handleClick('ingTitle')}><img className="menuIcon" src={ingenieria } alt="" /><h2 className='asideDescription'> Aeronáutica</h2></li>
          <li className={activeSection === 'documentosTitle' ? 'isActive' : ''} onClick={()=>handleClick('documentosTitle')}><img className="menuIcon" src={documentos } alt="" /><h2 className='asideDescription'>Documentos</h2></li>
          <li className={activeSection === 'contactoContainer' ? 'isActive' : ''} onClick={()=>handleClick('contactoContainer')}><img className="menuIcon" src={contacto } alt="" /><h2 className='asideDescription'>Contácto</h2></li>
          </ul>
        </aside>
      </>
     )
}
export default Burguer;