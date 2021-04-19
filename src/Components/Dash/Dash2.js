import React, { Component, useState,useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Dash.css";
import { Link } from "react-router-dom";

export default function Dash(){
    const [search, setSearch]=useState('')
    const [myPosts, setMyPosts]=useState(true)
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(true)








}
