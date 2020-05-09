import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import axios from 'axios';
import CardResume from '../../components/CardResume/CardResume';

class CardResumeList extends Component {

  busquedaGeneral(query) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/search"
    const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/dev/rooms/search";
  
    axios.get(urlBackendLambda+query) 
    .then(responseLambda => {
      responseLambda.data.map(elemento => {
        this.setState({ cards: [...this.state.cards, {
          id: elemento.id, 
          title: elemento.property_name, 
          city: elemento.location.name, 
          img: elemento.thumbnail, 
          price: elemento.price,
          agency: elemento.agency,
          key: elemento.id + elemento.agency.id
        }] });
      })
       })
     .catch(e => {
         console.log(e);
     })
    axios.get(urlBackendNode + query)
      .then(responseNodeJs => {
        responseNodeJs.data.map(elemento => {
          this.setState({ cards: [...this.state.cards, { 
            id: elemento.id, 
            title: elemento.property_name, 
            city: elemento.location.name, 
            img: elemento.thumbnail, 
            price: elemento.price,
            agency: elemento.agency,
            key: elemento.id + elemento.agency.id
          }] });
        })

      })
      .catch(e => {
        console.log(e);
      })
    axios.get(urlBackendPython + query)
      .then(responsePython => {
        var habitacionesDesdePython = responsePython.data; //Aquí estan las habitaciones desde Python
        habitacionesDesdePython.map(elemento => {
          this.setState({ cards: [...this.state.cards, { 
            id: elemento.id, 
            title: elemento.property_name, 
            city: elemento.location.name, 
            img: elemento.thumbnail, 
            price: elemento.price,
            agency: elemento.agency,
            key: elemento.id + elemento.agency.id
          }] });
        })
      })
      .catch(e => {console.log(e);})
  }

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }

    this.busquedaGeneral = this.busquedaGeneral.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.search;
    this.busquedaGeneral(query);
  }

  handleCardDetails(idRealState) {
    console.log("[CardResumeList] ID real state ->", idRealState)
  }

  render() {
    const mesaje = <h1>No se encontraron resultados</h1>
    const cards = this.state.cards.map((card, index) => (
      <CardResume title={card.title}
        city={card.city}
        img={card.img}
        price={card.price}
        agency={card.agency}
        onCardResumeClick={this.handleCardDetails}
        key={`${card.key}-${index}`} />
    ));

    return (<div className="card-resume-list-container">{cards.length?cards:mesaje}</div>);
  }
}

export default CardResumeList;
