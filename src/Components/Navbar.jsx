
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ titulo, logo }) => {
  const location = useLocation();

  const obtenerClase = (path) =>
    location.pathname === path ? 'link-nav activo' : 'link-nav';

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="navbar-img" />
          <h1 className="navbar-logo">{titulo}</h1>
        </div>
        <ul className="navbar-links">
          <li><Link className={obtenerClase('/')} to="/">Inicio</Link></li>
          <li><Link className={obtenerClase('/proyectos')} to="/proyectos">Proyectos</Link></li>
          <li><Link className={obtenerClase('/contacto')} to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;