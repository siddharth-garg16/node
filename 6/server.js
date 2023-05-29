const http = require('http');
const fs = require('fs');

let data = fs.readFileSync("./data/products.json", "utf-8");
let products = JSON.parse(data);
let productListHtml = fs.readFileSync("./product-list.html", "utf-8");

let listPage = products.map((prod)=>{
    let output = productListHtml.replace("{{%NAME%}}", prod.name);
    output = output.replace("{{%PRICE%}}", prod.price);
    return output;
})

const server = http.createServer((request, response)=>{
    console.log("New request recieved");
    const path = request.url;
    if(path==="/" || path.toLocaleLowerCase()==="/home"){
        response.end("Home");
    } else if(path.toLocaleLowerCase()==="/products") {
        // response.writeHead(200, {
        //     'Content-Type':'application/json'
        // })
        // response.end(data);
        
        response.writeHead(200, {
            'Content-Type':'text/html'
        })
        response.end(listPage.join(','));
    } else {
        response.end("Error 404: Page not found");
    }
})

const PORT = 3000;
server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`Server up and running on port ${PORT}`);
})