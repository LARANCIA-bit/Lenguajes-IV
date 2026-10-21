import { Routes, Route } from 'react-router-dom';
import BlobPage from './Components/BlobPage';
import './App.css';

function Home() {
return (
    <div style={{ padding: '20px' }}>
    </div>
);
}

function Acerca() {
return (
    <div style={{ padding: '20px' }}>
    <h2>Acerca de</h2>
    <p>Información sobre la aplicación.</p>
    </div>
);
}

function Contacto() {
return (
    <div style={{ padding: '20px' }}>
    <h2>Contacto</h2>
    <p>Formulario o datos de contacto.</p>
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