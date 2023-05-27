const http = require('http');

let server = http.createServer((request, response)=>{
    console.log("New request received");
    let path = request.url;
    if(path==="/" || path.toLocaleLowerCase()==="/home"){
        response.end("Home Page");
    } else if(path.toLocaleLowerCase()==="/about"){
        response.end("About Page");
    } else if(path.toLocaleLowerCase()==="/contact"){
        response.end("Contact Page");
    } else {
        response.end("Error 404");
    }
})

const PORT = 3000;
server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`Server running and listening to port ${PORT}`);
})