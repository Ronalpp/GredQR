import React from 'react';
import 'boxicons';
import "../Components/css/Header.css"
import Logo2 from "../assets/logo2.png"


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo2} alt="" className='logo' />
                <h1>Gred QR</h1>
            </div>
            <nav className="nav">

          
    
                <a href="/generate">Generar Código QR</a>
                
                <a href="/donation">Donaciones</a>
                <a href="/contact">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;
