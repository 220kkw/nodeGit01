var fs = require('fs');

try {
	var text = fs.writeFileSync('fsFile01.txt', 'Hello World..!', 'utf-8')
	console.log('FILE WRITE COMPLETE');
}
catch (e) {
	console.log(e);
}