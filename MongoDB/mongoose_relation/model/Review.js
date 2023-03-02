const mongoose=require('mongoose');
const revSchema=new mongoose.Schema({
    stars:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Review",revSchema)