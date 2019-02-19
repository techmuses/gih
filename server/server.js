const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Company'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM TABLE-NAME', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/data to see posts');
});