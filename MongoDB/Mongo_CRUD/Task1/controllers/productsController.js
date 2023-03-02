const proModel=require('../model/product');
function SaveProduct(req,res){
    let name = req.body.prodname;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let desc = req.body.description;
    let url = req.body.url;
    let ins=new proModel({"name":name,"price":price,"quantity":quantity,"description":desc,"url":url});
    ins.save((err)=>{
         if(err) throw err
         else {
             res.redirect("/")
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
            res.render("home", { data: data.map(data => data.toJSON())}
            )
        }
    })
}
function deleteProduct(req,res){
     let pid=req.params.id;
     proModel.deleteOne({_id:pid},(err)=>{
        if(err){ res.send("Something wrong")}
        else {
            res.render("home");
        }
     })
}
function updateform(req,res){
    let pid=req.params.id; 
    let con=proModel.findById(pid)
   res.render("updateproduct",{pid,content})
}
function updateProduct(req,res){
    let pid=req.params.id;
    //let formData=req.body;
    let name = req.body.prodname;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let desc = req.body.description;
    let url = req.body.url;
    // console.log(pid)
    // console.log(formData)
    let data ={"name":name,"price":price,"quantity":quantity,"description":desc,"url":url};
    proModel.updateOne({_id:pid},{$set:data},(err)=>{
        if(err){ console.log("Error")}
        else {
            res.redirect("/")
        }
    })
}
module.exports={SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct,updateform};