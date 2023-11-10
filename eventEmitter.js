/* const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// two main methods of eventEmitter
// on and emit
// on - listens the event
// emit - emits the event

customEmitter.on("response", (name, age) => {
  console.log(`data received of user with name ${name} and of age ${age}`);
});

customEmitter.on("response", () => {
  console.log("next data received");
});

// customEmitter.emit("response");
customEmitter.emit("response", "vikram", 19);

// there can any number of listeners events...
// emit should be called only after the event has been listened by on() method
// arguments can be passed inside the enit method
 */

const http = require("http");

// using event emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen to it / respond to it
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
