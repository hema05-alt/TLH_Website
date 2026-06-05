import React, { useState, useEffect } from "react";
import "./Herosection.css";
import Button from "../common/Button/Button";

// React Icons
import { FaBus, FaUsers, FaHeadset, FaWallet } from "react-icons/fa";

// Images
import hero1 from "../../assets/images/hero-image1.webp";
import hero2 from "../../assets/images/hero-image2.webp";
import hero3 from "../../assets/images/hero-image3.webp";
import hero4 from "../../assets/images/hero-image4.webp";

const heroImages = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to Packages Section
  const handleViewPackages = () => {
    document
      .getElementById("packages")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Open WhatsApp
  const handleContactUs = () => {
    window.open(
      "https://wa.me/917358856007?text=Hi%20Thousand%20Light%20Holidays,%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages.",
      "_blank"
    );
  };

  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">

          <h4 className="hero-title">
            Let’s Explore The World With
          </h4>

          <h1 className="company-name">
            Thousand Light Holidays
          </h1>

          <p className="hero-description">
            Your trusted travel partner for family tours, honeymoon packages,
            group trips, and customized holiday experiences. Discover affordable
            travel packages, comfortable journeys, and unforgettable memories with us.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <Button
              title="View Packages"
              type="primary"
              onClick={handleViewPackages}
            />

            <Button
              title="Contact Us"
              type="secondary"
              onClick={handleContactUs}
            />
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stats-box">

              <div className="stat-item">
                <FaBus className="icon" />
                <div>
                  <h3>150+</h3>
                  <p>Customized Tours</p>
                </div>
              </div>

              <div className="stat-item">
                <FaUsers className="icon" />
                <div>
                  <h3>100%</h3>
                  <p>Family Friendly</p>
                </div>
              </div>

              <div className="stat-item">
                <FaHeadset className="icon" />
                <div>
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </div>

              <div className="stat-item">
                <FaWallet className="icon" />
                <div>
                  <h3>Affordable</h3>
                  <p>Packages</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;