var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.all(function (data) {

    //sort al burgers here before sending to frontend
    var devoured = [];
    var burger = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].devoured === 1) {
        devoured.push(data[i]);
      }
      else {
        burger.push(data[i]);
      }
    }
    res.render("index", { burgers: burger, eaten: devoured });
  });
});

router.post("/api/burger", function (req, res) {
  burgers.insertOne(req.body.name, function (result) {
    res.json({ id: result.insertId });
  });
  console.log(req.body);

});
router.put("/api/burger", function (req, res) {
  console.log(req.body.id);

  burgers.update(req.body.id, function (result) {
    res.end();
  });

});




// Export routes for server.js to use.
module.exports = router;