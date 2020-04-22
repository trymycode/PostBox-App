import React, { Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { post, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    else {
      if (post) {
        return (
          <div className="container section project-details">
            <div className="card z-depth-0 gap">
              <div className="card-content">
                <span className="card-title">{post.title}</span>
                <p>{post.content}</p>
              </div>
              <PostLike
                likes={post.likes}
                date={post.createdAt}
                post={post}
                postId={this.props.match.params.id}
              />
              <div className="card-action gret lighten-4 grey-text">
                <div>
                  Posted by {post.authorFirstName + " " + post.authorLastName}
                </div>
              </div>
              <div className="card-action gret lighten-4">
                {/* add create comment box */}
                <CreateComment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
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
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;

  return {
    post,

    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
