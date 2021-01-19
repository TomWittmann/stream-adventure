/**
 * » chunk is the value to be written, commonly a Buffer converted from                                                                          
     thestring you passed to stream.write().                                   
   » encoding, if the chunk is a string, will be the character encoding for                                                                          
     thestring. Otherwise it may be ignored.                                   
   » callback function that will be called when the processing for the                                                                          
     suppliedchunk is complete.  
 */
const { Writable } = require('stream');

class MyWritable extends Writable {
  _write (chunk, encoding, callback) {
    console.log(`writing: ${chunk.toString()}`);
    callback();
  }
}

const stream = new MyWritable();
process.stdin.pipe(stream);