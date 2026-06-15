import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story-section">
      <div className="our-story-text">
        <h3 className="highlight">Discover</h3>
        <h1>OUR STORY</h1>
        <p>
          Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae sedtium
          fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
        </p>
        <a href="#" className="our-recepes-btn">OUR RECEPES</a>
      </div>
      <div className="our-story-image">
        <img src="fish.png" alt="Seafood Dish" />
      </div>
    </div>
  );
};

export default OurStory;
