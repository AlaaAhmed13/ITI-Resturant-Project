import React from "react";
import "./OurChefs.css";

const OurChefs = () => {
  return (
    <section className="our-chefs">
      <div className="chefs-container">
        <div className="chefs-image">
          <img src="chefs.png" alt="Our Chefs" />
        </div>
        <div className="chefs-text">
          <h3>
            <span>Discover</span><br />
            <strong>OUR CHEFS</strong>
          </h3>
          <p>
            Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum
            fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
          </p>
          <button className="btn-yellow">MEET CHEFS</button>
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
