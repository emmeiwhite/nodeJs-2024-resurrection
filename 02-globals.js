/** Globals - No Window */

// __dirname - path to the current directory
// __filename - file name
//  require - function to use modules (CommonJS)
// module - info about the current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
let num = 0
let interval = setInterval(() => {
  console.log(num)
  num++

  if (num > 10) {
    clearInterval(interval)
  }
}, 1000)
