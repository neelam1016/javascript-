module.exports=async function getPost(){
    const axios=require("axios");
    let result;
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        result=res.data;
    })
    .catch(err=>{
        console.log(err)
    });
    return result;
}