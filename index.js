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
  // let sql = "SELECT * FROM customers"; // select all columns
  let sql = "SELECT name, address FROM customers"; // select some columns
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
    console.log(res[0]);
  });
});