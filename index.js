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

  let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  
  con.query(sql, (err, res, fields) => {
    if (err) throw err;
    // console.log(res);
    console.log("Number of records updated: " + res.affectedRows);
  });
});