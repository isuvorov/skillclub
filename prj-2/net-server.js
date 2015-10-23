var net = require('net');

var server = net.createServer(function (stream) {
    stream.setEncoding('utf8');

    stream.addListener('connect', function () {
        console.log("connect");
        stream.write('hello\r\n');
    });

    stream.addListener('data', function (data) {
        console.log("data", data);
        stream.write(data);
    });

    stream.addListener('end', function () {
        console.log("end");

        stream.write('goodbye\r\n');
        stream.end();
    });
});

server.listen(1338, 'localhost');
console.log("started");