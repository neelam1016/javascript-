const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const PORT=9999;
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// db connection
const connectionString="mongodb://127.0.0.1/mongocrud1";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))
//db end 
const mainRoutes=require('./index');
app.use("/",mainRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work On ${PORT}`)
})