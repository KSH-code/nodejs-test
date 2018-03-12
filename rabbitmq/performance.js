// [Running] node "/Users/kimseonghoon/desktop/nodejs-test/rabbitmq/performance.js"
// assert: 7729.054ms
// no assert: 6588.431ms

// [Done] exited with code=null in 15.514 seconds

// [Running] node "/Users/kimseonghoon/desktop/nodejs-test/rabbitmq/performance.js"
// assert: 7350.545ms
// no assert: 6498.597ms
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'zxcvnlzxckvn';
        console.time('assert')
        for (let i = 0; i < 1e6; i++) {
            ch.assertQueue(q, { durable: false });
            ch.sendToQueue('abcdabcd', Buffer.from('Hello World!'))
        }
        console.timeEnd('assert')
        console.time('no assert')
        for (let i = 0; i < 1e6; i++) {
            ch.sendToQueue('abcdabcd', Buffer.from('Hello World!'))
        }
        console.timeEnd('no assert')
    });
});