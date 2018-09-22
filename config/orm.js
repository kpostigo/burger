// orm for eat-da-burger project

// import mysql connection
var connection = require('./connection');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


// orm
var orm = {
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM ";
    queryString += table + ";";
    
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: function (table, col, val, callback) {
    var queryString = "INSERT INTO ";
    queryString += table;
    queryString += " (" + col + ") ";
    queryString += "VALUES (?);";

    connection.query(queryString, val, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  updateOne: function (table, obj, condition, callback) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(obj);
    queryString += " WHERE ";
    queryString += condition + ";";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;