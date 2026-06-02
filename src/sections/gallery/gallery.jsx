import React from 'react';
import './gallery.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/ooty.jpg';
import gallery4 from '../../assets/images/vagamon.jpg';


function Gallery() {
    return (
        <section className="gallery-section">
            <div className="gallery-header">
                <h4> Our Gallery </h4>
                <h1> Explore Our Memorable Moments </h1>
            </div>


            {/* images */}
            <div className="gallery-container">

                {/* button */}
                <button className="button-gallery">
                    <FaChevronLeft />
                </button>

                <div className="gallery-item">
                    <img src={gallery1} alt="Gallery Image 1" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src={gallery2} alt="Gallery Image 2" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src={gallery3} alt="Gallery Image 3" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src={gallery4} alt="Gallery Image 4" className="gallery-image" />
                </div>


                {/* button */}
                <button className="button-gallery">
                    <FaChevronRight />
                </button>

            </div>

        </section>
    );
};

export default Gallery;