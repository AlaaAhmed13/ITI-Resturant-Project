import React from 'react';
/*import './Dinner.css';*/
import './menu.css';

const Dinner = () => {
  return (
    <section className="menu-column">
      <h2>Dinner</h2>

      <div className="menu-item">
        <img src="soup.png" alt="Soup" />
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
        <img src="vegatables.png" alt="Vegatables" />
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
        <img src="tomatopasta.png" alt="Tomato pasta" />
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

export default Dinner;
