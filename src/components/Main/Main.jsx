import React from 'react';
import Layout from '../../containers/Layout/Layout';
import Searchbar from '../../containers/Searchbar/Searchbar';
import './Main.css'

const Main = (props) => (
  <Layout firebase={props.location.firebase}>
    <div className='main'>
      <h1>Hola encuentra tu nuevo hogar</h1>
      <Searchbar />
    </div>
  </Layout>
)

export default Main;