// Modules - Each js file in node is a module
// Module is encapsulated code (only share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')
console.log(names)
sayHi(names.peter)
sayHi(names.sam)
