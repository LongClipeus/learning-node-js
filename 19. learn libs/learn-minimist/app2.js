function printHelp() {
	console.log('app2.js (c) LongClipeus');
	console.log('');
	console.log('usage:');
	console.log('--help				print this help');
	console.log('--name				say hello {name}');
	console.log('');
}

var args = require('minimist')(process.argv.slice(2), {string: "name"});

if (args.help || !args.name) {
	printHelp();
	process.exit(1);
}

var name = args.name;

process.stdout.write(`hello ${name}\n`);
