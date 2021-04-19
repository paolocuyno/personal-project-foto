import React, { useState } from "react";
import {useHistory} from "react-router"
import axios from "axios";
import home from "../../assets/home.jpg";
import oculus from "../../assets/oculus.jpg";
import "./Auth.css";
import { connect } from "react-redux";
import { updateUser } from "../../redux/reducer";
import fotologo from "./../../assets/foto-logo.png";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
 

const closeErrorMessage= ()=>{
    setErrorMsg(false)
}

const handleUsername=(e)=>{
    let user=e.target.value
    setUsername(user)
}

const handlePassword=(e)=>{
    let pass=e.target.value
    setPassword(pass)
}
const history=useHistory();
const register=()=>{
    let userID={
        username:username,
        password:password,
    }
   
    axios
    .post("/api/auth/register",userID)
    .then((res)=>{
        updateUser(res.data);
        history.push({pathname:"/dash"});
    })
    .catch((err)=>{
        console.log(err);
        setErrorMsg('Username taken!')
    })
}

const login=()=>{
    let userID={
        username:username,
        password:password,
    }
    axios
    .post("/api/auth/login",userID)
    .then((res)=>{
        updateUser(res.data);
        
        history.push({pathname:"/dash"});
    })
    .catch((err)=>{
        console.log(err);
        setErrorMsg('Incorrect username or password')
    })
}
  return (
    <div className="auth">
      <div className="img-container">
        <button className="learn-more">Learn More</button> by user paoloac
        <img src={oculus} />{" "}
      </div>
      <div className="auth-container">
        <h1 className="auth-title">foto</h1>
        {errorMsg && (
          <h3 className="auth-error-msg">
            {errorMsg}{" "}
            <span onClick={closeErrorMessage}>X</span>
          </h3>
        )}
        <div className="auth-input-box">
          <p>Username:</p>
          <input
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="auth-input-box">
          <p>Password:</p>
          <input
            value={password}
            type="password"
            onChange={handlePassword}
          />
        </div>
        <div className="auth-button-container">
          <div className="register" onClick={register}>
            {" "}
            Register{" "}
          </div>
          <button className="dark-button" onClick={login}>
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  )}


