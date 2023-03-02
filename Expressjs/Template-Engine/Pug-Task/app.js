const express=require('express');
const PORT=9999;
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use("/static",express.static("public"))
app.get("/",(req,res)=>{
    res.render("page")
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`);
})