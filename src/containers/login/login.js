import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import './login.css';

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
                ? <p><h1>Bienvenido, {user.displayName}</h1></p>
                : <p><h1>Escoja un metodo para iniciar sesión.</h1></p>
            }
  
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <div><button onClick={signInWithFacebook}>Sign in with Google</button> <button onClick={signInWithFacebook}>Sign in with Facebook</button></div>
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