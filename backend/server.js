// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

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
var allMusicPosts = require('./components/allMusicPosts');

app.use('/allPosts', allPosts);
app.use('/tileImages',tileImages);
app.use('/allMusicPosts',allMusicPosts);

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
