import React from "react";

import { Link } from "react-router-dom";

import './Footer.css'



function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-links">
                    <a className="footer-links" href='https://github.com/Sheeptoaster/W15-Solo-Project'>
                        Github
                    </a>
                    <a className="footer-links" href='https://www.linkedin.com/in/jacob-weber-662a08153/'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    )
}


export default Footer;
