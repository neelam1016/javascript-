const express=require('express');
const PORT=9999;
const app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{
        heading:'Hello Ejs',
        category:["Mens","Womens","Kids"]
    });
})
app.get("/products",(req,res)=>{
    res.render("products");
})
app.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`Server work on ${PORT}`);
    }
})