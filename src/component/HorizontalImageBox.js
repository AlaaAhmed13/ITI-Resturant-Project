import React from 'react';
import "./HorizontalImageBox.css";

const HorizontalImageBox = () => {
  return (
    <section className="horizontal-box">
      <div className="image-row">
        <img src="spicy chili soup.png" alt="spicy chili soup" text="Spicy chili soup"/>
        <img src="Component 10.png" alt="classic Bolagness" text="Classic Blognese"/>
        <img src="cottage cheese.png" alt="cottage cheese" text="Cottage Cheese & Chives"/>
        <img src="colorful salad.png" alt="colorful salad" text="Colorful Salad"/>
        <img src="its just.png" alt="its just Cornflakes" text="Its Just Cornflakes"/>
        <img src="tasty mausly.png" alt="tasty mausly" text="Tasty Muesli"/>
      </div>
    </section>
  );
};

export default HorizontalImageBox;

