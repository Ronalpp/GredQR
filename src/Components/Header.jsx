import 'boxicons';
import "../Components/css/Header.css"
import Logo2 from "../img/logo2.png"


const Header = () => {
    return (
        <header className="header">

            <div className="logo">
                <a href="/">  <img src={Logo2} alt="" className='logo' /></a>
                <h1>Gred QR</h1>
            </div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/generate">Generar Código QR</a>
                <a href="/donation">Donaciones</a>
            </nav>
        </header>
    );
};

export default Header;
