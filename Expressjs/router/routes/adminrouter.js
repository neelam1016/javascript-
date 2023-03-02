const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Admin home page")
})
router.get('/dashboard',(req,res)=>{
    res.send("Admin Dashborad");
})
module.exports=router;