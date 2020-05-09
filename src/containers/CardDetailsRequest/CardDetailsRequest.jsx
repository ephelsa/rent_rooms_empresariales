import React, { Component } from 'react';

import CardDetails from '../../components/CardDetails/CardDetails';
import './CardDetailsRequest.css'

import img1 from '../../assets/Details/image1.webp'
// import img2 from '../../assets/Details/image2.webp'
import logo from '../../assets/Details/logo.jpg'

class CardDetailsRequest extends Component {
    state = {
        details: {
            id: 1,
            // images: [img1, img2],
            img: img1,
            city: 'Medellin',
            price: 750,
            totalPrice: 3000,
            realState: 'Arrendamientos njs',
            realStateLogo: logo,
            name: 'Habitacion en Robledo',
            rating: 0,
            services: ["Wifi", "Baño Privado"]
        }
    }

    render() {
        return (
            <div className="card-details-request-container">
                <CardDetails
                    key={this.state.details.id}
                    // imgs={this.state.details.images}
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
