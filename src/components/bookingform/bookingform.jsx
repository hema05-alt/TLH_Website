import React from "react";
import "./Bookingform.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
  FaClipboardList,
  FaBus,
} from "react-icons/fa";

const BookingForm = ({ closeForm }) => {
  return (
    <div className="booking-overlay">
      <div className="booking-modal">

        {/* HEADER */}
        <div className="booking-header">
          <div>
            <h2>
              <FaClipboardList className="title-icon" />
              Book Your Tour
            </h2>

            <p>Fill your details - we'll contact you within 30 mins!</p>

            <span className="package-badge">
              <FaBus /> Any package
            </span>
          </div>

          <button className="close-btn" onClick={closeForm}>
            <FaTimes />
          </button>
        </div>

        {/* BODY */}
        <div className="booking-body">
          <div className="info-box">
            ✅After Submitting - Whatsapp opens with your details automatically!
          </div>

          <form>

            {/* ROW 1 */}
            <div className="form-row">

              {/* DESTINATION */}
              <div className="form-group">
                <label>CHOOSE DESTINATION *</label>

                <input
                  list="destinations"
                  name="destination"
                  placeholder="Type or select destination"
                />

                <datalist id="destinations">
                  <option value="Goa" />
                  <option value="Kerala" />
                  <option value="Karnataka" />
                  <option value="Warkala" />
                  <option value="Ooty" />
                </datalist>
              </div>

              <div className="form-group">
                <label>FULL NAME *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER *</label>
                <input type="text" placeholder="+91 73588 56007" />
              </div>

            </div>

            {/* ROW 2 */}
            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS *</label>
                <input type="text" placeholder="your@mail.com" />
              </div>

              <div className="form-group">
                <label>TRAVEL DATE *</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>NO. OF PEOPLE *</label>
                <input type="number" placeholder="e.g. 5" />
              </div>
            </div>

            {/* PICKUP */}
            <div className="form-group">
              <label>PICKUP LOCATION</label>
              <input type="text" placeholder="e.g. Tirunelveli Bus Stand" />
            </div>

            {/* REQUIREMENTS */}
            <div className="form-group">
              <label>SPECIAL REQUIREMENTS</label>
              <textarea
                rows="5"
                placeholder="Dietary needs, room preferences..."
              ></textarea>
            </div>

            {/* BUTTONS */}
            <div className="button-group">

              <button type="button" className="call-btn">
                <FaPhoneAlt />
                Call Us Now
              </button>

              <button type="submit" className="whatsapp-btn">
                <FaWhatsapp />
                Send Via Whatsapp
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default BookingForm;