import React, { useState } from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { registerLocale } from "react-datepicker";
import Dropdown from '../Dropdown/Dropdown';
import './Searchbar.css';
import es from 'date-fns/locale/es';
import DatePicker from "react-datepicker";
import moment from 'moment'

import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const options = [
  { id: 'MDE', value: 'Medellín' },
  { id: 'BOG', value: 'Bogotá' },
  { id: 'CLO', value: 'Cali' },
  { id: 'BAQ', value: 'Barranquilla' },
  { id: 'CTG', value: 'Cartagena' },
  { id: 'CUC', value: 'Cúcuta' },
  { id: 'SLD', value: 'Soledad' },
  { id: 'IBE', value: 'Ibagué' },
];

function Searchbar() {

  const busquedadetallesHabitaciones = () => {
    const urlBackendLambda = "https://34ld77s309.execute-api.us-east-1.amazonaws.com/prod/rooms/";
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/";
    var idHabitacion1 = "5eb24077bf3587508244c267";
    var idHabitacion2 = "1";
    axios.get(urlBackendLambda + idHabitacion2)
      .then(responseLambda => {
        var detallesDesdeLambda = responseLambda; //Aquí estan los detalles desde lambda 
        console.log(detallesDesdeLambda);
      })
      .catch(e => {
        console.log(e);
      })
    axios.get(urlBackendNode + idHabitacion1)
      .then(responseNodeJs => {
        var detallesDesdeNode = responseNodeJs.data; //Aquí estan los detalles desde Node 
        console.log(detallesDesdeNode);
      })
      .catch(e => {
        console.log(e);
      })
    axios.get(urlBackendPython + idHabitacion2)
      .then(responsePython => {
        var DetallesDesdePython = responsePython.data; //Aquí estan los detalles desde Python
        console.log(DetallesDesdePython);
      })
      .catch(e => {
        console.log(e);
      })
  }


  const reservarHabitaciones = () => {
    const urlBackendLambda = "";
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/booking";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/booking";
    var idHabitacion1 = "5eb24077bf3587508244c267";
    var idHabitacion2 = "1";
    /*
    Error de este Backend
    axios.post(urlBackendLambda+idHabitacion2)
    .then(responseLambda => {
     var detallesDesdeLambda=responseLambda; //Aquí estan los detalles desde lambda 
     console.log(detallesDesdeLambda);
      })
    .catch(e => {
        console.log(e);
    })*/
    axios.post(urlBackendNode, {
      checkin: "2020-07-06",
      checkout: "2020-07-10",
      email: "johanc.suarez@hotmail.com",
      name: "Pedro",
      id_room: idHabitacion1
    })
      .then(responseNodeJs => {
        var detallesDesdeNode = responseNodeJs.data; //Aquí estan los detalles desde Node 
        console.log(detallesDesdeNode);
      })
      .catch(e => {
        console.log(e);
      })
  }

  // const destinationCallback = (destination) => {
  //   console.log('Destination selected ->', destination);
  // }

  registerLocale('es', es)
  const [destination, setDestination] = useState('');

  const destinationCallback = (dest) => {
    setDestination(dest);
  }

  const [startDate, setStartDate] = useState(null);
  const handleOnBlur = ({ target: { value } }) => {
    const Checkin = new Date(value);
    console.log("Checkin=", Checkin.getFullYear(Checkin, "yyyy"), "-", Checkin.getMonth(Checkin, "MM"), "-", Checkin.getDate(Checkin, "dd"));
  };
  const [endDate, setEndDate] = useState(null);
  const handleOnBlur1 = ({ target: { value } }) => {
    const Checkout = new Date(value);
    console.log("Checkout=", Checkout.getFullYear(Checkout, "yyyy"), Checkout.getMonth(Checkout, "MM"), Checkout.getDate(Checkout, "dd"));
  };

  function datasearch() {
    const Datastar = moment(startDate).format('YYYY-MM-DD')
    const Dataend = moment(endDate).format('YYYY-MM-DD')
    console.log(destination, Datastar, Dataend)
  }

  return (
    <div className="searchbar">
      <div className="destination-container">
        <Dropdown options={options}
          placeHolder={"Destino"}
          icon={faPlaneDeparture}
          onOptionSelected={destinationCallback}
          borderType="left-border" />
      </div>

        <DatePicker
          className="red"
          onChange={date => setStartDate(date)}
          locale="es"
          title="fechas"
          selected={startDate}
          selectsStart
          startDate={startDate}
          minDate={new Date()}
          endDate={endDate}
          key="1"
          onBlur={handleOnBlur}
          placeholderText="Fecha Entrada "
        />
        <DatePicker
          className="red"
          locale="es"
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          key="2"
          onBlur={handleOnBlur1}
          placeholderText="Fecha Salida "
        />
      <div className="date-container-button">
        <button className="searchbar-button" onClick={datasearch}>Buscar</button>
      </div>
    </div>
  );
}

export default Searchbar;