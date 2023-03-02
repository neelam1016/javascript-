const express = require('express')
const app = express()
const port = 8899
const jsoncheck=require('./middleware/jsonfile')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const xyz=(req,res,next)=>{
   req.title="Neosoft tech";
   next();
}
app.use(xyz)
app.use(express.static('images'))
let main=require('./routes/mainrouter');
let admin=require('./routes/adminrouter');
let user=require('./routes/userrouter');

app.use('/',main);
app.use('/admin',admin);
app.use('/user',user);

app.use((req,res,next)=>{
  res.status(404).send('<html> <body> <h2> Page not found </h2></body></html>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})