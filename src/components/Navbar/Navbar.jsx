import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/logo.png'

function logout(firebase){
    firebase.auth().signOut().then(function() {
        alert("se ha deslogueado exitosamente");
        window.open("http://localhost:3000/login","_self")
      }).catch(function(error) {
        // An error happened.
      });
}

const Navbar = (props) => (
    <div className='navbar'>
        <div className="right">
            <Link to="/home">Menú</Link>
            <a href="#idiom">Español</a>
        </div>
        <Link to="/home"><img src={Logo} alt="Logo" /></Link>
        <div className="left">
            <Link to="/reservas">Mis reservas</Link>
            {
                props.firebase
                ? <Link to="#" onClick={() => logout(props.firebase)}>Cerrar sesión</Link>
                :<Link to="/login">Inicia sesión</Link>
                }
       
        </div>
    </div>
)

export default Navbar;