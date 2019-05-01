const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server');
  con.query("CREATE DATABASE nodejs_mysql_crud", (err, res) => {
    if (err) throw err;
    console.log('database created');
  });
});