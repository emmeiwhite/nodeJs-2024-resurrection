// Modules - Each js file in node is a module
// Module is encapsulated code (only share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')

// Alternate exports import
const data = require('./06-alternate-exports')

// Modules - Each js file in node is a module
// Module is encapsulated code (only share minimum)

require('./07-no-export-function-call')
/** --- This is important to note here
 *  We imported a file in which a function was getting invoked and the function got called as we run this file.
 *  --- */
console.log(names)
sayHi(names.peter)
sayHi(names.sam)
