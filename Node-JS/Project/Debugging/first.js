let fs=require("fs");
fs.readFile("test.txt",'utf-8',(err,data)=>{
    let name="sumit";
    debugger;
    if(err) throw err;
    console.log(data)
})