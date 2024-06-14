import { useState } from 'react';
import "../App.css";

const QRForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Generar QR para: ${url}`);
  };

  return (
    <div className="qr-generator">
      <h2 className="qr-generator-title">Generar Código QR</h2>
      <form onSubmit={handleSubmit} className="qr-form">
        <div className="qr-input-container">
          <input 
            type="text" 
            placeholder="Introduce la URL" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            required 
          />
          <button type="submit" className="qr-generate-btn">
            Generar
          </button>
        </div>
      </form>
    </div>
  );
};

export default QRForm;
