// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var bobProjects = [
{
     proj_name: "Architectural Spec Software",
     proj_type: "Strategic Marketing",
     industry_sector: "Arch/Eng",
     proj_desc: "Helped company develop an actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."

},
{
     proj_name: "eProcurement Software",
     proj_type: "Market Intelligence",
     industry_sector: "Business",
     proj_desc: "Analyzed market perception and penetration of various competitor. Developed specific product feature recommendations."
},
{
     proj_name: "Automotive Dealer Marketing Software",
     proj_type: "Market Due Diligence",
     industry_sector: "Automotive",
     proj_desc: "Analysis for potential investor whether company could achieve its stated objective of 30% or more annual growth of the next several years."
},
{
     proj_name: "Physician Scheduling Software",
     proj_type: "Market Due Diligence",
     industry_sector: "Health Care",
     proj_desc: "Provided potential investor with a projection of likely revenues given the size of the market, segmentation, competitive dynamics, adoption rates, and other factors."
},
{
     proj_name: "Recruitment Process Outsourcing",
     proj_type: "Market Due Diligence",
     industry_sector: "Services",
     proj_desc: "Provided potential investor with a projection of likely revenues by analyzing competitive position and sizing the market."
},
{
     proj_name: "Converged Infrastruction",
     proj_type: "Voice of the Customer/Competitive Analysis",
     industry_sector: "Computer/Networking Hardware/Software",
     proj_desc: "Conducted ongoing research regarding customer satisfaction in various market segments and provided competitive analysis of hyperconverged infrastructure companies."
},
{
     proj_name: "Dev Ops Software",
     proj_type: "Competitive Analysis",
     industry_sector: "Software Development",
     proj_desc: "Provided greater insight into competitor’s customers, installed base and product. This included perceived product strengths and weaknesses."
}];




db.Projects.create(bobProjects, function(err, Projects){
  if (err){
    return console.log("Error:", err);
  }

    console.log("Created new Projects");
  process.exit(); // we're all done! Exit the program.
});
