const fs = require('fs/promises');

function readFile() {
	let fileData;

	// fileData = fs.readFile('src/data.txt', function (error, fileData) {
	// 	console.log('File parsing...done');
	// 	console.log(fileData.toString());

	// another async task here that talks with a database

	fs.readFile('src/data.txt')
		.then(function (fileData) {
			console.log('File parsing...done');
			console.log(fileData.toString());
		})
		.catch(function (error) {
			console.log(error);
		});

	console.log('Hi There!');
}

readFile();
