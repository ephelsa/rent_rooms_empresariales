import React from 'react';
import { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import { Page404 } from './components/PageHandler/PageHandler';
import Layout from './containers/Layout/Layout';
import Main from './components/Main/Main'
import Cards from './containers/CardResumeList/CardResumeList'
import Details from './containers/CardDetailsRequest/CardDetailsRequest'
import Login from './containers/Login/Login'
import Booking from './containers/BookingsRequest/BookingsRequest'
import { LoginContext } from './loginContext'
import { useMemo } from 'react';

function trashStorage(auth) {
  if (auth === null) {
    localStorage.clear()
  }
  else {
    for (const basura in auth) {
      localStorage.setItem(basura, auth[basura])
    }
  }
}

function fuckingStorage() {
  let values = {},
    keys = Object.keys(localStorage), i = keys.length;
  values = i === 0 ? null : values
  while (i--) {
    values[keys[i]] = (localStorage.getItem(keys[i]));
  }
  return values;
}

function App() {
  const [auth, setAuth] = useState(fuckingStorage());
  const providerValue = useMemo(() => {
    trashStorage(auth)
    return { auth, setAuth }
  }, [auth, setAuth])
  return (
    <LoginContext.Provider value={providerValue}>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Cards} />
          <Route path="/details/:codCity/:agencyName/:roomId/:roomName" component={Details} />
          <Route path="/booking" component={Booking}>
            {auth === null ? <Redirect to="/login" /> : null}
          </Route>
          <Route path="/404" component={Page404} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Layout>
    </LoginContext.Provider>
  );
}

export default App;
