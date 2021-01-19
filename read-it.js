/**
 * To implement a readable stream, you need to construct an object, or inherit,
 * from stream.Readable class and implement a _read() method in it.
 * 
 * Readable streams operate in two modes:
 * 
 * 1. flowing - data is read from the underlying system automatically
 * 2. paused - read() method must be called explicitly to read chunks of data from the stream
 * 
 * All readable streams begin in paused mode but can be switched to flowing mode and also can
 * switch back to pause mode.
 * 
 * » readable.pipe(writable), attaching Writable stream to the readable,                                                                          
     cause it to switch automatically into flowing mode and push all of its                                                                          
     data to the attached Writable.      

   » readable.on('readable', ...), here the stream (readable) is in paused                                                                          
     mode and have to use the read(size) method for start consuming the                                                                          
     data.           

   » readable.on('data', ...), adding the data event handler switch the                                                                          
     stream to a flowing mode. We can pause and resume the stream by using                                                                          
     pause() and resume() methods respectively. This is useful when you need                                                                          
     to do some time-consuming action with the stream's data (such as                                                                          
     writing to a database)   

       You can use the push() method to add content into the readable internal
  Buffer.
 * 
 */

 // Streams for which data can be read.
 const { Readable } = require('stream')

 class ReadableStream extends Readable {
   _read (size) {
   }
 }

 const stream = new ReadableStream(process.argv[2])
 stream.push(process.argv[2])
 stream.pipe(process.stdout)
