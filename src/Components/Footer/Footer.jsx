import React from 'react';

import "./FooterStyle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";

import{faFacebook, faInstagram,faWhatsapp,faTelegram} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return(
        <footer className="footer">
            <span className="footerContacts">
                <a href="tel:+386 99 999 99 99" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faPhone}  style={{color: "#000000",}} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook}  style={{color: "#000000",}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}  style={{color: "#000000",}} />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp}  style={{color: "#000000",}} />
                </a>
                <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram}  style={{color: "#000000",}} />
                </a >
                <a href="mailto: abc@example.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope}  style={{color: "#000000",}} />
                </a>
            </span>
            <span className="allRights">
                <p>All rights reserved © 2023</p>
            </span>
        </footer>
    )
}