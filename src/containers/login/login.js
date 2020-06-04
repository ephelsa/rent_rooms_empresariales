import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import 'firebase/auth';
import './login.css';
import Aux from '../../hoc/Auxiliar'

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
      <div className="body-login">
        {
          user
            ? <Redirect to={{ pathname: '/home', firebase: firebase }} />
            // ? console.log(JSON.stringify(user, null, 2))
            : <Aux>
              <p className="text">
                <h1>Escoja un metodo para iniciar sesión.</h1>
              </p>
            </Aux>
        }

        {
          user
            ? <Aux> <button onClick={signOut} /></Aux>
            : <Aux><button class="loginBtn loginBtn--google" onClick={signInWithGoogle}>Sign in with Google</button> <button class="loginBtn loginBtn--facebook" onClick={signInWithFacebook}>Sign in with Facebook</button></Aux>
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