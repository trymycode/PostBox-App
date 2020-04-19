import React,{ Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";

class PostDetails extends Component {
  render() {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Post Title</span>
            <p>
              The placeholder text, beginning with the line “Lorem ipsum dolor
              sit amet, consectetur adipiscing elit”, looks like Latin because
              in its youth, centuries ago, it was Latin.
            </p>
          </div>
          <PostLike />
          <div className="card-action gret lighten-4">
            {/* add create comment box */}
            <input
            type="text"
            placeholder="post a comment"
            className="comment-inbox"
          />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    );
  }
}
export default PostDetails;
