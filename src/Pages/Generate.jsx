import  { useState } from 'react';
import '../Components/css/Generate.css';
import Header from '../Components/Header';
import Footer from "../Components/footer"

const Generate = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isValidURL] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const generateQRCode = () => {
    if (inputValue.trim() !== '' && isValidURL) {
      setIsGenerating(true);

      fetch(`https://api.qrserver.com/v1/create-qr-code/?&data=${encodeURIComponent(inputValue)}`)
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
      
      <Footer />
    </>
   
  );
};

export default Generate;