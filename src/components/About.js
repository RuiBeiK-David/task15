import React from 'react';
import './About.css';
import aboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Why our Consulting?</h2>
          <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
          <button className="about-button">About Us</button>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About; 