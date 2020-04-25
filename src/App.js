import React from 'react';

import Layout from './container/Layout/Layout';
import CardResumeList from './container/CardResumeList/CardResumeList';

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
