var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");
module.exports.Profile = require("./profile.js");
module.exports.Projects = require("./projects.js");
// module.exports.Campsite = require("./campsite.js.example");
