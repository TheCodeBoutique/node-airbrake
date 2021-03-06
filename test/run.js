#!/usr/bin/env node
var far = require('far').create();

far.add(__dirname);

var specificTest = process.argv[2];
if (typeof specificTest !== 'undefined' && specificTest !== 'all') {
  far.include(new RegExp('test-' + specificTest + '.js$'));
} else {
  far.include(/test-.*\.js$/);
}


var verbosity = process.argv[3];
if (typeof verbosity !== 'undefined') {
  verbosity = Number(verbosity);

  if (verbosity !== 1 && verbosity !== 2) {
    console.log('Please provide a verbosity value of 1 or 2');
    process.exit(1);
  }

  far.verbose(verbosity);
}
far.execute();
