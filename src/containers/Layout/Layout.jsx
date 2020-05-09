import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliar'
import Navbar from '../../components/Navbar/Navbar';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <div className="layout-content">{this.props.children}</div>
      </Aux>
    );
  }
}

export default Layout;
