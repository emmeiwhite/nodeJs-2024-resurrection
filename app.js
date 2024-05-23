// require('./a-eventloop-examples/01-blocking-code')
// require('./a-eventloop-examples/02-non-blocking-code.js')

const { readFile } = require('fs')

// We'll create a promise
const getText = path => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      } else {
        resolve(data)
      }
    })
  })
}
/* --- Promise based approach --
getText('./content/first.txt')
  .then(data => {
    console.log(`PROMISE RESOLVED: \n ${data}`)
  })
  .catch(err => {
    console.log(`PROMISE REJECTED: \n ${err}`)
  })
---*/

const start = async () => {
  try {
    const firstText = await getText('./content/first.txt')
    const secondText = await getText('./content/second.txt')

    console.log(firstText, secondText)
  } catch (error) {
    console.log(error)
  }
}

start()
