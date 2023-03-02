const proModel=require('../model/product');
function SaveProduct(req,res){
    const bodyData=req.body;
    let ins=new proModel(bodyData);
    ins.save((err)=>{
         if(err) res.send("SOmething went wrong or Already exists")
         else {
             res.send("Product Add Successfully")
         }
    })
}
async function getProductById(req,res){
    let proId=req.params.id;
    let product=await proModel.findById(proId);
    if(!product){
       res.status(404).send("Product with id not found");
    }
    res.send(product);
}
function getAllProduct(req,res){
    proModel.find({},(err,data)=>{
        if(err) { res.send("Something went wrong")}
        else {
            res.send(data)
        }
    })
}
function deleteProduct(req,res){
     let pid=req.params.id;
     proModel.deleteOne({_id:pid},(err)=>{
        if(err){ res.send("Something wrong")}
        else {
            res.status(200).send("Product Deleted");
        }
     })
}
function updateProduct(req,res){
    let pid=req.params.id;
    let formData=req.body;
    console.log(pid)
    console.log(formData)
    proModel.updateOne({_id:pid},{$set:formData},(err)=>{
        if(err){ console.log("Error")}
        else {
            res.send("Product Updated")
        }
    })
}
module.exports={SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct};