var mysql = require('mysql');
var connection;


// set up for heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // if no env variable found, resort to local host
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
}

// connect to db
connection.connect(function (err) {
  if (err) {
    console.log('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});


// export connection to db
module.exports = connection;