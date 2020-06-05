import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import 'firebase/auth';
import './Login.css';
import Aux from '../../hoc/Auxiliar'
import axios from 'axios';

const firebaseApp = firebase.initializeApp(firebaseConfig);
class Login extends Component {

  state = {
    token: ''
  }

  tokenHandler = (user) => {
    const googleAPI = "https://securetoken.googleapis.com/v1/token?key=AIzaSyARTPou47LqLMxfpS5jqjUXHTxps-SqjM8&grant_type=refresh_token&refresh_token="
    axios.post(googleAPI + user.refreshToken)
      .then(res => {
        this.setState({
          token: res.data.access_token
        })
        return null;
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;

    return (
      <div className="body-login">
        {
          user
            ? <Redirect to={{ pathname: '/home', firebase: firebase }} />
            // ? <button onClick={() => this.tokenHandler(user)}>Prueba</button>
            : <h1 className="text">Escoja un metodo para iniciar sesión.</h1>
        }

        {
          user
            ? <Aux><button onClick={signOut} /></Aux>
            : <Aux><button className="loginBtn loginBtn--google" onClick={signInWithGoogle}>Sign in with Google</button><button className="loginBtn loginBtn--facebook" onClick={signInWithFacebook}>Sign in with Facebook</button></Aux>
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

export default withFirebaseAuth({ providers, firebaseAppAuth })(Login);