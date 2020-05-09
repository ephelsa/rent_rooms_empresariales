import React, { Component } from 'react';
import axios from 'axios';

import CardDetails from '../../components/CardDetails/CardDetails';
import './CardDetailsRequest.css'

import img1 from '../../assets/Details/image1.webp'
// import img2 from '../../assets/Details/image2.webp'
import logo from '../../assets/Details/logo.jpg'

class CardDetailsRequest extends Component {

    busquedadetallesHabitaciones(agenciaQueHaceElRequest) {
        const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/rooms/";
        const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/";
        const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/prod/rooms/";
        var idHabitacion1 = "5eb24077bf3587508244c267";
        var idHabitacion2 = "1";

        switch (agenciaQueHaceElRequest) {
            case "agencia1":
                axios.get(urlBackendLambda + idHabitacion2)
                    .then(responseLambda => {
                        var detallesDesdeLambda = responseLambda; //Aquí estan los detalles desde lambda 
                        console.log(detallesDesdeLambda);
                        //Aqui se modificaria el estado.
                    })
                    .catch(e => {
                        console.log(e);
                    })
                break;
            case "agencia2":
                axios.get(urlBackendNode + idHabitacion1)
                    .then(responseNodeJs => {
                        var detallesDesdeNode = responseNodeJs.data; //Aquí estan los detalles desde Node 
                        console.log(detallesDesdeNode);
                        //Aqui se modificaria el estado
                    })
                    .catch(e => {
                        console.log(e);
                    })
                break;
            case "agencia3":
                axios.get(urlBackendPython + idHabitacion2)
                    .then(responsePython => {
                        var DetallesDesdePython = responsePython.data; //Aquí estan los detalles desde Python
                        console.log(DetallesDesdePython);
                        //Aqui se modificaria el estado
                    })
                    .catch(e => {
                        console.log(e);
                    })
                    break;
            default:
                console.log("Error");
        }
    }

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
            rating: 4.2,
            services: ["Wifi", "Baño Privado", "Otros"]
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
