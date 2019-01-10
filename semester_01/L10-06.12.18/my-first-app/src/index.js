import React from 'react';
import ReactDOM from 'react-dom';
// Realistic -> import json dataset
import data from './data'
// no need for .json on end of file

// ------------------------------------------------- //

// console.log(data);
// // console.log(data.results[0].name.first);
// // Pass user data so we can map the array
// const users = data.results;
// console.log(users);
//
// // Two ways to generate components -> functions or classes
// function User(props) {
//   return (
//       <div className="bx--row">
//         <div className="bx--offset-lg-4 bx-col-lg-4">
//           <div className="bx--tile">
//             <img alt="" width='200' heigt='200' src={props.picture}></img>
//             <h2>{props.name.first} {props.name.last}</h2>
//             <p>{props.quote}</p>
//           </div>
//         </div>
//       </div>
//   );
// }
// const userList = users.map(u => <User key={u.name.first} name={u.name} picture={u.picture.large} quote={u.quote}/>);
//  ReactDOM.render(
//    <div>
//     {userList}
//    </div>,
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// States
class Clicky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clickCount:0}; // Only allow modify state inside constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clickCount: this.state.clickCount+1}); // React will only change h1, not entire page
    // Set state is asynchronous, runs in backgroud
    //
  }

  render() {
    return (
      <div>
        <h1>{this.state.clickCount} clicks</h1>
        <button onClick={this.handleClick} className="bx--btn bx--btn--primary">My name is {this.props.name}</button>
      </div>
    );
  }
}

ReactDOM.render(
   <div>
    <Clicky name="Clicky"/>
   </div>,
  document.getElementById(`root`)
);
