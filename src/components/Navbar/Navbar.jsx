import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { LoginContext } from '../../loginContext'
import { useContext } from 'react';

function Navbar() {
    const { auth, setAuth } = useContext(LoginContext)
    const logout = () => {
        if (typeof auth.firebase == "function") {
            auth.firebase()
        }
        setAuth(null)
    }
    
    return (
        <div className='navbar'>
            <div className="right">
                <Link to="/home">Menú</Link>
                <a href="#idiom">Español</a>
            </div>
            <Link to="/home"><img src={Logo} alt="Logo" /></Link>
            <div className="left">
                {
                    auth ? <Link to="/booking">Mis reservas</Link> :
                    null 
                }
                {
                    auth
                        ? <Link to="#" onClick={() => logout()}>Cerrar sesión</Link>
                        : <Link to="/login">Inicia sesión</Link>
                }

            </div>
        </div>
    )
}


export default Navbar;