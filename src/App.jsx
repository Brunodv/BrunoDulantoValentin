import './App.css'

import Home from './Home';
import About from './About';
import Proyects from './Proyects';
import Ingenieria from './Ingenieria';
import Documentos from './Documentos';
import Contact from './Contact';
import Burguer from './Burguer';

function App(){
  
  return (
    <div className="App">
      <Burguer />
      <div className="bruno">
      <Home />
      <About />
      <Proyects />
      <Ingenieria />
      <Documentos />
      <Contact />
      </div>
</div>
  )
}

export default App
