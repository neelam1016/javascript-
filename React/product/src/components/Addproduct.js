import React, { Component } from 'react'
import { postData } from '../services/Data';
import withRouter from './withRouter';
class Addproduct extends Component {
    constructor(props){
        super(props);
        this.state={proData:[],name:'',price:'',quantity:'',description:'',flag:true,uid:''}
    }
    handler=(e)=>{
        let {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        postData({name:this.state.name,price:this.state.price,quantity:this.state.quantity,description:this.state.description})
            .then(res=>{
                if(res.data){
                    this.props.navigate("/products");
                }
            })
            .catch(err=>console.log(err))
        }
    
  render(){
    return (
        <div>
        <h2> Crud Implemention of Data</h2>
        <div>
            <h4> Add Data</h4>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label> Name </label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handler}/>
                </div>
                <div className='form-group'>
                    <label> Price </label>
                    <input type="text" name="price" className="form-control" value={this.state.price} onChange={this.handler}/>
                </div>
                <div className='form-group'>
                    <label> Quantity </label>
                    <input type="text" name="quantity" className="form-control" value={this.state.quantity} onChange={this.handler}/>
                </div>
                <div className='form-group'>
                    <label> Description </label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handler}/>
                </div>
                <input type="submit" value="Add" className="btn btn-success"/>
        
            </form>
        </div>
        </div>
    )
  }
}

export default withRouter(Addproduct)