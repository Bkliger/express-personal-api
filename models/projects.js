var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
  proj_name: String,
  proj_type: String,
  industry_sector: String,
  proj_desc: String
});

var Projects = mongoose.model('Projects', ProjectsSchema);

module.exports = Projects;
