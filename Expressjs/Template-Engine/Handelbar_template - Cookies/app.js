const express=require('express');
const exphbs=require('express-handlebars');
const cookieParser=require('cookie-parser');
const PORT=9999;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.use(cookieParser())
app.get("/",(req,res)=>{
    let username=req.cookies.username;
    return res.render("home",{uname:username})
})
app.get("/login",(req,res)=>{
    let auth=req.query.msg?true:false;
    if(auth){
        return res.render("login",{errmsg:'Invalid username or password'});
    }
    else{
       return res.render("login");
    }
})
app.post("/postlogindata",(req,res)=>{
     let {email,password}=req.body;
     let udata={email:'galineelam73@gmail.com',password:"Neelam@2001"};
     if(email===udata.email && password===udata.password){
        res.cookie("username",email);
        return res.redirect("/welcome");
     }
     else{
        return res.redirect("/login?msg=fail");
     }
})
app.get("/welcome",(req,res)=>{
    let username=req.cookies.username;
    return res.render("welcome",{username:username})
})
app.get("/logout",(req,res)=>{
    res.clearCookie("username");
    return res.redirect("/login");
})
app.listen(PORT,(err)=>{
    if(err) throw err 
    else {
         console.log(`Server work on ${PORT}`)
    }
})