const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');
const user = require("./modules/User");

const server = http.createServer((request, response)=>{
    console.log("New request received");
})
server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running");
})

let myEmitter = new events.EventEmitter();
//instance of eventemitter class

myEmitter.on('userCreated', (id, name)=>{
    console.log(`New user ${name} was created with ID ${id}`);
})
myEmitter.on('userCreated', (id, name)=>{
    console.log(`New user ${name} added to the database with ID ${id}`);
})
//event listener and handler

myEmitter.emit('userCreated', 101, 'Siddharth');
//emitter (listener and handler must be defined before emiiter)



// irl, create a class that inherits from nodes own classes (better approach)
let newEmitter = new user();

newEmitter.on("hello", ()=>{
    console.log("Hello user");
})
newEmitter.emit("hello");