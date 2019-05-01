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
  let address = 'Mountain 21';
  let sql = "SELECT * FROM customers WHERE address = " + mysql.escape(address);
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });
});