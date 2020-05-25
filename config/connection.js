// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  port: 3306,
  user: "b82da6ef7c12cf",
  password: "2c5a3154",
  database: "heroku_63eddf18af49f44"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
