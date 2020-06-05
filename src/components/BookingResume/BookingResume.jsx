import React from 'react';
import PropTypes from 'prop-types';
import ImageVysor from '../ImageVysor/ImageVysor';
import Raiting from '../Raiting/Raiting';
import './BookingResume.css'

const BookingResume = ({ id, title, city, img, price, agency, checkin, checkout }) => {
  return (
    <div className="card-booking-container">
      <h1 className="card-booking-title">{title}</h1>
      <ImageVysor width='100%' src={img} alt="Demo" description="booking">
        <span>{price}</span>
        <Raiting raiting={4.2} size="2x" />
      </ImageVysor>
      <div className="card-booking-check">
        <p className="card-booking-checkin"> <b>Ingreso: </b>{checkin}</p>
        <p className="card-booking-checkout"> <b>Salida: </b>{checkout}</p>
      </div>
      <div className="card-booking-citytext">
        <b className="card-booking-city">{city}</b>
        <b className="card-booking-text"> a 1.0 km del Centro</b>
      </div>
      <b className="card-booking-realstate">Inmobiliaria: {agency}</b>
    </div>
  );
};

BookingResume.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BookingResume;
