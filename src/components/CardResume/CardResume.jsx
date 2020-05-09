import React from 'react';
import PropTypes from 'prop-types';
import './CardResume.css';
import ImageVysor from '../ImageVysor/ImageVysor';
import Raiting from '../Raiting/Raiting';

const CardResume = ({title, city, img, price, agency, onCardResumeClick, raiting}) => {
  return (
    <div className="card-resume-container" onClick={() => onCardResumeClick(agency)}>
      <span className="card-resume-title">{title}</span>
      <span className="card-resume-city">{city}</span>
      <ImageVysor width='100%' src={img} alt="Demo" description="$24">
        <span>${price}</span>
        <Raiting raiting={raiting} size="1x"/>
      </ImageVysor>
      <span className="card-resume-realstate">Inmobiliaria: {agency.name}</span>
    </div>
  );
};

CardResume.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  agency: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  onCardResumeClick: PropTypes.func.isRequired,
};

export default CardResume;
