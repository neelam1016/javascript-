const fs = require("fs");
fs.readFile('notes.txt',(err,data)=>{
    if(err) console.log(err)
    else{
        console.log("Asynchronous : "+ data.toString());
    }
})
console.log("------------------")
let data=fs.readFileSync('notes.txt');
console.log("Synchronous : "+ data.toString());