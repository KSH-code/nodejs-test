var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'zxcbzxcbzxcbsdfh';
    ch.assertQueue(q, {durable: true})
    ch.consume(q, msg => {
        console.log(msg.content.toString())
        ch.sendToQueue(q, Buffer.from('hello2'))
        ch.close(err => {})
        ch.ack(msg)
    })
    ch.sendToQueue(q, Buffer.from('hello1'))
  });
});
// process.on('beforeExit', () => {
//     console.log('beforeExit')
// })
// process.on('exit', code => {
//     console.log('exit', code)
// })
// process.on('SIGINT', () => {
//     console.log('SIGINT')
// })
// process.on('SIGTERM', () => {
//     console.log('SIGTERM')
// })