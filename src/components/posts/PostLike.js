import React, { Component } from "react";
import moment from "moment";
import { likePost } from "../../store/actions/postActions";
import { connect } from "react-redux";
class PostLike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeNum: this.props.likes,
      warning: false,
    };
  }

  render() {
    const {
      likes,
      date,
      post,
      postId,
      likePost,
      loggedInUserId,
      likedByIds,
    } = this.props;
    const postLike = () => {
      // check if loggedInUserId is present in likedByIds array
      let likedBy = [];
      let LikedBy = likedBy.concat(likedByIds);
      let check = LikedBy.filter((id) => id == loggedInUserId);

      let addLike = check.length == 0 ? true : false;

      if (addLike) {
        LikedBy.push(loggedInUserId);
        console.log("true", LikedBy)
        this.setState(
          {
            likeNum: this.state.likeNum + 1,
          },
          () => {
            likePost({
              likes: this.state.likeNum,
              postId,
              likedByIds: LikedBy,
            });
          }
        );
      } else if (addLike == false) {
        let id = LikedBy.filter((id) => id != loggedInUserId);
        console.log("false", id)
        this.setState(
          {
            likeNum: this.state.likeNum - 1
          },
          () => {
            likePost({
              likes: this.state.likeNum,
              postId,
              likedByIds: id,
            });
          }
        );
      }

      //  call action
    };
    return (
      <div className="card-action gret lighten-4 grey-text">
        <div className="alignment">
          <div className="item" onClick={postLike}>
            Like <i className="fa fa-heart" aria-hidden="true"></i> {likes}
          </div>
          <div className="lighten-4 grey-text item">
            {moment(date.toDate()).calendar()}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likePost: ({ likes, postId, likedByIds }) => {
      dispatch(likePost({ likes, postId, likedByIds }));
    },
  };
};
export default connect(null, mapDispatchToProps)(PostLike);
