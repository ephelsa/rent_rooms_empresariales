import React from 'react';
// import PropTypes from 'prop-types';

import './CardDetails.css';

const CardDetails = ({ img, city, price, totalPrice, realState, realStateLogo, name, rating, services }) => {
  return (
    <div className="card-details-container">
      <span className="card-details-title">{name}</span>
      <img className="card-details-image" src={img} alt="img" />
      <span className="card-details-city">{city}</span>
      <span className="card-details-realstate">Inmobiliaria: {realState}</span>
    </div>
  );
};

// CardDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   imgs: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   realState: PropTypes.string.isRequired,
// };

export default CardDetails;
