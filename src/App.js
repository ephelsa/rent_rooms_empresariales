import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Login from './containers/login/login';
import { Page404 } from './components/PageHandler/PageHandler';
import Layout from './containers/Layout/Layout';
import Main from './components/Main/Main'
import Cards from './containers/CardResumeList/CardResumeList'
import Details from './containers/CardDetailsRequest/CardDetailsRequest'

function App() {
  return (
   
      <Switch>
          <Route exact path="/login" component={Login}  />
         <Layout>
        <Route exact path="/home" component={Main}  />
        <Route exact path="/search" component={Cards} />
        <Route path="/details/:codCity/:agencyName/:roomId/:roomName" component={Details} />
        </Layout>
        <Route path="/404" component={Page404} />

        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
    </Switch>

  );
}

export default App;
