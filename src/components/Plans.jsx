import React, { Component } from "react";

class Plans extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="plans-container">
        <h1>Our Plans</h1>
        <h5>Elevate your living with our cleaning subscription plan.</h5>
        <div className="custom-plans">
          <div className="one-plan">
            <h3>The Weekly Plan</h3>
            <h2>$480</h2>
            <p>Every month</p>
            <button>Select</button>
            <div className="benefits-div">
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
            </div>
          </div>
          <div className="one-plan yellow">
            <div className="best-value">Best Value</div>
            <h3>The Bi-Monthly Plan</h3>
            <h2>$280</h2>
            <p>Every month</p>
            <button>Select</button>
            <div className="benefits-div">
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
            </div>
          </div>
          <div className="one-plan">
            <h3>The Office Plan</h3>
            <h2>$950</h2>
            <p>Every month</p>
            <button>Select</button>
            <div className="benefits-div">
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
              <p>
                <i class="fa-solid fa-arrow-right-long"></i> I'm benefit
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
