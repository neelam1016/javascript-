const express=require('express');
const {SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct,updateform}=require('./controllers/productsController')
const router=express.Router();
router.get("/",getAllProduct,(req,res)=>{
     res.render("home")
})
router.get("/addproducts",(req,res)=>{
    res.render("addproducts")
})
router.post("/addproduct",SaveProduct);
router.get("/getproductbyid/:id",getProductById);
router.get("/deleteproduct/:id",deleteProduct);
//router.get("/",getAllProduct);
router.get("/updateform/:id",updateform);
router.post("/editproduct/:id",updateProduct)
module.exports=router;