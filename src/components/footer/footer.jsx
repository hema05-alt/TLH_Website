import react from 'react';
import './footer.css';
import logo from '../../assets/logos/tlh.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function footer() {
    return (
        <footer className="footer">

        {/* Left Section */}
        <div className="footer-section">
            <div className="logo-box">
                <img src={logo} alt="TLH Logo" className="logo" />

                <div className='company-info'>
                    <h2>Thousand Light Holidays</h2>
                    <p>Travel • Explore • Experience</p>
                </div>
            </div>

            <p className="description">
                Your trusted travel partner for exploring the beautiful
                destinations of South India.
            </p>
        </div>

        {/* Quick Section */}
        <div className="footer-section">
            <h3>Quick Links</h3>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tour Packages</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>
        </div>

        {/* SERVICES*/}
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

        {/* Contact Section */}
        <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
                <li>
                    <FaPhoneAlt />+91 12345 67890
                </li>

                <li>
                    <FaEnvelope />thousandlightholidays@gmail.com
                </li>

                <li>
                    <FaMapMarkerAlt />Cheranmahadevi, Tirunelveli,
                    Tamil Nadu, India
                </li>

            </ul>
        </div>
        </footer>
    );
};

export  default footer;