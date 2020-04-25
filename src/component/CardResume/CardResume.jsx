import React from 'react';
import PropTypes from 'prop-types';
import './CardResume.css';
import ImageVysor from '../ImageVysor/ImageVysor';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardResume = ({title, city, img, price, realState}) => {
  return (
    <div className="card-resume-container">
      <span className="card-resume-title">{title}</span>
      <span className="card-resume-city">{city}</span>
      <ImageVysor width='100%' src={img} alt="Demo" description="$24">
        <span>${price}</span>
        <FontAwesomeIcon icon={faStar} color="var(--color-accent)" />
        <FontAwesomeIcon icon={faStar} color="var(--color-accent)" />
        <FontAwesomeIcon icon={faStar} color="var(--color-accent)" />
        <FontAwesomeIcon icon={faStarHalfAlt} color="var(--color-accent)" />
      </ImageVysor>
      <span className="card-resume-realstate">Inmobiliaria: {realState}</span>
    </div>
  );
};

CardResume.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  realState: PropTypes.string.isRequired,
};

export default CardResume;
