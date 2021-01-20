const {Transform} = require('stream');

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(myTransform).pipe(process.stdout);