import React, { Component } from 'react';
import axios from 'axios';
import BookingResume from '../../components/BookingResume/BookingResume';
import './BookingsRequest.css'

class BookingsRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const token = localStorage.getItem('token')
        this.getBookings(token, email)
    }

    getBookings(token, email) {
        const urlBackendNode = "http://ec2-13-58-217-208.us-east-2.compute.amazonaws.com/api/booking/";
        const urlBackendPython = "http://ec2-34-195-214-219.compute-1.amazonaws.com:8000/rooms/booking/"
        const urlBackendLambda = "https://0kaup1m6dg.execute-api.us-east-1.amazonaws.com/dev/booking/";
        const urlBackendScala = "https://rent-rooms.herokuapp.com/booking/";

        const header = {
            headers: {
                'authtoken': token
            }
        }

        axios.get(urlBackendNode + email, header).then(res => {
            res.data.map(data => {
                this.setState({
                    cards: [...this.state.cards, {
                        id: data.id_room,
                        name: data.property_name,
                        city: data.location.name,
                        thumbnail: data.thumbnail,
                        total_price: data.total_price,
                        agency: data.agency.name,
                        checkin: data.checkin,
                        checkout: data.checkout,
                        key: data.id + data.agency.id
                    }]
                });
                return null;
            })
        }).catch(e => {
            console.log(e);
        })

        axios.get(urlBackendPython + email, header).then(res => {
            res.data.map(data => {
                this.setState({
                    cards: [...this.state.cards, {
                        id: data.id_room,
                        name: data.property_name,
                        city: data.location.name,
                        thumbnail: data.thumbnail,
                        total_price: data.price,
                        agency: data.agency.name,
                        checkin: data.checkin,
                        checkout: data.checkout,
                        key: data.id + data.agency.id
                    }]
                });
                return null;
            })
        }).catch(e => {
            console.log(e);
        })

        axios.get(urlBackendLambda + email, header).then(res => {
            res.data.map(data => {
                this.setState({
                    cards: [...this.state.cards, {
                        id: data.id_room,
                        name: data.property_name,
                        city: data.location.name,
                        thumbnail: data.thumbnail,
                        total_price: data.total_price,
                        agency: data.agency.name,
                        checkin: data.checkin,
                        checkout: data.checkout,
                        key: data.id_room + data.agency.id
                    }]
                });
                return null;
            })
        }).catch(e => {
            console.log(e);
        })

        axios.get(urlBackendScala + email, header).then(res => {
            res.data.map(data => {
                this.setState({
                    cards: [...this.state.cards, {
                        id: data.id,
                        name: data.property_name,
                        city: data.location.name,
                        thumbnail: data.thumbnail,
                        total_price: data.price,
                        agency: data.agency.name,
                        checkin: data.checkin,
                        checkout: data.checkout,
                        key: data.id + data.agency.id
                    }]
                });
                return null;
            })
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        const formatterPeso = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })
        const mesaje = <h1>No tienes reservas.</h1>
        const cards = this.state.cards.map((card, index) => (
            <BookingResume
                id={card.id}
                title={card.name}
                city={card.city}
                img={card.thumbnail}
                price={formatterPeso.format(card.total_price)}
                agency={card.agency}
                checkin={card.checkin}
                checkout={card.checkout}
                key={`${card.key}-${index}`}
            />

        ));
        return (<div className="card-booking-list-container">{cards.length ? cards : mesaje}</div>);
    }
}

export default BookingsRequest;