import React, { Component } from 'react';
import axios from 'axios';
import CardResume from '../../components/CardResume/CardResume';


import HotelSuperGenial from '../../assets/hotel_test.jpg';
import HostalCiudadEsmeralda from '../../assets/ciudad_esmeralda.jpg';
import PuestoViajeChihiro from '../../assets/tren_chihiro.jpg';
import HostalMucura from '../../assets/hotel_mucura.webp';



class CardResumeList extends Component {

     busquedaGeneral(){
       //alert("entró");
//const urlBackendLambda="";
const urlBackendNode="http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search?";
const urlBackendPython="http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/search?"
var ciudad="MDE";
var checkin="2020-05-09";
var checkout="2020-06-10";
var datosLambda="";
/*
ESTA AUN NO LA PUBLICAN 
axios.get(urlBackendLambda+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout) 
 .then(responseLambda => {
  var habitacionesdesdeLambda=responseLambda.data; //Aquí estan las habitaciones desde lambda 
   })
 .catch(e => {
     console.log(e);
 })*/
 axios.get(urlBackendNode+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout)
 .then(responseNodeJs => {
   responseNodeJs.data.map(elemento=>{
    this.setState({cards: [ ...this.state.cards,{id: elemento.id, title: elemento.property_name, city: elemento.location.name, img: elemento.thumbnail, price: elemento.price, realState: elemento.agency.name}]});
   })
   
})
 .catch(e => {
   console.log(e);
})
axios.get(urlBackendPython+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout)
 .then(responsePython => {
  var habitacionesDesdePython=responsePython.data; //Aquí estan las habitaciones desde Python
  habitacionesDesdePython.map(elemento=>{
    this.setState({cards: [ ...this.state.cards,{id: elemento.id, title: elemento.property_name, city: elemento.location.name, img: elemento.thumbnail, price: elemento.price, realState: elemento.agency.name}]});
   })
 })
 .catch(e => {
   console.log(e);
})
     }

 constructor(props){
   super(props);
   this.state = {
    cards: [
      { id: 1, title: 'Hotel Súper Genial', city: 'En algún lugar del mundo', img: HotelSuperGenial, price: 200000, realState: 'Amarilo' },
    ]
  }

  this.busquedaGeneral = this.busquedaGeneral.bind(this);
 }
 
 componentDidMount() {
  this.busquedaGeneral();
}
  

  render() {
    const cards = this.state.cards.map(card => (
      <CardResume title={card.title} 
        city={card.city} 
        img={card.img} 
        price={card.price} 
        realState={card.realState}
        key={card.id} />
    ));

    return (<div className="card-resume-list-container">{cards && cards}</div>);
  }
}

export default CardResumeList;
