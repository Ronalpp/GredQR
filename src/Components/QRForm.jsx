import React, { useState } from 'react';

const QRForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para generar el código QR
    console.log(`Generar QR para: ${url}`);
  };

  return (
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
        <button type="submit" className="generate-btn">
          Generar
        </button>
      </form>
    </section>
  );
};

export default QRForm;
