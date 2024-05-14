const fs = require('fs')

const firstFileText = fs.readFileSync('./content/first.txt', 'utf8')
const secondFileText = fs.readFileSync('./content/second.txt', 'utf8')

console.log(firstFileText)
console.log(secondFileText)
