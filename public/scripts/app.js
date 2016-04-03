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

  $("#projects").on('click', '[data-control=deleteProject]', function(e) {
      e.preventDefault();
      console.log('/api/profile/'+$(this).attr('data-proj_id'));
      $.ajax({
        method: 'DELETE',
        url: '/api/profile/'+$(this).attr('data-proj_id'),
        success: handleProjectDeleteSuccess,
        error: deleteProjectError,
      });
    });


});

function handleProfileSuccess(profile_json) {
  var html1 = "<a href= " + profile_json.github_link + ">Github Link</a>";
  $("#profile").append(html1);
  var html2 = '<p><img src="/images/Bob.jpg"></p>'
console.log(html2)
  $("#profile").append(html2);
  var html3 = '<p>Current City  ' + profile_json.current_city +'</p>';
  $("#profile").append(html3);
  // var savedId = profile_json[0]._id;
}

function handleProfileError(err) {
  console.log("no profile");
}

function handleProjectsSuccess(project_json) {
  var projectHtml = proj_template({project: project_json});
  $("#projects").append(projectHtml);
}
function handleProjectsError (err) {
  console.log("no projects");
}

function handleProjectDeleteSuccess(project_json) {
  var projectHtml = proj_template({project: project_json});
  $("#projects").empty();
  $("#projects").append(projectHtml);
}
function deleteProjectError (err) {
  console.log("project delete failed");
}
