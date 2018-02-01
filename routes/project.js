// Makes a controller called 'viewProject' available to application
exports.viewProject = function(req, res) { 
  var name = req.params.name; 
  console.log("The project name is: " + name);
  res.render('project', { // Renders project page template
    'projectName': name
  });
};