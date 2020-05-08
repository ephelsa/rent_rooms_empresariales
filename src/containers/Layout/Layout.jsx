import React, { Component } from 'react';
import './Layout.css';
import Searchbar from '../../components/Searchbar/Searchbar';


class Layout extends Component {
  render() {
    return (
      <div>
        <Searchbar/>
        <div className="layout-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
