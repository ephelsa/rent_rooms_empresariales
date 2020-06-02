import React, { Component } from 'react';
import axios from 'axios';
import CardResume from '../../components/CardResume/CardResume';
import queryString from 'query-string'

import './CardResumeList.css'

class CardResumeList extends Component {

  busquedaGeneral(query) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/search";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/search"
    const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/dev/rooms/search";

    axios.get(urlBackendLambda + query)
      .then(responseLambda => {
        responseLambda.data.map(elemento => {
          this.setState({
            cards: [...this.state.cards, {
              id: elemento.id,
              title: elemento.property_name,
              city: elemento.location.name,
              img: elemento.thumbnail,
              price: elemento.price,
              agency: elemento.agency,
              key: elemento.id + elemento.agency.id
            }]
          });
        })
      })
      .catch(e => {
        console.log(e);
      })

    axios.get(urlBackendNode + query)
      .then(responseNodeJs => {
        responseNodeJs.data.map(elemento => {
          this.setState({
            cards: [...this.state.cards, {
              id: elemento.id,
              title: elemento.property_name,
              city: elemento.location.name,
              img: elemento.thumbnail,
              price: elemento.price,
              agency: elemento.agency,
              key: elemento.id + elemento.agency.id
            }]
          });
        })

      })
      .catch(e => {
        console.log(e);
      })

    axios.get(urlBackendPython + query)
      .then(responsePython => {
        var habitacionesDesdePython = responsePython.data; //Aquí estan las habitaciones desde Python
        habitacionesDesdePython.map(elemento => {
          this.setState({
            cards: [...this.state.cards, {
              id: elemento.id,
              title: elemento.property_name,
              city: elemento.location.name,
              img: elemento.thumbnail,
              price: elemento.price,
              agency: elemento.agency,
              key: elemento.id + elemento.agency.id
            }]
          });
        })
      })
      .catch(e => { console.log(e); })
  }

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      query: '',
    }
    this.busquedaGeneral = this.busquedaGeneral.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.search;
    const queryValues = queryString.parse(query)
    this.setState({ query: query, checkin: queryValues.checkin, checkout: queryValues.checkout, location: queryValues.location })
    this.busquedaGeneral(query);
  }

  handleCardDetails(room, agency) {
    console.log("[CardResumeList] Card callback ->", room, agency)
    const { checkin, checkout, location } = this.state;
    this.props.history.push(`details/${location}/${agency.name}/${room.id}/${room.title}?checkin=${checkin}&checkout=${checkout}`)
  }

  render() {
    const mesaje = <h1>No se encontraron resultados</h1>
    const cards = this.state.cards.map((card, index) => (
      <CardResume id={card.id}
        title={card.title}
        city={card.city}
        img={card.img}
        price={card.price}
        agency={card.agency}
        onCardResumeClick={(room, agency) => this.handleCardDetails(room, agency)}
        raiting={4.5}
        key={`${card.key}-${index}`} />
    ));

    return (<div className="card-resume-list-container">{cards.length ? cards : mesaje}</div>);
  }
}

export default CardResumeList;
