import React from 'react'

export default class ResolutionAddForm extends React.Component{
  addResolution(event){
    event.preventDefault();
    console.log(this);

    var text = this.refs.resolution.value.trim();

    // Call the callback if it succeeds using an arrow function
    // Arror functions change the context of this
    // If you used function(){}, it will look for 'this'
    // if you use arrow function, the 'this' will refer to the class? Resolution form
    // rather than the function of Meteor.call

    Meteor.call("addResolution",text,()=>{
      this.refs.resolution.value="";
    });

    /*
    Now if you try to type this in the javascript console of the browserL:
    Resolutions.insert({'a':1})
    It will fail because we removed insecure
    */
  }

  render(){
    return(

      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <div className="container form-group">
          <input
            type="text"
            className="input-lg"
            ref="resolution"
            placeholder="Add resolutions here"
            />
          </div>
      </form>

    )
  }
}
