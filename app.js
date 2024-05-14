const _ = require('lodash')

// Using Lodash to clone an object
const object = { a: 1, b: 2 }
const clone = _.cloneDeep(object)
console.log(clone)
