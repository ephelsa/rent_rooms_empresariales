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
        const email = "alejo.casta.al@gmail.com"
        // const email = "leon.arango@udea.edu.co"
        const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxlamFuZHJvIENhc3Rhw7FvIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tdk1ZLXVJeVN1alEvQUFBQUFBQUFBQUkvQUFBQUFBQUFLWjQvQU1adXVja2J4cHhRT2R5S2ZxRHhncmVoV054RUNEaXZ5QS9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVudHJvb21zLTIwMTkyIiwiYXVkIjoicmVudHJvb21zLTIwMTkyIiwiYXV0aF90aW1lIjoxNTkxNDA3NzUwLCJ1c2VyX2lkIjoickZOUGdEbDlvb2FJbWxNWXBvbWhhZ21LUFdCMyIsInN1YiI6InJGTlBnRGw5b29hSW1sTVlwb21oYWdtS1BXQjMiLCJpYXQiOjE1OTE0MDc3NTQsImV4cCI6MTU5MTQxMTM1NCwiZW1haWwiOiJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzUwNTE1OTAwOTMzNDYzODQ5MCJdLCJlbWFpbCI6WyJhbGVqby5jYXN0YS5hbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.FWYgLXprcYs_XfWlNXFS9fWIKiNxRHO0YATpxVC1iNjfDXaDq0-3EVIkTjui73hkPpaCb-tCRFGVYylOfdd0IxGsV9vpSqq06Idz7VOR7zXyb0PBMDgdXXornu4DEEiVUqXby-8aBkjKAxp2mE7kOsX8rcB-3iv502B8dyVf-NGw071Zc_UnZ8Ac94-RXwVl_gz6znfvH8tcwqc9o152iRr3fHqB9bBzv7AeClQOm30A4G5XY5OWIou3Q1avWJYncy_4DYy6TGkNm0KpVsBJHLMyu0B-LtbgzVAHQtC8vUDFrMFfaokk6COPut8jtRtOpYiyDWRurCQdJR5JQUslaw"
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