import React from 'react';
import User from './User';
Users = Meteor.users;
// Users = new Mongo.Collection("users");
// users(){
//   return Users.find().fetch();
// }

export default class UsersPage extends React.Component{

  users(){
    return(Users.find().fetch());
  }

  render(){
    let users = this.users();
    let u= users[0];
    console.log(u);
    return(
      <div>
        <h1> Users </h1>
        List of users go here
        <User user={u} />
      </div>
    );
  }
}


// <ul>
//   {
//     this.users.map((u)=>{
//       <li> {u.emails.address} </li>
//     })
//   }
// </ul>
