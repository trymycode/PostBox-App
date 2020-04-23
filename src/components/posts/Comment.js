import React, { Component } from "react";

class Comment extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}

  render() {
    const {comment}= this.props;
    return (
      <div key={comment.id}>
       
        <p className="comment-details">
         {comment.description}
        </p>
        <p className="grey-text">Created by {comment.authorName}</p>
      </div>
    );
  }
}

export default Comment;
