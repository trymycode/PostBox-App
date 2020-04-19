import React, { Component } from "react";
import "../../styles/CreateComment.css";
export class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white comment-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="comment"
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

export default CreateComment;
