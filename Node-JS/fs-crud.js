const fs = require('fs');
const http=require('http');
const PORT=8899;
const server=http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("FS-CRUD");
    }
    else if(req.url == "/createfile"){
        if(fs.existsSync("neosoft.txt")){
            res.end("Already Exists");
        }
        else{
            fs.writeFile('neosoft.txt',"Welcome to Neosoft !",(err) => {
                if(err) throw err 
                else res.end('File Created');
            })
        }
    }
    else if(req.url == "/readdata"){
        if(fs.existsSync("neosoft.txt")){
            let data=fs.readFileSync('neosoft.txt');
            res.end(data.toString());
        }
        else{
             res.end('File Not Exist');
            
        }
    }
    else if(req.url == "/deletedata"){
        if(fs.existsSync("neosoft.txt")){
            fs.unlinkSync('neosoft.txt');
            res.end("File Deleted");
        }
        else{
             res.end('File Not Exist');
            
        }
    }
    else if(req.url == "/updatedata"){
        if(fs.existsSync("neosoft.txt")){
            fs.appendFile('neosoft.txt',"Neelam !",(err) => {
                if(err) throw err 
                else res.end('data update');
            })
        }
        else{
             res.end('File Not Exist');
            
        }
    }
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else console.log( `server work o ${PORT}`)
})