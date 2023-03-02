const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send(" user home page")
})
router.get('/dashboard',(req,res)=>{
    res.send("user Dashboard");
})
module.exports=router;