import React from 'react';
import Img1 from '../Assets/01.jpeg';
import Img2 from '../Assets/02.jpeg';

const Testimonial = () => {
  const features = [
    { title: 'Speaker 1', image: Img1, link: '' },
    { title: 'Speaker 2', image: Img2, link: 'https://stjosephs.ac.in/facility/menu/monday/index.html' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '7vh', // Increased margin top
    marginBottom: '2vh',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
  };

  const titleStyle = {
    padding: '10px',
    fontSize: '1rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2vh', // Add margin below the heading
    textAlign: 'center', // Center the heading
  };

  const handleHover = (index) => {
    const cards = document.querySelectorAll('.feature-card2');
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)';
      } else {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)';
      }
    });
  };

  return (
    <div>
        <h1 style={{fontSize: '5vh'}}>Dynamic Orators</h1>
      <div style={containerStyle}>
        {features.map((feature, index) => (
            <div
              className="feature-card2"
              style={cardStyle}
              onMouseOver={() => handleHover(index)}
              onMouseOut={() => handleHover(-1)}
            >
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <div style={titleStyle}>{feature.title}</div>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default Testimonial;