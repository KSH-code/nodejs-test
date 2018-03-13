var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'fgjdfgkrt';
        ch.assertQueue(q)
        let count = 0
        // ch.consume(q, msg => {
        //     console.log(msg)
        //     if (msg.fields.deliveryTag >= 10) return ch.ack(msg)
        //     console.log(msg.content.toString())
        //     ch.reject(msg) // redelivered true 설정됨
        //     msg = null
        // }, { noAck: false })
        // ch.eventNames().forEach(event => {
        //     ch.on(event, function () {
        //         if (event === 'delivery') return
        //         console.log(event)
        //         for (let i = 0; i < arguments.length; i++) {
        //             console.log(arguments[i])
        //         }
        //     })
        // })
        // ;['drain', 'return', 'close', 'error'].forEach(event => {
        //     ch.on(event, function () {
        //         console.log(event)
        //         for (let i = 0; i < arguments.length; i++) {
        //             console.log(arguments[i])
        //         }
        //     })
        // })
        // setInterval(() => { ch.sendToQueue(q, Buffer.from('Hello World1')) })
        // ch.sendToQueue(q, Buffer.from('c'))
        const a = {
            [Buffer.from('abab').buffer]: 'abab'
        }
        console.log(a)
        console.log(a[Buffer.from('abab').buffer])
    });
});