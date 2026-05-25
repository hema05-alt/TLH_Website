import react from 'react';
import './footer.css';

function footer() {
    return (
        <footer className="footer">

        {/* Left Section */}
        <div className="footer-section">
            <div className="logo-box">
                <img src="/assets/logo.png" alt="TLH Logo" className="logo" />

                <div>
                    <h2>Thousand Light Holidays</h2>
                    <p>A Thousand Way Of Happiness</p>
                </div>
            </div>

            <p className="description">
                Your trusted travel partner for exploring the beautiful
                destinations of South India.
            </p>

            <div className="contact-icons">
                
            </div>
        </div>

        {/* Quick Section */}
        <div className="footer-section">
            <h3>Quick Links</h3>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Tour Packages</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Offers</li>
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
                    +91 12345 67890
                </li>

                <li>
                    thousandlightholidays@gmail.com
                </li>

                <li>
                    Cheranmahadevi, Tirunelveli,
                    Tamil Nadu, India
                </li>

            </ul>
        </div>
        </footer>
    );
};

export  default footer;