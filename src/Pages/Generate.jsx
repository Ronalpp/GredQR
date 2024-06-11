import React, { useState } from 'react';
import '../Components/css/Generate.css';

const Generate = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const generateQRCode = () => {
    if (inputValue.trim() !== '') {
      setIsGenerating(true);
      fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`)
        .then(response => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error('Network response was not ok.');
        })
        .then(blob => {
          const url = URL.createObjectURL(blob);
          setQRCodeUrl(url);
          setIsGenerating(false);
        })
        .catch(error => {
          console.error('Error fetching QR code:', error);
          setIsGenerating(false);
        });
    }
  };

  return (
    <div className="qr-generator">
      <h2 className="qr-generator-title">Generador de Códigos QR</h2>
      <div className="qr-input-container">
        <input
          type="text"
          placeholder="Ingrese el texto o la URL"
          value={inputValue}
          onChange={handleChange}
          className="qr-input"
        />
        <button
          onClick={generateQRCode}
          disabled={isGenerating}
          className="qr-generate-button"
        >
          {isGenerating ? 'Generando...' : 'Generar QR'}
        </button>
      </div>
      {qrCodeUrl && (
        <div className="qr-code-container">
          <img src={qrCodeUrl} alt="Código QR generado" className="qr-code" />
        </div>
      )}
    </div>
  );
};

export default Generate;
