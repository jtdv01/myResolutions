import React from 'react';

export default class Resolution extends React.Component{
  render(){
    return(
      <li> {this.props.resolution.text} -- {this.props.resolution._id}</li>
    )
  }
}
