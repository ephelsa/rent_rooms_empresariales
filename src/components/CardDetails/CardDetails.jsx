import React from 'react';
import Raiting from '../Raiting/Raiting';
import ImageVysor from '../ImageVysor/ImageVysor';
import axios from 'axios';
import './CardDetails.css';

const CardDetails = ({ checkin, checkout, id, img, city, price, totalPrice, realState, realStateLogo, name, rating, services }) => {

  function getBaseUrl(agencyName) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/booking";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/booking";
    const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/dev/booking";
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
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxlamFuZHJvIENhc3Rhw7FvIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tdk1ZLXVJeVN1alEvQUFBQUFBQUFBQUkvQUFBQUFBQUFLWjQvQU1adXVja2J4cHhRT2R5S2ZxRHhncmVoV054RUNEaXZ5QS9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVudHJvb21zLTIwMTkyIiwiYXVkIjoicmVudHJvb21zLTIwMTkyIiwiYXV0aF90aW1lIjoxNTkxMzQ5NTgyLCJ1c2VyX2lkIjoickZOUGdEbDlvb2FJbWxNWXBvbWhhZ21LUFdCMyIsInN1YiI6InJGTlBnRGw5b29hSW1sTVlwb21oYWdtS1BXQjMiLCJpYXQiOjE1OTEzODgzOTIsImV4cCI6MTU5MTM5MTk5MiwiZW1haWwiOiJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzUwNTE1OTAwOTMzNDYzODQ5MCJdLCJlbWFpbCI6WyJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.Tskq5p1lCKieGy7w6Yqg6PCHEI0DDCpNF7xs9jzsFKkFmsrE5EyXVog3uLCRdClntRxIzU0km0twc2iNvgYDDzm713lfAtIC5V5PLg3aGmbK64DJ--vVNOXvPnqJP7HbekUUNZ1eT2Sm0y4gTbV9DM3Ci7P0MkBGWHei1t4BDnXIStyzIR6DIVotT1ItdA3S-X43etLA860zyAmFTD1vgQNEkU-hAteZGHiC6kcnYpg-AySt_cxmOn-3bofEgT-aW3m3ZymSUI-rA8qMQe22B0SoVwl7T8qMEp72FdRAoF4MK3fDBsOE8CRXNiXUSyYJkgNRWwtfgs0sA7LJUC6Llg"
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
      </div>
      <div className="card-details-image">
        <ImageVysor width="100%" src={img} alt="demo" description="details">
          <Raiting raiting={rating} size="2x" />
        </ImageVysor>
      </div>
      <div className="card-details-right">
        <h2 className="card-details-description">Descripción</h2>
        <p>Este hermoso edificio cuenta con 12 pisos y 22 Modernos, amplios y confortables Apartamentos tipo Junior suite, Junior Twin de un solo ambiente y Aparta suites de dos alcobas, todos dotados de cocina con barra americana, balcón, escritorio entre otros. Nuestro apartamento dúplex ofrece una hermosa vista ...</p>
        <hr />
        <b className="card-details-city">{city}</b>
        <b className="card-details-text"> a 1.0 km del Centro</b><br/>
        <b className="card-details-price">Precio: {totalPrice}</b><hr />
        <div className="card-details-form">
          <input className="card-details-input" id="email" placeholder="Por favor, Ingrese su email" />
          <button className="card-details-button" onClick={reservar}>Reservar</button>
        </div>
      </div>
      <div className="card-details-services">
        <b>Servicios:</b>
        {services.map((service, i) => { return <span className="card-details-service">{service}</span> })}
      </div>
      <div className="card-details-realstate">
        <b>Inmobiliaria: </b>
        <span>{realState}</span>
        <img width="50px" src={realStateLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default CardDetails;