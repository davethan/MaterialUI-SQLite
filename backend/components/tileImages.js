var express = require('express');
var router = express.Router();
var db = require("../database.js")

//The order by should not exist!!!
router.get("/", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var sql = "SELECT * FROM tileImages ORDER BY imageName"
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json(rows)
  });
});

module.exports = router;
