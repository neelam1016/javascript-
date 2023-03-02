const express=require('express');
const mongoose=require('mongoose');
const PORT=8899;
mongoose.connect("mongodb://127.0.0.1:27017/productreview")
.then(res=> console.log("Connected"))
.catch(err=> console.log("error"+err))
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const mainRoutes=require('./index');
app.use("/",mainRoutes);

app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work on ${PORT}`)
})
