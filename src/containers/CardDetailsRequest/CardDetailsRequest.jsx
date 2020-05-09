import React, { Component } from 'react';
import axios from 'axios';

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

    switch(agencyName) {
      case 'S_TEAM': return urlBackendPython;
      case 'Arrendamientos%20njs': return urlBackendNode;
      case 'Lambda%20Team': return urlBackendLambda;
      default: return '----';
    }
  }

  getDetails(agencyName, roomId) {
    const baseUrl = this.getBaseUrl(agencyName)
    axios.get(baseUrl + roomId) 
    .then(res => {
      let details = {};
      res.data.map((item) => {
        details = {
          id: item.id,
          img: item.images[0].url,
          city: item.location.name,
          price: item.price,
          totalPrice: 3000,
          realState: item.agency.name,
          realStateLogo: item.agency.logo_url,
          name: item.property_name,
          rating: item.rating,
          services: item.services
        };
      });

      this.setState({ details })
      console.log('[CardDetailsRequest] details ->', res.data);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="card-details-request-container">
        <CardDetails
          key={this.state.details.id}
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
