const express=require('express');
const router=express.Router();
const {registration}=require('../controllers/users');
router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/registration",(req,res)=>{
    res.render("registration")
})
router.get("/welcome/:id",(req,res)=>{
    let email=req.params.id;
    res.render("welcome",{email:email})
})
router.post("/postdata",registration);
module.exports=router;