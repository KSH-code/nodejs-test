var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'zxcvnlzxckvn';
        ch.assertQueue(q)
        ch.consume(q, msg => {
            console.log(msg.content.toString())
        }, { noAck: false })
        ch.sendToQueue(q, Buffer.from('Hello World!'))
    });
});