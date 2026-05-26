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





// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// .about-section {
//   padding: 50px 20px;
//   background: #fff;
//   font-family: Arial, sans-serif;
// }

// .about-container {
//   max-width: 1200px;
//   margin: auto;
// }

// /* Top Section */

// .about-top {
//   display: flex;
//   gap: 40px;
//   align-items: center;
//   margin-bottom: 40px;
//   flex-wrap: wrap;
// }

// .about-image {
//   flex: 1;
// }

// .about-image img {
//   width: 100%;
//   border-radius: 20px;
//   height: 450px;
//   object-fit: cover;
// }

// .about-content {
//   flex: 1;
// }

// .about-content h2 {
//   font-size: 42px;
//   margin-bottom: 10px;
//   color: #111;
// }

// .line {
//   width: 80px;
//   height: 4px;
//   background: goldenrod;
//   margin-bottom: 20px;
// }

// .about-content p {
//   color: #555;
//   line-height: 1.8;
//   margin-bottom: 18px;
// }

// /* Features */

// .features {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   margin-top: 30px;
// }

// .feature-item {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }

// .feature-item span {
//   width: 45px;
//   height: 45px;
//   border: 2px solid goldenrod;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   color: goldenrod;
// }

// .feature-item p {
//   margin: 0;
//   font-size: 16px;
//   font-weight: 500;
// }

// /* Bottom Cards */

// .about-bottom {
//   display: flex;
//   gap: 20px;
//   border: 1px solid #eee;
//   border-radius: 20px;
//   padding: 30px;
//   flex-wrap: wrap;
// }

// .info-card {
//   flex: 1;
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   min-width: 300px;
// }

// .icon {
//   width: 90px;
//   height: 90px;
//   border: 2px solid goldenrod;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 35px;
//   color: goldenrod;
// }

// .info-card h3 {
//   font-size: 30px;
//   margin-bottom: 10px;
// }

// .info-card p {
//   color: #555;
//   line-height: 1.6;
// }

// /* Responsive */

// @media (max-width: 768px) {
//   .about-top {
//     flex-direction: column;
//   }

//   .features {
//     grid-template-columns: 1fr;
//   }

//   .about-bottom {
//     flex-direction: column;
//   }

//   .about-content h2 {
//     font-size: 34px;
//   }

//   .info-card h3 {
//     font-size: 24px;
//   }
// }