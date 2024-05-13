// Build in modules
// path: To interact with the file system

const path = require('path')
console.log(path.sep)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

// absolutePath to the test.txt
console.log(absolutePath)

// This will be helpful in app deployments
console.log(path.resolve(__dirname, '01-intro.js'))
