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
    console.log(users[0]);

    return(
      <h1> Users </h1>
      
    )
  }
}


// <ul>
//   {
//     this.users.map((u)=>{
//       <li> {u.emails.address} </li>
//     })
//   }
// </ul>
