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
  let sql = "SELECT * FROM customers WHERE address = ?";
  
  con.query(sql, [address], (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });

  let name = 'Amy';
  let address2 = 'Mountain 21';
  let sql2 = "SELECT * FROM customers WHERE name = ? OR address = ?";
  con.query(sql2, [name, address2], (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });  
});