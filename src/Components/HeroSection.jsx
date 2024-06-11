import React from 'react';
import 'boxicons';
import "boxicons/css/boxicons.min.css";
import Logo from "../assets/scan (2).png";



const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Genera tus Códigos QR de manera rápida y sencilla</h1>
        <p>QRGen te permite crear códigos QR personalizados para tus necesidades en cuestión de segundos.</p>
        <a href="/generate" className="cta-button">
         Crea tu QR
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
