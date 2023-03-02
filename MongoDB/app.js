const express=require('express');
const mongoose=require('mongoose');
const PORT=9999;
const app=express();

mongoose.connect('mongodb://127.0.0.1/myneodb',{
     useNewUrlParser:true,
     useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('error',(err)=>{throw err});
db.once('open',()=>{console.log("Database created");
})

const promodel=require('./model/product')

let ins=new promodel({pname:'b',price:23243})
ins.save((err)=>{
    if(err) throw err;
    else console.log("Data Saved");
})
promodel.find({},(err,data)=>{
    if (err) throw err;
    else console.log(data)
})

app.listen(PORT,(err)=>{
    if(err) console.log(err)
    else console.log(`work on ${PORT}`)
})