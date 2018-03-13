var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'eoituajgd';
        ch.assertQueue(q)
        ch.consume(q, msg => {
            console.log(msg)
            msg.properties.timestamp = 1
            // msg 에 값을 넣지 못한다.
        }, { noAck: false })
        ch.sendToQueue(q, Buffer.from('Hello World1'))
        ch.sendToQueue(q, Buffer.from('Hello World2'))
    });
});