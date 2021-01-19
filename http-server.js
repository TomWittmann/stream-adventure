/**
 * Streams aren't just for text files and stdin/stdout. Http request and response objects from
 * node core's http.createServer() handler are also streams.
 * 
 * This is great because our server can respond immediately without buffering everything in
 * memory first.
 */

const http = require('http');
const through = require('through2');

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })).pipe(res);
  } else res.end('send me a POST\n');
})
server.listen(parseInt(process.argv[2]));