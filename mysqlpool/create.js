// /**
//  * @author [KSH-Code]
//  * @email [tjdgnsqn133@gmail.com]
//  * @create date 2017-08-24 02:17:15
//  * @modify date 2017-08-24 02:17:15
//  * @desc [계속 생성]
//  */
// 'use strict'
// const mysql = require('mysql');
// const mysql_config = require('./mysqlconfig');
// console.time('alpha')
// const con = function() {
//     return mysql.createConnection(mysql_config)
// }
// for (let i = 0; i < 10000; i++) { Test(i) }

// function Test(i) {
//     let _con = con()
//     _con.query('select * from users', (e, rs) => {
//         if (i == 9999) {
//             console.timeEnd('alpha')
//             process.exit(0)
//         }
//     })
// }