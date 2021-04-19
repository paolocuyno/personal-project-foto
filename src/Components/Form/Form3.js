import React, { Component } from "react";
import axios from "axios";
import noImage from "./../../assets/no-image-.png";
import "./Form.css";
import styled from "styled-components";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    axios
      .post("/api/post", this.state)
      .then(() => this.props.history.push("/dash"))
      .catch((err) => console.log(err));
  }

  render() {
    let imgSrc = this.state.img ? this.state.img : noImage;

    return (
      <div className="form-content-box">
        <h2 className="title">Create Post</h2>
        <div className="form-main">
          <div className="form-input-box">
            <p>Category:</p>
            <input
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <img className="form-img-prev" src={imgSrc} alt="preview" />
          <div className="form-input-box">
            <p>Image URL:</p>
            <input
              value={this.state.img}
              onChange={(e) => this.setState({ img: e.target.value })}
            />
          </div>
          <div className="form-text-box">
            <p>Caption</p>
            <textarea
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
        </div>
        <button onClick={this.submit} id="form-button">
          Post
        </button>
      </div>
    );
  }
}
// const Button = styled.button`
//   color: red;
//   background-color: black;
//   border-radius: 3px;
// `;

export default Form;
