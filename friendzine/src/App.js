import React, { Component } from 'react';
import logo from './friendZineFav.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">friendZine.</h1>
        </header>
        <p className="App-intro">
          Soon You'll be able to add to the Conversation!
        </p>
      </div>
    );
  }
}

export default App;
