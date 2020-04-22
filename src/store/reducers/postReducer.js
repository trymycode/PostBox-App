const initialState = {
  posts: [
   
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("created post error", action.err);
      return state;

    case "POST_LIKE_SUCCESS":
      console.log("liked post");
      return {
        ...state,

      };

    case "POST_LIKE_UNSUCCESS":
      console.log("like failed");
      return state;

    default:
      return state;
  }
};

export default postReducer;
