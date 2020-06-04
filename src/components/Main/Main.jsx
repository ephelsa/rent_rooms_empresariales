import React from 'react';

import Searchbar from '../../containers/Searchbar/Searchbar';

import './Main.css'

function logOut(firebase){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}

const Main = (props) => (
    <div className='main'>
        <h1>Hola {logOut(props.location.firebase)}  {console.log(props.location.firebase)} encuentra tu nuevo hogar</h1>
        <Searchbar/>
    </div>
)

export default Main;