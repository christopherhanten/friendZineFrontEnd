//some example code from:
//https://medium.com/@learnreact/container-components-c0e67432e005
import { FormText } from 'reactstrap';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <FormGroup>
          <Label for="vanillaComment">Leave a comment</Label>
          <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <div>
        <Button outline color="primary">Submit</Button>{' '}
      </div>
      );
    }
  }

class CommentListContainer extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}

export default CommentContainer
