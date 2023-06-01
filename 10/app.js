const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log("New request received");
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is up and running");
})

//normal readfile reads in buffer and not good for large scale applications
// server.on("request", (req, res)=>{
//     fs.readFile("./files/large-file.txt", "utf-8", (err, data)=>{
//         if(err){
//             res.end("Error occured");
//         }
//         res.end(data);
//     })
// })

//we should use streams to read huge chunk of data
let part = 0;
server.on('request', (req, res)=>{
    let rs = fs.createReadStream("./files/large-file.txt");

    rs.on("data", (chunk)=>{
        res.write(chunk);
        part+=1;
        console.log(part);
    })

    rs.on("error", ()=>{
        res.end("Error Occured");
    })

    rs.on("end", ()=>{
        res.end();
    })
})
//potential issue is if readable stream is faster than writable stream (fixed by pipe)
//this situation is also called "BackPressure".