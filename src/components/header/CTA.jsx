import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download presentation
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Us
      </a>
    </div>
  );
};

export default CTA;
