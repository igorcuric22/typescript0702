const fs = require('fs');
const readStream  = fs.createReadStream(__dirname + '/pro1.js');

console.log(__dirname);
console.log(__filename);

readStream.on('data', function(chunk){
    console.log('Chunk read');
    console.log(chunk);
 });



