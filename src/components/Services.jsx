import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "./Service";

class Services extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="services-container">
        <h2>Our Services</h2>
        <p>What can we clean for your today</p>
        <div className="services">
          {this.props.services.map((service, index) => (
            <Service
              img={service.img}
              name={service.name}
              desc={service.desc}
              price={service.price}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(Services);
