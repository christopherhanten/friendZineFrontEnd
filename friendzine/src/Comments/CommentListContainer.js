//some example code from:
//https://medium.com/@learnreact/container-components-c0e67432e005

export default class CommentListContainer extends React.Component {
  render() {
    return (
      class CommentListContainer extends React.Component {
      state = { comments: [] };
      componentDidMount() {
        fetchSomeComments(comments =>
          this.setState({ comments: comments }));
      }
  render() {
    return <CommentList comments={this.state.comments} />;
}}}}

export default CommentContainer
