// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function (err, conn) {
//     conn.createChannel(function (err, ch) {
//         var q = 'asd4gadsg5a4sdg';
//         ch.assertQueue(q)
//         ch.sendToQueue(q, Buffer.from('Hello World1'))
//         ch.sendToQueue(q, Buffer.from('Hello World2'))
//         ch.sendToQueue(q, Buffer.from('Hello World1'))
//         ch.sendToQueue(q, Buffer.from('Hello World2'))
//         ch.consume(q, msg => {
//             console.log('start')
//             console.log(msg.content.toString())
//             console.log('end')
//             // msg 에 값을 넣지 못한다.
//         }, { noAck: true })
//     });
// });
var amqp = require('amqplib')
;(async function () {
    const conn = await amqp.connect('amqp://localhost')
    const ch = await conn.createChannel()
    const q = 'xzcbzxbc56z1xcb56zxcb'
    ch.assertQueue(q)
    let check = true
    ch.consume(q, async msg => {
        if (!check) return ch.nack(msg)
        check = false
        await h(msg)
        check = true
    })
    await ch.sendToQueue(q, Buffer.from('1'))
    await ch.sendToQueue(q, Buffer.from('2'))
    await ch.sendToQueue(q, Buffer.from('3'))
    await ch.sendToQueue(q, Buffer.from('4'))
    async function h (msg) {
        console.log(msg.content.toString())
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('end')
        ch.ack(msg)
    }
})()