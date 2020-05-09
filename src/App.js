import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main'
import Cards from './containers/CardResumeList/CardResumeList'
import Details from './containers/CardDetailsRequest/CardDetailsRequest'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/home" component={Main} />
        <Route path="/search" component={Cards} />
        <Route path="/details" component={Details} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
