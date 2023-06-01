import './contact.css'
import github from './img/github.png';
import inst from './img/inst.png';
import wtsapp from './img/wtsapp.png';

function Contact(){
    return(
    <div id="contactoContainer">
        <div className="columnsContact">
        <div className="rows">
            <h1 className="contactoTitle">Contacto</h1>
            <div className="contactSocials">
            <button className='b2'><a href="https://wa.me/51977631700"><img src={wtsapp} alt="whatsapp" /></a></button>
            <button className='b2'><a href=""><img src={github} alt="email" /></a></button>
            <button className='b2'><a href="https://www.instagram.com/brunodulantovalentin/"><img src={inst} alt="instagram" /></a></button>
        </div>
        </div>
        <div className="rows">
            <h1 className="Bruno"> Bruno Dulanto Valentin </h1> 
        </div>
        </div>
    </div>
    )
 }

 export default Contact;