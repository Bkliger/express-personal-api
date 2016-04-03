// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var bobProjects = [
{
     proj_name: "Subscription Billing",
     proj_type: "Market Diligence",
     industry_sector: "Software",
     proj_desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
},
{
     proj_name: "Dev Ops",
     proj_type: "Market Intelligence",
     industry_sector: "Software",
     proj_desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
}
];




db.Projects.create(bobProjects, function(err, Projects){
  if (err){
    return console.log("Error:", err);
  }

    console.log("Created new Projects");
  process.exit(); // we're all done! Exit the program.
});
