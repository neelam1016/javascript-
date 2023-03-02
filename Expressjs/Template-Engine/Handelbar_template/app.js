const express=require('express');
const exphbs=require('express-handlebars');
const cookieparser=require('cookie-parser');
const PORT=9999;
const app=express();
app.use(cookieparser());
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.get("/",(req,res)=>{
    let courses=["php",".net","java"]
    res.render('first',{title:"Neosoft",mycourses:courses});
})
app.get("/setcookie",(req,res)=>{
    res.cookie("mycookie","Neelam Gali",{expire:360000+Date.now()});
    res.send("Cookie Created")
})
app.get("/about",(req,res)=>{
    console.log(req.cookies.mycookie)
    res.render('about',{cdata:req.cookies.mycookie});
})
app.get("/logout",(req,res)=>{
    res.clearCookie("mycookie");
    res.redirect("/")
})
app.listen(PORT,(err)=>{
    if(err) throw err
    else {console.log(`server work on ${PORT}`)}
})