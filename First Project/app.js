// console.log("Hello");
// console.log("Nodejs");

const readline = require('readline'); //used readline module

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}) //created an instance of the interface

rl.question("Enter your name: ", (name)=>{
    console.log("Hello " + name + "!");
    rl.close();
}) //question was asked and then the interface was closed

rl.on("close", ()=>{
    console.log("Interface closed!");
    process.exit(0);
}) //listening to the close event and executing a function