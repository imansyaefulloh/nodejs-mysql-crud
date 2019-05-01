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

  // let sql = "SELECT * FROM customers LIMIT 5";
  // let sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  let sql = "SELECT * FROM customers LIMIT 2, 5"; // shorter syntax
  
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });
});