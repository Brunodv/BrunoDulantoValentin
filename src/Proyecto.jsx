import './proyecto.css';

function Proyecto({img, img2, description, link, linkName}){
    return(
        <div className='card'>
        <div className="proyecto">
            <img className="proyectoFoto" src={img} alt="" />
            <img className="proyectoFoto" src={img2} alt="" />
        </div>
        <div className='descriptionLink'>
        <div className="description"><span>{description}</span></div>
        </div>
            <a className='proyectLink' href={link}>{linkName}</a>
        </div>
    )
}

export default Proyecto;