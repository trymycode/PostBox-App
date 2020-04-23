import React, { Component } from "react";
import "../../styles/CreateComment.css";
import { createComment } from "../../store/actions/commentAction";
import { connect } from "react-redux";

class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentDes: "",
      warning: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.commentDes != "") {
      const { createComment, postId, authorName } = this.props;

      let comment = {};
      comment.postId = postId;
      comment.description = this.state.commentDes;
      comment.authorName = authorName;

      createComment(comment);
    }
  };
  render() {
    return (
      <div className="container">
        <form className="white comment-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="commentDes"
            onChange={this.handleChange}
            className="create-comment-input"
            placeholder="create comment"
            autoFocus
          />
          <input type="submit" className="create-comment-button" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};
export default connect(null, mapDispatchToProps)(CreateComment);
