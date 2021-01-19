/**
 * The req object that you get back from request() is a writable stream and the res object
 * in the callback function is a readable stream.
 */

const { request } = require('http');

const options = { method: 'POST' };
const req = request('http://localhost:8099', options, (res) => {
  res.pipe(process.stdout);
});
process.stdin.pipe(req);
