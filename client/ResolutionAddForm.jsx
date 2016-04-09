import React from 'react'

export default class ResolutionAddForm extends React.Component{
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
    return(
      <h2> Add resolution here </h2>

    )
  }
}
