import React, { Component } from "react";
import { showService } from "./redux/Actions";
import { connect } from "react-redux";

class Service extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="service-container">
        <img src={this.props.img} alt="" />
        <div onClick={() => this.props.showService(this.props.index)}>
          <h2>{this.props.name}</h2>
          <p>{this.props.desc}</p>
          <a href="#">Read More</a>
        </div>
        <p className="price-p">${this.props.price}</p>
        <div className="button-div">
          <button onClick={() => this.props.showService(this.props.index)}>
            Book a Cleaner
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showService: (index) => dispatch(showService(index)),
  };
};

export default connect(null, mapDispatchToProps)(Service);
