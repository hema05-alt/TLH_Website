import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.webp";
import Button from "../common/Button/Button";

const Navbar = ({ openBookingForm }) => {

  // smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid px-4">

        {/* Logo */}
        <div
          className="navbar-brand logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="1000 Light Holidays"
            className="logo-img"
          />
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto nav-links">

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("home")}>
                Home
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("packages")}>
                Packages
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("services")}>
                Services
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection("contact")}>
                Contact
              </span>
            </li>

          </ul>

          {/* Button */}
          <div className="nav-btn">
            <Button
              title="Enquire Now"
              type="primary"
              className="navbar-btn"
              onClick={openBookingForm}
            />
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;