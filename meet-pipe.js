/**
 * A stream is an abstract interface for working with streaming data in Node.js.
 * That means you can consume data as it is loaded/produced piece by piece instead
 * of getting it all in memory.
 * 
 * 4 types of streams:
 * readable - data can be read
 * writable - data can be written
 * duplex - both readable and writable
 * transform - a duplex stream that can modify or transform the data as it is written and read.
 */

 // The pipe method allows you to connect the output of the readable stream as the input of the writable stream.
 // i.e. readable.pipe(writable)
// If you pipe into a duplex stream you can chain to the other stream.
// i.e. readable.pipe(duplex).pipe(writable)

const fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);

