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
  // let sql = "SELECT * FROM customers ORDER BY name";
  let sql = "SELECT * FROM customers ORDER BY name DESC";
  
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });
});