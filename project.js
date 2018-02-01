// Makes a controller called 'viewProject' available to application
exports.viewProject = function(req, res) { 
  // res.render('project'); // Renders project page template
  var name = req.params.name; 
  console.log("The project name is: " + name);
  res.render('project', {
    'projectName': name
  });
};