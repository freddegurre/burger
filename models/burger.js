var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    }, 
    insertOne: function(val, cb) {
        orm.insertOne("burgers", val, function(res){
            cb(res); 
        });
    }
}
module.exports = burger;
