const fs = require('fs/promises');

async function readFile() {
	let fileData;
	try {
		fileData = await fs.readFile('src/data.txt');
	} catch (error) {
		console.log(error);
	}
	console.log('File parsing...done');
	console.log(fileData.toString());

	console.log('Hi There!');
}

readFile();
