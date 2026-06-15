import React from "react";
import "../component/reservation.css";
import Header from '../component/reserv_header';
import Clients from '../component/Clients'
import Atmosphere from '../component/Atmosphere'
const Reservation = () => {
  return (
    <>
      <Header />
      <section className="booking">
        <div className="booking-container">
          <div className="booking-img">
            <img src="/picc2.jpg" alt="Chef" />
          </div>
          <div className="booking-form">
            <h3 className="sub-title">reservation</h3>
            <h1>ONLINE BOOKING</h1>
            <p>
              Curabitur quas nets lacus et nullat iaculis lorem... adipiscing elit
              rutrum eleif arcu sit aspernatur nets fugit, sed quia.
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="How Many?" />
              </div>
              <div className="form-row">
                <input type="date" placeholder="Booking Date" />
                <input type="time" placeholder="Booking Time" />
              </div>
              <button type="submit" className="submit-btn">BOOK YOUR TABLE</button>
            </form>
          </div>
        </div>
      </section>

      <Clients />
      <Atmosphere />
    </>
  );
};

export default Reservation;
