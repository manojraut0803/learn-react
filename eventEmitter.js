const EventEmitter = require('events');
const emitter = new EventEmitter();

// Set maximum listeners to 20
emitter.setMaxListeners(20);

// Example of adding listeners
for (let i = 0; i < 25; i++) {
  emitter.on('event', () => {
    console.log(`Listener ${i + 1}`);
  });
}

// Emit the event
emitter.emit('event');
