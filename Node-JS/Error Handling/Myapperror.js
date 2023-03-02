const express=require('express');
const fs=require('fs').promises;
const PORT=8888;
const app=express();
//synchronous way
// app.get("/",(req,res,next)=>{
//     try{
//     throw new Error("Default error");
//     }
//     catch(err){
//         next(err)
//     }
//  })
// app.get("/",(req,res,next)=>{
//      setTimeout(()=>{
//         try{
//                 console.log("Asynchrnous")
//                 throw new Error("Default error");
//                 }
//                 catch(err){
//                     next(err)
//                 }
//      },1000)
// })
app.get("/second",(req,res,next)=>{
    fs.readFile('./second.txt')
    .then(data=>res.send(data))
    .ctach(err=>{
        err.type='redirect';
        next(err);
    })
})
app.get("/error",(req,res)=>{
    res.send("Custom error middleware");
})
app.use((error,req,res,next)=>{  
    console.log("Error : ",error);
    if(error.type=="redirect"){
        res.redirect("/error");
    }
    else if(error.type=='time-out'){

    }
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`);
})