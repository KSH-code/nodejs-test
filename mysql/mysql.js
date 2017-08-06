'use strict'
const mysql = require('mysql');
const mysql_config = require('./mysqlconfig');
module.exports = function() {
    var pool = mysql.createPool(mysql_config);
    return pool;
};