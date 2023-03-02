const jsoncheck=function(){
    return (req,res,next)=>{
        if(req.headers['content-type']==='application/json'){
            next()
        }
        else{
            res.status(201).send('Only Apllciation/json format supported')
        }
    }
}
module.exports=jsoncheck;