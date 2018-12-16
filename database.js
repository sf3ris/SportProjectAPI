'user strict';

var mysql = require('mysql');

//local mysql db connection
/* var connection = mysql.createConnection({
    host     : 'sportprojectdb.ccqmr2kqv0rl.us-east-2.rds.amazonaws.com',
    user     : 'sf3ris',
    password : 'sferis_1410',
    database : 'SportProjectDB',
    multipleStatements: true
}); */

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'valepiz92',
    database: 'SportProjectDB',
    multipleStatements: true
})

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;