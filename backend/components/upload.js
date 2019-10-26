const IncomingForm = require("formidable").IncomingForm;
var fs = require('fs');

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.on("file", (field, file) => {
    console.log(file.path);
    var oldpath = file.path;
    var newpath = 'C:/Users/danis/Desktop/MaterialUI/backend/images/' + file.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.end();
    });
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
