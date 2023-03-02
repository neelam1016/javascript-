const express=require('express');
const axios=require('axios');
const PORT=8888;
const app=express();
// app.get("/products",(req,res)=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res1=>{
//         console.log(res1.data)
//          res.send(res1.data)
//     })
//     .catch(err=>{
//         console.log(err);
//     })
    
// })
const errorHandler=(error,req,res,next)=>{
    console.log(error.message)
    const status=error.status||400;
    res.status(status).send(error.message)
}
app.get("/products",async(req,res,next)=>{
    try{
        const apiResponse=await axios.get("https://jsonplaceholder.typicode.com/posts")
        { 
            Headers:{"Accept=Encoding":"application/json"},

        }
    console.log(apiResponse)
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`);
})