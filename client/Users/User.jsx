import React from 'react';

export default class User extends React.Component{

  render(){
    //Personal info like email and hash is only available to current logged user
    // let email = this.props.user.emails[0].address;
    console.log(this.props.user);
    let user_id = this.props.user._id;
    return(
    <div>
      id : {user_id}
    </div>
    )
  }

}
