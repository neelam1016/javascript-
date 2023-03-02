const express=require('express');
const exphbs=require('express-handlebars');
const PORT=9999;
const app=express();
app.use(express.json());
app.use(express.urlencoded ({extended:false}));
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
//app.use(express.static("images"));
app.use("/static",express.static("public"));
app.get("/",(req,res)=>{
    res.render('first');
})
app.get("/services",(req,res)=>{
    res.render('about');
})
app.get("/aboutus",(req,res)=>{
    res.render('about');
})
app.get("/portfolio",(req,res)=>{
    res.render('about');
})
app.get("/teams",(req,res)=>{
    res.render('about');
})
app.get("/contactus",(req,res)=>{
    res.render('about');
})
app.get("/shopnow",(req,res)=>{
    res.render('about');
})
app.listen(PORT,(err)=>{
    if(err) throw err
    else {console.log(`server work on ${PORT}`)}
})