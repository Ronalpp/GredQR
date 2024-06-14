import "./css/Header.css"
import Logo2 from "../img/logo2.png"
const Header = () => {
    return (
      <header>
        <div className="logo"> <img src={Logo2} alt="logo2" />
        <h1 className="Gred">GredQR</h1>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <ul>
            <li>
              <h4><a href="/" className="active">
                Home
              </a></h4>
            </li>
            <li>
              <h4><a href="/generate">Generador QR</a></h4>
            </li>
            <li>
              <h4><a href="/donation">Donaciones</a></h4>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label> 
       
      </header>
    );
  };
  
  export default Header;