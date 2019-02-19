const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'COMPANY'
});

// Initialize the app
const app = express();

app.get('/data', function (req, res) {

    connection.query('SELECT * FROM ATTENDENCE', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/data to see posts');
});