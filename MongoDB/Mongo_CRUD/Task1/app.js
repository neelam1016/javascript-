const express=require('express'); // include express module
const exphbs=require('express-handlebars'); // include express-handlebars module
const mongoose=require('mongoose');
const PORT= 8888; 
const app=express(); // create express object 
// Add template engine
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
// add static files
app.use("/static",express.static("public"));
// parsing data
app.use(express.json());
app.use(express.urlencoded ({extended:false}))
// create routes
const mainRoute=require('./index');
app.use("/",mainRoute);
 
const connectionString="mongodb://127.0.0.1:27017/mongocrud1";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))
// handle 404 error

app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`server work on ${PORT}`)
})