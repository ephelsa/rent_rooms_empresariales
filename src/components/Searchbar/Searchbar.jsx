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

  


  const busquedadetallesHabitaciones=()=>{   
    const urlBackendLambda="https://34ld77s309.execute-api.us-east-1.amazonaws.com/prod/rooms/";
    const urlBackendNode="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/";
    const urlBackendPython="http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/";
    var idHabitacion1="5eb24077bf3587508244c267";
    var idHabitacion2="1";
     axios.get(urlBackendLambda+idHabitacion2)
     .then(responseLambda => {
      var detallesDesdeLambda=responseLambda; //Aquí estan los detalles desde lambda 
      console.log(detallesDesdeLambda);
       })
     .catch(e => {
         console.log(e);
     })
     axios.get(urlBackendNode+idHabitacion1)
     .then(responseNodeJs => {
     var detallesDesdeNode=responseNodeJs.data; //Aquí estan los detalles desde Node 
     console.log(detallesDesdeNode);
     })
     .catch(e => {
       console.log(e);
   })
  axios.get(urlBackendPython+idHabitacion2)
     .then(responsePython => {
      var DetallesDesdePython=responsePython.data; //Aquí estan los detalles desde Python
      console.log(DetallesDesdePython);
     })
     .catch(e => {
       console.log(e);
   })
   }


   const reservarHabitaciones=()=>{   
    const urlBackendLambda="";
    const urlBackendNode="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/booking";
    const urlBackendPython="http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/booking";
    var idHabitacion1="5eb24077bf3587508244c267";
    var idHabitacion2="1";
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
     axios.post(urlBackendNode,{      
        checkin: "2020-07-06",
      checkout: "2020-07-10",
        email: "johanc.suarez@hotmail.com",
        name: "Pedro",
        id_room: idHabitacion1  
    })
     .then(responseNodeJs => {
     var detallesDesdeNode=responseNodeJs.data; //Aquí estan los detalles desde Node 
     console.log(detallesDesdeNode);
     })
     .catch(e => {
       console.log(e);
   })

   /*
   Eror de este backend
   axios.post(urlBackendPython, {      
    "checkin": "2020-07-06",
    "checkout": "2020-07-10",
    "email": "johanc.suarez@hotmail.com",
    "name": "Pedro",
    "id_room": idHabitacion2   
})
     .then(responsePython => {
      var DetallesDesdePython=responsePython.data; //Aquí estan los detalles desde Python
      console.log(DetallesDesdePython);
     })
     .catch(e => {
       console.log(e);
   })*/
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
