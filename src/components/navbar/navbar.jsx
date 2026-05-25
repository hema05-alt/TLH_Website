import "./Navbar.css";
import Button from "../common/Button/Button"

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">
        Thousand Light Holidays
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Packages</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Testinomials</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      {/* Button */}
      <Button text="Enquire Now"/>

    </nav>
  );
}

export default Navbar;