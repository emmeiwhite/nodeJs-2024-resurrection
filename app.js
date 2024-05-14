const { readFile, writeFile } = require('fs')

// Now, we will read and write to file asynchronously. And for this we'll need to provide a callback once we are done!

readFile('./content/first.txt', 'utf8', (error, result) => {
  if (error) {
    return
  }

  console.log(result)
})
