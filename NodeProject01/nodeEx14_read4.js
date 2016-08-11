var fs = require('fs');

try {
	var text = fs.readFileSync('fsFile02.txt', 'utf-8')
	console.log(text);
}
catch (e) {
	console.log("예외발생, 파일을 확인하세요.");
}