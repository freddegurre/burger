// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  all: function(whatTable, cb) {
    var query = "SELECT * FROM " + whatTable + ";"; 
    connection.query(query, function(err, result){
      if (err) {
        throw err;}
        cb(result); 
    }); 
  },
  /*insertOne: function(whatTable, value , cb) {
    var query = "SELECT * FROM " + whatTable + "WHERE id = " + value +";"; 
    connection.query(query, function(err, result){
      if (err) {
        throw err;}
        cb(result); 
    });
  }*/
  //updateOne: function(whatTable, value, cb)
}


// Export the orm object for the model (cat.js).
module.exports = orm;
