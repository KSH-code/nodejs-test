const request = require('request')
for (let i = 0; i < 1e2; i++) 
    request.post('http://localhost:7001/messages/v4/send', { form: { message: { to: '01000000001', from: '029302266', text: '1sdfasdfasdf' } } }, function (err, res, body) { console.log(body) })