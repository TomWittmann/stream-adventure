const fs = require('fs');

const fileSrc = fs.createReadStream(process.argv[2]);

fileSrc.pipe(process.stdout);