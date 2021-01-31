import React from 'react';

import '../App.css';
import '../styles/ContentBlock.css';

const ContentBlock = ({ img, left, title, content}) => {
  return (
    <>
      {left ?
        <div className="service-container">
          <div className="services-card">
            <img src={img}/>
          </div>
          <div className="service-description">
            <h3>{title}</h3>
            <div className="service-description-content">{content}</div>
          </div>
        </div> :
        <div className="service-container">
          <div className="service-description">
            <h3>{title}</h3>
            <div className="service-description-content">{content}</div>
          </div>
          <div className="services-card">
            <img src={img} />
          </div>
        </div>
      }
    </>
  );
};

export default ContentBlock;