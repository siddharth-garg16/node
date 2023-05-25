const fs = require("fs");

fs.readFile("./files/input.txt", "utf-8", (error1, data1)=>{
    console.log(data1);
    fs.readFile(`./files/${data1}.txt`, "utf-8", (error2, data2)=>{
        console.log(data2);
        fs.writeFile("./files/append.txt", data2, ()=>{
            console.log("Updated the append.txt");
        });
    })
})
//this callback method is called when the content of the file are read/ first argument receives the error object in case of any error and second argument receives the read data
//read file asynchronously


// fs.readFile("./files/input.txt", "utf-8", (error1, data1)=>{
//     console.log(data1);
//     fs.readFile(`./files/${data1}.txt`, "utf-8", (error2, data2)=>{
//         console.log(error2);
//     })
// })

console.log("Test for asynchronous nature");
//this will be printed first since the above fs.readFile is asynchronous operation