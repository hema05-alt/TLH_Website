import React, { useState, useEffect } from "react";
import "./packages.css";
import AOS from "aos";
import "aos/dist/aos.css";

import package1 from "../../assets/images/vagamon.jpg";
import package2 from "../../assets/images/munnar.jpg";
import package3 from "../../assets/images/ooty.jpg";
import package4 from "../../assets/images/karnataka.jpg";

import {FaWhatsapp, FaSuitcaseRolling, FaMountain, FaTree, FaTrain, FaLeaf, FaWater, FaLandmark, FaMonument
} from "react-icons/fa";

import BookingForm from "../../components/bookingform/bookingform";

function Packages() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [showBookingForm, setShowBookingForm] = useState(false);

    // Insert json packages inside the jsx file.
    const packages = [
        {
            title: "VAGAMON",
            subtitle: "Explore Adventure & Nature",
            image: package1,
            places: [
                { icon: <FaMountain />, text: "Pine Forest" },
                { icon: <FaTree />, text: "Vagamon Meadows" },
                { icon: <FaMountain />, text: "Adventure Park" }
            ]
        },
        {
            title: "OOTY",
            subtitle: "Queen of Hill Stations",
            image: package3,
            places: [
                { icon: <FaTrain />, text: "Toy Train" },
                { icon: <FaLeaf />, text: "Botanical Garden" },
                { icon: <FaMountain />, text: "Doddabetta Peak" }
            ]
        },
        {
            title: "MUNNAR",
            subtitle: "Tea Gardens & Waterfalls",
            image: package2,
            places: [
                { icon: <FaLeaf />, text: "Tea Gardens" },
                { icon: <FaWater />, text: "Attukad Falls" },
                { icon: <FaMountain />, text: "Top Station" }
            ]
        },
        {
            title: "KARNATAKA",
            subtitle: "History & Heritage",
            image: package4,
            places: [
                { icon: <FaLandmark />, text: "Mysore Palace" },
                { icon: <FaMonument />, text: "Hampi" },
                { icon: <FaLandmark />, text: "Gol Gumbaz" }
            ]
        }
    ];

    return (
        <section className="packages-section" id="packages">

            <div className="packages-header">
                <h6 className="pack-underline">OUR TOUR PACKAGES</h6>
                <h1>
                    Popular Tour <span>Packages</span>
                    <FaSuitcaseRolling className="package-logo" />
                </h1>

                <p>
                    Handpicked holiday packages for unforgettable experiences.
                </p>
            </div>

            <div className="packages-container">

                {packages.map((item, index) => (
                    <div key={index} className="package-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>

                        <img
                            src={item.image}
                            alt={item.title}
                            className="package-image"
                        />

                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>

                        <div className="package-list-item">

                            {item.places.map((place, i) => (
                                <p key={i}>
                                    {place.icon}
                                    {place.text}
                                </p>
                            ))}

                        </div>

                        <div className="package-footer">
                            <button
                                className="enquire-now"
                                onClick={() => setShowBookingForm(true)}
                            >
                                <FaWhatsapp className="whatsapp" />
                                Enquire Now
                            </button>
                        </div>

                    </div>
                ))}

            </div>

            {showBookingForm && (
                <BookingForm
                    closeForm={() => setShowBookingForm(false)}
                />
            )}

        </section>
    );
}

export default Packages;