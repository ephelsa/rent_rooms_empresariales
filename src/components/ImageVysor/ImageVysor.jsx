import React from 'react';
import './ImageVysor.css';

const ImageVysor = (props) => {
  return (
    <div className="image-vysor-container"  style={{ width: props.width }}>
      <span className="image-vysor-description">{props.children}</span>
      <img className="image-vysor"
        src={props.src} 
        alt={props.alt} />
    </div>
  );
};

export default ImageVysor;
