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

var allTheDB = require('./components/allTheDB');
var onePost = require('./components/onePost');

app.use('/allTheDB', allTheDB);
app.use('/onePost', onePost);

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
