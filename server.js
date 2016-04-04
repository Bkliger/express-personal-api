// require express and other modules
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 app.get('/api/profile', function (req, res) {
   db.Profile.findOne({})
    .exec(function(err, profile){
          if (err) { return console.log("profile error: " + err); }
     res.json(profile);
   });
 });

 app.get('/api/profile/projects', function (req, res) {
   db.Projects.find()
      .exec(function(err, project){
     if (err) { return console.log("project error: " + err); }
     res.json(project);

   });
 });

 app.delete('/api/profile/:_id' , function (req, res) {
   db.Projects.findOneAndRemove({_id:req.params._id}, function(err,deletedProject){
     if (err) { return console.log("project error: " + err); }
     db.Projects.find()
        .exec(function(err, project){
       if (err) { return console.log("project error: " + err); }
       res.json(project);
     });
   });
  });

  app.post('/api/profile/projects' , function (req, res) {
    var newProject = new db.Projects({
      proj_name: req.body.proj_name,
      proj_type: req.body.proj_type,
      industry_sector: req.body.proj_sector,
      proj_desc: req.body.proj_desc
    });

    newProject.save(function(err, newProject) {
      if (err) { return console.log("project create error: " + err); }
      db.Projects.find()
         .exec(function(err, project){
        if (err) { return console.log("project error: " + err); }
        res.json(project);
      });
    });
   });

  app.get('/api', function api_index(req, res) {
    // TODO: Document all your api endpoints below
    res.json({
      api_Enpoints: "",
      message: "Welcome to my personal api! Here's what you need to know!",
      documentation_url: "https://github.com/Bkliger/express-personal-api/blob/master/README-API.md", // CHANGE ME
      base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
      endpoints: [
        {method: "GET", path: "/api", description: "Describes all available endpoints"},
        {method: "GET", path: "/api/profile", description: "Returns a single profile object",
        Return_Profile:{
          name: "Bob Kliger",
          github_link: 'https://github.com/bkliger',
          github_profile_image: "",
          current_city: "Berkeley"
        }  },
        {method: "GET", path: "/api/profile/projects", description: "Describes all recent projects. Returns an array of all projects",
        Return_Projects: [
          {proj_name: "Architectural Spec Software" ,
          proj_type: "Strategic Marketing",
          industry_sector: "Arch/Eng",
          proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
          }]
        },
        {method: "DELETE", path: "/api/profile/:_id", description: "Deletes the Project with the set _id and returns an array of the remaining Projects.",
        Return_Deleted_Project:[
          {proj_name: "Architectural Spec Software" ,
          proj_type: "Strategic Marketing",
          industry_sector: "Arch/Eng",
          proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
          }]
        },
        {method: "POST", path: "/api/profile/projects", description: "Adds a new Project and returns an array of all Projects.",
        Return_Deleted_Project:[
          {proj_name: "Architectural Spec Software" ,
          proj_type: "Strategic Marketing",
          industry_sector: "Arch/Eng",
          proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
          }]
        }
      ]
      });
    });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
