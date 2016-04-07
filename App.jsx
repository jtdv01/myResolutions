import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import {Contact} from './client/Contact.js';

Resolutions = new Mongo.Collection("resolutions");
Contacts = new Mongo.Collection("contacts");

class ResolutionsList extends React.Component{

  constructor(){
    super();
    this.state = {
      'search': 'tesdfsfdst'
    };
  }

  updateSearch(event){
    var x = event.taget.value;
    // this.setState({'search':x});
    console.log(x);
    // var x = this.state.search;
    // console.log(x);
  }

  render(){
    return(
      <div>
      <h1> List of resolutions </h1>
      <h2> Filter resolutions </h2>
      <form>
        <input type="text" value={this.state.search} onChange={this.updateSearch} ref="query_text" placeholder="Query" />
      </form>
      <ul>
        {
          this.props.resolutions.map((r) => {
            return <Resolution resolution={r} key={r._id}/>
          }
        )}
      </ul>
    </div>
    )
  }
}

class Resolution extends React.Component{
  render(){
    return(

      <li> {this.props.resolution.text} -- {this.props.resolution._id}</li>
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



  removeResolution(event){
    event.preventDefault();
    console.log(this);

    // var idToDelete = this.refs.
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

        <h2> Add resolution here </h2>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
            <input
              type="text"
              ref="resolution"
              placeholder="Finish React Meteor Series"
              />
        </form>


        <ResolutionsList resolutions={res}/>
      </div>
    )
  }
}

// if(Meteor.isClient){
//   Meteor.startup(function(){
//     React.render(<App />,document.getElementById('render-target'));
//   });
// }
