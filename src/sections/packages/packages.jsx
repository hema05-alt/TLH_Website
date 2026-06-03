import React from "react";
import "./packages.css";
import package1 from "../../assets/images/vagamon.jpg";
import package2 from "../../assets/images/munnar.jpg";
import package3 from "../../assets/images/ooty.jpg";
import package4 from "../../assets/images/karnataka.jpg";
import { FaHotel, FaUtensils, FaBus, FaWhatsapp } from "react-icons/fa";

function Packages() {
    return (
        <section className="packages-section">
            {/* Header */}

            <div className="packages-header">
                <h6> Our Tour Packages </h6>
                <h1> Popular Tour <span>Packages</span></h1>
                <p>Handpicked holiday packages for unforgottable experiences.</p>
                    
            </div>

            {/* Package Cards1 */}
            <div className="packages-container">

                <div className="package-card">
                    <img src={package1} alt="Package 1" className="package-image" />
                    <h3>VAGAMON</h3>
                    <p>Explore Adventures Places</p>

                    <div className="package-list">
                        <div className="package-list-item">
                            <p><FaHotel /> Hotel</p>
                            <p><FaUtensils /> Meals</p>
                            <p><FaBus /> Transportation</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="package-footer">
                        <button className="enquire-now"><FaWhatsapp className="whatsapp" /> Enquire Now</button>
                    </div>

                </div>

                {/* Package Cards2 */}
                <div className="package-card">
                    <img src={package3} alt="Package 2" className="package-image" />
                    <h3>OOTY</h3>
                    <p>Experience the beauty of Ooty</p>

                    <div className="package-list">
                        <div className="package-list-item">
                            <p><FaHotel /> Hotel</p>
                            <p><FaUtensils /> Meals</p>
                            <p><FaBus /> Transportation</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="package-footer">
                        <button className="enquire-now"><FaWhatsapp className="whatsapp" /> Enquire Now</button>
                    </div>

                </div>

                {/* Package Cards3 */}

                <div className="package-card">
                    <img src={package2} alt="Package 2" className="package-image" />
                    <h3>MUNNAR</h3>
                    <p>Experience the beauty of Munnar</p>

                    <div className="package-list">
                        <div className="package-list-item">
                            <p><FaHotel /> Hotel</p>
                            <p><FaUtensils /> Meals</p>
                            <p><FaBus /> Transportation</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="package-footer">
                        <button className="enquire-now"><FaWhatsapp className="whatsapp" /> Enquire Now</button>
                    </div>
                </div>


                {/* Package Cards4 */}

                <div className="package-card">
                    <img src={package4} alt="Package 4" className="package-image" />
                    <h3>KARNATAKA</h3>
                    <p>Explore many historical places</p>

                    <div className="package-list">
                        <div className="package-list-item">
                            <p><span><FaHotel /></span> Hotel</p>
                            <p><span><FaUtensils /></span> Meals</p>
                            <p><span><FaBus /></span> Transportation</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="package-footer">
                        <button className="enquire-now"><FaWhatsapp className="whatsapp" /> Enquire Now</button>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Packages;