import express, {Express,Request,Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app:Express=express();
const PORT=process.env.PORT;
app.get("/",(req:Request,res:Response)=>{
    res.send("Express Typescript Server")
})
app.listen(PORT,()=>{
    console.log(`server work on ${PORT}`)
})
