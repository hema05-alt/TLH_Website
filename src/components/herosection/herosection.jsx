import React from "react";
import "./Herosection.css";
import Button from "../common/Button/Button";

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        {/* Small Heading */}
        <h4 className="hero-title">
          Let’s Explore The World With
        </h4>

        {/* Company Name */}
        <h1 className="company-name">
          Thousand Light Holidays
        </h1>

        {/* Description */}
        <p className="hero-description">
          Your trusted travel partner for family tours, honeymoon packages, group trips, and customized holiday experiences. Discover affordable travel packages, comfortable journeys, and unforgettable memories with us.
        </p>

        <div className="hero-buttons">

            <Button title="View Packages" type="primary"/>
            <Button title="Contact Us" type="secondary"/>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;