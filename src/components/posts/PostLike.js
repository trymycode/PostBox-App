import React from 'react'

const  PostLike = (props) =>{
  console.log("post like component props", props);
  const {likes} = props;
    return (
        <div className="card-action gret lighten-4 grey-text">
        <div>Like the post  <i class="fa fa-heart" aria-hidden="true"></i> {likes}
      </div>
      </div>
    )
}

export default PostLike;
