var argv = require('minimist')(process.argv.slice(2));
console.log(argv);

/*Install minimist: npm install minimist
run: node app.js -i first_test -h second-test
solution: { _: [], i: 'first_test', h: 'second-test' }*/
