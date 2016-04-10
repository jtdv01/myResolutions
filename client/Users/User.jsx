import React from 'react';


export default class User extends React.Component{

  render(){
    let email = this.props.user.emails[0].address;
    let user_id = this.props.user._id;
    return(
    <div>
      {user_id} -- {email}
    </div>
    )
  }

}
