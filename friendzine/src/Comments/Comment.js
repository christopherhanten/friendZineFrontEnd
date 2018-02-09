import React, { Component } from 'react';

import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <textarea>
          <button>add a comment!</button>
        </textarea><br/>
        <button>Submit</button>


        <p className="Commentary">

        </p>
      </div>
    );
  }
}
export default Comment
