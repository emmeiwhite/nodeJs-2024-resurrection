const { readFile } = require('fs')
const fetch = require('node-fetch')

readFile(`${__dirname}/13-dog-breed.js`, 'utf8', async (err, res) => {
  try {
    if (err) throw err

    console.log(res)
    // we'll use this value to call a third party API

    const response = await fetch(`https://dog.ceo/api/breed/${res.trim()}/images/random`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})
