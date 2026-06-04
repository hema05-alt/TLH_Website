import React, { useRef } from 'react';
import './gallery.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/ooty.jpg';
import gallery4 from '../../assets/images/vagamon.jpg';
import gallery5 from '../../assets/images/gallery5.jpeg';
import gallery6 from '../../assets/images/gallery6.jpeg';
import gallery7 from '../../assets/images/gallery7.jpeg';
import gallery8 from '../../assets/images/gallery8.jpeg';
import gallery9 from '../../assets/images/gallery9.jpeg';

function Gallery() {

    const galleryRef = useRef(null);

    const scrollLeft = () => {
        galleryRef.current.scrollLeft -= 320;
    };

    const scrollRight = () => {
        galleryRef.current.scrollLeft += 320;
    };

    return (
        <section className="gallery-section">

            <div className="gallery-header">
                <h4>Our Gallery</h4>
                <h1>Explore Our Memorable Moments</h1>
            </div>

            <div className="gallery-container">

                <button onClick={scrollLeft} className="button-gallery">
                    <FaChevronLeft />
                </button>

                <div className="gallery-item" ref={galleryRef}>
                    <img src={gallery1} alt="" className="gallery-image" />
                    <img src={gallery2} alt="" className="gallery-image" />
                    <img src={gallery8} alt="" className="gallery-image" />
                    <img src={gallery9} alt="" className="gallery-image" />
                    <img src={gallery5} alt="" className="gallery-image" />
                    <img src={gallery6} alt="" className="gallery-image" />
                    <img src={gallery7} alt="" className="gallery-image" />
                    <img src={gallery3} alt="" className="gallery-image" />
                    <img src={gallery4} alt="" className="gallery-image" />

                </div>

                <button onClick={scrollRight} className="button-gallery">
                    <FaChevronRight />
                </button>

            </div>

        </section>
    );
}

export default Gallery;