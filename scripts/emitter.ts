import { EventEmitter } from 'node:events'

/**
 * @see https://nodejs.dev/en/api/v19/events/
 */
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('aa', () => {
  console.log('an event occurred!')
})
myEmitter.on('aa', () => {
  console.log('an event 2 occurred!')
})
myEmitter.on('bb', () => {
  console.log('an event occurred!')
})

myEmitter.emit('aa')
