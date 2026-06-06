import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Button from "../common/Button/Button";
import logo from "../../assets/images/logo.webp";

const Navbar = ({ openBookingForm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu on nav click
  };

  // Close on click anywhere outside the navbar
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" ref={navRef}>
      <div className="container-fluid px-4">

        {/* Logo — Left */}
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
        >
          <img src={logo} alt="Thousand Light Holidays" className="navbar-logo" />
        </a>

        {/* Hamburger / X Toggle */}
        <button
          className={`navbar-toggler custom-toggler${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="toggler-bar bar1"></span>
          <span className="toggler-bar bar2"></span>
          <span className="toggler-bar bar3"></span>
        </button>

        {/* Menu */}
        <div className={`custom-collapse${menuOpen ? " show" : ""}`} id="navbarMenu">
          <ul className="navbar-nav ms-auto nav-links">
            {[
              { label: "Home", id: "home" },
              { label: "About Us", id: "about" },
              { label: "Packages", id: "packages" },
              { label: "Services", id: "services" },
              { label: "Testimonials", id: "testimonials" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <li className="nav-item" key={id}>
                <span className="nav-link" onClick={() => scrollToSection(id)}>
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="nav-btn">
            <Button
              title="Enquire Now"
              type="primary"
              className="navbar-btn"
              onClick={() => { openBookingForm(); setMenuOpen(false); }}
            />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
