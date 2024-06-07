import React, { Component } from "react";

export class ItemChosen extends Component {
  constructor() {
    super();
    this.state = {};
    this.reserveService = (event) => {
      event.preventDefault();
      alert(
        "Your order from Cleanic succesfully reserved \nWe'll return to your email in a few hours"
      );
      document.getElementById("reservationForm").reset();
      document.location = "/";
    };
  }
  render() {
    const itemChosen = JSON.parse(localStorage.getItem("itemChosen"));
    return (
      <React.Fragment>
        <div className="item-container">
          <div className="item-inner-container">
            <h2>{itemChosen.name}</h2>
            <p>{itemChosen.desc}</p>
            <div className="price-duration">
              <p>1hr</p>
              <p>${itemChosen.price}</p>
            </div>
            <button data-toggle="modal" data-target="#submitService">
              Book Now
            </button>
            <hr />
            <p className="service-desc">Service Description</p>
            <p className="desc-p">
              Describe your service here. What makes it great? Use short catchy
              text to tell people what you offer, and the benefits they will
              receive. A great description gets readers in the mood, and makes
              them more likely to go ahead and book.
            </p>
            <hr />
            <p className="service-desc">Contact Details</p>
            <p className="desc-p">
              San Francisco, CA, USA
              <br />
              1234567890
              <br />
              info@mysite.com
            </p>
            <hr />
          </div>
        </div>
        <div className="modal fade" id="submitService">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>
                  <i class="fa-brands fa-servicestack mr-1"></i> Submit Service
                  Reservation
                </h3>
                <button className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body w-95">
                <form
                  id="reservationForm"
                  className="form d-flex flex-wrap justify-content-between"
                  onSubmit={this.reserveService}
                >
                  <div className="form-group w-100">
                    <label htmlFor="">Fullname*</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="reservation_fullname_input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone Number*</label>
                    <input
                      type="text"
                      required
                      id="reservation_phoneNumber_input"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email*</label>
                    <input
                      type="email"
                      required
                      id="reservation_email_input"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group w-49">
                    <label htmlFor="">City</label>
                    <select
                      id="reservation_city_input"
                      className="form-control"
                    >
                      <option hidden></option>
                      <option value="">Baku</option>
                      <option value="">Tbilisi</option>
                      <option value="">Istanbul</option>
                      <option value="">Rome</option>
                      <option value="">Madrid</option>
                      <option value="">NYC</option>
                      <option value="">Ankara</option>
                      <option value="">Izmir</option>
                    </select>
                  </div>
                  <div className="form-group w-49">
                    <label htmlFor="">Country*</label>
                    <select
                      id="reservation_country_input"
                      className="form-control"
                      required
                    >
                      <option hidden></option>
                      <option value="">Azerbaijan</option>
                      <option value="">Georgia</option>
                      <option value="">Turkey</option>
                      <option value="">Italy</option>
                      <option value="">Spain</option>
                      <option value="">USA</option>
                    </select>
                  </div>
                  <div className="form-group w-100 mt-3">
                    <label htmlFor="">Address Details 1*</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="reservation_address1_input"
                    />
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="">Address details 2*</label>
                    <input
                      type="text"
                      required
                      id="reservation_address2_input"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group w-25">
                    <label htmlFor="">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="reservation_postalCode_input"
                      required
                    />
                  </div>
                  <button className="btn btn-dark button-reserve">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
