import React from "react";
import "./about.css";
import aboutImage from "../../assets/images/about.jpg";
import {
  FaMapMarkedAlt,
  FaUserTie,
  FaBus,
  FaPhoneAlt,
  FaHotel,
  FaGlobe,
  FaEye,
  FaBullseye
} 

from "react-icons/fa";

function About() {
    return (
        <section className="about-section">
            <div className="about-container">

                {/* Top content */}
                <div className="about-top">

                    {/* Left image */}
                    <div className="about-image">
                        <img src={aboutImage} alt="About Us" />
                    </div>

                    {/* Right content */}
                    <div className="about-content">
                        <h2>About Us</h2>
                        <p>
                            Thousand Light Holidays is a passionate travel company dedicated
                            to creating memorable journeys across South India. We believe
                            every trip should be comfortable, safe, and full of beautiful
                            memories.
                        </p>
                        <p>
                            From family vacations to honeymoon getaways, group tours to
                            corporate outings - we handle every detail with care and
                            professionalism.
                        </p>

                        {/* Features */}
                        <div className="features">
                            <div className="feature-item">
                                <span><FaMapMarkedAlt /></span>
                                <p>Personalized Tour Planning</p>
                            </div>

                            <div className="feature-item">
                                <span><FaUserTie /></span>
                                <p>Experienced Tour Guides</p>
                            </div>

                            <div className="feature-item">
                                <span><FaBus /></span>
                                <p>Comfortable Transportation</p>
                            </div>

                            <div className="feature-item">
                                <span><FaPhoneAlt /></span>
                                <p>24/7 Customer Support</p>
                            </div>

                            <div className="feature-item">
                                <span><FaHotel /></span>
                                <p>Trusted Hotel Arrangements</p>
                            </div>

                            <div className="feature-item">
                                <span><FaGlobe /></span>
                                <p>Hassle-free Journey</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Cards */}
                <div className="about-bottom">

                    {/* Vision */}
                    <div className="info-card">
                        <div className="icon">
                            <span><FaEye /></span>
                        </div>

                        <div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the most trusted travel partner 
                                for exploring the beauty of South India.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="info-card1">
                        <div className="icon1">
                            <span><FaBullseye /></span>
                        </div>

                        <div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver safe, affordable, and joyful 
                                travel experiences forevery customer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Banner */}
                <div className="about-banner">

                </div>

            </div>
        </section>
    );
};

export default About;

