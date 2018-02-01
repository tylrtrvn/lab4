// Makes a controller called 'viewProject' available to application
exports.viewProject = function(req, res) { 
  res.render("project.handlebars"); // Renders project page template
};