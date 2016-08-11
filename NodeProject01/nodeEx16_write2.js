var fs = require('fs');

var txt;

fs.readFile('fsFile01.txt', 'utf-8', function(error, data) {
	if(data)
	{
		console.log(data);
		txt = data;
	}
	else
		console.log(error);
})

fs.writeFile('fsFile02.txt', 'Hello World..!2', 'utf-8', function(error){
	if(error)
		throw error;
	
	console.log('FILE WRITE COMPLETE. Update~!!!');
})
