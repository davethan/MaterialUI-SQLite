var express = require('express');
var router = express.Router();
var db = require("../database.js")

router.get("/", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var sql = "select * from cardData"
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
