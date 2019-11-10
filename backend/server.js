// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");
var cors = require("cors");
const serve = require("express-static");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// Root endpoint
app.get("/", (req, res, next) => {
    res.json("Ok in server")
});

// Insert here other API endpoints
app.use('/allPosts', require('./components/allPosts'));
app.use('/tileImages',require('./components/tileImages'));
app.use('/allMusicPosts', require('./components/allMusicPosts'));
app.post("/upload", require('./components/upload'));
app.post("/delete", require('./components/delete'));
app.use(serve(__dirname+'/public'));

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

// Server port
var HTTP_PORT = 3001
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
