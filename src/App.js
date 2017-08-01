import React, { Component } from 'react';
import Items from './components/Items';

import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Items/>
    );
  }
}

export default App;
