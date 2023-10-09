import React from 'react';

import "./FooterStyle.scss";
export default function Footer() {
    return(
        <footer className="footer">
                <p>All rights reserved © 2023</p>
            <p>This site is protected by reCAPTCHA and the Google</p>
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </footer>
    )
}