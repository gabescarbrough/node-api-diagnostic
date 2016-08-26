// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

let invalidEntries = 0;

function filterByID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

let inFile = process.argv[2];

const sumLines = (filename, callback) => {
  fs.readFile(filename, { encoding: 'utf8' }, (error, data) =>{
    if (error) {
      console.error(error.stack);
      return;
    }

    let lines = data.split('\n');

    let sum = lines.filter(filterByID).reduce(function(a, b) { return a + b; }, 0);

    console.log(sum);

  });  callback();
};

module.exports = {
  sumLines,
};
