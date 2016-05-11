Meteor.methods({
  addResolution(resolution){
    if(!Meteor.userId()){
      console.log("not-authorized");
      throw new Meteor.Error("not-authorized");
    }
    Resolutions.insert({
      text:resolution,
      complete:false,
      createdAt:new Date(),
      user:Meteor.userId()
    });
  },
  toggleResolution(id,status){
    Resolutions.update(id,{
      $set:{complete:!status}
    })
  },
  deleteResolution(id){
    Resolutions.remove(id);
  }

});
