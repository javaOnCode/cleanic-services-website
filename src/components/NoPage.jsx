import React, { Component } from "react";
import PageNotFound from "../images/Pagenotfound.jpg";

class NoPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="pageNotFound">
        <img src={PageNotFound} alt="" />
      </div>
    );
  }
}

export default NoPage;
