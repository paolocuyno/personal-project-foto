import React, { useState } from "react";
import {useHistory} from "react-router";
import axios from "axios";
import noImage from "./../../assets/no-image-.png";
import "./Form.css";
import styled from "styled-components";

export default function Form(){
    const [title,setTitle]=useState('');
    const [img,setImg]=useState('');
    const [content,setContent]=useState('')

    const handlerTitle=(e)=>{
        let category=e.target.value
        setTitle(category)
    }

    const handlerImg=(e)=>{
        let image=e.target.value
        setImg(image)
    }

    const handlerContent=(e)=>{
        let caption=e.target.value
        setContent(caption)
    }
    const history=useHistory()
    let imgSrc = img ? img : noImage;
    const submit=()=>{
    let formPost={
        title:title,
        img:img,
        content:content
    }    
        axios
      .post("/api/post", formPost)
      .then(() => history.push({pathname:"/dash"}))
      .catch((err) => console.log(err));
  }
  return (
    <div className="form-content-box">
      <h2 className="title">Create Post</h2>
      <div className="form-main">
        <div className="form-input-box">
          <p>Category:</p>
          <input
            value={title}
            onChange={handlerTitle}
          />
        </div>
        <img className="form-img-prev" src={imgSrc} alt="preview" />
        <div className="form-input-box">
          <p>Image URL:</p>
          <input
            value={img}
            onChange={handlerImg}
          />
        </div>
        <div className="form-text-box">
          <p>Caption</p>
          <textarea
            value={content}
            onChange={handlerContent}
          />
        </div>
      </div>
      <button onClick={submit} id="form-button">
        Post
      </button>
    </div>
  );
}


    





