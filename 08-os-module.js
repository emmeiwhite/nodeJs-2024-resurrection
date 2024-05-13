// Build in modules
// 1. os module : For Operating related stuff

const os = require('os')

// info about current user
console.log(os.userInfo())

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)
