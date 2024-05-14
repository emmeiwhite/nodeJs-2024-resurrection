const http = require('http')

// Creating a server --- wowww ! This is awesome > Though later we use Express to create server more easily
const server = http.createServer((req, res) => {
  res.write('Welcome to our homepage')
  res.end()
})

server.listen(5000)
