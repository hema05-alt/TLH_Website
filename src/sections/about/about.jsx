import React from "react";
import "./about.css";

function About() {
    return (
        <section className="about-section">
            <div className="about-container">

                {/* Top content */}
                <div className="about-top">

                    {/* Left image */}
                    <div className="about-image">
                        <img src="" alt="About Us" />
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
                                <p>Personalized Tour Planning</p>
                            </div>

                            <div className="feature-item">
                                <p>Experienced Tour Guides</p>
                            </div>

                            <div className="feature-item">
                                <p>Comfortable Transportation</p>
                            </div>

                            <div className="feature-item">
                                <p>24/7 Customer Support</p>
                            </div>

                            <div className="feature-item">
                                <p>Trusted Hotel Arrangements</p>
                            </div>

                            <div className="feature-item">
                                <p>Hassle-free Journey</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* vision */}
                <div className="info-card">
                    <div className="icon">

                    </div>
                    <div>
                        <h3>Our Vision</h3>
                        <p>
                            To become the most trusted travel partner for exploring the
                            beauty of South India.
                        </p>
                    </div>
                </div>

                {/* mission */}
                <div classsName="info-card">
                    <div className="icon">

                    </div>
                    <div>
                        <h3>Our Mission</h3>
                        <p>
                            To deliver safe, affordable, and joyful travel experiences for
                            every customer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;