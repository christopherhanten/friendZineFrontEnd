import React, { Component } from 'react';
import { FormText } from 'reactstrap';
import { Button } from 'reactstrap';

import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <FormGroup>
            <Label for="vanillaComment">Leave a comment</Label>
            <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </div>
      <div>
        <Button outline color="blue">Submit</Button>{' '}
      </div>
        <p className="Commentary">

        </p>

    );
  }
}

export default Comment;
