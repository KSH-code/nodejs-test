'use strict'

const amqplib = require('amqplib')

async function getChannel (q) {
  const conn = await amqplib.connect('amqp://localhost')
  const channel = await conn.createChannel()
  channel.assertQueue(q, { durable: false })
  return { conn, channel }
}

async function sendToQueue (queue, msg) {
    const { channel, conn } = await getChannel(queue)
    const result = await channel.sendToQueue(queue, Buffer.from(msg))
    await channel.close()
    console.dir(channel)
    return result
}
(async function () {
    for (let i = 0; i < 100; i++) await sendToQueue('abcd', 'hello')
    console.log('end')
})()
