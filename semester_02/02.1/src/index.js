// ------------------------------------------------- //
// 13/12/2018
// Evan MacHale - N00150552
// Lecture 12 - React w/ API
// ------------------------------------------------- //
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import CommentCard from './comment-card'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments:[]}
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      // console.log(response);
      this.setState({comments: response.data})
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const comment_list = this.state.comments.map(u =>
      <CommentCard
        key={u.id}
        name={u.name}
        email={u.email}
        body={u.body}
      />
    );
    return (
      <div>{comment_list}</div>
    );
  }
}

ReactDOM.render(
  <Comments/>,
  document.getElementById(`root`)
);
