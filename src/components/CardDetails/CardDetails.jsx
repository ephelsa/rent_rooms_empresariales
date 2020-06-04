import React from 'react';
// import PropTypes from 'prop-types';
import Raiting from '../Raiting/Raiting';
import ImageVysor from '../ImageVysor/ImageVysor';
import axios from 'axios';
import './CardDetails.css';

const CardDetails = ({ checkin, checkout, id, img, city, price, totalPrice, realState, realStateLogo, name, rating, services }) => {


  function getBaseUrl(agencyName) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/booking";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/booking";
    const urlBackendLambda = "https://34ld77s309.execute-api.us-east-1.amazonaws.com/prod/booking";

    switch (agencyName) {
      case 'S_TEAM': return urlBackendPython;
      case 'Arrendamientos njs': return urlBackendNode;
      case 'Lambda Team': return urlBackendLambda;
      default: return '----';
    }
  }

  function reservar() {
    const email = document.getElementById('email').value;
    const baseUrl = getBaseUrl(realState)
    axios.post(baseUrl, {

      checkin,
      checkout,
      email: email,
      name: email,
      id_room: id

    })
      .then(res => {
        alert("Su reserva ha sido realizada, revise su email.")
      });
  }

  return (
    <div className="card-details-container">
      <div className="card-details-first">
        <h1 className="card-details-title">{name}</h1>
        <b className="card-details-city">{city}</b>
      </div>
      <div className="card-details-image">
        <ImageVysor width="100%" src={img} alt="demo" description="details">
          <Raiting raiting={rating} size="2x" />
        </ImageVysor>
      </div>
      <div className="card-details-right">
        <h2 className="card-details-description">Descripción</h2>
        <p>Esta habitación no posee descripción</p>

        <h1>Precio: {totalPrice}</h1>
        <br />
        <div id="reservar">
          <input className="input" id="email" />Ingrese su email para reservar
        <br />
          <button className="mail-button" onClick={reservar}>Reservar</button></div>
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