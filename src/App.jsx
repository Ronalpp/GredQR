import React, { useState } from 'react';
import './App.css';
import Footer from "./Components/Footer";

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const generateQR = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    setQrUrl(url);
    console.log(url);
  };

  const copyQRUrl = () => {
    navigator.clipboard.writeText(qrUrl).then(() => {
      alert('¡El código QR se ha copiado correctamente!');
    }, () => {
      alert('No se pudo copiar el código QR.');
    });
  };

  return (
    <div className="main">
      <h1>Ponga el enlace aquí</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="on"
      />
      <button className="animated-button" type="button" onClick={generateQR}>
        <span>Generar QR</span>
        <span></span>
      </button>
      {qrUrl && (
        <>
          <div onContextMenu={copyQRUrl}>
            <img src={qrUrl} alt="QR Code" />
          </div>

        </>

      )}
      <div class="burbujas">
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
      </div>
       <Footer/>
    </div>



  );
};

export default App;
