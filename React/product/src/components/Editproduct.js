import React, { Component } from "react";
import { updateData,getProductById } from "../services/Data";
import withRouter from "./withRouter";
class Editproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proData: [],
            name: "",
            price: "",
            quantity: "",
            description: "",
            flag: true,
            uid: `${this.props.params.id}`,
        };
    }
    handler = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };
   componentDidMount()
   {
        getProductById(`${this.props.params.id}`)
        .then(res=>{
            console.log(res.data)
            this.setState({name:res.data.name,price:res.data.price,quantity:res.data.quantity,description:res.data.description,flag:false,uid:res.data._id})
        })
        .catch(err => console.log(err))
   
}
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.uid !== "") {
            updateData(
                {
                    name: this.state.name,
                    price: this.state.price,
                    quantity: this.state.quantity,
                    description: this.state.description,
                },
                this.state.uid
            )
                .then((res) => {
                    if (res.data) {
                        alert("Data updated");
                        this.setState({
                            name: "",
                            price: "",
                            quantity: "",
                            description: "",
                            flag: false,
                            uid: "",
                        });
                        this.props.navigate("/products");
                    }
                })
                .catch((err) => console.log(err));
        }
    };
    render() {
        return (
            <div>
                <h2> Crud Implemention of Data</h2>
                <div>
                    <h4> Update Data</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label> Name </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handler}
                            />
                        </div>
                        <div className="form-group">
                            <label> Price </label>
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.handler}
                            />
                        </div>
                        <div className="form-group">
                            <label> Quantity </label>
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                value={this.state.quantity}
                                onChange={this.handler}
                            />
                        </div>
                        <div className="form-group">
                            <label> Description </label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.handler}
                            />
                        </div>

                        <input type="submit" value="Update" className="btn btn-success" />
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(Editproduct);
