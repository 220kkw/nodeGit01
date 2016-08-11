var fs = require('fs');

var text
fs.readFile('fsFile02.txt', 'utf-8', function(err, data){
	if(data)
		text = data;
	
	else
		text = "파일이름을 확인하세요"+ err;
});
console.log(text);


setTimeout(function() {
	console.log(text);
}, 3000);