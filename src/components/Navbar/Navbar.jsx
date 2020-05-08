import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => (
    <div className='navbar'>
        <div className="right">
            <a href="#menu">Menú</a>
            <a href="#idiom">Español</a>
        </div>
        <Link to="/home"><img src={Logo} alt="Logo" /></Link>
        <div className="left">
            <a href="#help">Ayuda</a>
            <a href="#login">Inicia sesión</a>
            <a className="button" href="#register">Regístrate</a>
        </div>
    </div>
)

export default Navbar;