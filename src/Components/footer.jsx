import React from 'react'
import "../Components/Styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                   
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} RonalPP. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Ronalpp/DarkQR"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://discord.gg/KUFUz6EXPr"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a
                    href="https://www.youtube.com/@Ketoxm"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
  )
}

export default footer
