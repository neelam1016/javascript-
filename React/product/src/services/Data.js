import instance from '../Api/api_instance';

const getAllProducts=()=>{
    return instance.get(`getproducts`)
}
const postData=(data)=>{
    return instance.post(`addproduct`,data)
}
const updateData=(data,id)=>{
    return instance.put(`editproduct/${id}`,data)
}
const deleteData=(id)=>{
    return instance.delete(`deleteproduct/${id}`)
}
const getProductById=(id)=>{
    return instance.get(`getproductbyid/${id}`)
}

export {getAllProducts,postData,updateData,deleteData,getProductById}
