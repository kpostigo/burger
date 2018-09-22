var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

// render all current data on page load
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObj = { // handlebars object
      burgers: data
    };
    console.log(hbsObj);
    res.render('index', hbsObj);
  });
});

router.post('/api/burgers', function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
    console.log('burger: ' + req.body.burger_name + ' being added!');
    // send back id of new burger
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(condition, function (result) {
    if (result.changedRows === 0) {
      // if no rows were changed, then ID doesn't exist => 404
      return res.status(404).end();
    } else {
      return res.status(202).end();
    }
  });
});

module.exports = router;