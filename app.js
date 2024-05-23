// EVENT DRIVEN PROGRAMMING

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit:
// on: listen for an event
// emit: emit the event

customEmitter.on('response', (name, age) => {
  console.log(`data received with user: ${name} age: ${age}`)
})

customEmitter.on('response', () => {
  console.log(`Some other logic here`)
})

customEmitter.emit('response', 'john', 34)
// emit has to be after the registering of the events -- order matters
