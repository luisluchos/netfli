var bcrypt = require('bcrypt')

let plainPassword = process.argv.slice(2)[0];
let hashedPassword = process.argv.slice(2)[1];

console.log("argumentos",process.argv);

console.log("plain",plainPassword);
console.log("has",hashedPassword);

console.log('hashedPassword', process.argv);
let isTheSame = bcrypt.compareSync(plainPassword, hashedPassword);

console.log(isTheSame);
