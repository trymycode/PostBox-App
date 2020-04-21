import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
class Profile extends Component {
  render() {
    const { posts } = this.props;
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
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    posts: state.firestore.ordered.posts,
  };
};
export default compose(
  connect(mapStateToProps),

  firestoreConnect([{ collection: "posts" }])
)(Profile);
