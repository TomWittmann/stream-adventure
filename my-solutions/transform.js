const through = require('through2');

// In a transform stream, its output is compupted from its input.
const myThroughStream = through(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(myThroughStream).pipe(process.stdout);
