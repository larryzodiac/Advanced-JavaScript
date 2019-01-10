import React from 'react';

class UserCard extends React.Component{
  constructor(props) {
    super(props);
    this.firstName = this.props.name.first;
    this.lastName = this.props.name.last;
    this.picture = this.props.picture;

    this.state = {likes:0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // this.setState({clickCount: this.state.clickCount+1});
    // Set state is asynchronous is the problem
    // No guarantee it accesses the correct value -> works in background, order of executions means stuff may execute in wrong order.
    // Above is wrong, below takes f as parametre + takes snapshot of current state (prevState)
    // Creates object + modifies to what the prev was + 1
    // prevState could be called anything -> parametre
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }
  // componentDidMount() {
  //   axios.get('https://randomuser.me/api/?results=10')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }
  render() {
    return (
      <div>
        <img alt="" width='200' heigt='200' src={this.picture}></img>
        <h2>{this.firstName} {this.lastName}</h2>
        <button onClick={this.handleClick} className="bx--btn bx--btn--ghost bx--btn--sm" type="button">
          {this.state.likes}
          <svg className="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.49 7.72A4.41 4.41 0 1 1 8 1.84a4.42 4.42 0 1 1 6.44 6L8 13.87z"></path>
          </svg>
        </button>
      </div>
    );
  }
}

export default UserCard;
