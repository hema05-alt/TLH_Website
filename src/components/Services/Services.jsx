import React from "react";
import serviceImage from "../../assets/images/travel-service-image.webp";

import {
  FaBus,
  FaUsers,
  FaGift,
  FaCheckCircle,
} from "react-icons/fa";

import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-wrapper">

        {/* LEFT SIDE */}

        <div className="services-left">

          <span
            className="service-tag"
            data-aos="fade-up"
          >
            OUR SERVICES
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Crafting Meaningful
            <span> Travel Experiences</span>
          </h2>

          <p
            className="service-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From customized tour packages to complete travel arrangements,
            we create smooth, comfortable and memorable journeys tailored
            to every traveler.
          </p>

          <div
            className="service-image"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={serviceImage}
              alt="South India Tour Packages by Thousand Light Holidays"
              loading="lazy"
            />
          </div>

          <div className="service-cards">

            <div
              className="mini-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mini-icon">
                <FaBus />
              </div>

              <h4>Tour Packages</h4>

              <p>
                Domestic Tours &
                <br />
                Customized Planning
              </p>
            </div>

            <div
              className="mini-card"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="mini-icon">
                <FaUsers />
              </div>

              <h4>Special Trips</h4>

              <p>
                Honeymoon, Family
                <br />
                & Group Tours
              </p>
            </div>

            <div
              className="mini-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mini-icon">
                <FaGift />
              </div>

              <h4>Seasonal Offers</h4>

              <p>
                Festival Packages &
                <br />
                Weekend Getaways
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="travel-card"
          data-aos="fade-left"
        >

          <div>

            <span className="travel-label">
              COMPLETE A-Z ARRANGEMENTS
            </span>

            <h3>
              End-to-End
              <br />
              Travel Assistance
            </h3>

            <div className="travel-grid">

              <p><FaCheckCircle /> Pickup & Drop</p>
              <p><FaCheckCircle /> Hotel Stay</p>

              <p><FaCheckCircle /> Food Arrangements</p>
              <p><FaCheckCircle /> Sightseeing</p>

              <p><FaCheckCircle /> Activities & Games</p>
              <p><FaCheckCircle /> Tour Guides</p>

              <p><FaCheckCircle /> Transportation</p>
              <p><FaCheckCircle /> Trip Scheduling</p>

            </div>

          </div>

          <div className="travel-stats">

            <div className="stat-card">

              <div className="stat-item">
                <h4>2+</h4>
                <span>Years Service</span>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <h4>200+</h4>
                <span>Tours</span>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <h4>24/7</h4>
                <span>Support</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;