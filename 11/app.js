const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log("New request received");
})