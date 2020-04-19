import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { posts } = this.props;
    console.log("posts", posts);
    return (
      <div className="profile container">
        <div className="postlist-container">
          <PostList posts={posts}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
    return{
      posts: state.postReducer.posts
    }
  }
  export default connect(mapStateToProps)(Profile);
