import React,{ Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { connect } from "react-redux";
class PostDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const id = this.props.match.params.id;
    
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Post Title - {id}</span>
            <p>
              The placeholder text, beginning with the line “Lorem ipsum dolor
              sit amet, consectetur adipiscing elit”, looks like Latin because
              in its youth, centuries ago, it was Latin.
            </p>
          </div>
          <PostLike />
          <div className="card-action gret lighten-4">
            {/* add create comment box */}
            <CreateComment/>
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
const mapStateToProps = (state)=>{
  return{
    posts: state.postReducer.posts
  }
}
export default PostDetails;
