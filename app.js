const http = require('http')

// Creating a server --- wowww ! This is awesome > Though later we use Express to create server more easily
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the home page')
    return
  }

  if (req.url === '/about') {
    res.end('We are fellow coders and web technology geeks')
    return
  }

  // If the route doesn't match
  res.end(`<div>
      <h1>The Page is not found</h1>
      <a href="/">Back to the Homepage</a>
    </div>`)

  res.end()
  //   res.write('Welcome to our homepage')
  //   res.end()
})

server.listen(5000)
