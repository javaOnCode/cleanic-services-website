import React, { Component } from "react";
import cleaningServices from "../images/homeCleaningServices.jpg";
import whoWeAre from "../images/whoWeAreImg.webp";
import { connect } from "react-redux";

class About extends Component {
  constructor() {
    super();
    this.state = {};

    this.questionClicked = () => {
      const questions = document.querySelectorAll(".question");
      questions.forEach((question) => {
        question.classList.toggle("active");
        const icons = document.querySelectorAll(".arrow");
        icons.forEach((icon) => {
          if (question.classList.contains("active")) {
            icon.classList.add("fa-caret-up");
            icon.classList.remove("fa-sort-down");
          } else {
            icon.classList.remove("fa-caret-up");
            icon.classList.add("fa-sort-down");
          }
        });
      });
    };
    this.formSubmit = (event) => {
      event.preventDefault();
      const name = document.getElementById("hire_firstName");

      alert(
        `${name}, thanks for your apply. \nWe'll return back in max 5 business days.`
      );
    };
  }
  render() {
    return (
      <div className="about-container">
        <h2>About Us</h2>
        <p>Our story is a passion for clean homes and happy clients</p>
        <img src={cleaningServices} alt="" />
        <div className="who-we-are">
          <img src={whoWeAre} alt="" />
          <div className="who-inner">
            <h2>Who We Are</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I'm a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="stellarTeam-container">
          <h1>Stellar Team</h1>
          <div className="teamMembers">
            {this.props.stellarTeam.map((member, index) => (
              <div className="member" key={index}>
                <img src={member.img} alt="" />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <p className="desc-p">
                  This is your Team Member description. Use this space to write
                  a brief description of this person's role and
                  responsibilities, or add a short bio.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-section">
          <h2>Frequently asked questions</h2>
          <div className="question" onClick={this.questionClicked}>
            <div className="quest-icon">
              <h5>What is an FAQ section?</h5>
              <i class="arrow fa-solid fa-sort-down"></i>
            </div>
            <div className="answer">
              <h5>
                An FAQ section can be used to quickly answer common questions
                about your business like "Where do you ship to?", "What are your
                opening hours?", or "How can I book a service?".
              </h5>
            </div>
          </div>
          <div className="question" onClick={this.questionClicked}>
            <div className="quest-icon">
              <h5>Why do FAQs matter?</h5>
              <i class="arrow fa-solid fa-sort-down"></i>
            </div>
            <div className="answer">
              <h5>
                FAQs are a great way to help site visitors find quick answers to
                common questions about your business and create a better
                navigation experience.
              </h5>
            </div>
          </div>
          <div className="question" onClick={this.questionClicked}>
            <div className="quest-icon">
              <h5>Where can I add my FAQs?</h5>
              <i class="arrow fa-solid fa-sort-down"></i>
            </div>
            <div className="answer">
              <h5>
                FAQs can be added to any page on your site or to your Wix mobile
                app, giving access to members on the go.
              </h5>
            </div>
          </div>
          <div className="question" onClick={this.questionClicked}>
            <div className="quest-icon">
              <h5>
                How do I edit or remove the 'Frequently Asked Questions' title?
              </h5>
              <i class="arrow fa-solid fa-sort-down"></i>
            </div>
            <div className="answer">
              <h5>
                You can edit the title from the FAQ 'Settings' tab in the
                Editor.
              </h5>
            </div>
          </div>
        </div>
        <div className="work-with-us">
          <div className="work-us">
            <h3>Work with Us</h3>
            <p>Join our team for a fulfilling and rewarding career.</p>
            <form onSubmit={this.formSubmit}>
              <div>
                <label>First name*</label>
                <input
                  className="input"
                  id="hire_firstName"
                  type="text"
                  required
                />
              </div>
              <div>
                <label>Last name*</label>
                <input className="input" type="text" required />
              </div>
              <div className="form-email">
                <label>Email*</label>
                <input className="input" type="email" required />
              </div>
              <div>
                <label>Phone number*</label>
                <input className="input" type="text" required />
              </div>
              <div>
                <label>Positon*</label>
                <select className="input">
                  <option hidden></option>
                  <option value="fullTime">Full-time</option>
                  <option value="partTime">Part-time</option>
                </select>
              </div>
              <div className="form-email">
                <label>Tell us more*</label>
                <textarea className="input" cols="30" rows="3"></textarea>
              </div>
              <button>Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(About);
