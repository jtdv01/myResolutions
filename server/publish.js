Resolutions = new Mongo.Collection("resolutions");
// Database created by accounts-package
Users = Meteor.users;

Meteor.publish("allResolutions",function(){
  return Resolutions.find();
  // If you just want to find non-completes
  // return Resolutions.find({complete:false});
});

Meteor.publish("userResolutions",function(){
  // Need to use this when using .publish() method AND userId is just a variable
  if(!this.userId){
    console.log('not-authorized');
    throw new Meteor.error("not-authorized");
  }
  var user_ = this.userId;
  return Resolutions.find({user:user_});
})
