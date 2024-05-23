// EVENT DRIVEN PROGRAMMING

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit:
// on: listen for an event
// emit: emit the event

customEmitter.on('response', () => {
  console.log(`data received`)
})

customEmitter.emit('response')
