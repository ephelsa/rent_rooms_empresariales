import React from 'react';
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'

import { Page404 } from './components/PageHandler/PageHandler';
import Layout from './containers/Layout/Layout';
import Main from './components/Main/Main'
import Cards from './containers/CardResumeList/CardResumeList'
import Details from './containers/CardDetailsRequest/CardDetailsRequest'
import Login from './containers/login/login'

function App() {

  return ( 
    <Switch>  
 
      
      <Route exact path="/login" component={Login}  />  
      
        <Route exact path="/home" component={Main}  />
        <Layout>
        <Route exact path="/search" component={Cards} />
        <Route path="/details/:codCity/:agencyName/:roomId/:roomName" component={Details} /></Layout>
        
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
