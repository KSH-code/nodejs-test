/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-24 01:57:49
 * @modify date 2017-08-24 01:57:49
 * @desc [Connection Pool]
 */
'use strict'
const mysql = require('mysql');
var mysql_config = require('./mysqlconfig');
console.time('alpha')
mysql_config.connectionLimit = 3
mysql_config.waitForConnections = true
const pool = (function() {
    var pool = mysql.createPool(mysql_config)
    return pool
})()
for (let i = 0; i < 10000; i++) { Test(i) }

function Test(i) {
    pool.getConnection((e, con) => {
        con.query('select * from users', (e, rs) => {
            if (i == 9999) {
                console.timeEnd('alpha')
                process.exit(0)
            }
            con.release()
        })
    })
}