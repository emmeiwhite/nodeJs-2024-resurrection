const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`<h1>Welcome to the homepage!</h1>`)
  } else if (req.url === '/about') {
    for (let i = 0; i < 1000; i++) {
      for (let j = 1; j < 1000; j++) {
        console.log(i, j)
      }
    }
    res.end(`<h1>This is the about page!</h1>`)
  } else {
    res.end(`<h1>Page not Found!!!</h1>`)
  }
})

server.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
