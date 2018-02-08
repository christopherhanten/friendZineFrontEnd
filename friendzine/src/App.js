import React, { Component } from 'react';
import logo from './friendZineFav.svg';
import './App.css';
import Comment from './Components/Comment';
import Conversation from './Components/Conversation';
import URLShare from './Components/URLShare';
import AddMusic from './Components/AddMusic';
import AddLink from './Components/AddLink';

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
        <Comment />
        <Conversation />
        <URLShare />
        <AddMusic />
        <AddLink />
      </div>
    );
  }
}

export default App;
