var bcrypt = require('bcrypt')

let plainPassword = process.argv.slice(2)[0];

//let plainPassword = process.argv.slice(2).join(); //join() method returns the array as a string.
console.log("plainPassword",plainPassword);

let encryptedPassword = bcrypt.hashSync(plainPassword, 10);

console.log(encryptedPassword);

