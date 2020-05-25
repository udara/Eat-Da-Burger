// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vs1t5mqya1z2ld02",
  password: "ebtp8gng6viujdsy",
  database: "jb3yujrnf4sjlkas"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to us.
module.exports = connection;
