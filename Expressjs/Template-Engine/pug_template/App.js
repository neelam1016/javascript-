const express=require('express');
const PORT=9999;
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/static",express.static("public"));
app.get("/",(req,res)=>{
    res.render("first_view");


})
app.get("/login",(req,res)=>{
    res.render("login");


})
app.post("/postdata",(req,res)=>{
    let uname=req.body.uname;
    let password=req.body.password;
    res.send(`${uname} ${password}`);


})
app.get("/dynamic",(req,res)=>{
    let courses=["php","javascript","python","Angular","Java"]
    res.render('dynamic',{name:'anuj',age:23,mycourses:courses})

})
app.listen(PORT,(err)=>
{
    if(err)throw err;
    else console.log(`Server work on ${PORT}`)
})