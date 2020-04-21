import React, { Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const id = this.props.match.params.id;
    const { post } = this.props;
    console.log("+++++", post);
    if (post) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.content}</p>
            </div>
            <PostLike likes={post.likes} />
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
const mapStateToProps = (state, ownProps) => {
  console.log("posts", state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
