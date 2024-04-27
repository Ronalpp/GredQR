
import React from 'react';
import '../css/Footer.css';


const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="/">
                            <img src="https://shr.wtf/Shr-wtf.png" alt="Just Another File Share Logo" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p> Shr.wtf, tu destino principal para el almacenamiento seguro y eficiente de datos. En Shr.wtf, nos enorgullece ofrecer una plataforma avanzada y fácil de usar que te permite almacenar, organizar y acceder a tus archivos y datos de manera rápida y segura.

                        Explora las infinitas posibilidades de organización de datos con Shr.wtf. Ya seas un profesional de negocios, un entusiasta creativo o alguien que simplemente valora la privacidad, nuestra plataforma está diseñada para satisfacer tus necesidades únicas.
                    </p>

                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">

                        <a href="https://discord.gg/fXPVkjCBGD" className='box-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418" />
                            </svg>
                        </a>

                        <a href="/" className='box-icon' data-name='instagram'>
                            <a target="_blank"
                                href="https://patreon.com/findit_moe"
                                rel="noreferrer"

                            >
                                <svg height="32" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="32"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m127.996927.00236401c-70.6933383 0-127.996927 57.30358869-127.996927 127.99692699v127.935462h29.7127618v-127.935462c0-54.2776568 44.0060356-98.2860564 98.2860562-98.2860564 54.280021 0 98.286056 44.0060356 98.286056 98.2860564 0 52.750506-41.569214 95.784934-93.732974 98.163128-16.57407-.135676-30.704227-2.825512-36.8932039-6.633884v-42.242012c9.2371309 6.048082 20.2850919 9.574239 32.1505279 9.574239 32.453595 0 58.759819-26.306697 58.759819-58.759819 0-32.4535941-26.306697-58.7740023-58.759819-58.7740023-32.4535939 0-58.759818 26.3213538-58.759818 58.7740023v127.836174c19.3938605-.018108 39.995257.026572 58.953667 0 70.693338 0 127.996927-57.246852 127.996927-127.935462-.004728-70.6980663-57.313045-128.001655-128.001655-128.001655z"
                                        fill="#ff5900" />
                                </svg>
                            </a>
                        </a>

                        <a href="/" className='box-icon' data-name='twitter'>

                            <a target="_blank"
                                href="https://www.facebook.com/findit.moe"
                                rel="noreferrer"

                            >
                                <svg height="32" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="32"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m241.871 256.001c7.802 0 14.129-6.326 14.129-14.129v-227.743c0-7.804-6.327-14.129-14.129-14.129h-227.742c-7.805 0-14.129 6.325-14.129 14.129v227.743c0 7.803 6.324 14.129 14.129 14.129z"
                                        fill="#395185" />
                                    <path
                                        d="m176.635 256.001v-99.137h33.277l4.982-38.635h-38.259v-24.668c0-11.186 3.107-18.809 19.148-18.809l20.459-.009v-34.555c-3.54-.471-15.684-1.523-29.812-1.523-29.498 0-49.692 18.005-49.692 51.071v28.493h-33.362v38.635h33.362v99.137z"
                                        fill="#fff" />
                                </svg>
                            </a>
                        </a>
                        <a href="/" className='box-icon' data-name='youtube'>
                            <a target="_blank"
                                href="https://www.kaggle.com/andres77872"
                                rel="noreferrer"

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="32" height="32"
                                    preserveAspectRatio="xMidYMid">
                                    <path
                                        d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" />
                                </svg>
                            </a>
                        </a>


                    </div>
                </div>
            </div>
            <hr />
            <div className="grupo-2">
                <div style={{
                    marginBottom: '16px'
                }}>
                    <a href={'/about'}>About </a>|
                    <a href={'/contact'}>Contact </a>|
                    <a href={'/privacy_policy'}>Privacy Policy </a>|
                    <a href={'/Disclaimer'}>Disclaimer </a>|
                    <a href='https://shr.arz.ai/docs'>Api</a>
                </div>

                <small>&copy; 2024 <b>Shr.wrf</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    );
}

export default Footer;