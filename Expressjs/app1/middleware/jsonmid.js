const jsonCheck=function(){
    return (req,res,next) => {
        if(req.headers['content-type'] === 'application/json'){
            next()
        }
        else{
            res.status(201).send('Only application/json format supported')
        }
    }
}
module.exports=jsonCheck;