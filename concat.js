/**
 * Convert the buffer from process.stdin to string and reverse it using concat-stream.
 * 
 * concat-stream is a writable stream that concatenates all buffers from a stream
 * and gives you the result in the callback you pass.
 * 
 * Both process.stdout and concat-stream are writable streams so they can't be piped together.
 */

const concat = require('concat-stream')

process.stdin.pipe(concat(function (src) {
  const s = src.toString().split('').reverse().join('');
  process.stdout.write(s);
}));