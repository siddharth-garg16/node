const http = require('http');
const fs = require('fs');

let html = fs.readFileSync("./index.html", "utf-8");

let server = http.createServer((request, response)=>{
    console.log("New request received");
    let path = request.url;
    if(path==="/" || path.toLocaleLowerCase()==="/home"){
        response.end(html.replace('{{%CONTENT%}}', "Home"));
    } else if(path.toLocaleLowerCase()==="/about"){
        response.end(html.replace('{{%CONTENT%}}', "About"));
    } else if(path.toLocaleLowerCase()==="/contact"){
        response.end(html.replace('{{%CONTENT%}}', "Contact"));
    } else {
        response.end(html.replace('{{%CONTENT%}}', "Error 404"));
    }
})

const PORT = 3000;
server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`Server running and listening to port ${PORT}`);
})