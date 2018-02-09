import React, { Component } from 'react';

import './Conversation.css';

class Conversation extends Component {
  render() {
    return (
      <div className="Conversation">
        <textarea>
          <button>add a comment!</button>
        </textarea>
        <button>Submit</button>


        <p className="Conversation">

        </p>
      </div>
    );
  }
}
export default Conversation
