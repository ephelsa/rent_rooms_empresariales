import React, { Component } from 'react';
import axios from 'axios';
import CardResume from '../../components/CardResume/CardResume';

class CardResumeList extends Component {

  busquedaGeneral(query) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/search"
    const datosLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/dev/rooms/search";
    /*
    ESTA AUN NO LA PUBLICAN 
    axios.get(urlBackendLambda+'location='+ciudad+'&checkin='+checkin+'&checkout='+checkout) 
     .then(responseLambda => {
      var habitacionesdesdeLambda=responseLambda.data; //Aquí estan las habitaciones desde lambda 
       })
     .catch(e => {
         console.log(e);
     })*/
    axios.get(urlBackendNode + query)
      .then(responseNodeJs => {
        responseNodeJs.data.map(elemento => {
          this.setState({ cards: [...this.state.cards, { id: elemento.id, title: elemento.property_name, city: elemento.location.name, img: elemento.thumbnail, price: elemento.price, realState: elemento.agency.name }] });
        })

      })
      .catch(e => {
        console.log(e);
      })
    axios.get(urlBackendPython + query)
      .then(responsePython => {
        var habitacionesDesdePython = responsePython.data; //Aquí estan las habitaciones desde Python
        habitacionesDesdePython.map(elemento => {
          this.setState({ cards: [...this.state.cards, { id: elemento.id, title: elemento.property_name, city: elemento.location.name, img: elemento.thumbnail, price: elemento.price, realState: elemento.agency.name }] });
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


  render() {
    const cards = this.state.cards.map(card => (
      <CardResume title={card.title}
        city={card.city}
        img={card.img}
        price={card.price}
        realState={card.realState}
        key={card.id} />
    ));
    const mesaje = <h1>No se encontraron resultados</h1>
    return (<div className="card-resume-list-container">{cards.length?cards:mesaje}</div>);
  }
}

export default CardResumeList;
