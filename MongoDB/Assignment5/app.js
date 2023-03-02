const express=require('express');
const exphbs=require('express-handlebars');
const csurf=require('csurf');
const multer=require('multer');
const path=require('path');
const cookieParser=require('cookie-parser');
const seceret="assd123^&*^&*ghghggh";
const oneDay=1000*60*60*24;
const sessions=require('express-session');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const crypto=require('crypto');
const saltRounds=10;
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,path.join(__dirname,"/upload"))
    },
    filename:function(req,file,cb){
        fileExtension=path.extname(file.originalname);
        cb(null,file.fieldname+"-"+Date.now()+fileExtension)

    }
})
const upload=multer({storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="image/png" || file.mimetype=="image/jpeg"){
           cb(null,true)
        }
        else{
           
             cb(new Error("Only png and jpg formet allowed"))
        }
    }});
const uploadsingle=upload.single("att")
let transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:"galineelam10@gmail.com",
        pass:"swfhmwfdmqnzvkqx"
    }
});
transporter.use('compile', hbs(
    {
        viewEngine:"nodemailer-express-handlebars",
        viewPath:"views/emailTemplates/",
        
    }
));
const csrfMiddleware=csurf({
    cookie:true
})

const PORT=9999;
const app=express();
mongoose.connect('mongodb://127.0.0.1/mongoauth',{
     useNewUrlParser:true,
     useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('error',(err)=>{throw err});
db.once('open',()=>{console.log("Database created");
})
const userModel=require('./model/user');
const tokenModel=require('./model/token');
app.use(sessions({
    secret:seceret,
    saveUninitialized:true,
    cookie:{maxAge:oneDay},
    resave:false
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.static("upload"));
app.use(cookieParser())
app.use(csrfMiddleware);
var session;
app.get("/",(req,res)=>{
    let username=req.cookies.username;
    session=req.session;
    if(session.username){
    return res.render("home",{uname:session.username})
    }
    else {
        return res.render("login");
    }
})
app.get("/login",(req,res)=>{
    let auth=req.query.msg?true:false;
    if(auth){
        return res.render("login",{errMsg:'Invalid username or password'});
    }
    else{
    return res.render("login",{csrf:req.csrfToken()});
    
    }
})
app.post("/postlogindata",(req,res)=>{
     let {uname,password}=req.body;
     userModel.findOne({username:uname},(err,data) => {
        if (err){
            return res.redirect("/login?msg=fail");
        }
        else if(data == null)
        {
            return res.redirect("/login?msg=fail");
        }
        else{
            if(bcrypt.compareSync(password,data.password)){
                session=req.session;
                session.username=uname;
                console.log(req.session);
                return res.redirect("/welcome");
            }
            else{
                return res.redirect("/login?msg=fail");
            }
        }
     })
})
app.get("/registration",(req,res)=>{
    res.render("registration",{csrf:req.csrfToken()});
    
})

app.post("/postdata",(req,res)=>{
    uploadsingle(req,res,(err)=>{
        if(err){
           res.render("registration", { errMsg: err.message })
        }
        else{
            let {email,uname,password}=req.body;
            const hash = bcrypt.hashSync(password, saltRounds);
            let ins=new  userModel({ email: email,username: uname, password: hash,image:req.file.filename });  
         ins.save((err,data)=>{
        if(err) res.render("registration", { errMsg: "User Already Registered" });
        else {
            let transporter=nodemailer.createTransport({
                service:"gmail",
                port:587,
                secure:false,
                auth:{
                    user:"galineelam10@gmail.com",
                    pass:"swfhmwfdmqnzvkqx"
                }
            });
            transporter.use('compile',hbs(
                {
                    viewEngine:"nodemailer-express-handlebars",
                    viewPath:"views/emailTemplates/"
                }
            ))
            let mailOptions={
                from:'galineelam10@gmail.com',
                to:email,
                subject:"Testing Mail",
                template:'mail',
                context:{username:uname,id:data._id

                }
            }
            transporter.sendMail(mailOptions,(err,info)=>{
                if(err){ console.log(err)}
                else{
                     console.log("Mail send : "+info)
                }
            })
            res.redirect("/login")
        }
   })
        }
})
})
app.get("/welcome",(req,res)=>{
    let username = req.session.username;
    if (username) {
        userModel.findOne({username:username},(err,data)=>{
            if(err){}
            else {
                return res.render("welcome", { username: username ,path:data.image})
            }
        })
    }
    else {
        return res.redirect("/login");
    }
})
app.get("/activateaccount/:id",(req,res)=>{
    
        let id=req.params.id; 
        userModel.findOne({_id:id},(err,data)=>{
            if(err){
                res.send("Some Thing Went Wrong")
            }
            else {
                userModel.updateOne({_id:id},{$set:{status:1}})
                .then(data1=>{
                    res.render("activate",{username:data.username})
                })
                .catch(err=>{
                    res.send("Some Thing Went Wrong")
                })
            }
        })
})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.redirect("/login");
})
app.get("/resetpassword",(req,res)=>{
    res.render("resetpassword",{csrf:req.csrfToken()});
})
app.get("/resetaccount",(req,res)=>{
    res.render("resetaccount",{csrf:req.csrfToken(),uid:req.query.id,token:req.query.token});
})
app.post("/postresetpassword",async (req,res)=>{
    let {id,token,password}=req.body;
   
    let passToken=await tokenModel.findOne({userId:id})
    if(!passToken){
        return res.render("resetaccount",{errMsg:"Pass : Token Expire"})
    }
   
    const isValid=await bcrypt.compare(token,passToken.token);
    if(!isValid){
       return  res.render("resetaccount",{errMsg:"Pass 1 :Token Expire"})
    }
    const hash=await bcrypt.hash(password,Number(saltRounds));
    await userModel.updateOne({
        _id:id},{$set:{password:hash}},{new:true}
    );
    return res.render("resetaccount",{succMsg:"Password Changed"})
})
app.post("/postreset",async (req,res)=>{
    let email=req.body.email;
    let user=await userModel.findOne({email:email});
    if(user){
       let token=await tokenModel.findOne({userId:user._id});
       if(token) await tokenModel.deleteOne();
       let restToken=crypto.randomBytes(32).toString("hex");
       const hash=await bcrypt.hash(restToken,Number(saltRounds));
       await new tokenModel({
        userId:user._id,
        token:hash,
        createdAt:Date.now()
       }).save();
       let mailOptions={
        from:'sumitmern123@gmail.com',
        to:email,
        subject:"Rest Link",
        template:'resettemp',
        context:{
        token:restToken,
        id:user._id,
        username:user.uname
        }
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){ console.log(err)}
        else{
            return res.render("resetpassword",{succMsg:"Rest Link send to your email"});
        }
    })
    }
    else {
        return res.render("resetpassword",{errMsg:"Email is not exists"});
    }
})
app.listen(PORT,(err)=>{
    if(err) throw err 
    else {
         console.log(`Server work on ${PORT}`)
    }
})