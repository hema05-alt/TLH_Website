import React from "react";
import "./about.css";
import picture3 from "../../assets/images/picture3.png";
import picture1 from "../../assets/images/picture1.png";
import picture2 from "../../assets/images/picture2.png";
import {
    FaMapMarkedAlt,
    FaUserTie,
    FaBus,
    FaPhoneAlt,
    FaHotel, FaGlobe,
    FaEye,
    FaBullseye
}

    from "react-icons/fa";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">

                {/* Top content */}
                <div className="about-top">

                    {/* Left image */}
                    <div className="about-image">
                        <img src={picture3} alt="About Us" className="picture picture1" />
                        <img src={picture1} alt="About Us" className="picture picture2" />
                        <img src={picture2} alt="About Us" className="picture picture3" />
                    </div>

                    {/* Right content */}
                    <div className="about-content">
                        <h1>About Us</h1>
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

                        {/* Vision */}
                        <div className="vision">
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
                    </div>
                </div>
            </div>


            {/* Bottom Cards */}
            <div className="about-bottom">

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

                </div>

                {/* Banner */}
                <div className="about-banner">

                </div>

            </div>
        </section>
    );
};

export default About;

