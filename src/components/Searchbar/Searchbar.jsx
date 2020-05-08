import React from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../containers/Dropdown/Dropdown';
import './Searchbar.css';
import axios from 'axios';

const options = [
  { id: 1, value: 'Medellín' },
  { id: 2, value: 'Cartagena' },
  { id: 3, value: 'Bogotá' },
  { id: 4, value: 'Santa Marta' },
  { id: 5, value: 'Valledupar' },
  { id: 6, value: 'Manizales' },
  { id: 7, value: 'Cúcuta' },
];



function boton(){
  return(<div>
    Botón de prueba para los request (en consola se muestran los resultados)<button>Click</button>
  </div>)
}





function Searchbar() {

  
  const busquedaGeneralHabitaciones=()=>{   
   const urlBackendLambda="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search?";
   const urlBackendNode="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search?";
   const urlBackendPython="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search?"
   var ciudad="MDE";
   var checkin="2020-05-09";
   var checkout="2020-06-10";
   var datosLambda="";
    axios.get(urlBackendLambda+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout)
    .then(responseLambda => {
      console.log(responseLambda.data);     
      })
    .catch(e => {
        console.log(e);
    })
    axios.get(urlBackendNode+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout)
    .then(responseNodeJs => {
      console.log(responseNodeJs.data)
    })
    .catch(e => {
      console.log(e);
  })
  axios.get(urlBackendPython+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout)
    .then(responsePython => {
      console.log(responsePython.data)
    })
    .catch(e => {
      console.log(e);
  })
  }

  const destinationCallback = (destination) => {
    console.log('Destination selected ->', destination);
    
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

      <div className="date-container">
        <span>Calendary: inicial</span>
        <span>Calendary: final</span>
       <button onClick={busquedaGeneralHabitaciones}>Test button</button>
      </div>
    </div>
  );
}


export default Searchbar;
