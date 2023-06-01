import './proyecto.css';

function Proyecto({img, img2, description, link,technologysImg,technologysImg2,technologysImg3,technologysImg4}){
    return(
        <div className='card'>
        <a className="proyecto" href={link}>
            <img className="proyectoFoto" src={img} alt="" />
            <img className="proyectoFoto" src={img2} alt="" />
        </a>
        <div className='descriptionTechnologys'>
        <div className="description"><span>{description}</span></div>
            <div className='technologys'>
            <img className='technologysImg'src={technologysImg} />
            <img className='technologysImg'src={technologysImg2} />
            <img className='technologysImg'src={technologysImg3} />
            <img className='technologysImg'src={technologysImg4} />
            </div>
        </div>
        </div>
    )
}

export default Proyecto;