const mongoose=require('mongoose');
const proschema=new mongoose.Schema({
    pname:{
        type:String,
        unique:true,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("product",proschema)