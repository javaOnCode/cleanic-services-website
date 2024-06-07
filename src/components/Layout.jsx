import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "./redux/Actions";
import { connect } from "react-redux";

class Layout extends Component {
  constructor() {
    super();
    this.state = {};

    this.refreshWebsite = () => {
      window.location.href = "/";
    };
    this.goUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    this.showPassword = () => {
      const eyeSlash = document.getElementById("eyeSlash");

      if (eyeSlash.classList.contains("fa-eye-slash")) {
        eyeSlash.classList.remove("fa-eye-slash");
        eyeSlash.classList.add("fa-eye");
        document.getElementById("register_password").type = "text";
      } else {
        eyeSlash.classList.add("fa-eye-slash");
        eyeSlash.classList.remove("fa-eye");
        document.getElementById("register_password").type = "password";
      }
    };
    this.showConfirmPassword = () => {
      const eyeSlash2 = document.getElementById("eyeSlash2");

      if (eyeSlash2.classList.contains("fa-eye-slash")) {
        eyeSlash2.classList.remove("fa-eye-slash");
        eyeSlash2.classList.add("fa-eye");
        document.getElementById("register_confirmPassword").type = "text";
      } else {
        eyeSlash2.classList.add("fa-eye-slash");
        eyeSlash2.classList.remove("fa-eye");
        document.getElementById("register_confirmPassword").type = "password";
      }
    };
    this.showLoginPassword = () => {
      const login_eyeSlash = document.getElementById("login_eyeSlash");

      if (login_eyeSlash.classList.contains("fa-eye-slash")) {
        login_eyeSlash.classList.remove("fa-eye-slash");
        login_eyeSlash.classList.add("fa-eye");
        document.getElementById("login_password").type = "text";
      } else {
        login_eyeSlash.classList.add("fa-eye-slash");
        login_eyeSlash.classList.remove("fa-eye");
        document.getElementById("login_password").type = "password";
      }
    };
    this.showLoginConfirmPassword = () => {
      const login_eyeSlash2 = document.getElementById("login_eyeSlash2");

      if (login_eyeSlash2.classList.contains("fa-eye-slash")) {
        login_eyeSlash2.classList.remove("fa-eye-slash");
        login_eyeSlash2.classList.add("fa-eye");
        document.getElementById("login_confirmPassword").type = "text";
      } else {
        login_eyeSlash2.classList.add("fa-eye-slash");
        login_eyeSlash2.classList.remove("fa-eye");
        document.getElementById("login_confirmPassword").type = "password";
      }
    };
    this.registerUser = (event) => {
      event.preventDefault();
      const register_firstName =
        document.getElementById("register_firstName").value;

      const register_password =
        document.getElementById("register_password").value;

      const register_confirmPassword = document.getElementById(
        "register_confirmPassword"
      ).value;

      if (register_password.length < 8) {
        alert("Pasword should contain at least 8 characters");
      } else {
        if (register_password == register_confirmPassword) {
          this.props.registerUser(
            register_firstName,
            register_password,
            register_confirmPassword
          );
          alert("You succesfully created an account!");
          document.getElementById("register_form").reset();
        } else {
          alert("Password mismatch");
        }
      }
    };
    this.loginUser = (event) => {
      event.preventDefault();

      const login_firstname = document.getElementById("login_firstName").value;
      const login_password = document.getElementById("login_password").value;

      if (login_password.length < 8) {
        alert("Password should contain at least 8 characters");
        document.getElementById("login_form").reset();
      } else {
        this.props.loginUser(login_firstname, login_password);
        document.getElementById("login_form").reset();
      }
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="layout-container">
          <h3 id="logo_website" onClick={this.refreshWebsite}>
            <i class="fa-solid fa-star mr-1"></i> The Cleanic
          </h3>
          <ul>
            <li>
              <Link to="home" onClick={this.goUp}>
                Home
              </Link>
            </li>
            <li>
              <Link to="plans" onClick={this.goUp}>
                Plans
              </Link>
            </li>
            <li>
              <Link to="services" onClick={this.goUp}>
                Services
              </Link>
            </li>
            <li>
              <Link to="about" onClick={this.goUp}>
                About
              </Link>
            </li>
            <li>
              <Link data-toggle="modal" data-target="#register_modal">
                {this.props.accountStatus} <i class="fa-solid fa-user ml-1"></i>
              </Link>
            </li>
            <button className="button" onClick={this.goUp}>
              <Link to="services">Book Now</Link>
            </button>
          </ul>
        </div>
        <div id="register_modal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>
                  <i class="mr-2 fa-solid fa-user-plus"></i> Registration Form
                </h3>
                <button className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body w-95 ">
                <form
                  id="register_form"
                  onSubmit={this.registerUser}
                  className="registration-form d-flex flex-wrap justify-content-between"
                >
                  <div className="form-group">
                    <label htmlFor="register_firstName">First Name</label>
                    <input
                      className="form-control "
                      type="text"
                      id="register_firstName"
                      required
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="register_lastName">Last Name</label>
                    <input
                      className="form-control "
                      type="text"
                      id="register_lastName"
                      required
                    />
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="register_email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="register_email"
                      required
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="register_password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="register_password"
                      required
                    />
                    <i
                      onClick={this.showPassword}
                      id="eyeSlash"
                      class="custom-absolute fa-solid fa-eye-slash"
                    ></i>
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="register_confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="register_confirmPassword"
                      required
                    />
                    <i
                      onClick={this.showConfirmPassword}
                      id="eyeSlash2"
                      class="custom-absolute fa-solid fa-eye-slash"
                    ></i>
                  </div>
                  <div className="form-group">
                    <input
                      className="checkBox mr-2 align-middle"
                      type="checkbox"
                      id="register_checkBox"
                      required
                    />
                    <label htmlFor="register_checkBox label">
                      I've read and agree to
                      <a href="#" className="a ml-1">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <a
                    className="a blue"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#login_modal"
                  >
                    Already have an account?
                  </a>
                  <button className="btn btn-dark">Register</button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
        <div id="login_modal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>
                  <i class="mr-2 fa-solid fa-right-to-bracket"></i> Login Modal
                </h3>
                <button className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body w-95">
                <form
                  onSubmit={this.loginUser}
                  id="login_form"
                  className="login-form d-flex flex-wrap justify-content-between"
                >
                  <div className="form-group">
                    <label htmlFor="login_firstName">First Name</label>
                    <input
                      className="form-control "
                      type="text"
                      id="login_firstName"
                      required
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="login_lastName">Last Name</label>
                    <input
                      className="form-control "
                      type="text"
                      id="login_lastName"
                      required
                    />
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="login_email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="login_email"
                      required
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="login_password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="login_password"
                      required
                    />
                    <i
                      onClick={this.showLoginPassword}
                      id="login_eyeSlash"
                      class="custom-absolute fa-solid fa-eye-slash"
                    ></i>
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="login_confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="login_confirmPassword"
                      required
                    />
                    <i
                      onClick={this.showLoginConfirmPassword}
                      id="login_eyeSlash2"
                      class="custom-absolute fa-solid fa-eye-slash"
                    ></i>
                  </div>
                  <div className="form-group">
                    <input
                      className="checkBox mr-2 align-middle"
                      type="checkbox"
                      id="login_checkBox"
                      required
                    />
                    <label htmlFor="login_checkBox label">
                      I've read and agree to
                      <a href="#" className="a ml-1">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <a
                    className="a blue"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#register_modal"
                  >
                    Don't have an account?
                  </a>
                  <button className="btn btn-dark">Login</button>
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, confirmPassword) =>
      dispatch(registerUser(username, password, confirmPassword)),
    loginUser: (username, password) => dispatch(loginUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
