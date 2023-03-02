const express=require('express');
const router=express.Router();
//const jsoncheck=require('../middle/jsonfile')
router.use(express.json());
router.use(express.urlencoded({extended:false}));
router.get("/",(req,res)=>{
    let id=req.body.pid;
    let pname=req.body.pname;
    let price=req.body.price;
    let data=({id:id,
      pname:pname,
      price:price});
   res.status(200).json({err:0,proData:data})
})
router.get("/products/:cat",(req,res) => {
   let cname=req.params.cat;
   res.send(`the category is ${cname}`);
})
router.get("/products/:cat/:scat?",(req,res) => {
   let cname=req.params.cat;
   let scname=req.params.scat;
   if(scname){
   res.send(`the category is ${cname} and sub category ${scname}`);
}
})

module.exports=router;
