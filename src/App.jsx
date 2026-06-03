import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/footer/footer";
import About from "./sections/about/about";
import Navbar from './components/Navbar/Navbar';
import BookingForm from './components/Bookingform/Bookingform';
import Packages from './sections/packages/packages';
import Herosection from './components/Herosection/Herosection';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar openBookingForm={() => setShowForm(true)} />

      {showForm && (
        <BookingForm closeForm={() => setShowForm(false)} />
      )}

      <Herosection />
      <About />
      <Packages />
      <Services />
      <Testimonials/>
      <Footer />
    </>
  );
}

export default App;