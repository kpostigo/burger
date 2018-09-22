var orm = require('../config/orm');

var burger = {
  selectAll: function (callback) {
    orm.selectAll('burgers', function (res) {
      callback(res);
    });
  },
  insertOne: function (val, callback) {
    orm.insertOne('burgers', 'burger_name', val, function (res) {
      callback(res);
    });
  },
  updateOne: function (condition, callback) {
    orm.updateOne('burgers', {devoured: true}, condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;