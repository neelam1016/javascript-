const express=require('express');
const PORT =7788;
const app=express();
app.use(express.json());
app.use(express.urlencoded ({extended:false}));
const jsonCheck=require('./middleware/jsonmid');
const xyz=(req,res,next)=>{
    req.title="Neosoft Technologies";
    next();
}
app.use(xyz);
app.get("/",(req,res)=>{
    // res.send('<html><body><h2>Welcome to express</h2></body></html>');
    res.sendFile(__dirname+'/index.html');
})
app.post("/postdata",(req,res)=>{
    let fname=req.body.fname;
    let lname=req.body.lname;
    res.send(`${fname} ${lname} submitted data !`);
})
app.post("/prodata",jsonCheck(),(req,res)=>{
    let id=req.body.pid;
    let pname=req.body.pname;
    let price=req.body.price;
    let data={id:id,pname:pname,price:price,title:req.title}
    res.status(200).json({err:0,proData:data});
})
app.put("/updatedata",(req,res)=>{
    res.send("Put request");
})
app.post("/deletedata",(req,res)=>{
    res.send("Delete request");
})


app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`);
})
