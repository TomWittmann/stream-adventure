/**
 * A transform stream takes input data and applies an operation to the data
 * to produce the output data.
 * 
 * Write and end are both optional. If write is not specified, the default implementation passes
 * the input data to the output unmodified.
 * 
 * If end is not specified the default implementation calls this.push(null) to close the output
 * side when the input side ends.
 */

 // Create a through stream with a write and end function.
const through = require('through2');
const stream = through(write, end);

// The write function is called for every buffer of available input.
function write(buffer, encoding, next) {
    // Call this.push() to produce output data.
    this.push(buffer.toString().toUpperCase());
    // Call next() when you're ready to receive the next chunk.
    next();
}

// The end function is called when there is no more data.
function end(done) {
    // Call done() to finish the output.
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);