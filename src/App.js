import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './elements/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simle React UI Components</h2>
        </div>
        <div>
        <Button>Normal Button</Button>
        <Button flat>Flat Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
