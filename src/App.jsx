import './App.css'

import Home from './Home';
import About from './About';
import Proyects from './Proyects';
import Ingenieria from './Ingenieria';
import Documentos from './Documentos';
import Contact from './Contact';

function App(){
  
  return (
    <div className="App">
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
