// src/Components/BlobPage.jsx
import { useState } from 'react';

const BlobPage = () => {
const [miBlob, setMiBlob] = useState(null);
const [resultado, setResultado] = useState(null);

const handleCrear = () => {
    const texto = "Este es un archivo de texto creado con un Blob en JavaScript.";
    const nuevoBlob = new Blob([texto], { type: "text/plain" });

    setMiBlob(nuevoBlob);
    setResultado(
    <div>
        Blob creado correctamente. <br />
        Tamaño: {nuevoBlob.size} bytes <br />
        Tipo: {nuevoBlob.type}
    </div>
    );
};

const handleDescargar = () => {
    if (!miBlob) {
    setResultado("Primero creá el Blob de texto.");
    return;
    }
    const url = URL.createObjectURL(miBlob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt"; 
    enlace.click();
    URL.revokeObjectURL(url);
};

const handleSlice = () => {
    if (!miBlob) {
    setResultado("Primero creá el Blob de texto.");
    return;
    }
    const blobRecortado = miBlob.slice(0, 10, "text/plain");
    const lector = new FileReader();
    lector.onload = (evento) => {
    setResultado(
        <div>
        Blob original: {miBlob.size} bytes <br />
        Blob recortado (slice 0-10): "{evento.target.result}" <br />
        Tamaño del recorte: {blobRecortado.size} bytes
        </div>
    );
    }; 
    lector.readAsText(blobRecortado);
};

return (
    <div style={{ padding: '20px' }}>
        <h2>Sección de Blobs</h2>
        <div className="botones">
            <button onClick={handleCrear}>Crear Blob de texto</button>
            <button onClick={handleDescargar}>Descargar Blob</button>
            <button onClick={handleSlice}>Usar slice()</button>
        </div>
        <div id="resultado" style={{ marginTop: '0' }}>{resultado}</div>
    </div>
);
};

export default BlobPage;