# Arduino Compiling Server for mBlock

## Before use:

in parent directory run:  
npm run setup-arduino

## Usage:

See server.test.js - the unit test is the best resource.

When running in a real linux server, 
```
export X11_MODE_ARDUINO=true
```

You can change the port via
```
export ARDUINO_SERVER_PORT={PortName}
```

You need Socket.io to connect to an Arduino server:

```javascript
const io = require('socket.io-client');

// port number can be changed via ARDUINO_SERVER_PORT
let socket = io.connect('http://127.0.0.1:56739');

// listen to the result:
socket.on('result', function(result) {
    // result.hex will be the hex text in String
});

socket.on('log', function(content) {
    // logs will be passed as content
});

socket.on('queue', function(before) {
    // When there is more than 1 person compiling,
    // before means how many people are before you.
});

// start compiling!
socket.emit('compile', {
    board: 'mcore_uno',
    source: 'void loop(){}\nvoid setup(){}'
});

```

## Test:

npm run test

