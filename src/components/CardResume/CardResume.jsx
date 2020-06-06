import React from 'react';
import PropTypes from 'prop-types';
import './CardResume.css';
import ImageVysor from '../ImageVysor/ImageVysor';
import Raiting from '../Raiting/Raiting';

const CardResume = ({ id, title, city, img, price, agency, onCardResumeClick, raiting }) => {
  return (
    <div className="card-resume-container" onClick={() => onCardResumeClick({ title, id }, agency)}>
      <h1 className="card-resume-title">{title}</h1>
      <ImageVysor width='100%' src={img} alt="Demo" description="resume">
        <span>{price}/Noche</span>
        <Raiting raiting={raiting} size="1x" />
      </ImageVysor>
      <div className="card-resume-citytext">
        <b className="card-resume-city">{city}</b>
        <b className="card-resume-text"> a 1.0 km del Centro</b>
      </div>
      <b className="card-resume-realstate">Inmobiliaria: {agency.name}</b>
    </div>
  );
};

CardResume.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  agency: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  onCardResumeClick: PropTypes.func.isRequired,
  raiting: PropTypes.number.isRequired
};

export default CardResume;
