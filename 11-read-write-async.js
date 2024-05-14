const { readFile, writeFile } = require('fs')

// Now, we will read and write to file asynchronously. And for this we'll need to provide a callback once we are done!

// a) This runs first
console.log('Code Starts')
// c) This code runs asynchronously
readFile('./content/first.txt', 'utf8', (error, result1) => {
  if (error) {
    return
  }

  console.log(result1)

  const fileOneText = result1

  readFile('./content/second.txt', 'utf8', (error, result2) => {
    if (error) {
      return
    }

    console.log(result2)
    const fileTwoText = result2

    writeFile(
      './content/result-async.txt',
      `This is my Async file, It contains:\n ${fileOneText} & \n ${fileTwoText} `,
      (err, result3) => {
        if (err) {
          return
        }

        console.log('Successfully did file write asynchronously')
      }
    )
  })
})

console.log('Next Task Starts')
// Here we notice a call back hell! Everything is node surrounds around callbacks which we'll later handle with promises and async/await for better code readability
