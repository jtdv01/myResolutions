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
      <div id="bootstrap-menu" class="navbar navbar-default " role="navigation">
          <div class="container-fluid">
              <div class="navbar-header"><a class="navbar-brand" href="#">Brand</a>
                  <button type="button" class="btn-primary" data-toggle="collapse" data-target=".navbar-menubuilder"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                  </button>
              </div>
              <div class="collapse navbar-collapse navbar-menubuilder">
                  <ul class="nav navbar-nav navbar-left">
                      <li><a href="/">Home</a>
                      </li>
                      <li><a href="/products">Products</a>
                      </li>
                      <li><a href="/about-us">About Us</a>
                      </li>
                      <li><a href="/contact">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>


        <h1> Resolutions </h1>
        <AccountsUIWrapper />

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
