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
        conn.createChannel((err, channel) => {
            if (err) return reject(err)
            resolve({ channel })
        })
    })
}
; (async function () {
    for (let i = 0; i < 1; i++) {
        var conn = await getConnection()
        for (let j = 0; j < 20000; j++) {
            const { channel } = await getChannel('abcdabcd', conn)
            channel.sendToQueue('abcdabcd', new Buffer('Hello World!'))
            await channel.close()
        }
    }
})()