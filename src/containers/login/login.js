import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import 'firebase/auth';
import './Login.css';
import Aux from '../../hoc/Auxiliar'
import axios from 'axios';
import { LoginContext } from '../../loginContext'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  static contextType = LoginContext

  tokenHandler = (user, callback) => {
    const googleAPI = "https://securetoken.googleapis.com/v1/token?key=AIzaSyARTPou47LqLMxfpS5jqjUXHTxps-SqjM8&grant_type=refresh_token&refresh_token="
    axios.post(googleAPI + user.refreshToken).then(res => {
      callback(res.data.access_token)
    }).catch(e => {
      console.log(e);
    })
  }

  loginHandler = (user) => {
    this.tokenHandler(user, (token) => {
      this.context.setAuth({ email: user.email, token, firebase: this.logout })
      this.props.history.push('/home')
    })
  }

  logout = () => {
    firebase.auth().signOut()
    this.context.setAuth(null)
    localStorage.clear()
    this.props.history.push('/login')
  }

  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;

    return (
      <div className="body-login">
        {
          user
            ? this.loginHandler(user) : <h1 className="text">Escoja un metodo para iniciar sesión.</h1>
        }

        {
          user
            ? <Aux><button onClick={signOut} /></Aux>
            : <Aux><button className="loginBtn loginBtn--google" onClick={signInWithGoogle}>Iniciar sesión con Google</button><button className="loginBtn loginBtn--facebook" onClick={signInWithFacebook}>Iniciar sesión con Facebook</button></Aux>
        }
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(Login);