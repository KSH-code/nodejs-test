var amqp = require('amqplib')
;(async function () {
    const conn = await amqp.connect('amqp://localhost')
    const ch = await conn.createChannel()
    const q = 'xzcbzxbc56z1xcb56zxcb'
    console.log(await ch.assertQueue(q))
    await ch.sendToQueue(q, Buffer.from('1'))
    await ch.sendToQueue(q, Buffer.from('2'))
    await ch.sendToQueue(q, Buffer.from('3'))
    await ch.sendToQueue(q, Buffer.from('4'))
    console.log(await ch.assertQueue(q))
})()