// The duplexer2 module exports a single function duplexer2(writable, readable) that joins together
// a writable stream and a readable stream into a single, readable/writable duplex stream.

const { spawn } = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  const ps = spawn(cmd, args)
  return duplexer(ps.stdin, ps.stdout)
}