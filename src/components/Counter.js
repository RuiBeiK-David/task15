import React from 'react';
import './Counter.css';
import heartIcon from '../assets/images/heart.svg';
import respectIcon from '../assets/images/respect.svg';
import cartIcon from '../assets/images/cart.svg';
import groupIcon from '../assets/images/group.svg';

const Counter = () => {
  const stats = [
    { number: '232', label: 'Happy Clients', icon: heartIcon },
    { number: '521', label: 'Projects', icon: respectIcon },
    { number: '1,463', label: 'Hours Of Support', icon: cartIcon },
    { number: '15', label: 'Hard Workers', icon: groupIcon }
  ];

  return (
    <section className="counter">
      <div className="counter-content">
        {stats.map((stat, index) => (
          <div key={index} className="counter-item">
            <img src={stat.icon} alt={stat.label} className="counter-icon" />
            <div className="counter-text">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter; 