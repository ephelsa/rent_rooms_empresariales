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

function login(){
    window.open("http://localhost:3000/login","_self")
}

const Navbar = (props) => (
    <div className='navbar'>
        {console.log(props.firebase)}
        <div className="right">
            <a href="#menu">Menú</a>
            <a href="#idiom">Español</a>
        </div>
        <Link to="/home"><img src={Logo} alt="Logo" /></Link>
        <div className="left">
            <a href="#help">Ayuda</a>
            {
                props.firebase
                ? <a  onClick={() => logout(props.firebase)}>Cerrar sesión</a>
                :<a onClick={login}>Inicia sesión</a>
                }
       
        </div>
    </div>
)

export default Navbar;