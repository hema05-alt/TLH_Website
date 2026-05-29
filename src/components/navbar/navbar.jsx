import React from "react";
import "./Navbar.css";
import Button from "../common/Button/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand logo" href="/">
          <span className="logo-text">1000 Light Holidays</span>
        </a>

        {/* Hamburger Button */}
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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>

          </ul>

          {/* Button */}
          <div className="nav-btn">
            <Button title="Enquire Now" type="primary" />
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;