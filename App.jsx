import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import {Contact} from './client/Contact.js';

Resolutions = new Mongo.Collection("resolutions");


class Contact extends React.Component{
  render(){
    return(
      <li> {this.props.contact.name} </li>
    )
  }
}

class Resolution extends React.Component{
  render(){
    return(
      <li> {this.props.resolution.text} </li>
    )
  }
}

export default class App extends TrackerReact(React.Component){

  contacts(){
    return [{name:"Joe",number:"555 555"},
      {
        name:"Jane",
        number:"231 1231 23"
      }
    ];
  }

  resolutions(){
    return Resolutions.find().fetch();
  }

  addResolution(event){
    event.preventDefault();
    console.log(this);

    var text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text:text,
      complete:false,
      createdAt: new Date()
    });

    this.refs.resolution.value = "";

  }

  render(){
    let res =this.resolutions();
    let contacts = this.contacts();
    // Need to add this incase its zero while loading
    // if(res.length <1){
    //   return(<div> Loading </div>)
    // }

    return(
      <div>
        <h1> Resolutions </h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
            <input
              type="text"
              ref="resolution"
              placeholder="Finish React Meteor Series"

              />
        </form>

        Rest goes here
        <ul>
          {res.map((x) => {
              return <Resolution resolution={x} key={x._id}/>
          })}
        </ul>

      </div>
    )
  }
}

// if(Meteor.isClient){
//   Meteor.startup(function(){
//     React.render(<App />,document.getElementById('render-target'));
//   });
// }
