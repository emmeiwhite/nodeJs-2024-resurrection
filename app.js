const { readFile, writeFile } = require('fs')

// Now, we will read and write to file asynchronously. And for this we'll need to provide a callback once we are done!

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

        console.log(result3)
      }
    )
  })
})
