import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import './login.css';
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
        signInWithFacebook,
      } = this.props;
      
    
      return (
        <div>
            {
              user
                ?   //<p>logueado</p>
                <Redirect to={{
                  pathname: '/home',
                  firebase: firebase
              }}/>
                : <div class="text"><p><h1>Escoja un metodo para iniciar sesión.</h1></p></div>
            }
  
            {
              user
                ?<div> <button onClick={signOut}/></div>  
                          
                : <div><button onClick={signInWithGoogle}>Sign in with Google</button> <button onClick={signInWithFacebook}>Sign in with Facebook</button></div>
            }
        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);