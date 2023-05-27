const http = require("http");//import http module for the server


//step1 - create the server
const server = http.createServer((request, response)=>{
    console.log("New request received");
    response.end("Hello from the server");
    // console.log(request);
    // console.log(response);
})//callback function will be called everytime a new request hits the server


//step2 - start the server
const PORT = 3000;
server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`Server listening to port ${PORT}`);
})//callback function gets executed as soon as the server starts

//everytime we hit 127.0.0.1:3000 in a new browser, "New request received will be printed"