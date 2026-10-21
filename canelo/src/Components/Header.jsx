import './Header.css';
import foto from './img/aa.png';
import { Link } from 'react-router-dom';

const Header = () => {
const HOLA = () => {
    alert("¡HOLA!");
};

return (
    <header className="header">
    <div className="logo-container">
        <img src={foto} alt="Logo" className="header-logo" />
        <h1>Pichiruchi</h1>
    </div>

    <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/blob">Blobs</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
    </nav>

    <button onClick={HOLA}>Hacer Click</button>
    </header>
);
};

export default Header;