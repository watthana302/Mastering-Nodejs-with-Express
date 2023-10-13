const fs = require('fs');

console.log('Hello Node.js');


console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);



//  blocking 
const content = fs.readFileSync
  ('./data.js', 'utf8');
console.log(content);

// non-blocking
fs.readFile('./data.js', 'utf8',
  function (err, content) {
    console.log(content);
  });



