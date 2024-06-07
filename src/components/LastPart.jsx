import React, { Component } from "react";

class LastPart extends Component {
  constructor() {
    super();
    this.state = {};
    this.slideUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }
  render() {
    return (
      <div className="last-layout-container">
        <div>
          <h3 onClick={this.slideUp}>
            <i class="fa-solid fa-star "></i>The Cleanic
          </h3>
          <button>Book Now</button>
        </div>
        <div>
          <p>Legacy</p>
          <p>
            <a href="#">Privacy Policy</a> <br />
            <a href="#">Terms & Conditions</a> <br />
            <a href="#">Refund Policy</a>
          </p>
        </div>
        <div>
          <p>Operating Hours</p>
          <p>
            Mon - Fri: 8am - 8pm <br />
            Saturday: 9am - 7pm <br />
            Sunday: 9am - 8pm
          </p>
          <p>Follow us for cleaning tips</p>
          <i class="icon fa-brands fa-instagram"></i>
          <i class="icon fa-brands fa-facebook"></i>
          <i class="icon fa-brands fa-twitter"></i>
          <i class="icon fa-brands fa-twitch"></i>
        </div>
        <div>
          <p>Contact</p>
          <p>
            The Cleanic <br />
            500 Terry Francine Street <br />
            San Francisco, CA 94158
            <br />
            123-456-7890 <br />
            <a href="info@mysite.com">info@mysite.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default LastPart;
