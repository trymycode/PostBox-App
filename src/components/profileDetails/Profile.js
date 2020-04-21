import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Profile extends Component {

  render() {
    const { posts, auth } = this.props;
    if( !auth.uid ) return <Redirect to="/signin" />
    else{
      if (posts) {
        return (
          <div className="profile container">
            <div className="postlist-container">
              <PostList posts={posts} />
            </div>
          </div>
        );
      } else {
        return<div className="container center">
        <h4>Loading.......</h4>
      </div>;
    }
   
    }
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),

  firestoreConnect([{ collection: "posts" }])
)(Profile);
