var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'fgjdfgkrt';
        ch.assertQueue(q)
        let count = 0
        conn.on('close', () => {
            console.log('gogogo')
        })
        ch.close(err => {
            console.log(err)
        })
    });
});