import '../Components/css/Footer.css';
import 'boxicons';
import Logo1 from "../img/logo1.png"


const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <img src={Logo1} />
            <a href="/">
            </a>
          </figure>
        </div>
        <div className="boxa">
          <h2>SOBRE NOSOTROS</h2>
          <p>En GredQR, nos especializamos en proporcionar soluciones rápidas y eficientes para la generación de códigos QR. Nuestro objetivo es simplificar el proceso de creación de códigos QR para que puedas enfocarte en lo que realmente importa: tu negocio.
          </p>

        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">

            <a href="https://discord.gg/fXPVkjCBGD" className='box-icon'>
            <box-icon name='discord-alt' type='logo' color='#0f2ac3' ></box-icon>
            </a>

            <a href="/" className='box-icon' data-name='instagram'>
              <a target="_blank"
                href="https://www.instagram.com/ronalperezrd/"
                rel="noreferrer"

              >
               
               <box-icon name='instagram-alt' type='logo' color='#d41515' ></box-icon></a>
            </a>

            <a href="/" className='box-icon' data-name='twitter'>

              <a target="_blank"
                href="https://github.com/Ronalpp/GredQR"
                rel="noreferrer"

              >
                
                <box-icon name='github' type='logo' color='#fff'></box-icon>
              </a>
            </a>

          </div>
        </div>
      </div>
      <hr />
      <div className="grupo-2">
        <small>&copy; 2024 <b>GredQR</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
}

export default Footer;