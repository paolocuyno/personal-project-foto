import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import noImage from "./../../assets/no-image-.png";
import "./Post.css";

export default function Post(props) {
  const [author, setAuthor] = useState("");
  const [author_pic, setAuthorPic] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({
    author: "",
    author_pic: "",
    title: "",
    img: "",
    content: "",
    loading: true,
  });
  const id = useParams();

  useEffect(() => {
    axios.get(`/api/post/${id}`).then((res) => {
      setPost({ ...res.data, loading: false });
    });
  }, [id]);
  let imgSrc = img ? img : noImage;

  return (
    <div className="post content-box">
      {!loading && title ? (
        <div>
          <div className="post-header">
            <h2 className="title">{title}</h2>
            <div className="author-box">
              <p>post by {author}</p>
              <img src={author_pic} alt="author" />
            </div>
          </div>
          <div className="post-content-box">
            <img className="post-img" src={imgSrc} alt="post" />
            <p>{content}</p>
            <input>Comments</input>
          </div>
        </div>
      ) : !loading ? (
        <div className="oops-box">
          <h2 className="title">Oops!</h2>
          <p>Looks like this post doesn't exist anymore</p>
        </div>
      ) : (
        <div className="load-box">
          <div className="load-background">loading...</div>
          <div className="load"></div>
        </div>
      )}
    </div>
  );
}

// const Body= styled.body`
//   background:'lightgrey',
//     height:'50vh',
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center'
// `;
