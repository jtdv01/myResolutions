import React from 'react';


export default class Resolution extends React.Component{
  render(){
    return(
      <tr>
        <td>
          {this.props.resolution.text}
        </td>
        <td>
        {this.props.resolution._id}
        </td>
      </tr>
    )
  }
}
