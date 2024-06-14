import { useState } from 'react';
import "../App.css"
const QRForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Generar QR para: ${url}`);
  };

  return (
    <div className="papa">

    <section id="generate" className="qr-form-section">
      <h2>Generar Código QR</h2>
      <form onSubmit={handleSubmit} className="qr-form">
        <input 
          type="text" 
          placeholder="Introduce la URL" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          required 
        />
        </form>
        </section>
      <button type="submit" className="generate-btn">
          Generar
        </button>
    
    </div>
  );
};

export default QRForm;
