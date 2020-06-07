const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    dateStrings: 'date',
    host : 'exampleDBURLwithoutport',
    user :  'username',
    password: 'password',
    database: 'databasename'
})