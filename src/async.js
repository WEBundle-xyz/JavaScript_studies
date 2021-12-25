const fs = require('fs');

function readFile() {
	let fileData;

	fileData = fs.readFile('src/data.txt', function (error, fileData) {
		console.log('File parsing...done');
		console.log(fileData.toString());
	});

	console.log('Hi There!');
}

readFile();
