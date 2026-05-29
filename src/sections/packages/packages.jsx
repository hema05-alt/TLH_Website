import React from "react";
import "./packages.css";
import package1 from "../../assets/images/vagamon.jpg";
import package2 from "../../assets/images/munnar.jpg";
import package3 from "../../assets/images/ooty.jpg";

function Packages() {
    return (
        <section className="packages-section">
            {/* Header */}

            <div className="packages-header">
                <h4> Our Tour Packages </h4>
                <h1> Popular Tour Packages </h1>
            </div>

            {/* Package Cards */}
            <div className="packages-container">
                <div className="package-card">
                    <img src={package1} alt="Package 1" className="package-image" />
                    <h3>VAGAMON</h3>
                    <p>Explore Adventures Places</p>


                    <div className="day1">
                        <h4>Day 1</h4>
                    </div>
                    <ul>
                        <li>Visit to Pine Forest</li>
                        <li>Visit to Vaga View Point</li>
                        <li>Visit to Vaga Garden</li>
                    </ul>

                    <div className="day1">
                        <h4>Day 2</h4>
                    </div>
                    <ul>
                        <li>Visit to Pine Forest</li>
                        <li>Visit to Vaga Waterfalls</li>
                        <li>Visit to Vaga Lake</li>
                    </ul>

                    <div className="package-footer">
                        <h4><span>$ 3000</span>/Person</h4>
                        <button className="enquire-now">Enquire Now</button>
                    </div>

                </div>

                <div className="package-card">
                    <img src={package3} alt="Package 2" className="package-image" />
                    <h3>OOTY</h3>
                    <p>Experience the beauty of Ooty</p>


                    <div className="day1">
                        <h4>Day 1</h4>
                    </div>
                    <ul>
                        <li>Visit to Botanical Gardens</li>
                        <li>Visit to Ooty Lake</li>
                        <li>Visit to Doddabetta Peak</li>
                    </ul>

                    <div className="day1">
                        <h4>Day 2</h4>
                    </div>
                    <ul>
                        <li>Visit to Rose Garden</li>
                        <li>Visit to Avalanche Lake</li>
                        <li>Visit to Emerald Lake</li>
                    </ul>

                    <div className="package-footer">
                        <h4><span>$ 3000</span>/Person</h4>
                        <button className="enquire-now">Enquire Now</button>
                    </div>

                </div>

                <div className="package-card">
                    <img src={package2} alt="Package 2" className="package-image" />
                    <h3>MUNNAR</h3>
                    <p>Experience the beauty of Munnar</p>


                        <div className="day1">
                            <h4>Day 1</h4>
                        </div>
                        <ul>
                            <li>Visit to Tea Plantations</li>
                            <li>Visit to Eravikulam National Park</li>
                            <li>Visit to Mattupetty Dam</li>
                        </ul>

                        <div className="day1">
                            <h4>Day 2</h4>
                        </div>
                        <ul>
                            <li>Visit to Anamudi Peak</li>
                            <li>Visit to Attukal Waterfalls</li>
                            <li>Visit to Echo Point</li>
                        </ul>

                        <div className="package-footer">
                            <h4><span>$ 2500</span>/Person</h4>
                            <button className="enquire-now">Enquire Now</button>
                        </div>

                    </div>
                </div>

        </section >
    );
};

export default Packages;