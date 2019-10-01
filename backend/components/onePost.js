var express = require('express');
var router = express.Router();
var db = require("../database.js")

router.get("/:id", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var sql = "SELECT * FROM cardData WHERE id=?"
  var params = [req.params.id]
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json(rows)
  });
});

module.exports = router;
