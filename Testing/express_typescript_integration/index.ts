import express,{Express} from 'express';
import cors from 'cors'
import dotenv from'dotenv';
import routes from './routes/postroutes'
dotenv.config();
const app:Express=express();
app.use(cors());
app.use("/",routes);
app.listen(process.env.PORT,()=>{
    console.log("Server work on "+process.env.PORT);
})