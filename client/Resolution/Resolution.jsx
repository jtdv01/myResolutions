import React from 'react';


export default class Resolution extends React.Component{
  toggleChecked(){
    console.log(this);
    Meteor.call("toggleResolution",this.props.resolution._id,this.props.resolution.complete);
  }

  deleteResolution(){
    Meteor.call("deleteResolution",this.props.resolution._id);
  }

  render(){
    return(
      <li>
        <input type="checkbox"
          readOnly={true}
          checked = {this.props.resolution.complete}
          onClick={this.toggleChecked.bind(this)} />
        {this.props.resolution.text}
        <button className="btn-cancel"
          onClick={this.deleteResolution.bind(this)} >
          &times;
        </button>
      </li>
    )
  }
}
