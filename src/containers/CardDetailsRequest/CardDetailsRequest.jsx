import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import moment from 'moment'
import CardDetails from '../../components/CardDetails/CardDetails';
import './CardDetailsRequest.css'

class CardDetailsRequest extends Component {

  state = {
    details: {
      services: []
    }
  }

  componentDidMount() {
    const { agencyName, roomId } = this.props.match.params;
    this.getDetails(agencyName, roomId)
  }

  getBaseUrl(agencyName) {
    const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/";
    const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/";
    const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/prod/rooms/";

    switch (agencyName) {
      case 'Python': return urlBackendPython;
      case 'Arrendamientos njs': return urlBackendNode;
      case 'Lambda Team': return urlBackendLambda;
      default: return '----';
    }
  }

  getDetails(agencyName, roomId) {
    const baseUrl = this.getBaseUrl(agencyName)
    axios.get(baseUrl + roomId)
      .then(res => {
        const formatterPeso = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0
        })
        const { checkin, checkout } = queryString.parse(this.props.location.search);
        const startDate = new Date(checkin)
        const endDate = new Date(checkout)
        let momentStart = moment(startDate);
        let momentEnd = moment(endDate);
        const diffe = momentEnd.diff(momentStart, 'days');
        let details = {};
        details = {
          checkin,
          checkout,
          id: res.data.id,
          img: res.data.images[0].url,
          city: res.data.location.name,
          price: res.data.price,
          totalPrice: formatterPeso.format(res.data.price * diffe),
          realState: res.data.agency.name,
          realStateLogo: res.data.agency.logo_url,
          name: res.data.property_name,
          rating: res.data.rating,
          services: res.data.services
        };
        this.setState({ details })
      }).catch(e => {
        console.log("Falló la petición: " + e);
      });
  }

  render() {
    return (
      <div className="card-details-request-container">
        <CardDetails
          checkin={this.state.details.checkin}
          checkout={this.state.details.checkout}
          id={this.state.details.id}
          key={`${this.state.details.id}+${this.state.details.name}`}
          img={this.state.details.img}
          city={this.state.details.city}
          price={this.state.details.price}
          totalPrice={this.state.details.totalPrice}
          realState={this.state.details.realState}
          realStateLogo={this.state.details.realStateLogo}
          name={this.state.details.name}
          rating={this.state.details.rating}
          services={this.state.details.services}
        />
      </div>
    )
  }
}

export default CardDetailsRequest;