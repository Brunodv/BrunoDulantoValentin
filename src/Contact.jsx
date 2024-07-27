import './contact.css'
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import wtsapp from './img/whatsapp.png';

function Contact() {
    return (
        <div id="contactoContainer">
            <div className="columnsContact">
                <div className="rows">
                    <h1 className="contactoTitle">Contacto</h1>
                    <div className="contactSocials">
                        <button className='b2'><a href="https://wa.me/51977631700"><img src={wtsapp} alt="whatsapp" /></a></button>
                        <button className='b2'><a href=""><img src={github} alt="email" /></a></button>
                        <button className='b2'><a href="https://www.linkedin.com/in/bruno-dulanto-valentin-bbb1bb148/"><img src={linkedin} alt="instagram" /></a></button>
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