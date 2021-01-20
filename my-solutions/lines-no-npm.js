const {Transform} = require('stream');
const split2 = require('split2');

let count = 0;

let myTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(count % 2 === 0 ? chunk.toString().toUpperCase() + '\n' : chunk.toString() + '\n');
        count++;
        callback();
    }
});

process.stdin.pipe(split2()).pipe(myTransform).pipe(process.stdout);