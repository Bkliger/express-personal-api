// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var bobProfile = {
name: "Bob",
github_link: "github_linkBob",
github_profile_image: "github_profile_imageBob",
current_city: "Berkeley"
};

db.Profile.create(bobProfile, function(err, Profile){
  if (err){
    return console.log("Error:", err);
  }


  console.log("Created new Profile", Profile._id);
  process.exit(); // we're all done! Exit the program.
});
//
// var bobProjects = [
// {
//      proj_name: "Subscription Billing",
//      proj_type: "Market Diligence",
//      industry_sector: "Software",
//      proj_desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
// },
// {
//      proj_name: "Dev Ops",
//      proj_type: "Market Intelligence",
//      industry_sector: "Software",
//      proj_desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
// }
// ];
//
// db.Projects.create(bobProjects, function(err, Projects){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new Projects");
//   process.exit(); // we're all done! Exit the program.
// });
