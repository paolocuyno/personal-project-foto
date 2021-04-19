import React, { Component } from "react";
import axios from "axios";
import home from "../../assets/home.jpg";
import oculus from "../../assets/oculus.jpg"
import "./Auth.css";
import { connect } from "react-redux";
import { updateUser } from "../../redux/reducer";
import fotologo from "./../../assets/foto-logo.png";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: "",
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

// function Auth(props){
// const [username,setUsername]=useState('');
// const [password,setPassword]=useState('');
// const [errorMsg,setErrorMsg]=useState('')
// const [prop,setProp]=useState('val')







  handleChange(prop, val) {
    this.setState({
      [prop]: val,
    });
  }


  login() {
    axios
      .post("/api/auth/login", this.state)
      .then((res) => {
        
        this.props.updateUser(res.data);
        this.props.history.push("/dash");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Incorrect username or password!" });
      });
  }

  // function login() {
  //   axios
  //     .post("/api/auth/login", this.state)
  //     .then((res) => {
        
  //       props.updateUser(res.data);
  //       props.history.push("/dash");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErrorMsg({ errorMsg: "Incorrect username or password!" });
  //     });
  // }

  register() {
    axios
      .post("/api/auth/register", this.state)
      .then((res) => {
        
        this.props.updateUser(res.data);
        this.props.history.push("/dash");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Username taken!" });
      });
  }

  //function register() {
  //   axios
  //     .post("/api/auth/register", this.state)
  //     .then((res) => {
        
  //       props.updateUser(res.data);
  //       props.history.push("/dash");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErrorMsg({ errorMsg: "Username taken!" });
  //     });
  // }



  closeErrorMessage = () => {
    this.setState({
      errorMsg: false,
      username: "",
      password: "",
    });
  };

//  function closeErrorMessage = () => {
//     React.useState({
//       errorMsg: false,
//       username: "",
//       password: "",
//     });
//   };

  render() {
    return (
      <div className="auth">
        <div className="img-container">
          <button className="learn-more">Learn More</button> by user paoloac
          <img src={oculus} />{" "}
        </div>
        <div className="auth-container">
          <h1 className="auth-title">foto</h1>
          {this.state.errorMsg && (
            <h3 className="auth-error-msg">
              {this.state.errorMsg}{" "}
              <span onClick={this.closeErrorMessage}>X</span>
            </h3>
          )}
          <div className="auth-input-box">
            <p>Username:</p>
            <input
              value={this.state.username}
              onChange={(e) => this.handleChange("username", e.target.value)}
            />
          </div>
          <div className="auth-input-box">
            <p>Password:</p>
            <input
              value={this.state.password}
              type="password"
              onChange={(e) => this.handleChange("password", e.target.value)}
            />
          </div>
          <div className="auth-button-container">
            <div className="register" onClick={this.register}>
              {" "}
              Register{" "}
            </div>
            <button className="dark-button" onClick={this.login}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);
