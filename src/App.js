import React from 'react';

import Layout from './containers/Layout/Layout';
import CardResumeList from './containers/CardResumeList/CardResumeList';

function App() {
  return (
    <div>
      <Layout>
        <CardResumeList />
      </Layout>
    </div>
  );
}

export default App;
