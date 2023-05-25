const fs = require("fs"); //imported file system module

let inputContent = fs.readFileSync("./files/input.txt", "utf-8"); //read the content of the file and returned it.
//read the content synchronously i.e. if the content in file is really big and it took maybe 5 minutes to read it then next statement of console.log has to wait for 5 minutes to get executed.
console.log(inputContent);

let outputContent = `Data read from input.txt file:\n${inputContent}\n${new Date()}`;

fs.writeFileSync("./files/output.txt", outputContent);
