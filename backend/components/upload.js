const IncomingForm = require("formidable").IncomingForm;
var fs = require("fs");

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.on("fileBegin", function(name, file) {
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      file.name = Date.now() + file.name;
      file.path = __dirname + "/../images/" + file.name;
    } else {
      console.log("File rejected because it's not a .png, .jpeg or .jpg.");
    }
  });

  form.on("end", () => {
    res.json();
  });

  form.parse(req, (err, fields, file) => {
    if (err) {
      console.log(err);
    } else if (
      file.file.type === "image/png" ||
      file.file.type === "image/jpeg" ||
      file.file.type === "image/jpg"
    ) {
    }
  });
};
