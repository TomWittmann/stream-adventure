const {Writable} = require('stream');

const myOutStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('writing: ' + chunk);
        // Need this to keep going.
        callback();
    }
});

process.stdin.pipe(myOutStream);