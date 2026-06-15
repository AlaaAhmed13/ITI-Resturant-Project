
import React from 'react';
// import './Breakfast.css';
import './menu.css';

const Breakfast = () => {
  return (
    <section className="menu-column">
      <h2>Breakfast</h2>

      <div className="menu-item">
        <img src="tomatosoup.png" alt="Tomato Soup" />
        <div className="details">
          <div className="title-line">
            <h3>English Breakfast</h3>
            <span className="dots"></span>
            <span className="price">$12.95</span>
          </div>
          <p>
            Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcrumbs,
            onion, mustard, cranberry nut, baked brie, rucola, tomato & mushroom.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <img src="whitesoup.png" alt="White Soup" />
        <div className="details">
          <div className="title-line">
            <h3>English Breakfast</h3>
            <span className="dots"></span>
            <span className="price">$12.95</span>
          </div>
          <p>
            Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcrumbs,
            onion, mustard, cranberry nut, baked brie, rucola, tomato & mushroom.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <img src="pasta.png" alt="Pasta" />
        <div className="details">
          <div className="title-line">
            <h3>English Breakfast</h3>
            <span className="dots"></span>
            <span className="price">$12.95</span>
          </div>
          <p>
            Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcrumbs,
            onion, mustard, cranberry nut, baked brie, rucola, tomato & mushroom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Breakfast;

