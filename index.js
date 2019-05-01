const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'nodejs_mysql_crud'
});

// create a table
con.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server');
  let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, (err, res) => {
    if (err) throw err;
    console.log('Table created');
  });
});