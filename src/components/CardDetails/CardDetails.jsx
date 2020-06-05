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
    const urlBackendScala = "https://rent-rooms.herokuapp.com/booking";

    switch (agencyName) {
      case 'Python': return urlBackendPython;
      case 'Arrendamientos njs': return urlBackendNode;
      case 'Lambda Team': return urlBackendLambda;
      case 'Agencia Scala': return urlBackendScala;
      default: return '----';
    }
  }

  function reservar() {
    const email = document.getElementById('email').value;
    const baseUrl = getBaseUrl(realState)
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxlamFuZHJvIENhc3Rhw7FvIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tdk1ZLXVJeVN1alEvQUFBQUFBQUFBQUkvQUFBQUFBQUFLWjQvQU1adXVja2J4cHhRT2R5S2ZxRHhncmVoV054RUNEaXZ5QS9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVudHJvb21zLTIwMTkyIiwiYXVkIjoicmVudHJvb21zLTIwMTkyIiwiYXV0aF90aW1lIjoxNTkxMzM1OTE3LCJ1c2VyX2lkIjoickZOUGdEbDlvb2FJbWxNWXBvbWhhZ21LUFdCMyIsInN1YiI6InJGTlBnRGw5b29hSW1sTVlwb21oYWdtS1BXQjMiLCJpYXQiOjE1OTEzMzU5MjEsImV4cCI6MTU5MTMzOTUyMSwiZW1haWwiOiJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzUwNTE1OTAwOTMzNDYzODQ5MCJdLCJlbWFpbCI6WyJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.DcfEefBHtvI_9HmS70dkce3zI5n2AorBWiGY7pF6jWYOSu1rJr-ybt_EYCkIfp5FrhZHodoRbDeQNIYFx4OqEIUseUZ9RaToBMhJJlAZY75R08ypKwHO1g8aVw_AIwEBZ_BrM1uS67F11JtDmaNYlZpOAlfeXcRiYMRpogEB22tsvrqU3Qqz3ejFFw4rPG8s2yU8X4dkE8GxKiBEksV44r-KktggcPEo8TAoO0rBuiPmClo12wKveF1Gor-Z2LgSzyb-Fp2bX7ZBs-qXdmtiSaCweIZoB5rZkikr3WusEHB3kACF5EauOS0SMBxaLBcBTmgnFfAKiuEP_qZCJ0maFw'
    const header = {
      headers: {
        'authtoken': token
      }
    }

    axios.post(baseUrl, {

      checkin,
      checkout,
      email: email,
      name: email,
      id_room: id

    }, header)
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