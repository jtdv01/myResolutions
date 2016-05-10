Resolutions = new Mongo.Collection("resolutions");
// Database created by accounts-package
Users = Meteor.users;

Meteor.publish("allResolutions",function(){
  return Resolutions.find();
  // If you just want to find non-completes
  // return Resolutions.find({complete:false});
});
