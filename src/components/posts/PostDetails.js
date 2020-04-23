import React, { Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { post, auth, comments,profileDetails } = this.props;
    const postID = this.props.match.params.id;
    const filteredComments = comments && comments.filter(comment => comment.postId === postID);
    const profileCreator = profileDetails && (profileDetails.firstName + " " + profileDetails.lastName);
    let showMsg = filteredComments && filteredComments.length == 0 ? true : false;
    if (!auth.uid) return <Redirect to="/signin" />;
    else {
      if (post) {
       const authorName = post.authorFirstName + " " + post.authorLastName;
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
                postCreator={authorName}
                profileCreator={profileCreator}
              /> 
              <div className="card-action gret lighten-4 grey-text">
                <div>
                  Posted by {authorName}
                </div>
              </div>
              <div className="card-action gret lighten-4">
                {/* add create comment box */}

                <CreateComment postId={postID}  authorName={profileCreator}/>
                {/* comments */}
                {showMsg && <div className="grey-text lighten-4"> No comments added yet.</div>}
                {filteredComments && filteredComments.map((comment,index)=><Comment key ={index} comment={comment} />)}

                  
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
  const comments = state.firestore.ordered.comments;

  return {
    post,
    auth: state.firebase.auth,
    comments,
    profileDetails: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }, { collection: "comments" }])
)(PostDetails);
