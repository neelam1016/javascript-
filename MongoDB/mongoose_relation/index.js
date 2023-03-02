const { application } = require('express');
const express=require('express');
const router=express.Router();
const proModel=require('./model/Product');
const revModel=require('./model/Review');
//route to get all products 
router.get("/products",(req,res)=>{
     proModel.find({})
     .then((data)=>{
        res.json(data)
     })
     .catch(err=> res.json(err))
})
router.get("/reviews",(req,res)=>{
    revModel.find({})
    .then((data)=>{
       res.json(data)
    })
    .catch(err=> res.json(err))
})
//create a product 
router.post("/product",(req,res)=>{
     proModel.create(req.body)
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
});
// route for creating a new Review and updating Product review field 
router.post("/product/:id",(req,res)=>{
     revModel.create(req.body)
     .then((data)=>{
         return proModel.findOneAndUpdate({_id:req.params.id},{$push:{reviews:data._id}},{new:true});
            })
            .then((dbProduct)=>{
                  res.json(dbProduct)
             })
             .catch(err=> res.json(err))
     })
 router.get("/products/:id",(req,res)=>{
     proModel.findOne({_id:req.params.id})
     .populate("reviews")
     .then((data)=>{
         res.json(data)
     })
     .catch(err=> res.json(err));
})
    
module.exports=router;