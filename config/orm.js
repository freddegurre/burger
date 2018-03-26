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
  insertOne: function(whatTable, value , cb) {
    var query = "INSERT INTO " + whatTable + "(burger_name) VALUES" + "('"+ value + "')"; 
    connection.query(query, function(err, result){
      if (err) {
        throw err;
      }
        cb(result); 
    });
  }, 
  update: function(whatTable, value, cb) {
    var query = "UPDATE burgers SET devoured = true WHERE id =" + value + ";"; 
    connection.query(query, function (err, result){
      if (err) {
        throw err;
      }
        cb(result);
    });
  }
  //updateOne: function(whatTable, value, cb)
}


// Export the orm object for the model (cat.js).
module.exports = orm;
