function printHelp() {
	console.log('app3.js (c) LongClipeus');
	console.log('');
	console.log('usage:');
	console.log('--help				print this help');
	console.log('--file={name}		read the file of {name} and ouput it');
	console.log('');
}

var args = require('minimist')(process.argv.slice(2), {string: "file"});

if (args.help || !args.file) {
	printHelp();
	process.exit(1);
}

var hello = require('./hello');

hello.read_file(args.file , function (err, contents) {
	console.log(contents.toString());	
});
