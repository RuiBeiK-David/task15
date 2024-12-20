import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Marketing & SEO Agency',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-bar-chart'
    },
    {
      title: 'Startup Agency',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-lightbulb'
    },
    {
      title: 'Corporate Business',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-building'
    },
    {
      title: 'Finance Solution',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-piggy-bank'
    },
    {
      title: 'Food & Restaurant',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-cup-straw'
    },
    {
      title: 'Travel Agency',
      description: 'Esteem spirit temper too say adieus who direct esteem.',
      icon: 'bi bi-geo-alt'
    }
  ];

  return (
    <section className="features">
      <h2>What we Do?</h2>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 