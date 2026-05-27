import { useState } from "react";
import "./Navbar.css";
import Button from "../common/Button/Button"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">
        Thousand Light Holidays
      </div>

      {/*Hamburger Icon*/}

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="bi bi-x-lg"></i>
        ):(
          <i className="bi bi-list"></i>
        )}
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "active": ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Packages</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      {/* Button */}
      <Button text="Enquire Now"/>

    </nav>
  );
}

export default Navbar;