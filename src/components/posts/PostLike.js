import React from "react";
import moment from "moment";
const PostLike = (props) => {
  console.log("post like component props", props);
  const { likes, date } = props;
  return (
    <div className="card-action gret lighten-4 grey-text">
        <div className="alignment">
        <div className="item">
          Like <i class="fa fa-heart" aria-hidden="true"></i> {likes}
        </div>
        <div className="lighten-4 grey-text item">{moment(date.toDate()).calendar()}</div>
        </div>
    </div>
  );
};

export default PostLike;
