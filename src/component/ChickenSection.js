import React from 'react';
import './ChickenSection.css';

const ChickenSection = () => {
  return (
    <section className="image-section">
      <div className="chicken-hover-box">
        <img
          src="chicken.png"
          alt="Chicken"
          className="menu-img"
        />
        <div className="hover-text">
          <h3>
            <span classname="yellow-text">Best Recipes</span>
            <br />
            <strong>AWARDED CHEFS</strong>
          </h3>

          <div className="menu-grid">
            <div>
              <p>
                <strong>English Breakfast ...... <span>$12.95</span></strong><br />
                <small>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</small>
              </p>
            </div>
            <div>
              <p>
                <strong>Lasagna Classica ...... <span>$19.55</span></strong><br />
                <small>Broccoli rabe, italian sausage, peperoncino, tomatoes, flour and roasted garlic.</small>
              </p>
            </div>
            <div>
              <p>
                <strong>Vegetables Soup ...... <span>$9.95</span></strong><br />
                <small>Papaya salsa, sliced red radishes, avocado, corn tortilla, spicy tomato ketchup.</small>
              </p>
            </div>
            <div>
              <p>
                <strong>Toffee Pudding ...... <span>$10.50</span></strong><br />
                <small>Baked caramel colored sponge cake with raisins, ladled with warm toffee sauce.</small>
              </p>
            </div>
          </div>

          <a href="#" className="full-menu-btn">📋 FULL MENU</a>
        </div>
      </div>
    </section>
  );
};

export default ChickenSection;
