// Creating components
import React from 'react';
import ReactDOM from 'react-dom';
// import data from './data'

// // Component function syntax
// // Props
// function Article(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h3>Article</h3>
//       <p>Content</p>
//     </div>
//   );
// }
// // States require class component
// // States can change
//
// // Props + JSX
// ReactDOM.render(
//    <div>
//     <Article title="Brexit is a mess"/>
//    </div>,
//   document.getElementById(`root`)
// );

// Like button
// const userData = data.results;
// class User extends React.Component{
//   constructor(props) {
//     super(props);
//     this.firstName = this.props.name.first;
//     this.lastName = this.props.name.last;
//     this.picture = this.props.picture;
//
//     this.state = {likes:0};
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // this.setState({clickCount: this.state.clickCount+1});
//     // Set state is asynchronous is the problem
//     // No guarantee it accesses the correct value -> works in background, order of executions means stuff may execute in wrong order.
//     // Above is wrong, below takes f as parametre + takes snapshot of current state (prevState)
//     // Creates object + modifies to what the prev was + 1
//     // prevState could be called anything -> parametre
//     this.setState(prevState => ({
//       likes: prevState.likes + 1
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <img alt="" width='200' heigt='200' src={this.picture}></img>
//         <h2>{this.firstName} {this.lastName}</h2>
//         <button onClick={this.handleClick} class="bx--btn bx--btn--ghost bx--btn--sm" type="button">
//           {this.state.likes}
//           <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1.49 7.72A4.41 4.41 0 1 1 8 1.84a4.42 4.42 0 1 1 6.44 6L8 13.87z"></path>
//           </svg>
//         </button>
//       </div>
//     );
//   }
// }
//
// const users = userData.map(u => <User key={u.name.first} name={u.name} picture={u.picture.large}/>);
// ReactDOM.render(
//    <div>
//     {users}
//    </div>,
//   document.getElementById(`root`)
// );

import axios from 'axios'
import UserCard from './userCard'
// Move class to seperate file

class UserGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {users: []}
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
      console.log(response);
      this.setState({users: response.data.results})
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const userList = this.state.users.map(u => <UserCard key={u.name.first} name={u.name} picture={u.picture.large}/>);
    return (
      <div>
        {userList}
      </div>
    );
  }
}

ReactDOM.render(
  <UserGrid/>,
  document.getElementById(`root`)
);
