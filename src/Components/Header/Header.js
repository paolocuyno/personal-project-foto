import React, { Component } from "react";
import axios from "axios";
import homeLogo from "./../../assets/home_logo.png";
import newLogo from "./../../assets/new_logo.png";
import logoutLogo from "./../../assets/shut_down.png";
import fotologo from "./../../assets/foto-logo.png"
import "./Header.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logout } from "../../redux/reducer";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    axios.get("/api/auth/me").then((res) => updateUser(res.data));
  }

  logout() {
    axios.post("/api/auth/logout").then((res) => logout());
  }

  render() {
    return (
      this.props.location.pathname !== "/" && (
        <header>
          
          <div className="header-links">
            <li><Link to="/dash"> <img className='logo' src={fotologo}/> </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/form"> New Post+ </Link></li>
           <li><Link to="/" onclick="logout()">  Login/Logout</Link></li> 
          </div>
        </header>
      )
    );
  }
}
const mapStateToProps = (state) => state;
export default withRouter(
  connect(mapStateToProps, { updateUser, logout })(Nav)
);
