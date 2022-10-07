#! /usr/bin/env node

const fs = require('fs');

// arguments: file we want to read, the way to encode that file, and a callback function
fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		return data;
	}
});
