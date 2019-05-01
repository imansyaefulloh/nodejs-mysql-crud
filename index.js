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
  let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, (err, res) => {
    if (err) throw err;
    console.log('1 record inserted');
  });
});