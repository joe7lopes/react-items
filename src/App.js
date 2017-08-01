import React, { Component } from 'react';
import logo from './logo.svg';
import Items from './components/Items';
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
