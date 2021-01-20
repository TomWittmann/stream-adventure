const {Transform} = require('stream');
const http = require('http');

let myTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(myTransform).pipe(res);
    }
});

server.listen(process.argv[2]);



