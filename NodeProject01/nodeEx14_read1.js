var fs = require('fs');

var text = fs.readFileSync('fsFile01.txt', 'utf-8')
console.log(text);
