const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log("New request received");
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log('Server up and running');
})

server.on("request", (req, res)=>{
    let rs = fs.createReadStream("./files/large-file.txt");

    rs.pipe(res); //pass a writable stream in pipe (res in this case)
})