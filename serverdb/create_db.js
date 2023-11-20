var mysql = require('mysql')

var db = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "watch_list"
  }); 

// table creation: CREATE TABLE anime (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))
  db.connect(function(err) {
    console.log("Connected!");
    var sql = "INSERT INTO anime (name, address) VALUES ('Oregairu', 'addressof_oregairu')";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.message);
    });
  });

module.exports = db;