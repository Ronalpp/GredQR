import React from 'react';
import 'boxicons';

const InfoSection = () => {
  return (
    <section id="about" className="info-section">
      <div className="info-container">
        <div className="info-item">
          <box-icon name='time-five' size='lg' color='#4CAF50'></box-icon>
          <h3>Rápido y Eficiente</h3>
          <p>Genera códigos QR al instante con nuestra herramienta fácil de usar.</p>
        </div>
        <div className="info-item">
          <box-icon name='money' size='lg' color='#4CAF50'></box-icon>
          <h3>Dinero</h3>
          <p>Crea codigos QR gratis, sin limites.</p>
        </div>
        <div className="info-item">
          <box-icon name='mobile' size='lg' color='#4CAF50'></box-icon>
          <h3>Compatible</h3>
          <p>Funciona en todos los dispositivos móviles para que puedas escanear donde quieras.</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
