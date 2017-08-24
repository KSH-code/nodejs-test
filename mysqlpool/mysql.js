/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-24 01:57:49
 * @modify date 2017-08-24 01:57:49
 * @desc [Not Use Connection Pool]
 */
'use strict'
const mysql = require('mysql');
const mysql_config = require('./mysqlconfig');
console.time('alpha')
const con = (function() {
    return mysql.createConnection(mysql_config)
})()
for (let i = 0; i < 10000; i++) { Test(i) }

function Test(i) {
    con.query('select * from users', (e, rs) => {
        if (i == 9999) {
            console.timeEnd('alpha')
            process.exit(0)
        }
    })
}