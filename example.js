const blocking = require('./');

blocking();

console.log(Buffer(100000).fill('a').toString());
console.log(Buffer(100000).fill('b').toString());
console.log(Buffer(100000).fill('c').toString());
console.log(Buffer(100000).fill('d').toString());
console.log(Buffer(100000).fill('e').toString());

process.exit(1);
