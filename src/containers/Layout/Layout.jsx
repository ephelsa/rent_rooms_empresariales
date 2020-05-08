import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Searchbar from '../../components/Searchbar/Searchbar';
import './Layout.css';


class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="layout">
          <h1>Encuentra tu nuevo hogar</h1>
          <Searchbar />
          {/* <div className="layout-content">{this.props.children}</div> */}
        </div>
      </div>
    );
  }
}

export default Layout;
