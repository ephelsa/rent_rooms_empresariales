import React, { Component } from 'react';
import CardResume from '../../components/CardResume/CardResume';


import HotelSuperGenial from '../../assets/hotel_test.jpg';
import HostalCiudadEsmeralda from '../../assets/ciudad_esmeralda.jpg';
import PuestoViajeChihiro from '../../assets/tren_chihiro.jpg';
import HostalMucura from '../../assets/hotel_mucura.webp';



class CardResumeList extends Component {
  state = {
    cards: [
      { id: 1, title: 'Hotel Súper Genial', city: 'En algún lugar del mundo', img: HotelSuperGenial, price: 200000, realState: 'Amarilo' },
      { id: 2, title: 'Hostal de Ciudad Esmeralda', city: 'Ciudad Esmeralda', img: HostalCiudadEsmeralda, price: 20, realState: 'OZ' },
      { id: 3, title: 'Puesto del Viaje de chihiro', city: 'Jiufen', img: PuestoViajeChihiro, price: 80000, realState: 'Miyazaki' },
      { id: 4, title: 'Hostal de Isla Múcura', city: 'Isla Múcura', img: HostalMucura, price: 320000, realState: 'Tritón' },
    ]
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
