import React from "react";

const PostSummery = ({post}) =>{
    return (
        <div className="card z-depth-0 post-summery">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">
               {post.title}
            </span>
            <p>Post by the post creator 1</p>
          <p className="grey-text">
              4th Jan, 3pm
          </p>
        </div>
    </div>
    )
}
export default PostSummery;