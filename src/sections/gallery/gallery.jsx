import React, { useRef, useEffect } from "react";
import "./gallery.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpeg";
import gallery4 from "../../assets/images/gallery4.jpeg";
import gallery6 from "../../assets/images/gallery6.jpeg";
import gallery7 from "../../assets/images/gallery7.jpeg";
import gallery8 from "../../assets/images/gallery8.jpeg";
import gallery9 from "../../assets/images/gallery9.jpeg";

function Gallery() {
    const galleryRef = useRef(null);

    const scrollLeft = () => {
        if (!galleryRef.current) return;

        galleryRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        if (!galleryRef.current) return;

        galleryRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        const interval = setInterval(() => {
            const maxScroll =
                gallery.scrollWidth - gallery.clientWidth;

            if (gallery.scrollLeft >= maxScroll - 5) {
                gallery.scrollTo({
                    left: 0,
                    behavior: "auto"
                });
            } 
            else {
                gallery.scrollBy({
                    left: 320,
                    behavior: "smooth"
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    
    return (
        <section className="gallery-section">

            <div className="gallery-header">
                <h6 className="underline">Our Gallery</h6>
                <h1>Explore Our Memorable Moments</h1>
            </div>

            <div className="gallery-container">

                <button
                    className="button-gallery"
                    onClick={scrollLeft}
                >
                    <FaChevronLeft />
                </button>

                <div className="gallery-item" ref={galleryRef}>

                    {/* Original Images */}
                    <img src={gallery2} alt="Gallery 2" className="gallery-image" />
                    <img src={gallery3} alt="Gallery 3" className="gallery-image" />
                    <img src={gallery4} alt="Gallery 4" className="gallery-image" />
                    <img src={gallery6} alt="Gallery 6" className="gallery-image" />
                    <img src={gallery7} alt="Gallery 7" className="gallery-image" />
                    <img src={gallery8} alt="Gallery 8" className="gallery-image" />
                    <img src={gallery9} alt="Gallery 9" className="gallery-image" />
                    <img src={gallery1} alt="Gallery 1" className="gallery-image" />

                    {/* Duplicate Images for Infinite Loop */}
                    <img src={gallery2} alt="Gallery 2" className="gallery-image" />
                    <img src={gallery3} alt="Gallery 3" className="gallery-image" />
                    <img src={gallery4} alt="Gallery 4" className="gallery-image" />
                    <img src={gallery6} alt="Gallery 6" className="gallery-image" />
                    <img src={gallery7} alt="Gallery 7" className="gallery-image" />
                    <img src={gallery8} alt="Gallery 8" className="gallery-image" />
                    <img src={gallery9} alt="Gallery 9" className="gallery-image" />
                    <img src={gallery1} alt="Gallery 1" className="gallery-image" />

                </div>

                <button
                    className="button-gallery"
                    onClick={scrollRight}
                >
                    <FaChevronRight />
                </button>

            </div>

        </section>
    );
}

export default Gallery;