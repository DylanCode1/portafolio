import '../styles/Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Sobre mí</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;