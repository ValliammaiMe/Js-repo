let fs = require('fs');

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Happy learning!');
