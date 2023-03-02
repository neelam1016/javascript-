import React, { Component } from "react";
import { getAllProducts, deleteData } from "../services/Data";
import { Link } from "react-router-dom";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    getAllProducts()
      .then((res) => {
        console.log(res.data);
        this.setState({ proData: res.data });
      })
      .catch((err) => console.log(err));
  }
  delPro = (id) => {
    if (window.confirm("Do u want to delete ?")) 
    {
      deleteData(id).then((res) => {
        if (res.data) {
          alert("Product Deleted");
          let data = this.state.proData.filter((pro) => pro._id !== id);
          this.setState({ proData: data });
        }
      });
    }
  };
  render() 
  {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 text-center">
        {this.state.proData.map((pro) => (
          <div className="col">
            <div className="card h-100">
              <img src={pro.url} className="card-img-top p-3" alt="..." height={250}/>
              <div className="card-body">
                <h5 className="card-title">Name: {pro.name}</h5>
                <p className="card-text">Price: {pro.price}</p>
                <Link
                  className="btn btn-success me-4"
                  to={`/viewproduct/${pro._id}`}
                >
                  View Details
                </Link>
                <Link
                  className="btn btn-primary me-4"
                  to={`/editproduct/${pro._id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => this.delPro(pro._id)}
                >
                  {" "}
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
