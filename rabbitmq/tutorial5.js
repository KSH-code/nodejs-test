'use strict'
const amqplib = require('amqplib/callback_api')
function getConnection() {
    return new Promise((resolve, reject) => {
        amqplib.connect('amqp://localhost', function (err, conn) {
            if (err) return reject(err)
            resolve(conn)
        })
    })
}
async function getChannel(queue, conn) {
    return new Promise(async (resolve, reject) => {
        conn.createConfirmChannel((err, channel) => {
            if (err) return reject(err)
            resolve({ channel })
        })
    })
}
; (async function () {
    for (let i = 0; i < 1; i++) {
        var conn = await getConnection()
        conn.on('error', d => { console.log('error', d) })
        conn.on('close', d => { console.log('close', d) })
        conn.on('blocked', d => { console.log('blocked', d) })
        conn.on('unblocked', d => { console.log('unblocked', d) })
        const { channel } = await getChannel('abcdabcd', conn)
        channel.on('error', d => { console.log(d) })
        channel.on('close', d => { console.log(d) })
        channel.on('return', d => { console.log(d) })
        channel.on('darin', d => { console.log(d) })
        for (let j = 0; j < 20000; j++) {
            await new Promise(resolve => {
                channel.sendToQueue('abcdabcd', new Buffer('Hello World!'), {}, (err, o) => {
                    resolve()
                })
            })
        }
        channel.close()
        conn.close()
    }
})()