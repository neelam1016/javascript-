const http=require('http');
const PORT=8899;
const server=http.createServer((req,res) => {
    if(req.url=="/"){
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<html><body><h2>Home page</h2></body></html>');
     res.end();
    }
    else if(req.url=="/employee"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Employee page</h2></body></html>');
        res.end();
       }
    else if(req.url=="/users"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Users page</h2></body></html>');
        res.end();
       }
       else if(req.url=="/products"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({"products":[{id:101,name:'A',price:'200'},{id:102,name:'B',price:'300'}]}));
        res.end();
       }
       else{
        res.end('Invalid Request');
       }
    
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else console.log( `server work on ${PORT}`)
})