import React from 'react';

const Footer = () => {
    var d = new Date();
    const currentYear = d.getFullYear();

    return (
        <footer className="footer">
            <p> © ReadBook {currentYear} all rights reserved @EveZennou</p>
        </footer>
    )
}

export default Footer;