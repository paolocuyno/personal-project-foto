import React, { Component } from "react";
import axios from "axios";
import fotologo from "./../../assets/Asset3.png"
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logout } from "../../redux/reducer";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faQuestionCircle,faPlusCircle,faShareSquare,faSignInAlt}  from "@fortawesome/free-solid-svg-icons"


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
            <li><Link to="/about" ><p className='header-text'>About </p> <FontAwesomeIcon className='icon' icon={faQuestionCircle}/> </Link></li>
            <li><Link to="/form" > <p className='header-text'>New Post </p><FontAwesomeIcon className='icon'  icon={faPlusCircle}/></Link></li>
            <li><Link to= "/contact-us" ><p className='header-text'>Invite A Friend! </p><FontAwesomeIcon className='icon'  icon={faShareSquare}/></Link></li>
           <li><Link to="/" onclick="logout()" >  <p className='header-text'>Login/Logout</p>  <FontAwesomeIcon className='icon'  icon={faSignInAlt}/></Link></li> 
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
