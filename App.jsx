import React from 'react';


export default class App extends React.Component{
  render(){
    return(
      <h1> Hello World </h1>
    )
  }
}

// if(Meteor.isClient){
//   Meteor.startup(function(){
//     React.render(<App />,document.getElementById('render-target'));
//   });
// }
