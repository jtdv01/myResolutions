import React from 'react';
import Resolution from './Resolution';
import ResolutionsList from './ResolutionsList';
import ResolutionAddForm from './ResolutionAddForm';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AccountsUIWrapper from '../AccountsUIWrapper';
// import {Contact} from './client/Contact.js';

Resolutions = new Mongo.Collection("resolutions");
Contacts = new Mongo.Collection("contacts");



export default class App extends TrackerReact(React.Component){

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
      <div id="bootstrap-menu" className="navbar navbar-default " role="navigation">
          <div className="container-fluid">
              <div className="navbar-header"><a className="navbar-brand" href="#">MyResolutions</a>
                  <button type="button" className="btn-primary" data-toggle="collapse" data-target=".navbar-menubuilder"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                  </button>
              </div>
              <div className="collapse navbar-collapse navbar-menubuilder">
                  <ul className="nav navbar-nav navbar-left">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">Users</a>
                      </li>
                      <li>
                        <a href=""><AccountsUIWrapper/></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>



        <ResolutionAddForm />
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
