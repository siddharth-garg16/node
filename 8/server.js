const http = require('http');

const server = http.createServer();
//server(emitter) will emit a "named event request" when a request hit the server

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server running");
})

server.on('request', (req, res)=>{
    res.end("Hello from the server");
})
//listening to that named event using on method (listener) and handling with the callback function (handler)
