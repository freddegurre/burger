var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burgers.all(function(data) {
    
      console.log(data);
      res.render("index", {burgers: data});
    });
  });




// Export routes for server.js to use.
module.exports = router;