const express=require('express');
const {SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct}=require('./controllers/productsController')
const router=express.Router();
router.get("/",(req,res)=>{
     res.send("Mongoose Crud Implementation")
})
router.post("/addproduct",SaveProduct);
router.get("/getproductbyid/:id",getProductById);
router.delete("/deleteproduct/:id",deleteProduct);
router.get("/getproducts",getAllProduct);
router.put("/editproduct/:id",updateProduct)
module.exports=router;