'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'valepiz92',
    database : 'SportProjectDB'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;