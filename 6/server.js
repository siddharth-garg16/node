const http = require('http');
const fs = require('fs');

let data = fs.readFileSync("./data/products.json", "utf-8");
let products = JSON.parse(data);

const server = http.createServer((request, response)=>{
    console.log("New request recieved");
    const path = request.url;
    if(path==="/" || path.toLocaleLowerCase()==="/home"){
        response.end("Home");
    } else if(path.toLocaleLowerCase()==="/products") {
        response.writeHead(200, {
            'Content-Type':'application/json'
        })
        response.end(data);
    } else {
        response.end("Error 404: Page not found");
    }
})

const PORT = 3000;
server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`Server up and running on port ${PORT}`);
})