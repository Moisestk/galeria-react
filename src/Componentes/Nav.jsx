import {Link} from 'react-router-dom';
function Navegacion() {

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-transparent" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Galeria <img src="/src/Componentes/img/logo.ico" alt="" height="30px" width="30px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <Link className='nav-link' to='/vistas'>Vistas</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to='/Fotos'>Imagenes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      
    </>
  )
}

export default Navegacion;