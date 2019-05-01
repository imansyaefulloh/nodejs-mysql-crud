const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server');
});