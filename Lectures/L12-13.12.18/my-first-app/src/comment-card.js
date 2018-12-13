import React from 'react';

class CommentCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {flagged:false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.flagged === true ?
      console.log('true') :
      this.setState(prevState => ({flagged: prevState.flagged = true}));
  }

  render() {
    return (
      <article className='bx--row'>
        <div className='bx--offset-xs-2 bx--col-xs-8'>
          <h1>{this.props.name}</h1>
          <p>{this.props.email}</p>
          <p>{this.props.body}</p>
          <button onClick={this.handleClick} className="bx--btn bx--btn--primary" type="button">Flag</button>
        </div>
      </article>
    );
  }
}

export default CommentCard;
