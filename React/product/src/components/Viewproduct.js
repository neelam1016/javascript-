/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { getProductById } from "../services/Data";
import withRouter from "./withRouter";
import "bootstrap/dist/css/bootstrap.min.css";
class Viewproduct extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    getProductById(this.props.params.id).then((res) => {
      console.log(res.data);
      this.setState({ proData: res.data });
    });
  }
  render() {
    return (
      <>
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <div class="card text-black">
                <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={this.state.proData.url}
                  class="card-img-top " height={200}
                  alt="Apple Computer"/>
                <div class="card-body">
                  <div class="text-center">
                    <h5 class="card-title">Name: {this.state.proData.name}</h5>
                    <p class="text-muted mb-4">Description: {this.state.proData.description}</p>
                  </div>
                  <div>
                    <div class="d-flex justify-content-between">
                      <span>Quantity</span>
                      <span>{this.state.proData.quantity}</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Price</span>
                    <span>{this.state.proData.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Viewproduct);
