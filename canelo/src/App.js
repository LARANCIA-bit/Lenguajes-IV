import { Routes, Route} from 'react-router-dom';
import BlobPage from './page/BlobPage.jsx';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Bienvenido a Pichiruchi</h1>
        <p>Explora las diferentes secciones de nuestra aplicación.</p>
      </div>
    </div>
  );
}

function Acerca() {
  return (
    <div className="page-container">
      <h2>Acerca de</h2>
      <p>Información sobre la aplicación.</p>
    </div>
  );
}

function Contacto() {
  return (
    <div className="page-container">
      <h2>Contacto</h2>
      <p>Puedes escribirnos aquí.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blob" element={<BlobPage />} />
      <Route path="/acerca" element={<Acerca />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;