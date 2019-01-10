import React from 'react';
// Finds from node_modules
import ReactDOM from 'react-dom';

// Use the thing I just imported and render this, in this element:
// Injects `Hello World!` into root
// ReactDOM.render(
//   <h1>Hello World!</h1>, // Render this
//   document.getElementById(`root`) // In this
// );

// ------------------------------------------------- //

// ReactDOM.render(
//   <div><h1>Hello World!</h1><h1>Goodbye</h1></div>,
//   // <h1>Hello World!</h1><h1>Goodbye</h1>, // JSX error
//   // JSX is syntax mix of JavaScript + HTML
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// // Valid ES6 that we've learned
// const content = <div><h1>Hello</h1><h1>Goodbye</h1></div>; // JSX
// ReactDOM.render(
//   content,
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// // Can use brackets for legibility
// // Can also run JavaScript code in our JSX using {}
// const content = (
//   <div>
//     <h1>Hello</h1>
//     <h1>{`Evan`.toUpperCase()}</h1>
//   </div>
// );
// ReactDOM.render(
//   content,
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// // React doesn't like css `class`
// // Use `className`
// // Structure of how we would request, hardcoded
// const users = [
//   {name:'Evan', age:22},
//   {name:'Edel', age:21},
//   {name:'Cillian', age:30}
// ];
// const element = (
//   <div>
//     <h2>Name</h2> // Needs to be a var
//     <p style={{'color':'red'}}>43</p> // Needs to be a var
//   </div>
// );
// ReactDOM.render(
//   element,
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// // Component - can write function or class
// // Functions have no state - read only
// // Classes will change.
// const users = [
//   {name:'Evan', age:22},
//   {name:'Edel', age:21},
//   {name:'Cillian', age:30}
// ];
// function User(props) { // pass 'props' by convention
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.age}</p>
//     </div>
//   );
// }
// // D.R.Y - How do we loop through users?
// // No for loops -> Use ES6 -> MAP
// // Also we want to generate components that we want to render
// // Map loops through each users list item ->
// const userList = users.map(u => <User name={u.name} age={u.age}/>);
// // ReactDOM.render(
// //   <User name='Joe' age='100'/>, // React component syntax + prop passed in (HTML-y)
// //   document.getElementById(`root`)
// // );
//  ReactDOM.render(
//    <div> // Evaluate JS in JSX
//     {userList}
//    </div>,
//   document.getElementById(`root`)
// );

// ------------------------------------------------- //

// Class
const users = [
  {name:'Evan', age:22, image:'http://showcase.iadt.ie/assets/CC3/Headshot/N00150552_Profile.jpg'},
  {name:'Edel', age:21, image:'http://showcase.iadt.ie/assets/CC3/Headshot/N00153748_Profile.jpg'},
  {name:'Cillian', age:25, image:'http://showcase.iadt.ie/assets/CC3/Headshot/N00152737_Profile.jpg'}
];
class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.age}</p>
        <img width='200' heigt='200' src={this.props.image}></img>
      </div>
    );
  }
}
const userList = users.map(u => <User name={u.name} age={u.age} image={u.image}/>);
 ReactDOM.render(
   <div> // Evaluate JS in JSX
    {userList}
   </div>,
  document.getElementById(`root`)
);
