import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo.webp';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">

            {/* Company Info */}
            <div className="footer-section">
                <div className="logo-box">
                    <img src={logo} alt="TLH Logo" className="logo" />

                    <div className="company-info">
                        <h2>Thousand Light Holidays</h2>
                        <p>Travel • Explore • Experience</p>
                    </div>
                </div>

                <p className="description">
                    Your trusted travel partner for exploring the beautiful
                    destinations of South India.
                </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
                <h3>Quick Links</h3>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#packages">Tour Packages</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
                <h3>Our Services</h3>

                <ul>
                    <li>Domestic Tours</li>
                    <li>Honeymoon Packages</li>
                    <li>Family Vacations</li>
                    <li>Group Tours</li>
                    <li>Corporate Tours</li>
                    <li>Educational Tours</li>
                    <li>Adventure Trips</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
                <h3>Contact Info</h3>

                <ul className="contact-info">
                    <li>
                        <FaPhoneAlt />
                        <span>+91 73588 56007</span>
                    </li>

                    <li>
                        <FaEnvelope />
                        <span>thousandlightholidays@gmail.com</span>
                    </li>

                    <li>
                        <FaMapMarkerAlt />
                        <span>Tirunelveli, Tamil Nadu, India</span>
                    </li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;