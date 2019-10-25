// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
/********************************************************************************************/
var multer = require('multer')
var cors = require('cors');
app.use(cors())
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })

  var upload = multer({ storage: storage }).array('file')
/********************************************************************************************/
// Server port
var HTTP_PORT = 3001
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json("Ok in server")
});

// Insert here other API endpoints
var allPosts = require('./components/allPosts');
var tileImages = require('./components/tileImages');
var allMusicPosts = require("./components/allMusicPosts");

app.use('/allPosts', allPosts);
app.use('/tileImages',tileImages);
app.use('/allMusicPosts',allMusicPosts);

/********************************************************************************************/
app.post('/upload',function(req, res) {
  upload(req, res, function (err) {
    console.log(req);
      if (err instanceof multer.MulterError) {
          return res.status(500).json(err)
        // A Multer error occurred when uploading.
      } else if (err) {
          return res.status(500).json(err)
        // An unknown error occurred when uploading.
      }

      return res.status(200).send(req.file)
      // Everything went fine.
    })
});
/********************************************************************************************/

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
////////////////////////////////////////////////////////////////////////////////////////////////

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/danis/Desktop/MaterialUI/backend/images' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(300);
