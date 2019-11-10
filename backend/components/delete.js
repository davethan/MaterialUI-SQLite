const IncomingForm = require("formidable").IncomingForm;
var fs = require("fs");

module.exports = function delete1(req, res) {
  var form = new IncomingForm();

  form.on("fileBegin", function(name, file) {
  });

  form.on("end", () => {
    res.json();
  });

  form.parse(req, (err, fields, file) => {
    const sql = "DELETE FROM cardData WHERE id=" + fields.postId;
    const db = require("../database.js");
    db.run (sql);
    const path = __dirname + "/../public/images/" + fields.imageName;
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err)
        return
      }
    });
  });
};
