import React, { Component } from "react";
import logos from "../images/logos.png";
import process from "../images/how-it-works.png";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.seeServices = () => {
      window.location.href = "/services";
    };
    this.seePlans = () => {
      window.location.href = "/plans";
    };
    this.seeAbout = () => {
      window.location.href = "/about";
    };
    this.formSubmit = (event) => {
      event.preventDefault();
      const name = document.getElementById("quote_firstName").value;
      alert(
        `${name}, your qoute has been succesfully submitted \nYou will get feedback in a few days`
      );
    };
  }
  render() {
    return (
      <div className="home-container">
        <img
          src="https://static.wixstatic.com/media/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg/v1/fill/w_1899,h_1178,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg"
          className="img-bg"
          alt=""
        />
        <div className="home-cleaner">
          <h2>Remarkably Cleaner. Amazingly Simpler.</h2>
          <p>
            Providing spotless cleaning services for busy people since 2035.
            Always on time, always smiling.
          </p>
          <button onClick={this.seeServices}>Book Now</button>
        </div>
        <div className="home-estimation">
          <h2>Get a Free Estimate</h2>
          <p>Contact Us</p>
          <form onSubmit={this.formSubmit}>
            <div>
              <label htmlFor="">First name*</label>
              <input
                id="quote_firstName"
                required
                className="input"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Last name*</label>
              <input required className="input" type="text" />
            </div>
            <div>
              <label htmlFor="">Email*</label>
              <input required className="input" type="email" />
            </div>
            <div>
              <label htmlFor="">Phone number*</label>
              <input required className="input" type="text" />
            </div>
            <div>
              <label htmlFor="">Address*</label>
              <input required className="input" type="text" />
            </div>
            <div>
              <label htmlFor="">City*</label>
              <input required className="input" type="text" />
            </div>
            <div>
              <label htmlFor="">Number of rooms*</label>
              <select required className="input">
                <option hidden></option>
                <option>2 bedroom</option>
                <option>3 bedroom</option>
                <option>4 bedroom</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Choose your service*</label>
              <select required className="input two-stage">
                <option hidden></option>
                <option>Deep cleaning</option>
                <option>Laundry</option>
                <option>Moving in/out</option>
              </select>
            </div>
            <button>Get a Quote</button>
          </form>
        </div>
        <div className="home-clients">
          <h3>Shiny Happy Clients</h3>
          <div className="home-clients-rate">
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h2>“I’m addicted to the Cleanic!”</h2>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </p>
              <p>Jane Deirs, AR</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h2>“My flat looks like a boutique hotel”</h2>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </p>
              <p>Eric Laguardia, CA</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h2>“Soft perfection”</h2>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </p>
              <p>Lena Rogel, RI</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h2>“I’m obsessed”</h2>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </p>
              <p>Jean McDermott, CT</p>
            </div>
          </div>
        </div>
        <div className="home-u-need">
          <h2>For Anything You Need</h2>
          <p>Our stellar services</p>
          <div className="filters">
            <div>
              <img
                src="https://static.wixstatic.com/media/c837a6_d358929fbebb4420a41fad5e64d3429c~mv2.jpg/v1/fill/w_175,h_175,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d358929fbebb4420a41fad5e64d3429c~mv2.jpg"
                alt=""
              />
              <p>Move in/Move out</p>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/84770f_a28eabedca454c768ad165ba8b0501ec~mv2.jpg/v1/fill/w_175,h_175,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_a28eabedca454c768ad165ba8b0501ec~mv2.jpg"
                alt=""
              />
              <p>Deep Cleaning</p>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/c837a6_0c09417837a04f32aa6ffd0cca879d36~mv2.jpeg/v1/fill/w_175,h_175,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0c09417837a04f32aa6ffd0cca879d36~mv2.jpeg"
                alt=""
              />
              <p>Laundry</p>
            </div>
          </div>
          <button onClick={this.seeServices}>See All Services</button>
        </div>
        <div className="featured-in">
          <h2>Featured In</h2>
          <img src={logos} alt="" />
        </div>
        <div className="before-after">
          <h2>Before & After</h2>
          <div
            id="carouselExampleControls"
            class="carousel slide "
            data-ride="carousel"
          >
            <div class="carousel-inner carousel-div">
              <div class="carousel-item carousel-img active">
                <img
                  class="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_7dfebfa0673449d691f77fc9d369962d~mv2.jpg/v1/crop/x_788,y_789,w_701,h_669/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg"
                  alt="First slide"
                />
                <img
                  className="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_8bbdbc4eb5e94cf493cd8f97fda4d5e2~mv2.jpg/v1/crop/x_757,y_747,w_757,h_723/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_e500340d84704dc8b4e668423995dd8e~mv2.jpg/v1/crop/x_93,y_135,w_839,h_800/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg"
                  alt="Second slide"
                />
                <img
                  className="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_5ae967b8d57e43be9925fc596c264bdb~mv2.jpg/v1/crop/x_278,y_312,w_1492,h_1423/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.jpg"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_35b2191e3ad84e1c96308b04f9716011~mv2.jpg/v1/crop/x_227,y_264,w_1593,h_1520/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.jpg"
                  alt="Third slide"
                />
                <img
                  className="d-block w-50"
                  src="https://static.wixstatic.com/media/c837a6_5f1db4e549ad4558907edd70fdcbd1c9~mv2.jpg/v1/crop/x_101,y_148,w_825,h_787/fill/w_600,h_573,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg"
                  alt=""
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="how-it-works">
          <h2>How It Works</h2>
          <img src={process} alt="" />
        </div>
        <div className="plans-discounts">
          <div className="detail-info">
            <h2>Our Plans & Special Discounts</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. I'm a paragraph. Click here to add your own text and edit
              me. It's easy.
            </p>
            <button onClick={this.seePlans}>Choose Your Plan</button>
          </div>
          <div className="one-plan">
            <div className="best-value">Best Value</div>
            <h5>The Bi-Monthly Plan</h5>
            <h2>$280</h2>
            <p>Every month</p>
            <button>Select</button>
            <div className="benefit-div">
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
        <div className="why-choose-cleanic">
          <img
            src="https://static.wixstatic.com/media/c837a6_a6f1c5955cd64e64beb2924dc940d522~mv2.jpg/v1/fill/w_175,h_175,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_a6f1c5955cd64e64beb2924dc940d522~mv2.jpg"
            alt=""
          />
          <div className="why-us">
            <h3>Why Choose The Cleanic</h3>
            <div className="why-inner">
              <div>
                <h4>
                  <i class="fa-regular fa-star"></i>Qualified Team
                </h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
              <div>
                <h4>
                  <i class="fa-regular fa-star"></i>Same Day Availability
                </h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
              <div>
                <h4>
                  <i class="fa-regular fa-star"></i>Outstanding Support
                </h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
              <div>
                <h4>
                  <i class="fa-regular fa-star"></i>Friendly Materials
                </h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
            </div>
            <button onClick={this.seeAbout}>Get To Know Us</button>
          </div>
        </div>
        <img
          className="last-img"
          src="https://static.wixstatic.com/media/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg/v1/fill/w_1899,h_910,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default Home;
