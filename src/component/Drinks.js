import React from 'react';
/*import './Drink.css';*/
import './menu.css';

const Drink = () => {
  return (
    <section className="menu-column">
      <h2>Drink</h2>

      <div className="menu-item">
        <img src="nescafe.png" alt="Nescaffe" />
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
        <img src="coffe.png" alt="Coffee" />
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
        <img src="fruits.png" alt="Fruites" />
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

export default Drink;
