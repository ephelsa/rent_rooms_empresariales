import React, { Component } from 'react';
import './Layout.css';
import Navbar from '../../component/Navbar/Navbar';


class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="layout-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
