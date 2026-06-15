import React, { useState } from "react";

const Atmosphere = () => {
  const [imgSrc, setImgSrc] = useState("/picc4.jpg");

  const handleChangeImage = (src) => {
    setImgSrc(src);
  };

  return (
    <section className="atmosphere-section">
      <div className="text-content">
        <h3><span className="highlight">Relaxing</span></h3>
        <h1>ATMOSPHERE</h1>
        <p>
          Curabitur quas nets lacus ets nulla iaculis loremnis etis nisle varius vitae
          seditum fugitatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
        </p>
        <a href="#" className="gallery-btn">SEE GALLERY</a>
      </div>

      <div className="image-content">
        <div className="image-frame">
          <img src={imgSrc} alt="Open Sign" />
        </div>

        <div className="slider-dots">
          <span
            className={`dot ${imgSrc === "/picc4.jpg" ? "active" : ""}`}
            onClick={() => handleChangeImage("/picc4.jpg")}
          ></span>
          <span
            className={`dot ${imgSrc === "/Picc5.jpeg" ? "active" : ""}`}
            onClick={() => handleChangeImage("/Picc5.jpeg")}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
