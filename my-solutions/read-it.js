/**
 * Here we are pushing all the data in the stream before piping it to process.stdout.
 * This is not very efficient.
 */

const {Readable} = require('stream');

let myReadable = new Readable({
    read() {}
});

// Push the data we want the consumers to consume.
myReadable.push(process.argv[2]);
// Signal that stream has no more data.
myReadable.push(null);

// Pipe to the writable stream process.stdout.
myReadable.pipe(process.stdout);
