const express=require('express');
const fs = require('fs');
const PORT=9999;
const app=express()
app.use(express.json());
app.use(express.urlencoded ({extended:false}))
app.set("view engine","ejs")
// app.use("/static",express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/registration",(req,res)=>{
    res.render("registration");
})
app.post("/regis",(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let age=req.body.age;
    let city=req.body.city;
    let gender=req.body.gender;
    let data =`${name} ${email} ${password} ${age} ${city} ${gender}`
    if(fs.existsSync(`./users/${email}`)){
        res.render("registration",{errmsg:"Email already exists"});
    }
    else{
        fs.mkdirSync(`./users/${email}`)
        fs.writeFileSync(`./users/${email}/details.txt`,data.toString(),(err) => {
            if(err) throw err 
            else  res.render("registration",{sucmsg:"Registration Sucessfully"}); 
        })
    }
   

})

app.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`Server work on ${PORT}`);
    }
})