import React from 'react';
// import PropTypes from 'prop-types';
import Raiting from '../Raiting/Raiting';
import ImageVysor from '../ImageVysor/ImageVysor';

import './CardDetails.css';

const CardDetails = ({ img, city, price, totalPrice, realState, realStateLogo, name, rating, services }) => {
  return (
    <div className="card-details-container">
      <div className="card-details-first">
        <h1 className="card-details-title">{name}</h1>
        <b className="card-details-city">{city}</b>
      </div>
      <div className="card-details-image">
        <ImageVysor width="100%" src={img} alt="demo" description>
          <Raiting raiting={rating} size="3x" />
        </ImageVysor>
      </div>
      <div className="card-details-right">
        <h2 className="card-details-description">Descripción</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ratione consequatur, provident tenetur pariatur minima qui eum, consectetur reprehenderit sapiente commodi debitis eligendi laudantium aperiam nobis sit quaerat! Ab, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur adipisci quaerat impedit ducimus, ipsa, earum numquam quidem quos eos assumenda obcaecati at repellendus sit consequuntur et mollitia in laboriosam.</p>
        <h1>Precio: {price}$</h1>
      </div>
      <div className="card-details-services">
        <b>Servicios:</b>
        {services.map((service, i) => { return <span className="card-details-service">{service}</span> })}
      </div>
      <div className="card-details-realstate">
        <img width="50px" src={realStateLogo} alt="Logo" />
        <b>Inmobiliaria: </b>
        <span>{realState}</span>
      </div>
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
