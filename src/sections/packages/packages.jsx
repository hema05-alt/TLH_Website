import React, { useState } from "react";
import "./packages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import package1 from "../../assets/images/vagamon.jpg";
import package2 from "../../assets/images/munnar.jpg";
import package3 from "../../assets/images/ooty.jpg";
import package4 from "../../assets/images/karnataka.jpg";
import {FaWhatsapp, FaMountain, FaTree, FaTrain, FaLeaf, FaWater, FaLandmark, FaMonument}from "react-icons/fa";
import BookingForm from "../../components/bookingform/bookingform";



function Packages() {

    // animation when i scroll the section
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    // for opening the BookingForm
    const [showBookingForm, setShowBookingForm] = useState(false);

    return (
        <section className="packages-section" id="packages">

            <div className="packages-header">
                <h6>Our Tour Packages</h6>
                <h1>
                    Popular Tour <span>Packages</span>
                </h1>
                <p>
                    Handpicked holiday packages for unforgettable experiences.
                </p>
            </div>

            <div className="packages-container">

                {/* Vagamon */}
                <div className="package-card" data-aos="fade-up"
                    data-aos-delay="100">
                    <img src={package1} alt="Vagamon" className="package-image" />

                    <h3>VAGAMON</h3>
                    <p>Explore Adventure & Nature</p>

                    <div className="package-list-item">
                        <p><FaMountain /> Pine Forest</p>
                        <p><FaTree /> Vagamon Meadows</p>
                        <p><FaMountain /> Adventure Park</p>
                    </div>

                    <div className="package-footer">
                        <button className="enquire-now" onClick={() => setShowBookingForm(true)}>
                            <FaWhatsapp className="whatsapp" />
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Ooty */}
                <div className="package-card" data-aos="fade-up"
                    data-aos-delay="200">
                    <img src={package3} alt="Ooty" className="package-image" />

                    <h3>OOTY</h3>
                    <p>Queen of Hill Stations</p>

                    <div className="package-list-item">
                        <p><FaTrain /> Toy Train</p>
                        <p><FaLeaf /> Botanical Garden</p>
                        <p><FaMountain /> Doddabetta Peak</p>
                    </div>

                    <div className="package-footer">
                        <button className="enquire-now" onClick={() => setShowBookingForm(true)}>
                            <FaWhatsapp className="whatsapp" />
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Munnar */}
                <div className="package-card" data-aos="fade-up"
                    data-aos-delay="300">
                    <img src={package2} alt="Munnar" className="package-image" />

                    <h3>MUNNAR</h3>
                    <p>Tea Gardens & Waterfalls</p>

                    <div className="package-list-item">
                        <p><FaLeaf /> Tea Gardens</p>
                        <p><FaWater /> Attukad Falls</p>
                        <p><FaMountain /> Top Station</p>
                    </div>

                    <div className="package-footer">
                        <button className="enquire-now" onClick={() => setShowBookingForm(true)}>
                            <FaWhatsapp className="whatsapp" />
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Karnataka */}
                <div className="package-card" data-aos="fade-up"
                    data-aos-delay="400">
                    <img src={package4} alt="Karnataka" className="package-image" />

                    <h3>KARNATAKA</h3>
                    <p>History & Heritage</p>

                    <div className="package-list-item">
                        <p><FaLandmark /> Mysore Palace</p>
                        <p><FaMonument /> Hampi</p>
                        <p><FaLandmark /> Gol Gumbaz</p>
                    </div>

                    <div className="package-footer">
                        <button className="enquire-now" onClick={() => setShowBookingForm(true)}>
                            <FaWhatsapp className="whatsapp" />
                            Enquire Now
                        </button>
                    </div>
                </div>

            </div>

            {/* for closing the BookingForm */}
            {showBookingForm && (
                <BookingForm
                    closeForm={() => setShowBookingForm(false)}
                />
            )}
        </section>
    );
}

export default Packages;