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
  // let sql = "SELECT * FROM customers WHERE address = 'Sideway 1633'";
  let sql = "SELECT * FROM customers WHERE address LIKE 'S%'"; // using wildcard
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });
});