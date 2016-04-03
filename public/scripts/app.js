console.log("Sanity Check: JS is working!");
var proj_template;

$(document).ready(function(){

//format page header
  $.ajax({
    method: "GET",
    url: "/api/profile",
    success: handleProfileSuccess,
    error: handleProfileError
  });
console.log("/api/:" + savedId + "/projects/");
  $.ajax({
    method: "GET",
    url: "/api/profile/projects/",
    success: handleProjectsSuccess,
    error: handleProjectsError
  });


  //format Projects List
  var source = $("#proj_template").html();
  // console.log("here",source)
  proj_template = Handlebars.compile(source);

  // var projectHtml = proj_template({project: projects_json});
  // $("#projects").append(projectHtml);


});

function handleProfileSuccess(profile_json) {
  var html1 = '<p>github Link  ' + profile_json[0].github_link +'<p>';
  $("#profile").append(html1);
  var html2 = '<p>github image  ' + profile_json[0].github_profile_image +'<p>';
  $("#profile").append(html2);
  var html3 = '<p>Current City  ' + profile_json[0].current_city +'<p>';
  $("#profile").append(html3);
  var savedId = profile_json[0]._id
}

function handleProfileError(err) {
  console.log("no profile");
}

function handleProjectsSuccess(project_json) {
  console.log (project_json);
}
function handleProjectsError (err) {
  console.log("no projects");
}
