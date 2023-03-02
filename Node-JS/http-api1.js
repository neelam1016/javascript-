const http=require('http');
const options={
    hostname:'jsonplaceholder.typicode.com',
    path:'/users',
    method:'GET'
}
const req=http.request(options,(res)=> {
    let data='';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
        console.log('Body:',JSON.parse(data))
    })
}).on("error",(err)=>{
    console.log("Error : "+err)
}).end();