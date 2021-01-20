const {request} = require('http');

const options = { method: 'POST' };

// As it is the client, req is a writable stream and res is a readable stream.
const req = request('http://localhost:8099', options, (res) => {
    res.pipe(process.stdout);
});

process.stdin.pipe(req);