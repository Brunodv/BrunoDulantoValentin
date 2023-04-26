import './App.css'
import Proyecto from './Proyecto';
import './proyects.css'

import bruno from './img/bruno.jpg'
import mario2 from './img/mario2.png'
import ansys from './img/ansys.png'
import cfd from './img/cfd.png'
import manto from './img/manto.jpg'
function Ingenieria(){
    return( 
        <div className="proyects">
        <h1 id="ingTitle">Ingeniería Aeronáutica</h1>
        <div className="proyectsGrid">
        <Proyecto img={ansys} img2={cfd}
        description="Breve recopilación de física aplicada, analisís de estructuras por elementos finitos y Dinámica de fluidos computacionales"
        link="https://brunodv.github.io/Ansys/" linkName="ver"/> 
        <Proyecto img={manto} img2=''
        description="Mi propio CAD web (Aún en proceso)"
        link="https://brunodv.github.io/NotFound/" linkName="ver"/>
        <Proyecto img={manto} img2=''
        description="Un cálculador conceptual de aviones automático (Aún en proceso)"
        link="https://brunodv.github.io/NotFound/" linkName="ver"/>
        </div></div>
    )
    
}

export default Ingenieria;