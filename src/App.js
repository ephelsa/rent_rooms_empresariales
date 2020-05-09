import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import { Page404 } from './components/PageHandler/PageHandler';
import Layout from './containers/Layout/Layout';
import Main from './components/Main/Main'
import Cards from './containers/CardResumeList/CardResumeList'
import Details from './containers/CardDetailsRequest/CardDetailsRequest'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/home" component={Main}  />
        <Route exact path="/search" component={Cards} />
        <Route path="/details/:codCity/:agencyName/:name" component={Details} />
        <Route path="/404" component={Page404} />

        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
    </Switch>
  </Layout>
  );
}

export default App;
