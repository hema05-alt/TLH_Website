import React,{ useState,useEffect } from "react";
import "./Herosection.css";
import Button from "../common/Button/Button";
import hero1 from "../../assets/images/hero-image1.webp"
import hero2 from "../../assets/images/hero-image2.webp"
import hero3 from "../../assets/images/hero-image3.webp"
import hero4 from "../../assets/images/hero-image4.webp"

const heroImages = [hero1, hero2, hero3, hero4];

const HeroSection = () => {

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prevImage) => 
        prevImage === heroImages.length - 1
          ? 0 
          : prevImage + 1
      );
    },4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{backgroundImage: `url(${heroImages[currentImage]})`}}>

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