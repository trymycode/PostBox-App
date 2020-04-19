import React from "react";
import PostSummery from "./PostSummery";
const PostList = ({posts}) => {
  return (
    <div className="post-list section">
      {posts && posts.map(post =>{
        return(
          <PostSummery id={post.id} post={post} />
        )
        
      })}
        
      </div>
  );
};
export default PostList;
