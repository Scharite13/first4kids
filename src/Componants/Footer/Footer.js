import React from 'react';
import "./Footer.styles.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="map-contact-container">
                <div className="map">
                    <h3 className="f-title"><i className="fas fa-map-marker-alt"></i>Find Us</h3>

                    <h4>First United Methodist Church</h4>
                    <p>603 11th St. W. | Bradenton FL 34205</p>

                </div>
                <div className="contact">
                    <h3 className="f-title"><i className="fas fa-phone-volume"></i>Contact Us</h3>
                    <a href="mailto: learn@firstforkids.net">learn@firstforkids.net</a>
                    <p>941-748-0824</p>
                </div>
            </div>
            <p className="footer">&copy; Copyright 2020 First for Kids | Design by Derek Scharite </p>
        </div>
    )
}

export default Footer;