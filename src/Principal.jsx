import Navegacion from './Componentes/Nav';
import Fotos from './Componentes/Part';
import Vistas from './Componentes/Vistas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Principal() {
  return (
    <>
        <Router >
          <Navegacion />
          <Routes >
            <Route path='/vistas'exact Component={Vistas}/>
            <Route path='/Fotos' Component={Fotos}/>
          </Routes >
        </Router>
        <Fotos />
    </>
  )
}

export default Principal
