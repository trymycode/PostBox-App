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
      postCreator,
      profileCreator,
    } = this.props;

    const postLike = () => {
      if (postCreator !== profileCreator) {
        this.setState(
          {
            likeNum: this.state.likeNum + 1,
          },
          () => {
            likePost({ likes, postId });
          }
        );
      } else if (postCreator == profileCreator) {
        this.setState({
          warning: true,
        });
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
          {this.state.warning && (
            <div className="lighten-4 orange-text">
              {" "}
              You can not like your own post
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likePost: ({ likes, postId }) => {
      dispatch(likePost({ likes, postId }));
    },
  };
};
export default connect(null, mapDispatchToProps)(PostLike);
