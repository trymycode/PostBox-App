import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import PersonDetails  from "../personDetails/PersonDetails";
class Profile extends Component {
  render() {
    const { posts, auth, profileDetails } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    else {
      if (posts) {
        return (
          <div className="profile container">
           
              <div className="box-left">
                <PostList posts={posts} />
              </div>
              <div className="box-right">
              <PersonDetails details={profileDetails} emailId={auth.email}/>
            
            </div>
          </div>
        );
      } else {
        return (
          <div className="container center">
            <h4>Loading.......</h4>
          </div>
        );
      }
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state, "lllllll")
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    profileDetails: state.firebase.profile
  };
};
export default compose(
  connect(mapStateToProps),

  firestoreConnect([{ collection: "posts" }])
)(Profile);
