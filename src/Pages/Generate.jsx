import React, { useState } from 'react';
import '../Components/css/Generate.css';
import Header from '../Components/Header';

const Generate = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [qrSize, setQRSize] = useState('150x150');
  const [isValidURL, setIsValidURL] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    validateInput(event.target.value);
  };

  const generateQRCode = () => {
    if (inputValue.trim() !== '' && isValidURL) {
      setIsGenerating(true);

      fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(inputValue)}`)
        .then(response => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error('La respuesta de la red no fue correcta');
        })
        .then(blob => {
          const url = URL.createObjectURL(blob);
          setQRCodeUrl(url);
          setIsGenerating(false);
        })
        .catch(error => {
          console.error('Error al obtener el código QR:', error);
          setIsGenerating(false);
        });
    }
  };

  const handleSizeChange = (event) => {
    setQRSize(event.target.value);
  };

  const validateInput = (value) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValidURL(urlRegex.test(value));
  };

  const handleSaveQR = () => {
    const a = document.createElement('a');
    a.href = qrCodeUrl;
    a.download = 'qr_code.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const buttonStyle = {
    backgroundColor: isGenerating || !isValidURL || inputValue.trim() === '' ? 'gray' : 'green',
  };

  return (
    <>
      <Header />
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
          <select
            value={qrSize}
            onChange={handleSizeChange}
            className="qr-size-select"
          >
            <option value="100x100">Pequeño (100x100)</option>
            <option value="250x250">Mediano (250x250)</option>
            <option value="500x500">Grande (500x500)</option>
            <option value="1000x1000">Muy grande (1000x1000)</option>
          </select>

          <div className='qr-generate-btn'>
            <button
              onClick={generateQRCode}
              disabled={isGenerating || !isValidURL || inputValue.trim() === ''}
              className="qr-generate-button"
              style={buttonStyle}
            >
              {isGenerating ? 'Generando...' : 'Generar QR'}
            </button>
          </div>
        </div>
        {qrCodeUrl && (
          <div className="qr-code-container">
            <img src={qrCodeUrl} alt="Código QR generado" className="qr-code" />
            <button onClick={handleSaveQR} className="qr-save-button">Guardar QR</button>
          </div>
        )}

        {!isValidURL && inputValue.trim() !== '' && <p className="qr-error-message">Por favor, ingrese una URL válida.</p>}
      </div>
    </>
  );
};

export default Generate;