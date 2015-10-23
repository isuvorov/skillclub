var http = require('http');

http.createServer(function (req, res) {


  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World <a href="http://google.com">google</a>\n');


}).listen(1338, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1338/');