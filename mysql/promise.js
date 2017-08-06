/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-06 03:35:29
 * @modify date 2017-08-06 03:35:29
 * @desc [promise를 사용해서 확인]
 */
console.time('alpha')
const pool = require('./mysql')()

function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((e, con) => {
            resolve(con)
        })
    })
}

function Select(con) {
    return new Promise((resolve, reject) => {
        con.query('select * from `users`', (e, rs) => {
            resolve()
        })
        con.release()
    })
}

for (let i = 0; i < 1000; i++)
    for (let j = 0; j < 100; j++) {
        getConnection().then(con => Select(con)).then(() => {
            if (i === 999 && j === 99)
                console.timeEnd('alpha')
        })
    }