const concat = require('concat-stream');

// concat-stream is a writable stream that concatenates all buffers from a stream and gives you the result in the callback parameter.
// Both process.stdout and concat-stream are writeable streams so they can't be piped together.
function myConcat(buffer) {
    process.stdout.write(buffer.toString().split('').reverse().join(''));
}

process.stdin.pipe(concat(myConcat));