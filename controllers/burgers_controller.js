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

router.post("/api/burger", function(req, res){
 burgers.insertOne(req.body.name, function(result){
  res.json({ id: result.insertId });
 }); 
  console.log(req.body); 

}); 
router.put("/api/burger", function(req, res){
  console.log(req.body.id); 
   
  burgers.update(req.body.id, function(result){
  res.end();
  });
  
});




// Export routes for server.js to use.
module.exports = router;