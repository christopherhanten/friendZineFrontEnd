import React, { Component } from 'react';
import logo from './friendZineFav.svg';
import './App.css';
import Comment from './Comments/Comment';
import Conversation from './Conversation/Conversation';
import URLShare from './URLShare/URLShare';
import AddMusic from './AddMusic/AddMusic';
import AddLink from './AddLink/AddLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">friendZine.</h1>
        </header>

        <div className="flexContainer">
          <div className="Commentary">
            <Comment />
          </div>
          <div className="Convo">
            <Conversation />
          </div>
          <div className="URLShare">
            <URLShare />
          </div>
          <div className="Music">
            <AddMusic />
          </div>
          <div className="Link">
            <AddLink />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
