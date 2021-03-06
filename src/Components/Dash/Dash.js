import React, { Component} from "react";
import axios from "axios";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      myPosts: true,
      oldestFirst: false,
      posts: [],
      loading: true,
    
    }

    this.grabPosts = this.grabPosts.bind(this);
    this.reset = this.reset.bind(this);
  }



  componentDidMount() {
    this.grabPosts();
  }

  grabPosts() {
    let { search, myPosts, oldestFirst } = this.state;
    let url = "/api/posts";
    if (myPosts && !search) {
      oldestFirst ? (url += "?mine=true&oldest=true") : (url += "?mine=true");
    } else if (!myPosts && search) {
      oldestFirst
        ? (url += `?search=${search}&oldest=true`)
        : (url += `?search=${search}`);
    } else if (myPosts && search) {
      oldestFirst
        ? (url += `?mine=true&search=${search}&oldest=true`)
        : (url += `?mine=true&search=${search}`);
    } else {
      if (oldestFirst) {
        url += "?oldest=true";
      }
    }
    axios.get(url).then((res) => {
      this.setState({ posts: res.data, loading: false });
    });
  }

  deletePost = id => {
    axios.delete(`/api/post/${id}`).then(_ => this.grabPosts());
  };


  reset() {
    let { myPosts } = this.state;
    let url = "/api/posts";
    if (myPosts) {
      url += "?mine=true";
    }
    axios.get(url).then((res) => {
      this.setState({ posts: res.data, loading: false, search: "" });
    });
  }

  render() {
    let { loading, search, posts, myPosts, oldestFirst } = this.state;
   console.log(this.props)
    
    let mappedPosts = posts.map(post => {
      
      return (
        <div className="content-box dash-post-box" key={post.post_id}>
          <Link to={`/post/${post.post_id}`}>
            <h3>{post.title}<Link to={`/update/${post.post_id}`}><br></br><button >Edit Category</button></Link></h3>
            <img className="dashpic" src={post.img} />
          </Link>
          {/* {post.author_username === this.props.username ?  */}
            <button  onClick={(_) => this.deletePost(post.post_id)}>
             DELETE
            </button>
           
            {/* <div className="author-box"> */}
              <p className='author-handle'> {post.author_username}</p>
             
            {/* </div> */}
           
        </div>
      );
    });

    return (
      <div className="dash">
        <div className="content-box dash-filter">
          <div className="dash-search-box">
            <input
              value={search}
              onChange={(e) => this.setState({ search: e.target.value })}
              className="dash-search-bar"
              placeholder="Search by Category"
            />
            <button onClick={this.grabPosts} className="button">
              Search
            </button>
            <button onClick={this.reset} className="button">
              Clear Filter
            </button>
          </div>
          {/* <div className="dash-check-box">
            <p>Show My Posts</p>
            <input
              checked={myPosts}
              onChange={(_) =>
                this.setState({ myPosts: !myPosts }, this.grabPosts)
              }
              type="checkbox"
            />
          </div>
          <div className="dash-check-box">
            <p>Oldest to Newest</p>
            <input
              checked={oldestFirst}
              onChange={(_) =>
                this.setState({ oldestFirst: !oldestFirst }, this.grabPosts)
              }
              type="checkbox"
            />
          </div> */}
        </div>
        <div className="content-box dash-posts-container">
          {!loading ? (
            mappedPosts
          ) : (
            <div className="load-box">
              <div className="load-background"></div>
              <div className="load"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Dash);
