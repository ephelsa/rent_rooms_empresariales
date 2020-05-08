import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliar'
import Navbar from '../../components/Navbar/Navbar';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
